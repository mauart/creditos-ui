import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.scss']
})
export class PlantillasComponent implements OnInit {

  private activeTab = 'Mensajes'; // messages tab
  constructor(private config: NgbTabsetConfig, private router: Router) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() { }

  onTabChange(tabs, event) {
    const activeId = event.nextId;
    const currentTab = tabs.filter((a) => a.id === activeId);
    if (currentTab) {
      this.activeTab = currentTab[0].title;
    }
  }
  onNuevo() {
    switch (this.activeTab) {
      case 'Mensajes': {
        console.log(this.activeTab);
        this.router.navigate(['/home/plantilla/mensaje']);
        break;
      }
      case 'Correos': {
        console.log(this.activeTab);
        this.router.navigate(['/home/plantilla/correo']);
        break;
      }
    }
  }
}
