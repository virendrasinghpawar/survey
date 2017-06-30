import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer.interface';
import {SurveyService} from '../survey.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 public myForm: FormGroup;
  public surveyService:SurveyService;
    constructor(private _fb: FormBuilder,surveyService: SurveyService) { 
        this.surveyService=surveyService;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            Title: ['', [Validators.required, Validators.minLength(5)]],
            choices: this._fb.array([
                this.initChoice(),
            ])
        });
    }

    initChoice() {
        return this._fb.group({
            choice: ['', Validators.required],
            
        });
    }

    addChoice() {
        const control = <FormArray>this.myForm.controls['choices'];
        control.push(this.initChoice());
    }

    removeChoice(i: number) {
        const control = <FormArray>this.myForm.controls['choices'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        
        
    this.surveyService.addSurvey(this.myForm.value).subscribe(data => {
      if(data.success){
        // this.authService.storeUserData(data.token, data.user);
        // this.flashMessage.show('You are now logged in', {
        //   cssClass: 'alert-success',
        //   timeout: 5000});
        // this.router.navigate(['dashboard']);
        console.log(data);


      } else {
    //     this.flashMessage.show(data.msg, {
    //       cssClass: 'alert-danger',
    //       timeout: 5000});
    //     this.router.navigate(['login']);
      }
    });
        
        
        
        
        console.log(this.myForm.value);
    }
}
