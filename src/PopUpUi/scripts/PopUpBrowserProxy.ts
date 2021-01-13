/// <reference path="../../../node_modules/web-ext-types/global/index.d.ts" />

import { BrowserTabProxy } from "../../shared/scripts/proxies/browsertabproxy";

export class PopUpBrowserProxy  {
  Url: string;
  private BrowserTabId: number;

  constructor() {
  }


  public ActiveBrowserTabProxy: BrowserTabProxy = null;

  protected async SetActiveBrowserTab(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      await browser.tabs.query({ currentWindow: true, active: true })
        .then((result: browser.tabs.Tab[]) => {
          let resultTab = result[0];
          this.ActiveBrowserTabProxy = new BrowserTabProxy( resultTab);
        })
        .then(() => resolve())
        .catch((err: any) => reject(
          err)
        );
    });
  }
  async Init_BrowserProxyAsyncElements(): Promise<void> {
    try {

      await this.SetActiveBrowserTab()
        .then(() => {
          this.Url = this.ActiveBrowserTabProxy.url();
          this.BrowserTabId = this.ActiveBrowserTabProxy.Id();
        });
    }
    catch (err: any) {
      console.log(err);
    }
  }

  SendMessageAsync_BrowserProxy(message: string): Promise<void> {
    console.log('sending ' + message);
    console.log('BrowserTabId ' + this.BrowserTabId);

    return new Promise(async (resolve, reject) => {
      browser.tabs.sendMessage(this.BrowserTabId, message)
        .then(() => resolve())
        .catch((err: any) => reject(this.SendMessageAsync_BrowserProxy.name + ' | ' + JSON.stringify(err)));
    });
  }
}