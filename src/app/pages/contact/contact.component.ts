import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private title: Title){}
  ngOnInit(): void {
      // setting page title
      this.title.setTitle('Moton - contact')
  }
}
