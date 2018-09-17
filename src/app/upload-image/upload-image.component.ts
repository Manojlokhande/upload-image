import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ng-upload-image',   
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  providers: [UploadImageService, Title]
})
export class UploadImageComponent implements OnInit {
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private imageService: UploadImageService,private title : Title) {
    this.title.setTitle('manoj lokhande');
   }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption, Image) {
    this.imageService.postFile(Caption.value, this.fileToUpload).subscribe(
      data => {
        console.log('done');
        Caption.value = null;
        Image.value = null;
        this.imageUrl = "/assets/img/default-image.png";
      }
    );
  }


}
