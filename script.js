let angka = '';
let operator = '';

function tambahAngka(angkaTambahan) {
    angka += angkaTambahan;
    document.getElementById('layar').value = angka;
}

function tambahOperator(operatorTambahan) {
    if (angka !== '') {
        operator = operatorTambahan;
        angka += operator;
        document.getElementById('layar').value = angka;
    }
}

function hasil() {
    // Mengabaikan perhitungan dan langsung menampilkan "I Love You"
    document.getElementById('layar').value = ' I Love You ';
    // Reset angka dan operator untuk penggunaan selanjutnya
    angka = '';
    operator = '';
}

function hapus() {
    angka = '';
    operator = '';
    document.getElementById('layar').value = '';
}