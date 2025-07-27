import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AppItem } from '../app-item/app-item';
import { Time } from '../time/time';
import { Batteries } from '../batteries/batteries';
import { TodoList } from '../todo-list/todo-list';
import { Music } from '../music/music';
import { Notes } from '../notes/notes';
import { AppFolder } from '../app-folder/app-folder';
import { Footer } from '../footer/footer';
import { WhiteBoard } from '../white-board/white-board';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Time, Batteries, TodoList, Music, Notes, AppItem, AppFolder, Footer, WhiteBoard],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  selectedFolderOpen = signal(false);


  handleFolderState(isOpen: boolean) {
    console.log(isOpen);
    if (isOpen) {
      this.selectedFolderOpen.set(true);
    } else {
      this.selectedFolderOpen.set(false);
    }
  }
}
