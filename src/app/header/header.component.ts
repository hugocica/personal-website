import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuActive = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');

    if ( !this.menuActive ) {
      menu.classList.add('menu--active');
      menuList.classList.add('menu__list--active');
      brand.classList.add('menu__brand--active');
      burger.classList.add('burger--close');

      for (var i = 0, ii = menuItems.length; i < ii; i++) {
        menuItems[i].classList.add('menu__item--active');
      }

      this.menuActive = true;
    } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        brand.classList.remove('menu__brand--active');
        burger.classList.remove('burger--close');

        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }

      this.menuActive = false;
    }
  }
}
