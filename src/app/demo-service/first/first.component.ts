import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private alertMessageService: AlertMessageService) { }
  clickMe(){
    this.alertMessageService.AlertMessage('Clicked');
    // alert('Clicked!!')
  }
  ngOnInit(): void {
  }

}
