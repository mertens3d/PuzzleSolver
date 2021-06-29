export class PuzzleClicker {
    constructor(puzzleElem) {
        this.PuzzleElem = puzzleElem;
        this.ClickSquareFn = window["clicksquare"];
    }
    ClickSquare(x, y) {
        console.log('about to click square b');
        console.log(typeof this.ClickSquareFn);
        console.log(JSON.stringify(this.ClickSquareFn));
        this.ClickSquareFn.apply(null, [3, 3]);
    }
}
