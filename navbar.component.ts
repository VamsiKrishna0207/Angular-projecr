import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ApiService } from '../shared/api.service';
import { PetData } from './navbar.module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 formValue !: FormGroup
 petModelObj : PetData = new PetData;
 allPetData : any
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      quantity:[''],
      mobile:[''],
      price:[''],
      services:['']
    })
    this.getAllData()
  }

  //How subcribe data

  addPet(){
    this.petModelObj.name = this.formValue.value.name;
    this.petModelObj.quantity = this.formValue.value.quantity;
    this.petModelObj.mobile = this.formValue.value.mobile;
    this.petModelObj.price = this.formValue.value.price;
    this.petModelObj.services= this.formValue.value.services;

    this.api.postPet(this.petModelObj).subscribe(res=>{
      console.log(res);
      alert("Agriculture records added succesfully");

      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    },
    err=>{
      alert("something went wrong"+ err);
    }
    )
  }

  //get all data
getAllData(){
  this.api.getPet().subscribe(res=>{
    this.allPetData = res;
  })
}

//delete all data

deletePets(data:any){
  this.api.deletePet(data.id).subscribe(res => {
    alert("Agriculture Records Deleted");
    this.getAllData();
  })
}

//edit data


}
