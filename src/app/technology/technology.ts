import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tech } from '../../types/tech.interface';

@Component({
  selector: 'app-technology',
  imports: [CommonModule, RouterModule],
  templateUrl: './technology.html',
  styleUrl: './technology.sass'
})
export class Technology {
  @ViewChild('logo') logoRef!: ElementRef;
  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef
  @ViewChild('text') textRef!: ElementRef
  app!: Tech

  private scrollHandler = (event: Event) => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.rotationTarget = Math.min(scrollY / 2, 370);
  };
  private isAlive: boolean = true;

  constructor(private renderer: Renderer2) { }

  rotationTarget = 0;
  currentRotation = 0;

  ngOnInit() {
    if (history.state) {
      this.app = history.state;
    }
  }

  ngAfterViewInit(): void {
    // window.addEventListener('scroll', this.scrollHandler);
    // const animate = () => {
    //   if (!this.isAlive) return;
    //   // Smoothly approach the target rotation
    //   this.currentRotation += (this.rotationTarget - this.currentRotation) * 0.05;

    //   const scale = Math.min(1 + this.currentRotation / 1000, 4);
    //   // const offset = Math.min(this.currentRotation / 3.5);
    //   this.renderer.setStyle(
    //     this.logoRef.nativeElement,
    //     'transform',
    //     `rotate(${this.currentRotation}deg) scale(${scale})`,
    //   );
    //   console.log(this.rotationTarget)
    //   // if (this.rotationTarget >= 360) {
    //   //   this.renderer.addClass(this.logoRef.nativeElement, 'logoInvisible');
    //   // } else {
    //   //   this.renderer.removeClass(this.logoRef.nativeElement, 'logoInvisible');
    //   // }
    //   requestAnimationFrame(animate);
    // };

    // animate(); // Start the animation loop
  }
  ngOnDestroy(): void {
    this.isAlive = false;
    window.removeEventListener('scroll', this.scrollHandler);
  }

}
