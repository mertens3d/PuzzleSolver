/// <reference path="../../../node_modules/web-ext-types/global/index.d.ts" />

export class PuzzleSolverProxy {
  constructor() {
    console.log('dog');


    browser.runtime.onMessage.addListener((request: any) => this.RespondToPopUprequest(request));

  }


  private RespondToPopUprequest(request: any) {
    console.log('popup message received');
    console.log(request);
  }



  async StartUp() {
    console.log('dog');

  }

}

let PuzzleSolverProxyEntry = new PuzzleSolverProxy();
PuzzleSolverProxyEntry.StartUp();

console.log('content loaded');