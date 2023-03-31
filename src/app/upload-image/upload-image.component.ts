import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent {
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  isHighlighted = false;
  imageFiles: FileList | undefined;

  onDropZoneDrag(): void {
    console.log('drop zone drag');
    this.isHighlighted = true;
  }
  onDropZoneDrop(dragEvent: DragEvent): void {
    console.log('file dropped');
    dragEvent.preventDefault();
    dragEvent.stopPropagation();
    const files = (dragEvent.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      this.imageFiles = files;
    }
    this.isHighlighted = false;
  }
  onDropZoneDragLeave(): void {
    this.isHighlighted = false;
  }

  onFileInputChange(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      this.imageFiles = files;
    }
  }
}
