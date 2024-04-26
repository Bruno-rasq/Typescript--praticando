import { ES6_log } from './exports';
import ES6_log_Default from './exports';
import { pi, phi, absolute } from './exports';

ES6_log('importando com ES6');
ES6_log_Default('importando com ES6');

console.log(pi);
const absPhi = absolute(phi);
ES6_log(absPhi);