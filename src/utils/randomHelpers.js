// From http://baagoe.com/en/RandomMusings/javascript/
// Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
import random from 'random';

export const SpecialItem = () => {
  return `${InterestingItem()} of ${window.K.ItemOfs[random.int(0, window.K.ItemOfs.length - 1)]}`;
};

export const InterestingItem = () => {
  return `${window.K.ItemAttrib[random.int(0, window.K.ItemAttrib.length - 1)]} ${
    window.K.Specials[random.int(0, window.K.Specials.length - 1)]
  }`;
};

export const BoringItem = () => {
  return window.K.BoringItems[random.int(0, window.K.BoringItems.length - 1)];
};

export const odds = (chance, outof) => {
  return random.int(0, outof) < chance;
};

export const pick = arr => arr[random.int(0, arr.length - 1)];

function Mash() {
  let n = 0xefc8249d;

  const mash = function(data) {
    data = data.toString();
    for (let i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      let h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  mash.version = 'Mash 0.9';
  return mash;
}

// From http://baagoe.com/en/RandomMusings/javascript/
export function Alea() {
  return (function(args) {
    // Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
    let s0 = 0;
    let s1 = 0;
    let s2 = 0;
    let c = 1;

    if (!args.length) {
      args = [+new Date()];
    }
    let mash = Mash();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (let i = 0; i < args.length; i++) {
      s0 -= mash(args[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(args[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(args[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;

    const random = function() {
      const t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return (s2 = t - (c = t | 0));
    };
    random.uint32 = function() {
      return random() * 0x100000000; // 2^32
    };
    random.fract53 = function() {
      return random() + ((random() * 0x200000) | 0) * 1.1102230246251565e-16; // 2^-53
    };
    random.version = 'Alea 0.9';
    random.args = args;
    random.state = function(newstate) {
      if (newstate) {
        s0 = newstate[0];
        s1 = newstate[1];
        s2 = newstate[2];
        c = newstate[3];
      }
      return [s0, s1, s2, c];
    };
    return random;
  })(Array.prototype.slice.call(arguments));
}

// export function Random(n) {
//   return seed.uint32() % n;
// }
