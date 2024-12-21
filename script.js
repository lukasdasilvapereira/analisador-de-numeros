let campo = document.getElementById('start');
let botao = document.getElementById('botao');
let lista = document.getElementById('iselect');
let res = document.getElementById('res');
let valores = []

function contar() {

    if(isnumero(campo.value) && !inlista(campo.value)) {
        alert('Tudo ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

}

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}