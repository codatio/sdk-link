import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CodatLinkModule } from './codat-link/codat-link.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CodatLinkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
