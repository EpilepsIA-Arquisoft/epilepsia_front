import { Component, OnInit } from '@angular/core';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NavbarModule,
    CarouselComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
