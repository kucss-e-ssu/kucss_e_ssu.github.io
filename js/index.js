About = document.querySelector('#About');
What = document.querySelector('#What');
How = document.querySelector('#How');
SDGS = document.querySelector('#SDGS');
Com = document.querySelector('#Com');

iframe = document.querySelector('#iframe');

About.addEventListener('click', function() {
    iframe.src = 'asset/about.html';
});

What.addEventListener('click', function() {
    iframe.src = 'asset/pollution.html';
});

How.addEventListener('click', function() {
  iframe.src = 'asset/solve.html';
});

SDGS.addEventListener('click', function() {
  iframe.src = 'asset/sdgs.html';
});

Com.addEventListener('click', function() {
  iframe.src = 'asset/com.html';
});