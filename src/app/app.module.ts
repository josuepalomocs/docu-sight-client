import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  heroDocumentPlusSolid,
  heroTrashSolid,
} from '@ng-icons/heroicons/solid';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NgIconsModule } from '@ng-icons/core';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [AppComponent, UploadImageComponent, FileSizePipe],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ heroDocumentPlusSolid, heroTrashSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
