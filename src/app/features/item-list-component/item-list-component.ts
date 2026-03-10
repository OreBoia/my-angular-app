import { Component, inject } from '@angular/core';
import { DataService } from '../../services/DataService/data-service';

@Component({
  selector: 'app-item-list-component',
  imports: [],
  templateUrl: './item-list-component.html',
  styleUrl: './item-list-component.css',
})
export class ItemListComponent {
  private dataService = inject(DataService)
  items = this.dataService.getItems()
}
