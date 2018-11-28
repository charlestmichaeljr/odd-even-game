import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timer;
  timerIndex = 0;
  @Output() numberGenerated = new  EventEmitter<{index: number}>();
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    console.log('timer started');
    this.timer = setInterval(() => {
      this.timerIndex++;
      this.numberGenerated.emit({index: this.timerIndex});
    }, 1000);
  }
  stopGame() {
    console.log('timer stopped');
    clearInterval(this.timer);
  }
}
