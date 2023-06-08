const nama = document.getElementById('nama');
const date = document.getElementById('tanggal-lahir');
const pesan = document.getElementById('pesan');
const button = document.getElementById('button');
const nama2 = document.getElementById('nama2');
const date2 = document.getElementById('tanggal-lahir2');
const pesan2 = document.getElementById('pesan2');

function show(input){
    nama2.innerText(input);
}

button.addEventListener('click',()=> {
    show(nama.value);
})
