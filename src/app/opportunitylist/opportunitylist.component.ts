import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunitylist',
  templateUrl: './opportunitylist.component.html',
  styleUrls: ['./opportunitylist.component.css']
})
export class OpportunitylistComponent implements OnInit {

  activetab = true;
  filterscategory  = [
    {name:"All"},
    {name:"Radio"},
    {name:"TV"},
    {name:"Publications"},
    {name:"Licensing"},
    {name:"Collaboration"},
    {name:"Contest"},
    {name:"Content creation"},
  ]

  opportunityList = [
    {heading:"licensing", text:"Get your songs heard across MG Motors Outlets", img:"mg.png", btn:"Closed", info:""},
    {heading:"COntest", text:"Win a free release & your live music video recorded", img:"gigital.png", btn:"34 days left", info:"Apply by Feb 27, 2021"},
    {heading:"Publications", text:"Reach global fans with a music review In XS10", img:"xs10.png", btn:"5 days left", info:"Apply by Feb 27, 2021"},
    {heading:"licensing", text:"Win a free online song mastering with BonaFide Studio UK", img:"artist.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
    {heading:"Publications", text:"Get playlisted with Breathe Indie on Spotify", img:"breathe.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
    {heading:"COntest", text:"Win a feature at Melody Insider", img:"melody.png", btn:"Closed", info:""},
    {heading:"licensing", text:"Get airplay on EGH Radio Show", img:"egh.png", btn:"Closed", info:""},
    {heading:"licensing", text:"Win a free online song mastering with BonaFide Studio UK", img:"artist.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
    {heading:"Publications", text:"Get playlisted with Breathe Indie on Spotify", img:"breathe.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
    {heading:"licensing", text:"Win a free online song mastering with BonaFide Studio UK", img:"artist.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
    {heading:"Publications", text:"Get playlisted with Breathe Indie on Spotify", img:"breathe.png", btn:"13 days left", info:"Apply by Feb 27, 2021"},
  ]

  innerHeight: any;
  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight - (window.innerHeight * .3);
  }

  // ngAfterViewInit() {
  //   var height = this.myIdentifier.nativeElement.offsetHeight;
  // }

}
