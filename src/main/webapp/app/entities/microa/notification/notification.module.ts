import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhcognitoappSharedModule } from 'app/shared/shared.module';
import { NotificationComponent } from './notification.component';
import { NotificationDetailComponent } from './notification-detail.component';
import { NotificationUpdateComponent } from './notification-update.component';
import { NotificationDeleteDialogComponent } from './notification-delete-dialog.component';
import { notificationRoute } from './notification.route';

@NgModule({
  imports: [JhcognitoappSharedModule, RouterModule.forChild(notificationRoute)],
  declarations: [NotificationComponent, NotificationDetailComponent, NotificationUpdateComponent, NotificationDeleteDialogComponent],
  entryComponents: [NotificationDeleteDialogComponent],
})
export class MicroaNotificationModule {}
