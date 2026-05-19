import { animate, scrambleText, utils } from 'https://esm.sh/animejs';

const [ $p ] = utils.$('p');
const btn = document.getElementById("reveal")

const audioCtx = new AudioContext();
let soundEnabled = true;

const tickSound = () => {
  if (!soundEnabled) return;
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(4000 + Math.random() * 400, t);
  g.gain.setValueAtTime(0.001, t);
  g.gain.linearRampToValueAtTime(0.035, t + 0.001);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.003);
  o.connect(g).connect(audioCtx.destination);
  o.start(t);
  o.stop(t + 0.003);
};

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=<>/?\|~';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById("text").innerHTML = makeid(21);

window.onload = function(){
animate($p, {
  innerHTML: scrambleText({ text: 'Hamburgertent Pro Max', onChange: tickSound }),
  loop: false,
  loopDelay: 1500,
});
};