const InjectableClass = require('./OneInjectable');

class Vars {
  constructor() {
    console.log('s) Constructing Vars');

    this.FinalFolderShort = 'final';

    this.PopUpHtml = new InjectableClass('PopUpUi', '/**/*.html', 'html', this.FinalFolderShort);

    this.PopUpStyles = new InjectableClass('PopUpUi', '/**/popup.scss', 'css', this.FinalFolderShort);

    this.PopUpUiJs = new InjectableClass('PopUpUi', '/**/*.js', 'js', this.FinalFolderShort);
    this.PopUpUiJs.Ts.TranspiledEntryPointFile = 'PopUpUi.js';

    this.SharedJs = new InjectableClass('Shared', '/**/*.js', 'js', this.FinalFolderShort);
    this.SharedJs.Ts.TranspiledEntryPointFile = 'SharedEntry.js';

    this.PuzzleSolverProxyJs = new InjectableClass('PuzzleSolverProxy', '/**/*.js', 'js', this.FinalFolderShort);
    this.PuzzleSolverProxyJs.Ts.TranspiledEntryPointFile = 'PuzzleSolverProxy.js';

    this.BrowserPolyFillJs = new InjectableClass('browser-polyfill', '/**/*.js', 'js', this.FinalFolderShort);
    this.BrowserPolyFillJs.MinSuffix = '';


    this.BrowserExtensionFolders = {
      Root: './Dist/HindSite',
      AutoBuildDest: '/HindSite/AutoBuild'
    };

    console.log('e) Constructing Vars');
  }
}

module.exports = Vars;