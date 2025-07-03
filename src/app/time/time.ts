import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  imports: [CommonModule],
  templateUrl: './time.html',
  styleUrl: './time.sass'
})
export class Time {
  currTime = new Date();
  ngOnInit() {
    setInterval(() => {
      this.currTime = new Date();
    }, 1000);
  }
}
