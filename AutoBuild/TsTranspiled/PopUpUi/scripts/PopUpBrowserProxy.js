var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BrowserTabProxy } from "../../shared/scripts/proxies/browsertabproxy";
export class PopUpBrowserProxy {
    constructor() {
        this.ActiveBrowserTabProxy = null;
    }
    SetActiveBrowserTab() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield browser.tabs.query({ currentWindow: true, active: true })
                    .then((result) => {
                    let resultTab = result[0];
                    this.ActiveBrowserTabProxy = new BrowserTabProxy(resultTab);
                })
                    .then(() => resolve())
                    .catch((err) => reject(err));
            }));
        });
    }
    Init_BrowserProxyAsyncElements() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.SetActiveBrowserTab()
                    .then(() => {
                    this.Url = this.ActiveBrowserTabProxy.url();
                    this.BrowserTabId = this.ActiveBrowserTabProxy.Id();
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    SendMessageAsync_BrowserProxy(message) {
        console.log('sending ' + message);
        console.log('BrowserTabId ' + this.BrowserTabId);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            browser.tabs.sendMessage(this.BrowserTabId, message)
                .then(() => resolve())
                .catch((err) => reject(this.SendMessageAsync_BrowserProxy.name + ' | ' + JSON.stringify(err)));
        }));
    }
}
