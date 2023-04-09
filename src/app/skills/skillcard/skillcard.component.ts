

import { Component, Input, OnInit } from "@angular/core"

@Component ({
    selector: "app-skillcard",
    templateUrl: "./skillcard.component.html",
    styleUrls: ["./skillcard.component.scss"]
})

export class SkillCard implements OnInit{

  @Input() skill: {skill: string, imagePath: string} = {skill: "", imagePath: ""};

  // @Input() skill: {skill: string, imagePath: string};

  ngOnInit(): void {
  }

}