const gulp = require('gulp');
const webpack = require('webpack');
const Webpack_stream = require('Webpack-stream');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  WebPackOne: function (cb, targetVar, regexIgnore) {
    console.log('s) WebPackOne ' + targetVar.Name);
    console.log('source: ' + targetVar.Ts.TranspiledFolder);
    console.log('Entry Point: ' + targetVar.Ts.TranspiledEntryPointFull());
    console.log('regexIgnore: ' + regexIgnore);
    console.log('dest: ' + targetVar.WebpackContentOutputFilePathAbs());

    console.log('e) WebPackOne ' + targetVar.Name);

    return gulp.src('./AutoBuild/TsTranspiled/')
      .pipe(Webpack_stream(
        {
          cache: false,
          entry: {
            PuzzleSolverProxy: {
              import: './AutoBuild/TsTranspiled/PuzzleSolverProxy/scripts/PuzzleSolverProxy.js',
              //dependOn: [ 'Shared']
            },

            PopUpUi: {
              import: './AutoBuild/TsTranspiled/PopUpUi/scripts/PopUpUi.js',
              dependOn: [ 'Shared']
            },

            Shared: {
              import: './AutoBuild/TsTranspiled/Shared/scripts/SharedEntry.js',
            },
          },
          //mode: 'development',
          mode: 'production',
          output: {
            filename: '[name].min.js', 
            path: targetVar.WebpackContentOutputFilePathAbs(),
          },
          optimization: {
            minimize: false,
            concatenateModules: true
          },

          plugins: [
            new CopyWebpackPlugin({
              patterns: [
                {
                  from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js'
                }
              ]
            })
          ],
          stats: 'detailed'
        }, webpack))
      .on('error', function (err) {
        console.log('WEBPACK ERROR', err);
        this.emit('end');
      })
      .pipe(gulp.dest(targetVar.WebpackContentOutputFilePathAbs()));
  },
}