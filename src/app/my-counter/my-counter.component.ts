import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, mult } from '../counter.actions'; 
//& Cada que hacemos una funcion aqui debemos importar su declaracion en el actions

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>; 
  //* userD$: Obeservable<any[]>;  
  //* initial [] load[llenar]  logout[]
  //& siempre debe ser observavle el tipo de dato al que le vamos a hacer un store

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  mult() {
    this.store.dispatch(mult());
  }


}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
