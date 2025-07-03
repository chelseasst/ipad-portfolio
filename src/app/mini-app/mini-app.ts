import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-app',
  imports: [],
  templateUrl: './mini-app.html',
  styleUrl: './mini-app.sass'
})
export class MiniApp {
  @Input() app!: { image: string, name: string }
}
