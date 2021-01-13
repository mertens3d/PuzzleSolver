﻿const gulp = require('gulp');
const del = require('del');

module.exports = {
  cleanAutoBuildFolder: function (cb, vars) {
    return del([
      vars.PuzzleSolverProxyJs.AutoBuildRoot + '/**/*'
    ], cb);
  },

  GetFolderName: function (prefix) {
    //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    const o_date = new Intl.DateTimeFormat;
    const f_date = (m_ca, m_it) => Object({ ...m_ca, [m_it.type]: m_it.value });
    const m_date = o_date.formatToParts().reduce(f_date, {});
    let date = new Date()
    let suffix = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();
    let toReturn = prefix + suffix;
    console.log('path: ' + toReturn);
    return toReturn;
  },

  cleanAddons: function (cb, vars) {
    return del([
      vars.BrowserExtensionFolders.AutoBuildDest + '/**/*'
    ], cb);
  }
}