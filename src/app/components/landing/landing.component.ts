import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

   // Menu 
   showMenuButton!: boolean ;
   // menu items
   menuItems: any[] = [
     { label: 'Home', link: './home'},
     { label: 'About Us', link: './about'},
     { label: 'Services', link: './services'},
     { label: 'Projects', link: './projects'},
     { label: 'Contact', link: './contact'},
   ];
 
  
 
   ngOnInit() {
     this.checkScreenWidth();
     window.addEventListener('resize', () => this.checkScreenWidth());
   }
 
   checkScreenWidth() {
     this.showMenuButton = window.innerWidth < 666;
   }

}
