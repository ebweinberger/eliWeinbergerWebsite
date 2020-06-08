import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eliWeinbergerWebsite';

  sidebarStatus: boolean;
  fade: boolean;
  mobile: boolean;

  ngOnInit(){
    this.fade = false;

    if(window.innerWidth > 800){
      this.sidebarStatus = true;
      this.mobile = false;
    }else{
      this.sidebarStatus = false;
      this.mobile = true;
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if(window.innerWidth > 800){
        this.sidebarStatus = true;
        this.mobile = false;
      }else{
        this.sidebarStatus = false;
        this.mobile = true;
      }
    }

  toggleSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
    this.fade = !this.fade;
  }

  sidebarOff(){
    this.sidebarStatus = false;
    this.fade = false;
    console.log("help");
  }


}
