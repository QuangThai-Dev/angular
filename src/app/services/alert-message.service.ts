import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor() { }
  AlertMessage(message: string){
    alert(message)
  }
}
