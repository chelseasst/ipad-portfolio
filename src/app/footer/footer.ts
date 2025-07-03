import { Component } from '@angular/core';
import { MiniApp } from '../mini-app/mini-app';

@Component({
  selector: 'app-footer',
  imports: [MiniApp],
  templateUrl: './footer.html',
  styleUrl: './footer.sass'
})
export class Footer {
  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
