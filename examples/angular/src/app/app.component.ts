import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';

  companyId = 'c17577c7-48cd-44bf-ad63-e84729e54519';
  linkOpen = false;

  openLink() {
    this.linkOpen = true;
  }

  closeLink() {
    this.linkOpen = false;
  }
}
