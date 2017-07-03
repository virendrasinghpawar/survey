import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {SurveyService} from '../survey.service';
import { RouterModule,Router,ActivatedRoute  }   from '@angular/router';


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
public id:any;

  constructor(surveyService:SurveyService,private _fb: FormBuilder, private route:ActivatedRoute) {
    this.surveyService=surveyService;
     

   }





 
  ngOnInit() {
  
// this.route.paramMap
//     .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
//     .subscribe(hero => this.hero = hero);


this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

console.log("here i am about to get id"+this.id);
       // In a real app: dispatch action to load the details here.
    });

    this.surveyService.getChoices(this.id).subscribe(survey => {
      // console.log(survey.choice)
      // this.survey=survey
      // this.survey.forEach(element => {
      //   console.log(element)
      // });
      console.log("here comes the survey"+survey);

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
