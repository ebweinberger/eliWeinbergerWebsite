import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as speck from 'raw-loader!../../assets/markdown/speckles.md';
import * as verc from 'raw-loader!../../assets/markdown/vercel.md';
import * as site from 'raw-loader!../../assets/markdown/thissite.md';

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
  projectMD: string;

  ngOnInit() {
    switch (this.route.snapshot.routeConfig.path) {
      case "speckles":
        this.projectMD = marked(speck.default);
        break;

      case "vercel":
        this.projectMD = marked(verc.default);
        break;

      case "heatmap":

        break;
      case "thissite":
        this.projectMD = marked(site.default);
        break;
      default:

        break;
    }
  }

}
