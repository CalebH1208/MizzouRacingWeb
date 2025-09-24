import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements AfterViewInit{

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Select the About Us card using the class or id
    const aboutCard = this.el.nativeElement.querySelector('.aero-card');
    const contactCard = this.el.nativeElement.querySelector('.aero-image-grid');
    const teamLeadCard = this.el.nativeElement.querySelector('.subteam-lead-card');
    const teamLeadCardTwo = this.el.nativeElement.querySelector('.aero-card-two');
    const aeroGridTwo = this.el.nativeElement.querySelector('.aero-image-grid-two');
    const teamLeadCardThree = this.el.nativeElement.querySelector('.aero-card-three');
    const aeroGridThree = this.el.nativeElement.querySelector('.aero-image-grid-three');
    const teamLeadCardFour = this.el.nativeElement.querySelector('.aero-card-four');
    const aeroGridFour = this.el.nativeElement.querySelector('.aero-image-grid-four');
    const teamLeadCardFive = this.el.nativeElement.querySelector('.aero-card-five');

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

    if (aeroGridThree) {
      contactObserver.observe(aeroGridThree);
    }

      if (teamLeadCardThree) {
      aboutObserver.observe(teamLeadCardThree);
    }

      if (aeroGridFour) {
      contactObserver.observe(aeroGridFour);
    }

      if (teamLeadCardFour) {
      aboutObserver.observe(teamLeadCardFour);
    }

      if (teamLeadCardFive) {
      aboutObserver.observe(teamLeadCardFive);
    }
  }
}
