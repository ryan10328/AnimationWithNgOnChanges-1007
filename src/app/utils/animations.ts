import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';


export const oddsAnimation = trigger('state', [
  state('increase', style({})),
  state('decrease', style({})),
  transition(
    '* => plus',
    animate(
      '0.5s',
      keyframes([
        style({backgroundColor: 'transparent'}),
        style({backgroundColor: 'green'}),
        style({backgroundColor: 'transparent'})
      ])
    )
  ),
  transition(
    '* => minus',
    animate(
      '0.5s',
      keyframes([
        style({backgroundColor: 'transparent'}),
        style({backgroundColor: 'red'}),
        style({backgroundColor: 'transparent'})
      ])
    )
  )
]);
