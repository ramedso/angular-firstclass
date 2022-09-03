import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Tabata Timer';
  birthYear = 2001;
  counterRun = 0;
  status = '';
  round = 1;
  timer = setInterval(() => {
    this.counterRun++;

    if (this.round >= 1 && this.round <= 8) {
      this.status = 'Keep going!';
    } else if (this.round > 8) {
      this.status = 'You rock it!';
      document.getElementById('app.run').innerHTML = 'Run: -';
      document.getElementById('app.rest').innerHTML = 'Rest: -';
      document.getElementById('app.round').innerHTML = 'Round: 0';
    }

    if (this.getSeconds() == 21) {
      document.getElementById('app.run').innerHTML = 'Run: -';
      this.counterRun = 0;
    }
  }, 100);

  getSeconds() {
    return this.counterRun;
  }

  getStatus() {
    return this.status;
  }

  getRound() {
    if (this.getSeconds() == 21) {
      this.counterRun = 0;
      this.round++;
    }
    return this.round;
  }
}
