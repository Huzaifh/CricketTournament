import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CRICKET } from '../../app.constants';
import {HomeService} from '../../helpers/services/home.service';
import {PlayerFilterPipe } from '../../helpers/services/pipes';


@Component({
  selector: 'app-player-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
  providers: [HomeService],
})
export class CountriesListComponent implements OnInit {
  allCountries:any = [];

   constructor(private homeservice: HomeService, private route: ActivatedRoute, private router: Router) { 
  
  }

  ngOnInit() {
    //get all Countries 
    this.homeservice.getAllCountries().subscribe((resp)=>{
      console.log(resp.countries);
      this.allCountries = resp.countries;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })
  }


  // //This method captures change in autocomplete
  // goToPLayerDetails(pid){
  //   console.log(pid);
  //   this.router.navigate([CRICKET.ROUTES.PLAYER], { queryParams: { playerIdSelected: pid  }
  //   });
  // }



}
