import { Component, OnInit } from '@angular/core';

import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  readonly actions: Array<PoPageAction> = [
    // actions of table here
  ];

  readonly columns: Array<PoTableColumn> = [
    // columns of table here
    { property: 'name', width: '50%' },
    { property: 'email', width: '35%' }
  ];

  items: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      { name: 'Gabriel Paiva  ',  email: 'gabrielmpaiva0703@gmail.com' },
      { name: 'Raphael Neves  ',  email: 'RaphaelNeves@gmail.com' },
      { name: 'Jorge Lafaite   ',  email: 'JorgeSilva@gmail.com' },
      { name: 'Joao Vitor Lima',  email: 'JoaoVitorLima@gmail.com' },
    ];
   }

}
