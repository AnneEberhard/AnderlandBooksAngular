import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = [
  'assets/img/covers/alsterdiamonds.jpg',
  'assets/img/covers/unheilige mittel.jpg',
  'assets/img/covers/hehre zwecke.jpg',
  'assets/img/covers/a-fine-day.jpg',
  'assets/img/covers/spirit-chant.jpg',
  'assets/img/covers/spirit-chase.jpg',
  'assets/img/covers/spirit-circle.jpg',
  'assets/img/covers/chasing-wild-dreams.jpg',
  'assets/img/covers/daemonenritt.jpg',
  'assets/img/covers/daemonensprung.jpg',
  'assets/img/covers/daemonentraum.jpg',
  'assets/img/covers/das-meerschaumkleid.jpg',
  'assets/img/covers/der-geist-in-brand.jpg',
  'assets/img/covers/die-masken-von-florenz.jpg',
  'assets/img/covers/alsterdiamanten.jpg',
  'assets/img/covers/elfenweg.jpg',
  'assets/img/covers/sumpfzauber.jpg',
  'assets/img/covers/weltenringen.jpg',
  'assets/img/covers/Odyssey.jpg',
  'assets/img/covers/purgatory.jpg',
  'assets/img/covers/the-masks-of-florence.jpg',
  'assets/img/covers/base-means.jpg',
  'assets/img/covers/great-ends.jpg',
];
  headlines = [
  'Dream a little Dream', 
  'Have a little Faith', 
  'Trust in Yourself',
  ];
  currentImage = 0;
  currentHeadline = 0;
  showImage = true; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateImage(); 
  }

  updateImage() {
    setInterval(() =>{ 
      this.currentImage++; 
      this.currentImage = this.currentImage % this.images.length; 
      this.currentHeadline++;  
      this.currentHeadline %= this.headlines.length;  
      this.showImage = false; 

      setTimeout(() => {
        this.showImage = true; 
      }, 10)
    },5000)
  }

  navigateHome() {
    this.router.navigate(['/home']);  
  }
}