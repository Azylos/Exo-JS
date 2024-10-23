let p = document.getElementById('text').innerHTML;
let btn = document.getElementById('btn').innerHTML;
console.log(p);
function change(){
    document.getElementById('btn').innerHTML = p
    document.getElementById('text').innerHTML = '';
}