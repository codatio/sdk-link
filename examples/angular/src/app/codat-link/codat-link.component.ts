import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-codat-link',
  templateUrl: './codat-link.component.html',
  styleUrls: ['./codat-link.component.css'],
})
export class CodatLinkComponent implements AfterViewInit {
  @ViewChild('target') target: ElementRef | undefined;
  @Input() companyId: string | undefined;
  @Output() close = new EventEmitter<void>();

  ngAfterViewInit() {
    if (this.target && this.companyId) {
      const target = this.target.nativeElement;
      const companyId = this.companyId;

      // webpackIgnore is a magic comment that prevents webpack from
      //   parsing this dynamic import. The build will fail otherwise.
      // See https://webpack.js.org/api/module-methods/#magic-comments
      import(/* webpackIgnore: true */ 'https://link-sdk.codat.io').then(
        ({ CodatLink }) => {
          new CodatLink({
            target,
            props: {
              companyId,
              onClose: () => this.close.emit(),
              onConnection: (connection) =>
                alert(`On connection callback : ${connection.connectionId}`),
              onError: (error) => {
                alert(`On error callback : ${error.message}`);
                this.close.emit();
              },
              onFinish: () => alert('On finish callback'),
            },
          });
        }
      );
    }
  }
}
