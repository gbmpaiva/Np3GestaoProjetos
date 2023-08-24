import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Tela Incial', action: this.onClick.bind(this) },
    { label: 'Agenda', action: this.onClick.bind(this) },
    { label: 'Uploud de Arquivos', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
