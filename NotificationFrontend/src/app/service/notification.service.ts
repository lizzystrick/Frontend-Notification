import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSource = new BehaviorSubject<any[]>([]);
  notifications$ = this.notificationsSource.asObservable();
    private hubConnection!: HubConnection;

    constructor() {
      this.createConnection();
      this.startConnection();
  }

  public createConnection() {
    this.hubConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7294/NotificationHub') // Update with the backend URL
            .build();
  }

  public startConnection(): void {
    this.hubConnection
    .start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err));
  }
  public addNotificationListener(): void {
    this.hubConnection.on('ReceiveLikeNotification', (notification) => {
// Check for duplicates
const existingNotification = this.notificationsSource.value.find(n => 
  n.movieId === notification.movieId && n.userId === notification.userId);

if (!existingNotification) {
  // It's not a duplicate, so add it to the array
  this.notificationsSource.next([...this.notificationsSource.value, notification]);
} else {
  console.log('Duplicate notification received:', notification);
}
    });
    }
  }

  //addNotificationListener(): void {
    // Listen for notifications from the SignalR hub
    //this.hubConnection.on('ReceiveLikeNotification', (userId, movieId) => {
      // Handle the notification, e.g., display a toast message or update a list
    //});

