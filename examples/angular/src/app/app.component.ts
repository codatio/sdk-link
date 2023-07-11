import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  companyId = '';
  linkOpen = false;

  openLink() {
    this.linkOpen = true;
  }

  closeLink() {
    this.linkOpen = false;
  }
}
