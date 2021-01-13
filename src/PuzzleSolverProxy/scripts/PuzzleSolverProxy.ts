export class PuzzleSolverProxy {
  constructor() {
    console.log('dog');
  }

  async StartUp() {
    console.log('dog');

  }

}

let PuzzleSolverProxyEntry = new PuzzleSolverProxy();
PuzzleSolverProxyEntry.StartUp();