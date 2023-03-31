import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { heroDocumentPlusSolid } from '@ng-icons/heroicons/solid';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [AppComponent, UploadImageComponent],
  imports: [BrowserModule, NgIconsModule.withIcons({ heroDocumentPlusSolid })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
