import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private alertMessageService: AlertMessageService) { }

  sayHello(){
    this.alertMessageService.AlertMessage("Helloooooooooooooo...")
    // alert('Helloooooooooooooo....')
  }
  ngOnInit(): void {
  }

}
