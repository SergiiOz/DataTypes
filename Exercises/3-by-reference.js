//'use strict';

const inc = (obj) => {
  if(typeof obj === 'object') {
    obj.n += 1;
  }
}

module.exports = { inc };
