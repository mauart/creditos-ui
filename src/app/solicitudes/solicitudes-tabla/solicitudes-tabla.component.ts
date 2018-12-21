import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-tabla',
  templateUrl: './solicitudes-tabla.component.html',
  styleUrls: ['./solicitudes-tabla.component.scss']
})
export class SolicitudesTablaComponent implements OnInit {

  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Nombre', name: 'nombre', filtering: {filterString: '', placeholder: 'Filtrar por nombre'}},
    {
      title: 'NSS/Matricula',
      name: 'nss',
      sort: 'asc',
      filtering: {filterString: '', placeholder: 'Filtrar por nss'}
    },
    {title: 'Telefono', name: 'tel'},
    {title: 'Status.', name: 'status'},
    {title: 'Origen', name: 'origen'},
    {title: 'Creacion', name: 'creacion'},
    {title: 'Tipo.', name: 'tipo'},
    {title: 'Solicitante', name: 'solicitante'},
    {title: 'Notas', name: 'notas'}
  ];
  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = [
    {
      'nombre': 'Victoria Cantrell',
      'nss': '12345678',
      'tel': '9999999999',
      'status': 'soltera',
      'origen': 'web 1',
      'creacion': '2018-07-00',
      'tipo': 'tipo 1',
      'solicitante': 'sol 1',
      'notas': 'mas notas'
    }, {
      'nombre': 'Natalia Cantrell',
      'nss': '1234567',
      'tel': '9999999999',
      'status': 'soltera',
      'origen': 'web 2',
      'creacion': '2018-07-08',
      'tipo': 'tipo 2',
      'solicitante': 'sol 2',
      'notas': 'mas notas'
    }, {
      'nombre': 'Kenna Cantrell',
      'nss': '123456',
      'tel': '9999999999',
      'status': 'soltera',
      'origen': 'web 3',
      'creacion': '2018-07-10',
      'tipo': 'tipo 3',
      'solicitante': 'sol 3',
      'notas': 'mas notas'
    } ];

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}