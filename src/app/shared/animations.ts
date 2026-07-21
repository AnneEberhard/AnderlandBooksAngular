import { trigger, state, style, transition, animate } from '@angular/animations';


export const slideInFromLeft = trigger('slideInFromLeft', [
  state('hidden', style({ transform: 'translateX(0)' })),
  state('visible', style({ transform: 'translateX(0)' })),
  transition('hidden => visible', [])
]);

export const slideInFromRight = trigger('slideInFromRight', [
  state('hidden', style({ transform: 'translateX(0)' })),
  state('visible', style({ transform: 'translateX(0)' })),
  transition('hidden => visible', [])
]);

export const fadeIn = trigger('fadeIn', [
  state('hidden', style({ opacity: 1 })),
  state('visible', style({ opacity: 1 })),
  transition('hidden => visible', [])
]);

//export const slideInFromLeft = trigger('slideInFromLeft', [
//  state('hidden', style({ transform: 'translateX(-150%)' })),
//  state('visible', style({ transform: 'translateX(0)' })),
//  transition('hidden => visible', [
//    animate('400ms ease-in')
//  ])
//]);
//
//export const slideInFromRight = trigger('slideInFromRight', [
//  state('hidden', style({ transform: 'translateX(150%)' })),
//  state('visible', style({ transform: 'translateX(0)' })),
//  transition('hidden => visible', [
//    animate('400ms ease-in')
//  ])
//]);
//
//export const fadeIn = trigger('fadeIn', [
//  state('hidden', style({ opacity: 0 })),
//  state('visible', style({ opacity: 1 })), 
//  transition('hidden => visible', [
//    animate('700ms ease-in')
//  ])
//]);
