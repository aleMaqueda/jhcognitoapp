import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: () => import('./microb/product/product.module').then(m => m.MicrobProductModule),
      },
      {
        path: 'product-category',
        loadChildren: () => import('./microb/product-category/product-category.module').then(m => m.MicrobProductCategoryModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./microb/customer/customer.module').then(m => m.MicrobCustomerModule),
      },
      {
        path: 'order-item',
        loadChildren: () => import('./microb/order-item/order-item.module').then(m => m.MicrobOrderItemModule),
      },
      {
        path: 'product-order',
        loadChildren: () => import('./microb/product-order/product-order.module').then(m => m.MicrobProductOrderModule),
      },
      {
        path: 'invoice',
        loadChildren: () => import('./microa/invoice/invoice.module').then(m => m.MicroaInvoiceModule),
      },
      {
        path: 'notification',
        loadChildren: () => import('./microa/notification/notification.module').then(m => m.MicroaNotificationModule),
      },
      {
        path: 'shipment',
        loadChildren: () => import('./microa/shipment/shipment.module').then(m => m.MicroaShipmentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhcognitoappEntityModule {}
