import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dynamicWord: string = ''; // Holds the current word to display
  dynamicImage: string = ''; // Holds the URL of the current image
  words: string[] = ['web development', 'mobile development', 'IT consulting', 'software integration', 'IoT']; // Array of words
  images: any[] = [
    { one: '../../../assets/Application programming interface-amico.svg' },
    { two: '../../../assets/Mobile development-amico.svg' },
    { three: '../../../assets/Programmer-amico.svg' },
    { four: '../../../assets/Software integration-amico.svg' },
    { five: '../../../assets/Online world-amico.svg' },
  ]; // Array of image objects
  currentIndex: number = 0; // Index to keep track of the current word
  currentIndex1: number = 0; // Index to keep track of the current word

  ngOnInit() {
    this.changeWord();
    this.changeImage();
  }

  changeWord() {
    setInterval(() => {
      this.dynamicWord = this.words[this.currentIndex]; // Set the current word
      this.currentIndex = (this.currentIndex + 1) % this.words.length; // Move to the next word, loop back to start
    }, 3000); // Change word every 3 seconds (3000ms)
  }

  changeImage() {
    setInterval(() => {
      const currentImage = this.images[this.currentIndex1]; // Get the current image object
      this.dynamicImage = currentImage['one'] || currentImage['two'] || currentImage['three'] || currentImage['four'] || currentImage['five']; // Assign the URL of the image
      this.currentIndex1 = (this.currentIndex1 + 1) % this.images.length; // Move to the next image, loop back to start
    }, 3000); // Change image every 3 seconds (3000ms)
  }
}