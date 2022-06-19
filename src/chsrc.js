var select = document.querySelector('select');
var piro = document.getElementById("piro");
var crio = document.getElementById("crio");
var gidro = document.getElementById("gidro");
var electro = document.getElementById("electro");
var geo = document.getElementById("geo");
var anemo = document.getElementById("anemo");
var btn = document.querySelector('button');
var ggname = document.getElementById("gg");

btn.onclick = function() {
    location.reload();
}

select.addEventListener('change', setelm);

function setelm() {
    var choice = select.value;

    if (choice === 'piro') {
        while (gidro !== null) {
            gidro.parentNode.removeChild(gidro);
            gidro = document.getElementById("gidro");
        }
        while (crio !== null) {
            crio.parentNode.removeChild(crio);
            crio = document.getElementById("crio");
        }
        while (electro !== null) {
            electro.parentNode.removeChild(electro);
            electro = document.getElementById("electro");
        }
        while (geo !== null) {
            geo.parentNode.removeChild(geo);
            geo = document.getElementById("geo");
        }
        while (anemo !== null) {
            anemo.parentNode.removeChild(anemo);
            anemo = document.getElementById("anemo");
        }
    } else if (choice === 'crio') {
        while (gidro !== null) {
            gidro.parentNode.removeChild(gidro);
            gidro = document.getElementById("gidro");
        }
        while (piro !== null) {
            piro.parentNode.removeChild(piro);
            piro = document.getElementById("piro");
        }
        while (electro !== null) {
            electro.parentNode.removeChild(electro);
            electro = document.getElementById("electro");
        }
        while (geo !== null) {
            geo.parentNode.removeChild(geo);
            geo = document.getElementById("geo");
        }
        while (anemo !== null) {
            anemo.parentNode.removeChild(anemo);
            anemo = document.getElementById("anemo");
        }
    } else if (choice === 'gidro') {
        while (crio !== null) {
            crio.parentNode.removeChild(crio);
            crio = document.getElementById("crio");
        }
        while (piro !== null) {
            piro.parentNode.removeChild(piro);
            piro = document.getElementById("piro");
        }
        while (electro !== null) {
            electro.parentNode.removeChild(electro);
            electro = document.getElementById("electro");
        }
        while (geo !== null) {
            geo.parentNode.removeChild(geo);
            geo = document.getElementById("geo");
        }
        while (anemo !== null) {
            anemo.parentNode.removeChild(anemo);
            anemo = document.getElementById("anemo");
        }
    } else if (choice === 'electro') {
        while (crio !== null) {
            crio.parentNode.removeChild(crio);
            crio = document.getElementById("crio");
        }
        while (piro !== null) {
            piro.parentNode.removeChild(piro);
            piro = document.getElementById("piro");
        }
        while (gidro !== null) {
            gidro.parentNode.removeChild(gidro);
            gidro = document.getElementById("gidro");
        }
        while (geo !== null) {
            geo.parentNode.removeChild(geo);
            geo = document.getElementById("geo");
        }
        while (anemo !== null) {
            anemo.parentNode.removeChild(anemo);
            anemo = document.getElementById("anemo");
        }
    } else if (choice === 'geo') {
        while (crio !== null) {
            crio.parentNode.removeChild(crio);
            crio = document.getElementById("crio");
        }
        while (piro !== null) {
            piro.parentNode.removeChild(piro);
            piro = document.getElementById("piro");
        }
        while (gidro !== null) {
            gidro.parentNode.removeChild(gidro);
            gidro = document.getElementById("gidro");
        }
        while (electro !== null) {
            electro.parentNode.removeChild(electro);
            electro = document.getElementById("electro");
        }
        while (anemo !== null) {
            anemo.parentNode.removeChild(anemo);
            anemo = document.getElementById("anemo");
        }
    } else if (choice === 'anemo') {
        while (crio !== null) {
            crio.parentNode.removeChild(crio);
            crio = document.getElementById("crio");
        }
        while (piro !== null) {
            piro.parentNode.removeChild(piro);
            piro = document.getElementById("piro");
        }
        while (gidro !== null) {
            gidro.parentNode.removeChild(gidro);
            gidro = document.getElementById("gidro");
        }
        while (electro !== null) {
            electro.parentNode.removeChild(electro);
            electro = document.getElementById("electro");
        }
        while (geo !== null) {
            geo.parentNode.removeChild(geo);
            geo = document.getElementById("geo");
        }
    } else if (choice === 'all') {
        location.reload();
    }
}


    ggname.onmouseover = function() {
        if (ggname.value = 'Итер') {
            ggname.textContent = 'Люмин';
        } else if (ggname.value = 'Люмин') {
            ggname.textContent = 'Итер';
        }
    }
