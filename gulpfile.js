let gulp = require('gulp');
let combineTool = require('magix-combine');
let watch = require('gulp-watch');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');
let terser = require('gulp-terser-scoped');
let ts = require('typescript');
let classReg = /\bclass\s*=\s*"[^"]+/;

const { exec, execSync, spawn, spawnSync } = require('child_process');
let spawnCommand = (command, args, options) => {
    //默认stdio: inherit可传入自定义options
    const _options = {
        stdio: 'inherit',
        shell: process.platform === 'win32' //win下需要设置shell为true
    }

    Object.assign(_options, options)

    return new Promise((resolve, reject) => {
        const sp = spawn(command, args, _options)

        sp.on('close', code => {
            resolve()
        })

        sp.on('error', err => {
            console.log(err)
        })
    })
};

let execCommandReturn = (command) => {
    return new Promise((resolve, reject) => {
        const child = exec(command, {
            maxBuffer: 20000 * 1024
        })
        child.stdout.on('data', data => {
            resolve(data)
        })

        child.on('close', () => {
            resolve()
        })
    })
};


combineTool.config({
    debug: true,
    loaderType: 'cmd_es',
    projectName: '_',
    tmplAddViewsToDependencies: true,
    tmplMultiBindEvents: true,
    magixUpdaterIncrement: true,
    galleries: {
        mxRoot: '',
        mxMap: {}
    },
    checker: {
        tmplAttrIframe: false, //检测iframe相关
        jsLoop: false
    },
    revisableStringSplitter: '',
    //cssSourceMap: true,
    cssSelectorPrefix: '_zs_gallery',
    globalCss: [
        './tmpl/mx-style/index.less'
    ],
    scopedCss: [
        './tmpl/__test__/layout.less'
    ],
    compileTmplCommand(content) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es7'],
                target: 'es3',
                module: ts.ModuleKind.None
            }
        });
        //console.log(content,str);
        str = str.outputText;
        return str;
    },
    compileJSStart(content, from) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es7'],
                target: 'es3',
                module: ts.ModuleKind.None
            }
        });
        str = str.outputText;
        return str;
    }
});

gulp.task('cleanSrc', () => {
    return del(['./dist/src', './dist/chartpark']);
});

gulp.task('chartpark', function () {
    gulp.src('./chartpark/*')
        .pipe(gulp.dest('./dist/chartpark/'));
});

gulp.task('turnOffDebug', () => {
    combineTool.config({
        debug: false
    });
});

gulp.task('combine', ['cleanSrc', 'chartpark'], () => {
    combineTool.config({
        tmplFolder: 'tmpl',
        srcFolder: 'dist/src'
    })
    return combineTool.combine().then(() => {
        console.log('complete');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

gulp.task('publish', () => {
    del(['./build']).then(() => {
        combineTool.config({
            tmplFolder: 'tmpl',
            srcFolder: 'build'
        })
        combineTool.combine().then(() => {
            gulp.src('./build/**/*.js')
                .pipe(terser({
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        global_defs: {
                            DEBUG: false
                        }
                    }
                }))
                .pipe(gulp.dest('./build/'))
        }).catch(ex => {
            console.log('gulpfile:', ex);
        });
    })
});

gulp.task('test', () => {
    del(['./tmpl2']).then(() => {
        gulp.src('./tmpl/**/*')
            .pipe(gulp.dest('./tmpl2'));

        gulp.src('./tmpl2/__test__/**/*')
            .pipe(rename(path => {
                path.dirname = path.dirname.replace('__test__', 'examples')
            }))
            .pipe(gulp.dest('./tmpl2'));
        // combineTool.config({
        //     tmplFolder: 'tmpl2',
        //     srcFolder: 'build'
        // })
        // combineTool.combine().then(() => {
        //     gulp.src('./build/**/*.js')
        //         .pipe(terser({
        //             compress: {
        //                 drop_console: true,
        //                 drop_debugger: true,
        //                 global_defs: {
        //                     DEBUG: false
        //                 }
        //             }
        //         }))
        //         .pipe(gulp.dest('./build/'))
        // }).catch(ex => {
        //     console.log('gulpfile:', ex);
        // });
    })
});

gulp.task('watch', ['combine'], () => {
    watch('./tmpl/**/*', e => {
        if (fs.existsSync(e.path)) {
            combineTool.processFile(e.path).catch(ex => {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    });
});

gulp.task('compress', ['turnOffDebug', 'combine'], () => {
    return gulp.src('./dist/src/**/*.js')
        .pipe(terser({
            compress: {
                drop_console: true,
                drop_debugger: true,
                global_defs: {
                    DEBUG: false
                }
            }
        }))
        .pipe(gulp.dest('./dist/src/'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('release', ['compress'], async () => {
    let index = fs.readFileSync('./index.html').toString();

    let cs = fs.readFileSync('./dist/all.js').toString();
    cs = cs.replace(/\$/g, '$$$$');
    index = index.replace(/<script id="test">[\s\S]*?<\/script>/, '<script id="test">' + cs + '</script>');

    fs.writeFileSync('./index.html', index);

    await spawnCommand('git', ['add', '.']);
    await spawnCommand('git', ['commit', '-m', 'publish ' + pkg.version]);
    await spawnCommand('git', ['push', 'origin', 'master']);
    await spawnCommand('tnpm', ['pub']);
});