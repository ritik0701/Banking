import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking';

checkSession(){
  if(sessionStorage.getItem('userId')==null||sessionStorage.getItem('userId')==''){
    return false
  }else{
    return true
  }}

logout(){
  sessionStorage.setItem('userId','')
  window.location.assign("http://localhost:4200/")
}

}
