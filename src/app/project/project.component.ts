import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetmdService} from '../getmd.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getmd: GetmdService) { }

  projectMDstr: string;
  projectMDhtml: string;
  currRoute: string;


  ngOnInit() {
    this.currRoute = this.route.snapshot.routeConfig.path;
    this.projectMDstr = this.getmd.getMD(this.currRoute);
    this.projectMDhtml = marked(this.projectMDstr);
  }

}
