import { Component, EventEmitter, Input, Output, signal, SimpleChanges } from '@angular/core';
import { MiniApp } from '../mini-app/mini-app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-folder',
  imports: [CommonModule, MiniApp],
  templateUrl: './app-folder.html',
  styleUrl: './app-folder.sass'
})
export class AppFolder {
  @Input() expanded!: boolean;
  @Output() toggleExpansion = new EventEmitter<boolean>();

  expandFolder(event: MouseEvent) {
    event.stopPropagation();
    this.toggleExpansion.emit(true);
  }
}
