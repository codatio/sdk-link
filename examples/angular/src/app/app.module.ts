import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodatLinkModule } from './codat-link/codat-link.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CodatLinkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
