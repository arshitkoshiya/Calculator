function AK(num) {
    let op = document.getElementById('screen');
    op.value += num;
}

function clr() {
    let op = document.getElementById('screen');
    op.value = "";
}

function equal() {
    let op = document.getElementById('screen');
    op.value = op.value.replace('%', '/100*');
    op.value = eval(op.value);

}