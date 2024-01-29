// js/dashboard_main.js
import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  // Add paragraphs and button to the page body using jQuery
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});

let count = 0;

function updateCounter() {
    count++;
    $( "#count" ).html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
