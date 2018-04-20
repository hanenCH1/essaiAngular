import { Component, OnInit } from '@angular/core';
import{trigger,style,transition,animate,keyframes,query,stagger} from  '@angular/animations';
import{InformationService} from '../information.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
  
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.8s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.4}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.4}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ] 
})
export class HomeComponent implements OnInit {
UserCount:number = 4;
btnText:String ='sign in';
UserText='Imed';
users=[];
  constructor(private info:InformationService) {
    

   }

  ngOnInit() {
    this.info.user.subscribe(res=>this.users=res);
    this.info.ChangeUser(this.users);
    this.UserCount=this.users.length;
    

  }
  addUser(){
    this.users.push(this.UserText);
    this.UserText="";
    this.UserCount=this.users.length;
    this.info.ChangeUser(this.users);
    
  }
  removeItem(i) {
    this.users.splice(i, 1);
    this.info.ChangeUser(this.users);
    this.UserCount=this.users.length;
  }

}
