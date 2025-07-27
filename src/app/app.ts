import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'ipad-portfolio';

}
