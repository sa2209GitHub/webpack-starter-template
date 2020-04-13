import * as $ from 'jquery';
import Post from '@/models/Post';
import Logo from '@/assets/logo.png';

import '@/styles/css/style.css';
import '@/styles/less/style.less';

const post = new Post('TITLE', Logo);

$('pre').html(post.toString());

// console.log('Post to string:', post.toString());

// import json from './assets/json-test.json';
// console.log('JSON:', json);

// import csv from './assets/csv-test.csv';
// console.log('CSV:', csv);
