import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
constructor(private title: Title){}
ngOnInit(): void {
    // Setting page title
    this.title.setTitle('Moton - about')
}
}
