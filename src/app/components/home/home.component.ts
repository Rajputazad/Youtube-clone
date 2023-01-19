import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
show=false
click(){
  this.show=true
  setTimeout(() => {
   this.show=false
}, 1000);


}


}
