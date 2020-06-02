import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import projectData from '../../assets/project-data.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  projectName: string;
  projectAbout: string;
  PATH: string;

  ngOnInit() {

    this.PATH = this.route.snapshot.routeConfig.path
    switch (this.route.snapshot.routeConfig.path) {
      case "speckles":
        this.projectName = "Speckles";
        this.projectAbout = projectData.Speckles.about;
        break;

      case "vercel":
        this.projectName = "Vercel";
        this.projectAbout = projectData.Vercel.about;
        break;

      case "heatmap":
        this.projectName = "Social Media Heat Map";
        this.projectAbout = projectData.Heatmap.about;
        break;
      case "thissite":
        this.projectName = "This Website";
        this.projectAbout = projectData.ThisSite.about;
        break;
      default:
        this.projectName = "Not Found";
        break;
    }
  }

}
