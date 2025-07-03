import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass'
})
export class Navbar {
  currTime = new Date();
  today = new Date();
  ngOnInit() {
    setInterval(() => {
      this.currTime = new Date();
    }, 1000);
    setInterval(() => {
      this.today = new Date();
    }, 60_000);
  }

}
