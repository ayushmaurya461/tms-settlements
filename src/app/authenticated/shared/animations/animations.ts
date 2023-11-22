import {
  animate,
  keyframes,
  state,
  style,
  AnimateTimings,
  transition,
  trigger,
} from '@angular/animations';

export const newTextSlideIn = trigger('textSlideIn', [
  state(
    'show',
    style({
      transform: 'scaleY(100%)',
      transformOrigin: 'top',
      opacity: 1,
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
      transformOrigin: 'bottom',
      transform: 'scaleY(0)',
    })
  ),
  transition('show <=> hide', animate(200)),
]);

export const slide = trigger('slide', [
  state(
    'void',
    style({
      transform: 'translateX(-800px)',
      opacity: 0,
      position: 'absolute',
      top: 0,
    })
  ),
  state(
    'enter',
    style({
      transform: 'translateX(0px)',
    })
  ),
  transition('void => enter', [animate('200ms 200ms ease')]),
  transition('enter => void', [animate('100ms  ease')]),
]);

export const expandOrCollapse = trigger('expandOrCollapse', [
  state(
    'void',
    style({
      height: '0px',
      opacity: '0',
      overflow: 'hidden',
    })
  ),
  transition('void <=> *', animate(300)),
]);

export const expandOrCollapseVertically = trigger(
  'expandOrCollapseVertically',
  [
    state(
      'void',
      style({
        height: '0px',
        overflow: 'hidden',
        transform: 'scaleX(0)',
      })
    ),
    transition('void <=> *', animate(300)),
  ]
);

export const showHideWithOpacity = trigger('showHideWithOpacity', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  transition('void <=> *', [animate(200, style({ opacity: 1 }))]),
]);

export const expandOrCollapseOnCondition = trigger(
  'expandOrCollapseOnCondition',
  [
    state(
      'collapsed',
      style({
        height: '0px',
        overflow: 'hidden',
        transform: 'scaleX(0)',
      })
    ),
    state(
      'expanded',
      style({
        height: 'fit-content',
        overflow: 'hidden',
      })
    ),
    transition('collapsed <=> expanded', animate(300)),
  ]
);

export const animations = [
  expandOrCollapse,
  expandOrCollapseOnCondition,
  expandOrCollapseVertically,
  showHideWithOpacity,
  slide,
  newTextSlideIn,
];
