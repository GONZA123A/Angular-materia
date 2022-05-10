import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Inicio',
        link: './inicio',
        index: 0
      }, {
        label: 'Equipo',
        link: './equipo',
        index: 1
      }, {
        label: 'Contactos',
        link: './contactos',
        index: 2
      },
      {
        label: 'Exito',
        link: './exitos',
        index: 3
      },
      {
        label: 'Equipo',
        link: './servicio',
        index: 4
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
