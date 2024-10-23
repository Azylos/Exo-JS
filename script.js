function change(){
    document.getElementById('btn').innerHTML = document.getElementById('text').value
    document.getElementById('text').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('text').addEventListener('input', function() {
        document.getElementById('btn').innerHTML = this.value;
    });
});
