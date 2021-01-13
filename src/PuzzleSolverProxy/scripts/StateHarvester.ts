export class OneColumnCount {
  Counts: number[] = [];

}

export class OneRowCount {
  Counts: number[] = [];

}
export class TableData {
  Rows: number[][] = [];
  Columns: number[][] = [];
}




export class StateHarvester {

  private PuzzleDiv: HTMLElement;
  private tableData: TableData;

  constructor() {
    console.log('StateHarvester ctor');

    this.PuzzleDiv = this.GetPuzzleDiv();

    this.tableData = new TableData();

    this.GetColumnCounts();
    this.GetRowCounts();
    console.log(JSON.stringify(this.tableData));
  }

  GetPuzzleDiv(): HTMLElement {
    const puzzleDiv = <HTMLElement>document.querySelector('#puzzlediv');

    console.log(puzzleDiv);
    return puzzleDiv;
  }

  GetRowCounts():void {
    console.log('GetRowCounts');
    const allRowCounts: OneRowCount[] = [];

    const firstColumnTds: NodeList = this.PuzzleDiv.querySelectorAll('tr:not(:first-child) > td:first-child')

    firstColumnTds.forEach((td: HTMLTableDataCellElement) => {
      const innerHtml: string = td.innerHTML;
      const rowCountsAr: string[] = innerHtml.split('&nbsp;');

      const oneRowCount: number[] = []
      for (var idx = 0; idx < rowCountsAr.length; idx++) {
        const candidate = parseInt(rowCountsAr[idx]);
        if (candidate) {
          oneRowCount.push(candidate);

        }
      }
      //console.log(rowCountsAr.join('-'));
      this.tableData.Rows.push(oneRowCount);
    });
    
    
    console.log(JSON.stringify(this.tableData));
  }

  GetColumnCounts(): void {
    console.log('getColumnCounts');
    const allColumnCounts: OneColumnCount[] = [];

    const firstRow: HTMLTableRowElement = this.PuzzleDiv.querySelector('tr');


    if (firstRow) {
      console.log('FirstRow');
      const allFirstRowTd = firstRow.querySelectorAll('td');
      console.log(allFirstRowTd);

      allFirstRowTd.forEach((td) => {
        const innerHtml: string = td.innerHTML;
        const ColCountsAr: string[] = innerHtml.split('<br>');

        const oneColumnCount: number[] = [];
        for (var idx = 0; idx < ColCountsAr.length; idx++) {
          const candidate = parseInt(ColCountsAr[idx]);
          if (candidate) {
            oneColumnCount.push(candidate);

          }
        }


        //console.log(ColCountsAr.join('-'));
        this.tableData.Columns.push(oneColumnCount);

      });
    }


    //console.log(JSON.stringify(this.tableData));

  }
}