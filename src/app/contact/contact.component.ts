import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactName = '';
  contactAddress = '';
  isDeleted = true;
  data = {
    value: 4,
  };

  constructor() {}

  ngOnInit(): void {}
}
