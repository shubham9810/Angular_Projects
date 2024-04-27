import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../Model/Snippet';

@Component({
  selector: 'app-createbin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.css'
})
export class CreatebinComponent {
  
   constructor(private dbService:DbService){
     
   }

  title = new FormControl("",[
    Validators.required
 ])
 code = new FormControl("",[
    Validators.required
 ])

 binForm =new  FormGroup({
   title:this.title,
   code:this.code
 })

 async save(){
   console.log(this.binForm.value);
   await this.dbService.createSnippet(this.binForm.value as Snippet)
 }

}
