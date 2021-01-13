export class popUpUi {
  constructor() {
    console.log('dogdog');
  }
  async StartUp() {
    const doItButton = document.querySelector('#idDoIt');
    if (doItButton) {
      doItButton.addEventListener('click', (evt) => this.OnDoItClick(evt));
    }
  }

  OnDoItClick(evt: Event) {
    console.log('clicked');
  }
}

let popUpUiEntry = new popUpUi();
popUpUiEntry.StartUp();
    console.log('loaded');