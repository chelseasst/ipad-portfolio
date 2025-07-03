import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.sass'
})
export class TodoList {
  count: number = 4
  qualities: string[] = ['disciplined', 'collaborating well', 'positive', 'always seeking improvement', 'having big goals']

}
