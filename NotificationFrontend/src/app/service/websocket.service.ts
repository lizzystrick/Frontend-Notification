import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
    private socket: WebSocket;
    private listener: Subject<any>;
  
    constructor() {
      this.listener = new Subject<any>();
    }
  
    public connect(url: string): Subject<any> {
      if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
        this.socket = new WebSocket(url);
        
        this.socket.onmessage = (event) => {
          this.listener.next(JSON.parse(event.data));
        };
  
        this.socket.onclose = (event) => {
          console.log('WebSocket connection closed', event);
        };
  
        this.socket.onerror = (event) => {
          console.error('WebSocket error', event);
        };
      }
  
      return this.listener;
    }
  
    public disconnect() {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.close();
      }
    }
  
    public sendMessage(message: any) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(message));
      } else {
        console.error('WebSocket is not connected.');
      }
    }