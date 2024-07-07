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
  'assets/img/covers/unheiligeMittel.jpg',
  'assets/img/covers/hehreZwecke.jpg',
  'assets/img/covers/spiritChant.jpg',
  'assets/img/covers/spiritChase.jpg',
  'assets/img/covers/spiritCircle.jpg',
  'assets/img/covers/chasingWildDreams.jpg',
  'assets/img/covers/daemonenritt.jpg',
  'assets/img/covers/daemonensprung.jpg',
  'assets/img/covers/daemonentraum.jpg',
  'assets/img/covers/dasMeerschaumkleid.jpg',
  'assets/img/covers/derGeistInBrand.jpg',
  'assets/img/covers/dieMaskenVonFlorenz.jpg',
  'assets/img/covers/elfenweg.jpg',
  'assets/img/covers/sumpfzauber.jpg',
  'assets/img/covers/weltenringen.jpg',
  'assets/img/covers/odysseyToThePromisedLand.jpg',
  'assets/img/covers/purgatoryAtLarge.jpg',
  'assets/img/covers/theMasksOfFlorence.jpg',
  'assets/img/covers/baseMeans.jpg',
  'assets/img/covers/greatEnds.jpg',
  'assets/img/covers/danceTheWind.jpg',
];
excludedCovers = [
  'assets/img/covers/alsterdiamanten.jpg',
  'assets/img/covers/aFineDayinMarch.jpg',
  'assets/img/covers/alsterdiamonds.jpg',
  'assets/img/covers/ertolia.jpg',
  'assets/img/covers/yuliInTheAftermath.jpg',
  'assets/img/covers/demonRide.jpg',
  'assets/img/covers/demonLeap.jpg',
  'assets/img/covers/demonDream.jpg',
]
  headlines = [
  'Dream a little Dream', 
  'Have a little Faith', 
  'Trust in Yourself',
  ];
  currentImage = 0;
  currentHeadline = 0;
  showImage = true; 

  constructor(private router: Router) {}

/**
 * Lifecycle hook that is called after the component is initialized.
 * Starts the image and headline update process.
 */
  ngOnInit() {
    this.updateImage(); 
  }

/**
 * Updates the current image and headline at a fixed interval.
 * Increments the current image and headline indices, and resets them if they exceed their respective arrays' lengths.
 * Temporarily hides the image to trigger a visual update.
 */
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

/**
 * Navigates the user to the home page.
 */
  navigateHome() {
    this.router.navigate(['/home']);  
  }
}
