import { Component, EventEmitter, Input, Output, signal, SimpleChanges } from '@angular/core';
import { MiniApp } from '../mini-app/mini-app';
import { CommonModule } from '@angular/common';
import { Tech } from '../../types/tech.interface';

@Component({
  selector: 'app-app-folder',
  imports: [CommonModule, MiniApp],
  templateUrl: './app-folder.html',
  styleUrl: './app-folder.sass'
})
export class AppFolder {
  @Input() expanded!: boolean;
  @Output() toggleExpansion = new EventEmitter<boolean>();
  appsFolder1: Tech[] = [
    {
      image: 'assets/app-item/javascript.png',
      logo: 'assets/technologies/javascript-logo.png',
      name: 'JavaScript',
      info: [
        { title: 'Core Angular Concepts', text: 'Modules, Components which are the building blocks of Angular. Template and directives, and their usage in every-day coding. Data bindings and understanding why escaping is so important.' },
        { title: 'Forms & Validations', text: 'Template Driven Forms & Reactive Driven Forms, and how Reactive Driven simplify the setting of custom directives by just requirng a simple function, instead of a @Directive, and centralizing the whole validation logic. But overcomplicating our component for simple forms.' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#FFA611', '#FFCB2B']
    },
    {
      image: 'assets/app-item/typescript.png',
      name: 'TypeScript',
      logo: 'assets/technologies/typescript-logo.png',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#007ACC', '#00C8FF'],
    },
    {
      image: 'assets/app-item/angularjs.png',
      logo: 'assets/technologies/angular-logo.png',
      name: 'Angular',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#6A82FB', '#FC5C7D']
    },
    {
      image: 'assets/app-item/nodejs.png',
      logo: 'assets/technologies/nodejs-logo.svg',
      name: 'NodeJs',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#6CC24A', '#215732']
    },
    {
      image: 'assets/app-item/rxjs.png',
      logo: 'assets/technologies/rxjs-logo.png',
      name: 'RxJS',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#B7178C', '#FF4081']
    },
    {
      image: 'assets/app-item/html.svg',
      logo: 'assets/technologies/html-logo.png',
      name: 'HTML',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#E44D26', '#F16529']
    },
  ]
  appsFolder2: Tech[] = [
    {
      image: 'assets/app-item/css.png',
      logo: 'assets/technologies/css-logo.png',
      name: 'CSS',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#264DE4', '#2965F1']
    },
    {
      image: 'assets/app-item/sass.png',
      logo: 'assets/technologies/sass-logo.png',
      name: 'SASS',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#CD6799', '#FFB7D5']
    },
    {
      image: 'assets/app-item/firebase.png',
      logo: 'assets/technologies/firebase-logo.png',
      name: 'Firebase',
      info: [
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' },
        { title: 'Components, Templates & Directives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit odio tempora aut distinctio eveniet culpa aliquid veniam nesciunt officia dolorum, non sequi nobis maxime quos omnis dolor, modi soluta!' }
      ],
      colors: ['#FFA611', '#FFCB2B']
    }
  ]

  expandFolder(event: MouseEvent) {
    event.stopPropagation();
    this.toggleExpansion.emit(true);
  }
}
