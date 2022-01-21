import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {


  ngOnInit(): void {
  }
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  events = [
    {
      image: `../../../assets/Mask\ Group.jpg`,
      name: 'Samsung Mock Drive',
      desc: `Mock Test and Interviews with Ex-Samsung Employees 
      Target Audience: Students Pursuing for Software Engineering Profile,
      Hardware Engineering Profile.`
    },
    {
      image: `../../../assets/Mask\ Group.jpg`,
      name: 'Analog Mock Drive',
      desc: `Mock Test and Interviews with Ex-Samsung Employees 
      Target Audience: Students Pursuing for Software Engineering Profile,
      Hardware Engineering Profile.`
    },
    {
      image: `../../../assets/Mask\ Group.jpg`,
      name: 'Accenture Mock Drive',
      desc: `Mock Test and Interviews with Ex-Samsung Employees 
      Target Audience: Students Pursuing for Software Engineering Profile,
      Hardware Engineering Profile.`
    }
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    //config.pauseOnHover = true;
    
  }

}
