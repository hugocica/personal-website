import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var typed = new Typed('#typed', {
      strings: ["Estou com saudades", "SUA PORRINHA"],
      loop: true,
      typeSpeed: 30,
      smartBackspace: true
    });
  }
}
