import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInFromLeft = trigger('slideInFromLeft', [
  state('hidden', style({ transform: 'translateX(-150%)' })),
  state('visible', style({ transform: 'translateX(0)' })),
  transition('hidden => visible', [
    animate('500ms ease-in')
  ])
]);

export const slideInFromRight = trigger('slideInFromRight', [
  state('hidden', style({ transform: 'translateX(150%)' })),
  state('visible', style({ transform: 'translateX(0)' })),
  transition('hidden => visible', [
    animate('500ms ease-in')
  ])
]);
