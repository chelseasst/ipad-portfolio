import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-item',
  imports: [],
  templateUrl: './app-item.html',
  styleUrl: './app-item.sass'
})
export class AppItem {
  @Input() app!: { image: string, name: string }
}
