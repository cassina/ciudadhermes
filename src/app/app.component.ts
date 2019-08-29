import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public cities = [
    'andeonimbva',
    'kaschkar',
    'kgargaria',
    'st-charles',
    'tekomoros'
  ];
  ngOnInit() {
    const title = 'ciudadhermes';
  }
}
