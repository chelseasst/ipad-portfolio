import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tech } from '../../types/tech.interface';

@Component({
  selector: 'app-mini-app',
  imports: [CommonModule, RouterModule],
  templateUrl: './mini-app.html',
  styleUrl: './mini-app.sass'
})
export class MiniApp {
  @Input() app!: Tech


}
