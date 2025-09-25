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
        { title: 'Why JavaScript?', list: [], text: 'My initial motivation was simple: I wanted to see what I build. So I started with a more visual part of programming. As I progressed with JS I started to see how powerful and versatile the language is. JavaScript gives me the freedom to build and control both frontend and backend systems. 🙋🏽‍♀️' },
        { title: 'Core JavaScript Concepts', list: ['Variables and Data Types', 'Control Structures - if / else / switch / for etc.', 'Array & Object Mehtods - map, filter, reduce, etc.', 'DOM Manipulation - querySelector, event handling, dynamic styling'], text: '' },
        { title: 'Forms & Validations', list: ['Client side validation', 'Form submission handling'], text: '' },
        { title: 'Asynchronous JavaScript', list: ['Callbacks', 'Promises', 'Async/Await', 'Call Stack & Event Loop'], text: 'I like working with async code—it’s giving your app superpowers without freezing the screen. I started with good old fetch() (still a favorite, not gonna lie), and quickly got into Promises and chaining .then(). Then got into async/await, which made everything feel smoother and more readable. I understand how the event loop works, what microtasks are, and why your setTimeout() doesn’t always behave the way you expect 😀. Whether it’s loading data, handling user actions, or juggling multiple API calls, async JavaScript is where I feel confident.' },
        { title: 'Hoisting', list: [], text: 'Why can functions be called before they’re declared? - hoisitng. And why using \'var\' is unpredictable? - because it’s hoisted as undefined, before it’s assigned. I understand how JavaScript parses and lifts declarations to the top of the file, and how that effects execution.' },
        { title: 'Classes and Inheritance', list: ['prototype'], text: 'I understand how prototypal inheritance works in JavaScript. But I use the ES6 `class` syntax for cleaner, and more object-oriented code.' },
        { title: 'Others', list: ['Regex, Closures', 'Working with APIs', 'ES6 features'], text: 'I’ve used regular expressions for input validation and pattern matching, closures for encapsulating logic and maintaining state, and APIs for fetching and manipulating data in real-time applications.' }
      ],
      colors: ['#FFA611', '#FFCB2B']
    },
    {
      image: 'assets/app-item/angularjs.png',
      logo: 'assets/technologies/angular-logo.png',
      name: 'Angular',
      info: [
        { title: 'Why Angular?', list: [], text: 'Angular was my choice of framework, because of its structure, because it teach us how to create consistend and clean applications. Its dependancy injection, routing and form-handling help us enforece the best practises. Its not that flexible, but its consistent.' },
        { title: 'Components, Templates & Directives', list: [], text: 'Organizing UI and logic into reusable, encapsulated blocks. I have used both Angular 16 and Angular 17+. So I am aware of the standalone components structure.' },
        { title: 'Services & Dependency Injection', list: [], text: 'Services allow us to share logic and data across components in a clean and maintainable way. I follow the principle of separating concerns—using services to handle business logic and components to manage UI logic.' },
        { title: 'Routing', list: [], text: 'Angular`s Routing allows us to map urls to component. It gives us methods to access and navigate the route through JS in the components. It provides us placeholders for rendering dynamic markup in the present HTML. Routing allows us to use lazy-loading and make the initial load of our application faster.' },
        { title: 'Forms', list: ['Template Driven', 'Reactive Driven'], text: '' },
        { title: 'Observables & RxJS', list: ['managing async data streams', 'Subject', 'Behavior Subject'], text: '' }
      ],
      colors: ['#007ACC', '#00C8FF'],
    },
    {
      image: 'assets/app-item/typescript.png',
      logo: 'assets/technologies/typescript-logo.png',
      name: 'TypeScript',
      info: [
        { title: 'Why TypeScript?', 'list': [], 'text': 'TypeScript adds structure and safety to JavaScript, which is especially valuable in large-scale applications. I chose TypeScript because it helps catch errors early and improves code readability.' },
        { title: 'Type System & Interfaces', list: [], text: '' },
        { title: 'Enums & Generics', list: [], text: '' },
      ],
      colors: ['#6A82FB', '#FC5C7D']
    },
    {
      image: 'assets/app-item/nodejs.png',
      logo: 'assets/technologies/nodejs-logo.svg',
      name: 'NodeJs',
      info: [
        { title: 'Express.js & Routing', list: ['lightweight', 'easy to define endpoints', 'manages middlewares well'], text: '' },
        { title: 'Working with Databases', list: ['MongoDB', 'CRUD operations', 'manage schemas and models', 'data validations', 'token validations',], text: '' },
        { title: 'Cloudinary API', list: [], text: 'I`ve integrated Cloudinary for image uploads.' },
      ],
      colors: ['#6CC24A', '#215732']
    },
    {
      image: 'assets/app-item/rxjs.png',
      logo: 'assets/technologies/rxjs-logo.png',
      name: 'RxJS',
      info: [
        { title: 'Observables & Operators', list: ['map', 'takeUntil', 'switchMap'], text: '' },
        { title: 'Subjects & Multicasting', list: [], text: 'Subjects allow me to broadcast values to multiple subscribers.' },
        { title: 'RxJS in Angular', list: [], text: 'I’ve integrated RxJS deeply into Angular applications—handling form value changes, route events, and HTTP requests reactively. I use `async` pipes in templates and `takeUntil` for clean unsubscription in components.' },
      ],
      colors: ['#B7178C', '#FF4081']
    },
    {
      image: 'assets/app-item/html.svg',
      logo: 'assets/technologies/html-logo.png',
      name: 'HTML',
      info: [
        { title: 'Semantic Structure', list: ['<header>', '<nav>', '<main>', '<section>', '<article>', '<footer>'], text: '' },
        { title: 'Forms & Inputs', list: ['Flexbox', 'Media Queries'], text: '' },
        { title: 'Responsive Markup', list: [], text: 'I write HTML that works seamlessly with CSS to create responsive layouts.' },
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
        { title: 'Layout & Positioning', list: ['Flexbox', 'Box Model', 'Positioning'], text: '' },
        { title: 'Styling & Theming', list: ['variables', 'media queries'], text: '' },
        { title: 'Animations & Transitions', list: ['keyframes', 'transition', 'Repain and Reflow'], text: '' },
      ],
      colors: ['#264DE4', '#2965F1']
    },
    {
      image: 'assets/app-item/sass.png',
      logo: 'assets/technologies/sass-logo.png',
      name: 'SASS',
      info: [
        { title: 'Variables & Nesting', list: ['$colors', '$spacing', '$fonts'], text: '' },
      ],
      colors: ['#CD6799', '#FFB7D5']
    },
    {
      image: 'assets/app-item/firebase.png',
      logo: 'assets/technologies/firebase-logo.png',
      name: 'Firebase',
      info: [
        { title: 'Why Firebase ?', list: [], text: 'I used Firebase for some of my projects to help me build full-featured apps.' },
      ],
      colors: ['#FFA611', '#FFCB2B']
    }
  ]

  expandFolder(event: MouseEvent) {
    event.stopPropagation();
    this.toggleExpansion.emit(true);
  }
}
