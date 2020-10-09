import { Injectable } from '@angular/core';
import { HoursEntry } from '../models/HoursEntry';

@Injectable({
  providedIn: 'root'
})
export class HourService {


  result: string;
  

  EXPEDIENT_OVER:string='17:48';
  MAX:string = '08:48';

  constructor() { }



  getHoursLeft(hours:HoursEntry) {

  

   
    const firstTime = this.minsToStr(this.strToMins(hours.secondEntry) - this.strToMins(hours.firstEntry));

    let left= this.minsToStr(this.strToMins(this.MAX)-this.strToMins(firstTime))

  
    return this.minsToStr(this.strToMins(hours.thirtyEntry) + this.strToMins(left));




  }

  private strToMins(t){
    var s = t.split(":");
    return Number(s[0]) * 60 + Number(s[1]);
  }

  private minsToStr(t){
    return Math.trunc(t / 60)+':'+('00' + t % 60).slice(-2);
  }

  

  
}
