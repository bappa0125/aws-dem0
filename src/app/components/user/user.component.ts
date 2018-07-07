import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   name:String;
   age:number;
   email:string;
   address:Address;
   hobbies:string[];
   posts:Post[];
    

  constructor(private dataService:DataService) {
    console.log("constructor ran");
   }
     
  ngOnInit() {
  this.name="subrata";
  this.age=35;
  this.address={
    street:"bahttacharya para lane",
    city:"kolkata",
    state:"westbengal",
    
    
  };
  this.hobbies=["biking","music"];
  
  this.dataService.getPost().subscribe((posts)=>{
    //console.log(posts);
    this.posts=posts;
  })
  
  }

   
  
  onClick(){
    console.log("Hello save");

  }
  addHobby(hobby:string)
  {
  this.hobbies.push(hobby);

  return false
  }

}
interface Address{
  street:string,
  city:string,
  state:string
  
}
interface Post{
  id:number,
  title:string,
  body:string


}