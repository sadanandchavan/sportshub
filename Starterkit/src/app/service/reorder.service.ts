// reorder.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReorderService {
  private columnOrder: number[] = [4, 3, 2, 1, 0, 5];

  getColumnOrder(): number[] {
    return this.columnOrder;
  }

  setColumnOrder(order: number[]): void {
    this.columnOrder = order;
  }
}
