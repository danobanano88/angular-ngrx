import { createReducer, on } from '@ngrx/store';

//importar todas las acciones 
import { increment, decrement, reset, mult } from './counter.actions';

export const initialState = 3;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 2),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 3),

  //added multiplication
  on (mult, (state) => state * 2)
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
