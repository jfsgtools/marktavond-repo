import { animate, splitText, stagger } from 'https://esm.sh/animejs';

const { chars } = splitText('p', {
  chars: { wrap: 'clip' },
});

animate(chars, {
  y: [
    { to: ['100%', '0%'] },
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: false,
});