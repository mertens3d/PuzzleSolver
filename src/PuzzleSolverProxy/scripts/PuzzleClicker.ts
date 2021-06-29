//declare global {
//  interface window {
//    clicksquare: (x:number,y:number) => void;
//  }
//}

export class PuzzleClicker {

  private PuzzleElem: HTMLElement;
  private ClickSquareFn: Function;


  constructor(puzzleElem: HTMLElement) {

    this.PuzzleElem = puzzleElem;
    this.ClickSquareFn = window["clicksquare"];

  }
  ClickSquare(x:number, y:number) :void{
    console.log('about to click square b');
    console.log(typeof this.ClickSquareFn);
    console.log(JSON.stringify(this.ClickSquareFn));
    this.ClickSquareFn.apply(null, [3, 3]);
  }
}
