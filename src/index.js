import * as $ from 'jquery';
import Post from '@/models/Post';
import Logo from '@/assets/logo.png';
import '@/babel';
import '@/styles/css/style.css';
import '@/styles/less/style.less';
import '@/styles/sass/style.sass';
import '@/styles/scss/style.scss';

const post = new Post('TITLE', Logo);

$('pre').html(post.toString());

// console.log('Post to string:', post.toString());

// import json from './assets/json-test.json';
// console.log('JSON:', json);

// import csv from './assets/csv-test.csv';
// console.log('CSV:', csv);
