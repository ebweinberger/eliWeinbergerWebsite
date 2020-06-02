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
  visitURL: string;
  visitMessage: string;

  ngOnInit() {
    switch (this.route.snapshot.routeConfig.path) {
      case "speckles":
        this.projectName = "Speckles";
        this.projectAbout = projectData.Speckles.about;
        this.visitURL = projectData.Speckles.visitURL;
        this.visitMessage = projectData.Speckles.visitMessage;
        break;

      case "vercel":
        this.projectName = "Vercel";
        this.projectAbout = projectData.Vercel.about;
        this.visitURL = projectData.Vercel.visitURL;
        this.visitMessage = projectData.Vercel.visitMessage;
        break;

      case "heatmap":
        this.projectName = "Social Media Heat Map";
        this.projectAbout = projectData.Heatmap.about;
        this.visitURL = projectData.Heatmap.visitURL;
        this.visitMessage = projectData.Heatmap.visitMessage;
        break;
      case "thissite":
        this.projectName = "This Website";
        this.projectAbout = projectData.ThisSite.about;
        this.visitURL = projectData.ThisSite.visitURL;
        this.visitMessage = projectData.ThisSite.visitMessage;
        break;
      default:
        this.projectName = "Not Found";
        break;
    }
  }

}
