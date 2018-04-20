import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from'@angular/router';
import{InformationService} from '../information.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
users:any;
  constructor(private route:ActivatedRoute, private router:Router, private info:InformationService ) { 
    this.route.params.subscribe(res=>console.log(res.id));

  }

  ngOnInit() {
    this.info.user.subscribe(res=>this.users=res);
  }
  SendMeHome(){
    this.router.navigate(['']);
  }

}
