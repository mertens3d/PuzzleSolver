/// <binding />
const gulp = require('gulp');
const vars = require('./gulp.support/vars');

var cleanTasks = require('./gulp.support/tasks/cleanTasks');

var htmlTasks = require('./gulp.support/tasks/htmlTasks');
var jstasks = require('./gulp.support/tasks/jsTasks');
var WebPackTasks = require('./gulp.support/tasks/webPackTasks');
var putTasks = require('./gulp.support/tasks/putTasks');
var styleTasks = require('./gulp.support/tasks/styleTasks');
var tsTasks = require('./gulp.support/tasks/tsTasks');
var ArchiveJsMap = require('./gulp.support/tasks/ArchiveJsMap');

var varsObj = new vars();

gulp.task('DeleteJsAndMap', (cb) => ArchiveJsMap.DeleteJsAndMap(cb));

gulp.task('BuildPopUpHtml', (cb) => htmlTasks.BuildHtml(cb, varsObj));
gulp.task('BuildPopUpStyles', (cb) => styleTasks.BuildPopUpStyles(cb, varsObj));
gulp.task('BuildTypescriptAll', (cb) => tsTasks.BuildTypeScriptAll(cb, varsObj));
gulp.task('cleanAddons', (cb) => cleanTasks.cleanAddons(cb, varsObj));
gulp.task('CleanAutoBuildFolder', (cb) => cleanTasks.cleanAutoBuildFolder(cb, varsObj));
gulp.task('PutToFinal', (cb) => putTasks.PutToFinal(cb, varsObj));
gulp.task('CopyFromFinalToAddon', (cb) => putTasks.CopyFromFinalToAddon(cb, varsObj));

let regexFoldersToIgnore = '/' + varsObj.PuzzleSolverProxyJs.Name + '|' + varsObj.PopUpUiJs.Name + '/';
gulp.task('WebpackContentPuzzleSolverProxy', (cb) => WebPackTasks.WebPackOne(cb, varsObj.PuzzleSolverProxyJs, regexFoldersToIgnore));

var controllerNoParseRegex = './src/' + varsObj.PopUpUiJs.Name;

gulp.task('WebpackPopUpController', (cb) => WebPackTasks.WebPackOne(cb, varsObj.PopUpControllerJs, controllerNoParseRegex));

gulp.task('CleanBuildStamp', (cb) => tsTasks.CleanBuildStamp(cb, varsObj));
gulp.task('PopulateBuildTimeStamp', (cb) => tsTasks.BuildBuildNumber(cb, varsObj));

gulp.task('PreClean', gulp.series(['CleanAutoBuildFolder']));
gulp.task('WebpackAll', gulp.parallel('WebpackContentPuzzleSolverProxy'));
gulp.task('TimeStampAll', gulp.parallel(['CleanBuildStamp', 'PopulateBuildTimeStamp']));
gulp.task('builders', gulp.series([gulp.parallel('BuildPopUpStyles', 'TimeStampAll', 'BuildPopUpHtml'), 'BuildTypescriptAll', 'WebpackAll', 'PutToFinal']));
gulp.task('putters', gulp.series(['CopyFromFinalToAddon']));
gulp.task('default', gulp.series(['PreClean', 'builders', 'putters', 'DeleteJsAndMap']));