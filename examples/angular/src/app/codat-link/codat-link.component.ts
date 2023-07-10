import { Component, ElementRef, ViewChild } from '@angular/core';
import { CodatLink } from 'https://link-sdk.codat.io';

@Component({
  selector: 'app-codat-link',
  templateUrl: './codat-link.component.html',
  styleUrls: ['./codat-link.component.css'],
})
export class CodatLinkComponent {
  @ViewChild('#target') target: ElementRef | undefined;

  constructor() {
    console.log(CodatLink);
  }
}
