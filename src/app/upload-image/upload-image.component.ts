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
  currentFiles: File[] = [];

  onDropZoneDrag(dragEvent: DragEvent): void {
    dragEvent.preventDefault();
    dragEvent.stopPropagation();
    this.isHighlighted = true;
  }

  onDropZoneDrop(dragEvent: DragEvent): void {
    dragEvent.preventDefault();
    dragEvent.stopPropagation();
    const droppedFiles = dragEvent.dataTransfer?.files;
    if (droppedFiles && droppedFiles.length > 0) {
      this.currentFiles = [
        ...this.currentFiles,
        ...this.fileListToArray(droppedFiles),
      ];
    }
    this.isHighlighted = false;
    console.log(this.currentFiles);
  }

  onDropZoneDragLeave(): void {
    this.isHighlighted = false;
  }

  onFileInputChange(event: Event): void {
    const inputFiles = (event.target as HTMLInputElement).files;
    if (inputFiles && inputFiles.length > 0) {
      this.currentFiles = [
        ...this.currentFiles,
        ...this.fileListToArray(inputFiles),
      ];
    }
  }

  removeFile(fileToRemove: File): void {
    const index = this.currentFiles.findIndex(
      (file) => file.name === fileToRemove.name
    );
    console.log(index);
    if (index !== -1) {
      this.currentFiles.splice(index, 1);
      console.log(this.currentFiles);
    }
  }

  fileListToArray(fileList: FileList): File[] {
    const files: File[] = [];

    for (let i = 0; i < fileList.length; i++) {
      files.push(fileList.item(i)!);
    }

    return files;
  }
}
