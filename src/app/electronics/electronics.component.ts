import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements AfterViewInit{
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const heroContainer = document.querySelector('.aero-banner') as HTMLElement;

    // Horizontal movement: limited to a small range (45% - 55%)
    const moveX = 45 + (event.clientX / window.innerWidth) * 2;
    
    // Vertical movement: limited to a smaller range (55% - 65%)
    const moveY = 55 + (event.clientY / window.innerHeight) * 2;
    
    // Update the background position dynamically
    heroContainer.style.backgroundPosition = `${moveX}% ${moveY}%`;
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Select the About Us card using the class or id
    const aboutCard = this.el.nativeElement.querySelector('.aero-card');
    const contactCard = this.el.nativeElement.querySelector('.aero-image-grid');
    const teamLeadCard = this.el.nativeElement.querySelector('.subteam-lead-card');
    const teamLeadCardTwo = this.el.nativeElement.querySelector('.aero-card-two');
    const aeroGridTwo = this.el.nativeElement.querySelector('.aero-image-grid-two');

    // Create the IntersectionObserver for "About Us"
    const aboutObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation classes when the card is in view
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Create the IntersectionObserver for "Contact Us"
    const contactObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation classes for the contact card
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Observe the About Us and Contact Us cards
    if (aboutCard) {
      aboutObserver.observe(aboutCard);
    }

    if (contactCard) {
      contactObserver.observe(contactCard);
    }

    if (aeroGridTwo) {
      contactObserver.observe(aeroGridTwo);
    }

    if (teamLeadCard) {
      aboutObserver.observe(teamLeadCard);
    }

    if (teamLeadCardTwo) {
      aboutObserver.observe(teamLeadCardTwo);
    }
  }
}
