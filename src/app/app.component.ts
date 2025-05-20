import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArViewerComponent } from './ar-viewer/ar-viewer.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ar-model';
  productUrl = `http://localhost:4200/ar-viewer`;
}
