import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expandSection(event: any) {
    // var element = document.getElementById(event.target.id);
    // element.classList.remove("_closed");
    console.log($('#'+event.target.id));
    if ( ! $('#'+event.target.id).hasClass('_opened') ) {
      $('.about-section').toggleClass('hidden');
      $('#'+event.target.id).addClass('_opened').removeClass('hidden');
    }
  }

}
