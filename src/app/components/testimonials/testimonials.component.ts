import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [
    {
      image: "https://focusednetwork.co.za/wp-content/uploads/2022/05/Shirley-Nhlengethwa-2.jpg",
      text: "Amazing work on our mobile application. Always communicated and kept up to date on progress of project to complete. Definitely doing business again in future for updates and new features.",
      name: "Shirley Nhlengethwa",
      position: "Focused Network Founder & Chairperson"
    },
    {
      image: "https://via.placeholder.com/200",
      text: "In Business",
      name: "In Business",
      position: "In Business"
    },
    {
      image: "https://via.placeholder.com/200",
      text: "In Business",
      name: "In Business",
      position: "In Business"
    },
    // Add more testimonials here
  ];

}
