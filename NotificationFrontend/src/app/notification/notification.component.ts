import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../service/websocket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.connect('ws://localhost:yourBackendPort/notificationHub').subscribe(
      (message) => {
        console.log('Received a notification', message);
        // Handle the notification message
      },
      (err) => console.error(err),
      () => console.log('complete')
    );
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  sendMessage() {
    this.webSocketService.sendMessage({ data: 'Hello from client' });
  }
}