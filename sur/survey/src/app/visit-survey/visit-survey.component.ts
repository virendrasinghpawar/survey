import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {SurveyService} from '../survey.service'
@Component({
  selector: 'app-visit-survey',
  templateUrl: './visit-survey.component.html',
  styleUrls: ['./visit-survey.component.css']
})
export class VisitSurveyComponent implements OnInit {
public surveyService :SurveyService;

public survey:Object[]=[];
public Title:String ="";
   public myForm: FormGroup;
public choices:String[]=[];
  constructor(surveyService:SurveyService,private _fb: FormBuilder) {
    this.surveyService=surveyService;

   }

// initChoice() {
//         return this._fb.group({
//             choice: [''],
            
//         });


// addChoice() {
//         const control = <FormArray>this.myForm.controls['choices'];
//         control.push(this.initChoice());
//     }




  ngOnInit() {
  
    this.surveyService.getChoices().subscribe(survey => {
      // console.log(survey.choice)
      // this.survey=survey
      // this.survey.forEach(element => {
      //   console.log(element)
      // });
      console.log(survey)

      this.survey=survey.Choices;
      this.Title=survey.title;
      console.log(this.survey);
    },
    err => {
      console.log(err);
      return false;
    });
  }

giveVote(myFood){
console.log("here are my values"+myFood)
}
}
