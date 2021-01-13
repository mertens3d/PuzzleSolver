var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PopUpBrowserProxy } from "./PopUpBrowserProxy";
export class popUpUi {
    constructor() {
        console.log('dogdog');
    }
    StartUp() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('creating browser proxy');
            this.BrowserProxy = new PopUpBrowserProxy();
            yield this.BrowserProxy.Init_BrowserProxyAsyncElements();
            const doItButton = document.querySelector('#idDoIt');
            if (doItButton) {
                doItButton.addEventListener('click', (evt) => this.OnDoItClick(evt));
            }
        });
    }
    OnDoItClick(evt) {
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
