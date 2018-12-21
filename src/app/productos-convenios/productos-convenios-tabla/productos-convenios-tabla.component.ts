import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-convenios-tabla',
  templateUrl: './productos-convenios-tabla.component.html',
  styleUrls: ['./productos-convenios-tabla.component.scss']
})
export class ProductosConveniosTablaComponent implements OnInit {

  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Financiera', name: 'financiera', filtering: {filterString: '', placeholder: 'Filtrar por nombre'}},
    {title: 'Producto', name: 'producto', sort: 'asc', filtering: {filterString: '', placeholder: 'Filtrar por producto'}},
    {title: 'Convenio', name: 'convenio'},
    {title: 'Tipo Solicitante', name: 'tipo'},
    {title: 'Periodo', name: 'periodo'},
    {title: 'Status', name: 'status'},
    {title: 'Inicio.', name: 'inicio'},
    {title: '# Solicitudes', name: 'noSolicitudes'}
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
      'financiera': 'GNP',
      'producto': 'Producto 1',
      'convenio': 'Convenio 1',
      'tipo': 'tipo 1',
      'periodo': 'invierno',
      'status': 'activo',
      'inicio': '2018-07-00',
      'noSolicitudes': '100'
    }, {
      'financiera': 'Metlife',
      'producto': 'Producto 2',
      'convenio': 'Convenio 2',
      'tipo': 'tipo 2',
      'periodo': 'invierno',
      'status': 'activo',
      'inicio': '2018-07-00',
      'noSolicitudes': '100'
    }, {
      'financiera': 'Cigna',
      'producto': 'Producto 3',
      'convenio': 'Convenio 3',
      'tipo': 'tipo 3',
      'periodo': 'invierno',
      'status': 'activo',
      'inicio': '2018-07-00',
      'noSolicitudes': '100'
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
