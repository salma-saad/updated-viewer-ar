import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 👇 Your root standalone component
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { ArViewerComponent } from './ar-viewer/ar-viewer.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';

const routes: Routes = [
    { path: '', component: QrCodeComponent }, 
    { path: 'ar-viewer', component: ArViewerComponent },
    { path: '**', redirectTo: '' }
  ];
  
@NgModule({
  declarations: [AppComponent, QrCodeComponent],
  imports: [
    BrowserModule,
    QRCodeComponent,
    routing,
    HttpClientModule,
    RouterModule,
  ],
  exports:[QRCodeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}