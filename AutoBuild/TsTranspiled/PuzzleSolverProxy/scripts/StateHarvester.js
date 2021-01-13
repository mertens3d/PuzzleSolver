export class OneColumnCount {
    constructor() {
        this.Counts = [];
    }
}
export class OneRowCount {
    constructor() {
        this.Counts = [];
    }
}
export class TableData {
    constructor() {
        this.Rows = [];
        this.Columns = [];
    }
}
export class StateHarvester {
    constructor() {
        console.log('StateHarvester ctor');
        this.PuzzleDiv = this.GetPuzzleDiv();
        this.tableData = new TableData();
        this.GetColumnCounts();
        this.GetRowCounts();
        console.log(JSON.stringify(this.tableData));
    }
    GetPuzzleDiv() {
        const puzzleDiv = document.querySelector('#puzzlediv');
        console.log(puzzleDiv);
        return puzzleDiv;
    }
    GetRowCounts() {
        console.log('GetRowCounts');
        const allRowCounts = [];
        const firstColumnTds = this.PuzzleDiv.querySelectorAll('tr:not(:first-child) > td:first-child');
        firstColumnTds.forEach((td) => {
            const innerHtml = td.innerHTML;
            const rowCountsAr = innerHtml.split('&nbsp;');
            const oneRowCount = [];
            for (var idx = 0; idx < rowCountsAr.length; idx++) {
                const candidate = parseInt(rowCountsAr[idx]);
                if (candidate) {
                    oneRowCount.push(candidate);
                }
            }
            this.tableData.Rows.push(oneRowCount);
        });
        console.log(JSON.stringify(this.tableData));
    }
    GetColumnCounts() {
        console.log('getColumnCounts');
        const allColumnCounts = [];
        const firstRow = this.PuzzleDiv.querySelector('tr');
        if (firstRow) {
            console.log('FirstRow');
            const allFirstRowTd = firstRow.querySelectorAll('td');
            console.log(allFirstRowTd);
            allFirstRowTd.forEach((td) => {
                const innerHtml = td.innerHTML;
                const ColCountsAr = innerHtml.split('<br>');
                const oneColumnCount = [];
                for (var idx = 0; idx < ColCountsAr.length; idx++) {
                    const candidate = parseInt(ColCountsAr[idx]);
                    if (candidate) {
                        oneColumnCount.push(candidate);
                    }
                }
                this.tableData.Columns.push(oneColumnCount);
            });
        }
    }
}
