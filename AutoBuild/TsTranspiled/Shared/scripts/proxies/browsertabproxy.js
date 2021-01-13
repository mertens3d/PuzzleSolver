export class BrowserTabProxy {
    constructor(nativeBrowserTab) {
        this.NativeBrowserTab = nativeBrowserTab;
    }
    Id() {
        return this.NativeBrowserTab.id;
    }
    url() {
        return this.NativeBrowserTab.url;
    }
}
