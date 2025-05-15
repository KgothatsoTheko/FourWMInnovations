import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [
    {
      image: "https://media.licdn.com/dms/image/v2/C4D03AQFYrnRVNCwWIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652208834984?e=1752710400&v=beta&t=JeXUlrsC3hBdw_3rnEZf6kzU6c-ODNaDjR7ckc0d0c0",
      text: "Amazing work on our mobile application. Always communicated and kept up to date on progress of project to complete. Definitely doing business again in future for updates and new features.",
      name: "Shirley Nhlengethwa",
      position: "Focused Network Founder & Chairperson"
    },
    {
      image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      text: "In Business",
      name: "In Business",
      position: "In Business"
    },
    {
      image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      text: "In Business",
      name: "In Business",
      position: "In Business"
    },
    // Add more testimonials here
  ];

}
