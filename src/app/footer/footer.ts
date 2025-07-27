import { Component } from '@angular/core';
import { AppItem } from '../app-item/app-item';

@Component({
  selector: 'app-footer',
  imports: [AppItem],
  templateUrl: './footer.html',
  styleUrl: './footer.sass'
})
export class Footer {
}
