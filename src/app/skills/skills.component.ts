import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  myskill: string[] = ["skill1", "skill2", "skill3"]

   mySkills: {skill: string, imagePath: string}[] = [
    {skill: "HTML5", imagePath: "../../../assets/html5.png"},
    {skill: "CSS3", imagePath: "../../../assets/css3.png"},
    {skill: "JavaScript", imagePath: "../../../assets/javascript.jpeg"},
    {skill: "ReactJs", imagePath: "../../../assets/react.png"},
    {skill: "Angular", imagePath: "../../../assets/angularlogo.png"},
    {skill: "Redux", imagePath: "../../../assets/redux.png"},
    {skill: "GIT", imagePath: "../../../assets/git.png"},
    {skill: "Github", imagePath: "../../../assets/github.png"},
    {skill: "MongoDB", imagePath: "../../../assets/mongodb.png"},
  ]

}
