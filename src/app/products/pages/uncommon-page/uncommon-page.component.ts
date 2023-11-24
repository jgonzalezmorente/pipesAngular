import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(): void {
    this.name = ( this.name === 'Fernando' ) ? 'Melissa': 'Fernando';
    this.gender = ( this.gender === 'male' ) ? 'female' : 'male';
  }

  // i18nPlural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Eduardo', 'Hernando', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos 2 personas',
    'other': 'tenemos # clientes'
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval( 2000 ).pipe(
    tap( value => console.log( 'tap:', value ))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa' );
      console.log( 'Tenemos data en la promesa' );
      this.person.name = 'Otro nombre';
    }, 3000);

  });


}
