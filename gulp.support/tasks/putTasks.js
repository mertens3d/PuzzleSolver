const gulp = require('gulp');
const path = require('path');

module.exports = {
  FromTo: function (fromSrc, destFolder) {
    console.log('s) FromTo ');
    console.log('\tfromSrc: ' + path.resolve(fromSrc));
    console.log('\ttoDest: ' + path.resolve(destFolder));

    gulp.src(fromSrc, { base: destFolder.AutoBuildRoot })
      .pipe(gulp.dest(destFolder));

    console.log('e) FromTo ');
  },

  PutToFinal: function (cb, vars) {
    return gulp.src([

      vars.PopUpHtml.AutoBuildMinFileNameFull(),
      vars.PopUpUiJs.WebpackFileFull(),
      vars.PopUpStyles.AutoBuildMinFileNameFull(),

      vars.PuzzleSolverProxyJs.WebpackFileFull(),
      vars.SharedJs.WebpackFileFull(),

      vars.BrowserPolyFillJs.WebpackFileFull(),
    ])
      .pipe(gulp.dest(vars.PopUpHtml.FinalFolderNameFull()));
  },

  CopyFromFinalToAddon: function (cb, vars) {
    console.log('s) CopyFromFinalToAddon B ');

    var pathAr = [
      path.join(vars.PopUpHtml.FinalFolderNameFull(), vars.PopUpHtml.MinFileName()),

      path.join(vars.PuzzleSolverProxyJs.FinalFolderNameFull(), vars.PuzzleSolverProxyJs.MinFileName()),

      path.join(vars.PopUpUiJs.FinalFolderNameFull(), vars.PopUpUiJs.MinFileName()),

      path.join(vars.SharedJs.FinalFolderNameFull(), vars.SharedJs.MinFileName()),

      path.join(vars.PopUpStyles.FinalFolderNameFull(), vars.PopUpStyles.MinFileName()),

      path.join(vars.BrowserPolyFillJs.FinalFolderNameFull(), vars.BrowserPolyFillJs.MinFileName()),
    ];

    console.log(JSON.stringify(pathAr, null, 4));

    return gulp.src(pathAr)
      .pipe(gulp.dest(vars.BrowserExtensionFolders.Root));
  }
}