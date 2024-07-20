import moment from 'moment';
import { Owner } from './Owner.js';
import { Possession } from './Possession.js';
import { Patrimony } from './Patrimony.js';

let birthday = moment(new Date(), 'YYYY-MM-DD');
var owner1 = new Owner(1, 'user', 'USER', birthday);
console.log(owner1);

var possess1 = new Possession(
    1,
    600_000, 
    'current account',
    'money',
    '2024-05-13',
    null,
    0
);

var possess2 = new Possession (
    2,
    400_000,
    'espèce',
    'money',
    '2024-05-13',
    null,
    0
);

var possess3 = new Possession (
    3,
    200_000,
    'savings account',
    'money',
    '2024-05-13',
    null,
    1
);

var possess4 = new Possession (
    4,
    2_000_000,
    'laptop',
    'material',
    '2024-05-13',
    null,
    -10
);

var possess5 = new Possession (
    5,
    1_000_000,
    'clothes',
    'material',
    '2024-01-01',
    null,
    -20
);

var possess6 = new Possession (
    6,
    500_000,
    'train de vivre',
    'spending',
    '2024-05-13',
    null,
    0
);

var list = [possess1, possess2, possess3, possess4, possess5, possess6];
let tTime = new Date('2024-06-26')
let pat = new Patrimony(1, 1, new Date('2024-05-13'), tTime, list);