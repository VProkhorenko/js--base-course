function counter(str, n) {
    var htmlEl = document.querySelector(str);
    htmlEl.innerHTML = parseInt(htmlEl.innerHTML)+ n;
}


document.getElementById('s1minus').addEventListener('click', function () {
    counter('.s1', -1);
});

document.getElementById('s1plus').addEventListener('click', function () {
    counter('.s1', 1);
});

document.getElementById('s2minus').addEventListener('click', function () {
    counter('.s2', -1);
});

document.getElementById('s2plus').addEventListener('click', function () {
    counter('.s2', 1);
});
