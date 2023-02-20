import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notifyCustomName = new EventEmitter();

  onNotify() {
    this.notifyCustomName.emit(
      'You will be notified when the product goes on sale'
    );
  }
}
