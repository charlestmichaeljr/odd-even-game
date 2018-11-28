import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odd-even-game';
  generatedNumbers: number[] = [];
  onNumberGenerated(evt) {
    console.log(evt.index);
    this.generatedNumbers.push(evt.index);
  }
}
