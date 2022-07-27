import { Component } from '@angular/core';

@Component({//decorador
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//componente principal
  title = 'app-angular';//propiedad
  nombre = 'maría josé';
}
