import { formatDate } from '@angular/common';
import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { HoursEntry } from '../models/HoursEntry';
import { HourService } from './hour.service';

@Component({
  selector: 'app-hour-left',
  templateUrl: './hour-left.component.html',
  styleUrls: ['./hour-left.component.css']
})
export class HourLeftComponent implements OnInit {

  
  hoursEntry : HoursEntry;

  showAlertHour:boolean = false;
  msgAlert:string;
  form: FormGroup=new FormGroup({
    firstEntry:new FormControl(),
    secondEntry:new FormControl(),
    thirtyEntry:new FormControl(),
    fortyEntry:new FormControl(),
  });

  constructor(private hoursService: HourService) { }

  ngOnInit(): void {
    this.clean();
  }

  getHoursLeft(){
    
   let result = this.hoursService.getHoursLeft(this.form.value);
    this.form.patchValue({fortyEntry:result});
    this.msgAlert= " Realize a batida de ponto às :" + this.form.get('fortyEntry').value;

    this.showAlertHour = true;
    setTimeout(()=>{
      this.showAlertHour = false;
    },5000)
    
  }

  clean(){
    this.form.reset({})
  }

  get isValid() { return this.form.controls.valid; }



  
}
