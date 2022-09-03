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
  round = 0;
  timer = setInterval(() => {
    this.counterRun++;

    if (this.round < 1) {
      this.status = 'Are you ready?';
    } else if (this.round > 8) {
      this.status = 'You rock it!';
    } else if (this.round >= 1 && this.round <= 8) {
      this.status = 'Keep going!';
    }
  }, 1000);

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getRestSeconds() {
    return this.counterRun;
  }

  getRunSeconds() {
    return this.counterRun;
  }

  getStatus() {
    return this.status;
  }

  getRound() {
    if (this.getRunSeconds() == 20) {
      this.timer = 0;
      this.round++;
    }
    return this.round;
  }
}
