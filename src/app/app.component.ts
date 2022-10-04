import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  user:User = {
    name: "Dhoni",
    age:25,
    favoriteColor: "black",
    birthday:new Date(),
    caffeine: "Water"
  };

  displayEdit:boolean = false;

  toggelEdit():void{
    this.displayEdit = !this.displayEdit;
  }
}
