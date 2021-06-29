var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PuzzleClicker } from "./PuzzleClicker";
import { StateHarvester } from "./StateHarvester";
export class PuzzleSolverProxy {
    constructor() {
        console.log('dog');
        browser.runtime.onMessage.addListener((request) => this.RespondToPopUprequest(request));
    }
    RespondToPopUprequest(request) {
        console.log('popup message received');
        console.log(request);
        const state = new StateHarvester();
        const clicker = new PuzzleClicker(null);
        clicker.ClickSquare(3, 3);
    }
    StartUp() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('dog');
        });
    }
}
let PuzzleSolverProxyEntry = new PuzzleSolverProxy();
PuzzleSolverProxyEntry.StartUp();
console.log('content loaded');
