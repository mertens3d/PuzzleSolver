import { PopUpBrowserProxy } from "./PopUpBrowserProxy";

export class popUpUi {
  private BrowserProxy: PopUpBrowserProxy;

  constructor() {
    console.log('dogdog');
  }

  async StartUp() {
    console.log('creating browser proxy');
    this.BrowserProxy = new PopUpBrowserProxy();
    await this.BrowserProxy.Init_BrowserProxyAsyncElements();

    const doItButton = document.querySelector('#idDoIt');
    if (doItButton) {
      doItButton.addEventListener('click', (evt) => this.OnDoItClick(evt));
    }
  }

  OnDoItClick(evt: Event) {
    console.log('clicked - sending');
    this.BrowserProxy.SendMessageAsync_BrowserProxy("hey, solve this ok?")
      .then(() => console.log('send resolved'))
      .catch((err) => console.log(err));
    console.log('sent');
  }
}

let popUpUiEntry = new popUpUi();
popUpUiEntry.StartUp();
console.log('loaded');