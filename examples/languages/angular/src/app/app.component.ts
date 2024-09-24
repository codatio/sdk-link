import { Component } from '@angular/core';
import {
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from 'https://link-sdk.codat.io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  companyId = '';
  linkOpen = false;
  linkFinished = false;

  openLink() {
    if (this.companyId) {
      this.linkOpen = true;
    }
  }

  closeLink() {
    this.linkOpen = false;
  }

  onConnection(connection: ConnectionCallbackArgs) {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  }

  onError(error: ErrorCallbackArgs) {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      this.closeLink();
    }
  }

  onFinish() {
    this.closeLink();
    this.linkFinished = true;
  }

  reset() {
    this.linkFinished = false;
  }
}
