import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  objectBio=[
  { userId:1,
    bio:" I am 23 years old i like to drive i have this and that i do this and that" ,
    userImg:"../../assets/user1.jpg", 
    userName:"Ali Siddiqui", 
    userBike:"Cd-70",
    drivingSince:"2", 
    favBrand:"Yamaha", 
    userLevel:"rookie"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
