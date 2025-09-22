import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        console.log('Notification permission:', permission);
      });
    }
  }

  showNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('¡Notificación activada!', {
        body: 'Esta es una prueba desde tu app Angular.',
        icon: 'assets/icons/icon-144x144.png'
      });
    }
  }
}
