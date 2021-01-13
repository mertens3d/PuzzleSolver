/// <reference path="../../../../node_modules/web-ext-types/global/index.d.ts" />

export class BrowserTabProxy {
  private NativeBrowserTab: browser.tabs.Tab;

  constructor(nativeBrowserTab: browser.tabs.Tab) {
    this.NativeBrowserTab = nativeBrowserTab;
  }

  Id(): number {
    return this.NativeBrowserTab.id;
  }

  url(): string {
    return this.NativeBrowserTab.url;
  }
}