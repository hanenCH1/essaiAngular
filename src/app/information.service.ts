import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
 @Injectable()
export class InformationService {
  private users=new BehaviorSubject<any>(['imed','hanen']);
  user=this.users.asObservable();

  constructor() { }
  ChangeUser(user){
    this.users.next(user);
  }

}
