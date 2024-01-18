import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { ToastrService } from 'ngx-toastr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  
  notifications: any[] = [];

  constructor(private toastr: ToastrService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.addNotificationListener();
    this.notificationService.notifications$.subscribe(
      (newNotifications) => {
        this.notifications = newNotifications;
      }
    );
}


private handleNotification = (data: any) => {
  console.log('Received notification:', data);
  // You might want to fetch more movie details here or just display the IDs
  this.toastr.success(`Movie ${data.notification.movieId} was liked by user ${data.notification.userId}`);
  // Trigger change detection if needed, e.g.:
  // this.changeDetectorRefs.detectChanges();

}

}
