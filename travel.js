console.log('--Perusahaan Travel XYZ');
console.log('Tujuan------------Harga-----Kode Tujuan');
console.log('_______________________________________')
console.log('Kampung Lalang----500000--------1');
console.log('Binjai------------150000--------2');
console.log('Medan-------------400000--------3');
console.log('\n');

var readline = require('readline-sync')
var nm = readline.question('Masukan Nama Anda: ');
var kt= parseInt(readline.question('Masukan Kode Tujuan: '));
var jt = parseInt(readline.question('Masukan Jumlah Tiket: '));
var me = readline.question('Apakah Anda Member? [y/t]: ');
console.log('\n');


//harga tiket tujuan
var hargatiket;
switch (kt) {
	case 1: hargatiket = 500000; break; //kampung lalang
	case 2: hargatiket = 150000; break;	//binjai
	case 3: hargatiket = 400000; break;	//medan
	default: {
		console.log('kode tujuan yang anda masukkan salah');
		process.exit(1);
	}
}

//subtotal harga tiket
var subtotal = hargatiket*jt;

//keterangan member
var diskon;
if (me==('y'||'Y')) {
diskon = 0.10*subtotal;
} else if (me==('t'||'T')) {
diskon = 0;
}
//total harga yang dibayarkan 
total = subtotal-diskon;

//output
console.log('Harga Tiket: ' + hargatiket);
console.log('Sub Total: ' + subtotal);
console.log('Diskon: ' + diskon);
console.log('Total Bayar: ' + total);
