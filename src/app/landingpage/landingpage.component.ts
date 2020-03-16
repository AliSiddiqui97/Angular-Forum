import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  startIndex=0;
  endIndex=4;
  ObjectofStatus=[
  {
    statusId:1,
    title:"Title 1",
    status:"This is the first Status. Testing the forum once This is the first Status. Testing the forum onceThis is the first Status. Testing the forum once This is the first Status. Testing the forum once.",
    userName: "Ali Siddiqui",
    userlevel: "rookie",
    userImage: "../../assets/user1.jpg",
    time:"3 minutes ago",
    likes:10
  },
  {
    statusId:2,
    title:"Title 2",
    status:"This is the second Status. Testing the forum twice This is the second Status. Testing the forum twice This is the second Status. Testing the forum twice This is the second Status. Testing the forum twice This is the second Status. Testing the forum twice This is the second Status. Testing the forum twice.",
    userName: "Abdul Ahad",
    userlevel: "intermediate",
    userImage: "../../assets/user2.jpg",
    time:"4 hours ago",
    likes:10
  },
  {
    statusId:3,
    title:"Title 3",
    status:"This is the third Status. Testing the forum thrice. This is the third Status. Testing the forum thrice. This is the third Status. Testing the forum thrice. This is the third Status. Testing the forum thrice. This is the third Status. Testing the forum thrice. This is the third Status. Testing the forum thrice.",
    userName: "Bilal Ahmed",
    userlevel: "professional",
    userImage: "../../assets/user3.jpg",
    time:"1 day ago",
    likes:10
  },
  {
    statusId:4,
    title:"Title 4",
    status:"This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time.This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time.This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time.",
    userName: "Raheel Aslam",
    userlevel: "professional",
    userImage: "../../assets/user4.jpg",
    time:"1 week ago",
    likes:10
  },
  {
    statusId:5,
    title:"Title 5",
    status:"This is the fifth Status. Testing the forum fifth time.",
    userName: "Hayeeqa Jalal",
    userlevel: "rookie",
    userImage: "../../assets/user5.jpg",
    time:"1 month ago",
    likes:10
  },
  {
    statusId:5,
    title:"Title 5",
    status:"This is the fifth Status. Testing the forum fifth time.",
    userName: "Hayeeqa Jalal",
    userlevel: "rookie",
    userImage: "../../assets/user5.jpg",
    time:"1 month ago",
    likes:10
  },{
    statusId:4,
    title:"Title 4",
    status:"This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time.This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time.This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time. This is the fourth Status. Testing the forum fourth time.",
    userName: "Raheel Aslam",
    userlevel: "professional",
    userImage: "../../assets/user4.jpg",
    time:"1 week ago",
    likes:10
  },
  {
    statusId:5,
    title:"Title 5",
    status:"This is the fifth Status. Testing the forum fifth time.",
    userName: "Hayeeqa Jalal",
    userlevel: "rookie",
    userImage: "../../assets/user5.jpg",
    time:"1 month ago",
    likes:10
  },
  {
    statusId:5,
    title:"Title 5",
    status:"This is the fifth Status. Testing the forum fifth time.",
    userName: "Hayeeqa Jalal",
    userlevel: "rookie",
    userImage: "../../assets/user5.jpg",
    time:"1 month ago",
    likes:10
  },


]

  constructor() { }
  functionToGetNumber(length){
    return new Array(Math.floor(length/4));
  }
  updateNumber(pageIndex){
    this.startIndex = pageIndex*4;
    this.endIndex = this.startIndex+4;
  }
  ngOnInit(): void {
  }
  countClick(number:number) {
    console.log("liked")
    this.ObjectofStatus[number-1].likes =this.ObjectofStatus[number-1].likes+1;
  }

}
