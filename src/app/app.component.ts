import {Component, OnInit} from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'image-classifier-upload';
  model: mobilenet.MobileNet | undefined;
  imgSrc: any;

  async ngOnInit(): Promise<void> {
    this.model = await mobilenet.load();
  }

  onFileChanged(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        console.log('on load');
        this.imgSrc = res.target.result;
        setTimeout(async () => {
          const img = document.getElementsByTagName('img')[0];
          const predictions = await this.model?.classify(img);
          console.log('predictions', predictions);
        }, 0);
      };
    }
  }
}
