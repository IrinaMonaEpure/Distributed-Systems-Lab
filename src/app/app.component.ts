import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';

  ngOnInit() {
    $('button').click(function () {
      alert('Hello!');
    });
  }
}

declare var $: any;
