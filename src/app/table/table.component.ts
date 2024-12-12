import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];  // Dati filtrati per la ricerca
  page = 1;  // Numero della pagina corrente
  pageSize = 5;  // Numero di elementi per pagina
  searchQuery = '';  // Stringa di ricerca

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (response) => {
        console.log(response);
        this.data = Array.isArray(response.data) ? response.data : [response.data];
        console.log(this.data);
      },
      complete: () => console.log('Caricamento completato'),
      error: (err) => console.error('Errore nel caricamento dei dati', err)
    });
  }

    // Metodo per filtrare i dati in base alla ricerca
    filterData() {
      if (this.searchQuery) {
        this.filteredData = this.data.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredData = [...this.data];  // Se non c'è ricerca, mostra tutti i dati
      }
    }

    // Calcola gli item da visualizzare in base alla pagina corrente
    get paginatedData() {
      const startIndex = (this.page - 1) * this.pageSize;
      return this.filteredData.slice(startIndex, startIndex + this.pageSize);
    }

    // Metodo chiamato ad ogni cambiamento nella ricerca
    onSearchChange() {
      this.page = 1;  // Reset della pagina a 1 ogni volta che cambia la ricerca
      this.filterData();
    }

}
