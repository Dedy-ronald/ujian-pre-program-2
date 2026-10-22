// ==========================================================================
// SOAL JS-1: VARIABEL, TIPE DATA & OPERATOR
// ==========================================================================

// 1. Membuat variabel untuk menyimpan data toko
const namaToko = "Varsity Kalcer";
const tahunBerdiri = 2023;
const sedangBuka = true;
const alamat = null;

// 2. Menampilkan tipe data masing-masing menggunakan typeof di console
console.log("--- Cek Tipe Data ---");
console.log("Tipe data namaToko:", typeof namaToko);         // Output: string
console.log("Tipe data tahunBerdiri:", typeof tahunBerdiri); // Output: number
console.log("Tipe data sedangBuka:", typeof sedangBuka);     // Output: boolean
console.log("Tipe data alamat:", typeof alamat);             // Output: object (null di JS bertipe object)

// 3. Menghitung umur toko menggunakan operator aritmatika
const tahunSekarang = 2026;
const umurToko = tahunSekarang - tahunBerdiri;

// 4. Menampilkan teks menggunakan Template Literal
console.log("\n--- Output Template Literal ---");
const pesanToko = `Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`;

// Menampilkan hasil ke console browser
console.log(pesanToko);

window.onload = function() {
alert(pesanToko);
};

// ==========================================================================
// SOAL JS-2: PERCABANGAN / CONTROL FLOW (SWITCH-CASE)
// ==========================================================================

/**
 * Fungsi untuk memeriksa deskripsi status pesanan berdasarkan kode angka.
 * @param {number} statusKode - Kode angka status pesanan (1-5)
 * @returns {string} Deskripsi status pesanan
 */
function cekStatusPesanan(statusKode) {
    let deskripsi;

    // Menggunakan struktur switch-case sesuai instruksi soal
    switch (statusKode) {
        case 1:
            deskripsi = "Menunggu Pembayaran";
            break;
        case 2:
            deskripsi = "Pembayaran Dikonfirmasi";
            break;
        case 3:
            deskripsi = "Sedang Dikemas";
            break;
        case 4:
            deskripsi = "Sedang Dikirim";
            break;
        case 5:
            deskripsi = "Pesanan Diterima";
            break;
        default:
            deskripsi = "Kode Status Tidak Valid";
            break;
    }

    return deskripsi;
}

// --- Memanggil fungsi dengan beberapa kode untuk pengujian ---
console.log("\n--- Uji Coba Fungsi cekStatusPesanan() ---");

// Uji coba kode valid (1-5)
console.log(`Kode 1 -> Status: ${cekStatusPesanan(1)}`);
console.log(`Kode 3 -> Status: ${cekStatusPesanan(3)}`);
console.log(`Kode 5 -> Status: ${cekStatusPesanan(5)}`);

// Uji coba kode tidak valid (selain 1-5)
console.log(`Kode 9 -> Status: ${cekStatusPesanan(9)}`);
console.log(`Kode 0 -> Status: ${cekStatusPesanan(0)}`);

// ==========================================================================
// SOAL JS-3: PERULANGAN / LOOPING
// ==========================================================================

// Membuat array dasar berisi 10 harga produk sesuai instruksi
const daftarHarga =(15000000, 1099000, 850000,450000, 450000, 1650000, 250000, 350000);

// --------------------------------------------------------------------------
// a) Menggunakan FOR LOOP untuk menghitung total dan rata-rata harga
// --------------------------------------------------------------------------
console.log("\n--- Bagian A: For Loop (Total & Rata-rata) ---");

let totalHarga = 0;

for (let i = 0; i < daftarHarga.length; i++) {
    totalHarga += daftarHarga[i]; // Menambahkan setiap elemen ke variabel total
}

const rataRataHarga = totalHarga / daftarHarga.length;

console.log(`Total Harga Seluruh Produk: Rp ${totalHarga}`);
console.log(`Rata-rata Harga Produk    : Rp ${rataRataHarga}`);


// --------------------------------------------------------------------------
// b) Menggunakan WHILE LOOP untuk mencari produk pertama di atas 500.000
// --------------------------------------------------------------------------
console.log("\n--- Bagian B: While Loop (Harga > 500.000 Pertama) ---");

let index = 0;
let ditemukan = false;

// Loop berjalan selama indeks belum habis dan produk belum ditemukan
while (index < daftarHarga.length && !ditemukan) {
    if (daftarHarga[index] > 500000) {
        console.log(`Produk ditemukan pada Indeks ke-${index} dengan Harga: Rp ${daftarHarga[index]}`);
        ditemukan = true; // Mengubah flag untuk menghentikan perulangan
    }
    index++; // Menaikkan nilai indeks di setiap perulangan
}


// --------------------------------------------------------------------------
// c) Menggunakan FOR...OF untuk menampilkan semua harga di bawah 100.000
// --------------------------------------------------------------------------
console.log("\n--- Bagian C: For...of (Harga < 100.000) ---");
console.log("Daftar harga produk di bawah Rp 100.000:");

for (const harga of daftarHarga) {
    if (harga < 100000) {
        console.log(`- Rp ${harga}`);
    }
}

// ==========================================================================
// SOAL JS-4: ARRAY & ARRAY METHOD
// ==========================================================================

// Membuat array awal berisi 8 nama produk fashion & streetwear kalcer
let daftarProduk = [
    "Varsity Team Liquid", 
    "Varsity Irishkelly", 
    "Varsity Bigetron", 
    "Sepatu Sneakers", 
    "Hoodie Blackout", 
    "Topi Snapback", 
    "Kaos Oversize", 
    "Celana Cargo"
];
console.log("\n--- Array Awal ---");
console.log(daftarProduk);

// a) Tambahkan 2 produk baru di akhir array (push)
daftarProduk.push("Jaket Coach", "Bomber Jacket");
console.log("\na) Setelah push 2 produk:");
console.log(daftarProduk);

// b) Tambahkan 1 produk di awal array (unshift)
daftarProduk.unshift("Sandal Slide");
console.log("\nb) Setelah unshift 1 produk:");
console.log(daftarProduk);

// c) Hapus produk terakhir (pop) dan tampilkan produk yang dihapus
const produkDihapusBelakang = daftarProduk.pop();
console.log("\nc) Efek metode pop():");
console.log("Produk yang dihapus dari belakang:", produkDihapusBelakang);
console.log("Isi array sekarang:", daftarProduk);

// d) Hapus produk pertama (shift) dan tampilkan produk yang dihapus
const produkDihapusDepan = daftarProduk.shift();
console.log("\nd) Efek metode shift():");
console.log("Produk yang dihapus dari depan:", produkDihapusDepan);
console.log("Isi array sekarang:", daftarProduk);

// e) Cek apakah "Laptop" ada di dalam array (includes)
const adaLaptop = daftarProduk.includes("Laptop");
console.log("\(\ne\)) Cek eksistensi 'Laptop' dengan includes():");
console.log(`Apakah ada Laptop di toko kalcer? ${adaLaptop ? "Ada" : "Nggak ada"}`);

// f) Cari posisi indeks "Sepatu" di array (indexOf)
// Catatan: Karena nama item di array awal adalah "Sepatu Sneakers", kita cari item tersebut
const indeksSepatu = daftarProduk.indexOf("Sepatu Sneakers");
console.log("\nf) Cari indeks 'Sepatu Sneakers' dengan indexOf():");
console.log(`Posisinya ada di indeks ke: ${indeksSepatu}`);

// g) Ambil 3 produk dari indeks ke-2 tanpa mengubah array asli (slice)
// Parameter slice(start, end) -> dari indeks 2 sampai sebelum indeks 5 (yaitu indeks 2, 3, 4)
const potonganProduk = daftarProduk.slice(2, 5);
console.log("\ng) Hasil potongan slice(2, 5):");
console.log("Array potongan baru:", potonganProduk);
console.log("Array asli (tetap utuh):", daftarProduk);

// h) Sisipkan produk baru "Mouse Wireless" di posisi indeks ke-3 (splice)
// Parameter splice(index_mulai, jumlah_dihapus, item_baru)
daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("\nh) Setelah menyisipkan 'Mouse Wireless' di indeks ke-3 dengan splice():");
console.log(daftarProduk);

// i) Tampilkan jumlah total produk saat ini (.length)
const totalProduk = daftarProduk.length;
console.log("\(\ni\)) Cek properti .length:");
console.log(`Jumlah total produk di dalam array saat ini: ${totalProduk} item`);


// ==========================================================================
// SOAL JS-5: FUNCTION
// ==========================================================================

// a) Function Declaration: hitungDiskon
function hitungDiskon(harga, persen) {
    const potongan = harga * (persen / 100);
    return harga - potongan;
}

// b) Function Expression: hitungPPN (dengan Default Parameter tarif = 0.11 atau 11%)
const hitungPPN = function(harga, tarif = 0.11) {
    const pajak = harga * tarif;
    return harga + pajak;
};

// c) Arrow Function: hitungOngkir berdasarkan kondisi jarak
const hitungOngkir = (jarak) => {
    if (jarak >= 0 && jarak <= 10) {
        return 10000;
    } else if (jarak > 10 && jarak <= 25) {
        return 25000;
    } else if (jarak > 25) {
        return 50000;
    } else {
        return 0; // Jarak tidak valid/negatif
    }
};

// d) Arrow Function Ringkas (Shorthand / One-Liner): kuadrat
const kuadrat = x => x * x;


// e) Menggabungkan fungsi (a, b, c) untuk menghitung total belanja
console.log("\n--- Uji Coba Soal JS-5 (Function) ---");

// Simulasi Data Belanja Modis Varsity
const hargaAwal = 1000000; // Rp 1.000.000
const diskonPersen = 10;   // 10%
const jarakKirim = 15;     // 15 km

// Kalkulasi bertingkat sesuai rumus soal
const hargaSetelahDiskon = hitungDiskon(hargaAwal, diskonPersen);
const hargaSetelahPPN = hitungPPN(hargaSetelahDiskon);
const biayaOngkir = hitungOngkir(jarakKirim);

const totalBelanja = hargaSetelahPPN + biayaOngkir;

// Menampilkan hasil kalkulasi ke console
console.log(`Harga Awal Produk : Rp ${hargaAwal}`);
console.log(`Diskon            : ${diskonPersen}% (Menjadi Rp ${hargaSetelahDiskon})`);
console.log(`Harga + PPN 11%   : Rp ${hargaSetelahPPN}`);
console.log(`Ongkos Kirim (15km): Rp ${biayaOngkir}`);
console.log(`-----------------------------------`);
console.log(`TOTAL BELANJA     : Rp ${totalBelanja}`);

// Uji coba arrow fungsi ringkas kuadrat
console.log(`Hasil kuadrat dari 5 adalah: ${kuadrat(5)}`);

// ==========================================================================
// SOAL JS-6: OBJECT & OBJECT METHOD
// ==========================================================================

console.log("\n--- Uji Coba Soal JS-6 (Object & Method) ---");

// Membuat object dasar produkUnggulan
let produkUnggulan = {
    nama: "Jaket Varsity IRISHKELLY Triumphant",
    kategori: "Streetwear",
    harga: 1099000,
    stok: 5,
    rating: 4.9,
    
    // i) Membuat method tampilkanInfo() menggunakan 'this'
    tampilkanInfo: function() {
        console.log(`[INFO PRODUK] ${this.nama} | Kategori: ${this.kategori} | Harga: Rp ${this.harga} | Stok: ${this.stok} Pcs`);
    }
};

// a) Akses properti "nama" menggunakan dot notation
console.log("a) Nama Produk (Dot Notation):", produkUnggulan.nama);

// b) Akses properti "harga" menggunakan bracket notation dengan bantuan variabel
const propertiHarga = "harga";
console.log("b) Harga Produk (Bracket Notation):", produkUnggulan[propertiHarga]);

// c) Tambahkan properti baru "diskon" (boolean)
produkUnggulan.diskon = true;
console.log("c) Setelah properti 'diskon' ditambahkan:", produkUnggulan);

// d) Hapus properti "rating" menggunakan operator delete
delete produkUnggulan.rating;
console.log("d) Setelah properti 'rating' dihapus:", produkUnggulan);

// e) Cek apakah properti "stok" ada di dalam object menggunakan operator "in"
const apakahAdaStok = "stok" in produkUnggulan;
console.log("e) Apakah properti 'stok' ada di dalam object?", apakahAdaStok);

// f) Iterasi seluruh properti menggunakan perulangan for...in
console.log("f) Iterasi properti menggunakan for...in:");
for (let properti in produkUnggulan) {
    // Kita lewati pencetakan jika properti bertipe fungsi agar outputnya rapi berupa teks saja
    if (typeof produkUnggulan[properti] !== "function") {
        console.log(`   - ${properti}: ${produkUnggulan[properti]}`);
    }
}

// g) Tampilkan semua key (nama properti) menggunakan Object.keys()
const semuaKey = Object.keys(produkUnggulan);
console.log("g) Daftar semua Key dalam object:", semuaKey);

// h) Tampilkan semua value (isi properti) menggunakan Object.values()
const semuaValue = Object.values(produkUnggulan);
console.log("h) Daftar semua Value dalam object:", semuaValue);

// i) Menjalankan method tampilkanInfo() yang sudah dibuat di dalam object produkUnggulan
console.log("i) Menjalankan Object Method tampilkanInfo():");
produkUnggulan.tampilkanInfo();

// ==========================================================================
// SOAL JS-7: ITERABLE & NON-ITERABLE
// ==========================================================================

console.log("\n--- Uji Coba Soal JS-7 (Iterable & Non-Iterable) ---");

// a) Mengiterasi array menggunakan for...of (Iterable)
console.log("a) Iterasi Array Warna:");
const warna = ["Hitam", "Putih", "Ungu Neon", "Abu-abu"];

for (const w of warna) {
    console.log(`   - Warna: ${w}`);
}

// b) Mengiterasi object menggunakan for...in (Non-Iterable)
console.log("\nb) Iterasi Object Mahasiswa:");
const mahasiswa = {
    nama: "Budi Santoso",
    nim: "202612345",
    jurusan: "Teknik Informatika"
};

for (const key in mahasiswa) {
    console.log(`   - Key [${key}]: ${mahasiswa[key]}`);
}

// c) Mengiterasi string karakter per karakter menggunakan for...of (Iterable)
console.log("\nc) Iterasi String 'JavaScript':");
const teks = "JavaScript";

for (const karakter of teks) {
    console.log(`   - Karakter: ${karakter}`);
}

// ==========================================================================
// SOAL JS-8: STRING & NUMBER BUILT-IN FUNCTION
// ==========================================================================

console.log("\n--- Uji Coba Soal JS-8 (String & Number Built-in) ---");

// Variabel dasar yang diberikan soal
const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "250000.75";
const kalimat = "Selamat datang di Toko Elektronik Online";

// a) Bersihkan dan normalisasi email (trim + toLowerCase)
const emailNormal = inputEmail.trim().toLowerCase();
console.log(`a) Email Normalisasi: "${emailNormal}"`);

// b) Cek apakah email mengandung "@gmail" (includes)
const adaGmail = emailNormal.includes("@gmail");
console.log(`b) Mengandung '@gmail'? ${adaGmail}`);

// c) Cek apakah email diawali "budi" setelah dinormalisasi (startsWith)
const diawaliBudi = emailNormal.startsWith("budi");
console.log(`c) Diawali 'budi'? ${diawaliBudi}`);

// d) Potong domain dari email (menggunakan indexOf dan slice)
const posisiAt = emailNormal.indexOf("@");
const domainEmail = emailNormal.slice(posisiAt + 1); // +1 agar karakter '@' tidak ikut terpotong
console.log(`d) Domain Email saja: "${domainEmail}"`);

// e) Pecah kalimat menjadi array kata-kata (split)
const arrayKata = kalimat.split(" ");
console.log("e) Hasil pecah kalimat (split):", arrayKata);

// f) Ganti kata "Elektronik" menjadi "Digital" (replace)
const kalimatBaru = kalimat.replace("Elektronik", "Digital");
console.log(`f) Kalimat setelah di-replace: "${kalimatBaru}"`);

// g) Konversi inputHarga ke Number menggunakan parseFloat
const hargaNumber = parseFloat(inputHarga);
console.log(`g) Hasil parseFloat:`, hargaNumber, `(Tipe: ${typeof hargaNumber})`);

// h) Tampilkan harga dengan 2 angka desimal (toFixed)
const hargaFixed = hargaNumber.toFixed(2);
console.log(`h) Hasil toFixed(2): "${hargaFixed}"`);

// i) Tampilkan panjang kalimat (.length)
const panjangKalimat = kalimat.length;
console.log(`i) Panjang Kalimat: ${panjangKalimat} karakter`);

// ==========================================================================
// SOAL JS-9: SCOPE, HOISTING & CLOSURE
// ==========================================================================

console.log("\n--- Uji Coba Soal JS-9 (Scope, Hoisting & Closure) ---");

// --------------------------------------------------------------------------
// a) Demonstrasi Scope
// --------------------------------------------------------------------------
const variabelGlobal = "Gue Global (Bisa diakses di mana saja)";

function demoScope() {
    const variabelLocal = "Gue Local Fungsi (Cuma di dalam fungsi ini)";
    
    if (true) {
        let variabelBlock = "Gue Block Scope (Cuma hidup di dalam kurung kurawal IF)";
        console.log("   [Di dalam Block IF]:");
        console.log(`   - ${variabelGlobal}`);
        console.log(`   - ${variabelLocal}`);
        console.log(`   - ${variabelBlock}`);
    }
    
    console.log("   [Di luar Block IF tapi dalam Fungsi]:");
    console.log(`   - ${variabelGlobal}`);
    console.log(`   - ${variabelLocal}`);
    // console.log(variabelBlock); // ERROR! Jika baris ini aktif, variabelBlock tidak bisa diakses dari luar block-nya sendiri.
}
demoScope();

// --------------------------------------------------------------------------
// b) Demonstrasi Hoisting
// --------------------------------------------------------------------------
console.log("\nb) Uji Coba Hoisting:");

// 1. Function declaration berhasil dipanggil sebelum ditulis di kode
sapaToko(); 

function sapaToko() {
    console.log("   - Halo dari Function Declaration! (Hoisting Sukses)");
}

// 2. Akses variabel var sebelum deklarasi menghasilkan nilai undefined
console.log("   - Nilai variabelVar sebelum deklarasi:", variabelVar); 
var variabelVar = "Kalcer Wear";

// 3. Akses variabel let sebelum deklarasi menghasilkan ReferenceError
// REASONS / PENJELASAN: 
// Variabel bertipe 'let' (dan 'const') sebenarnya terkena hoisting, namun mereka masuk ke dalam 
// "Temporal Dead Zone" (TDZ). Variabel tidak boleh diakses sama sekali sampai baris kode deklarasinya 
// dieksekusi oleh mesin JavaScript. Jika dipaksa diakses, aplikasi akan langsung mogok (crash).
//
// CONTOH ERROR (jika komentar dibuka):
// console.log(variabelLet); // ReferenceError: Cannot access 'variabelLet' before initialization
let variabelLet = "Gen-Z";


// --------------------------------------------------------------------------
// c) Buat Closure — Fungsi buatKeranjang()
// --------------------------------------------------------------------------
function buatKeranjang() {
    // Variabel lokal privat yang terbungkus oleh closure
    let items = [];
    let totalHarga = 0;

    // Mengembalikan object berisi sekumpulan method akses
    return {
        tambahItem: function(nama, harga) {
            items.push({ nama, harga });
            totalHarga += harga;
            console.log(`Added: ${nama} (Rp ${harga})`);
        },
        hapusItem: function(nama) {
            // Mencari indeks item berdasarkan nama
            const indexItem = items.findIndex(item => item.nama === nama);
            if (indexItem !== -1) {
                totalHarga -= items[indexItem].harga; // kurangi total harga
                items.splice(indexItem, 1);           // hapus dari array
                console.log(`Removed: ${nama}`);
            } else {
                console.log(`Item "${nama}" tidak ditemukan.`);
            }
        },
        lihatKeranjang: function() {
            return {
                daftarBarang: items,
                total: totalHarga
            };
        }
    };
}

console.log("\nc) Pengujian Independensi Instance Closure (Keranjang):");

// Membuat dua instance keranjang yang terpisah
const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();

console.log("--- Aktivitas Keranjang 1 ---");
keranjang1.tambahItem("Varsity Irishkelly", 1099000);
keranjang1.tambahItem("Topi Snapback", 150000);
console.log("Isi Keranjang 1:", keranjang1.lihatKeranjang());

console.log("\n--- Aktivitas Keranjang 2 ---");
keranjang2.tambahItem("VARSITY BIGETRON X MEMPHIS", 850000);
console.log("Isi Keranjang 2:", keranjang2.lihatKeranjang());

// BUKTI INDEPENDENSI DATA: 
// Saat kita menghapus barang di keranjang 1, keranjang 2 sama sekali tidak terpengaruh
console.log("\n--- Pembuktian Independensi Setelah Hapus Barang ---");
keranjang1.hapusItem("Topi Snapback");
console.log("Isi Akhir Keranjang 1:", keranjang1.lihatKeranjang());
console.log("Isi Akhir Keranjang 2 (Tetap Utuh):", keranjang2.lihatKeranjang());


// ==========================================================================
// SOAL JS-10: DATE OBJECT
// ==========================================================================

console.log("\n--- Uji Coba Soal JS-10 (Date Object) ---");

// a) Buat Date object saat ini dan tampilkan format lokal Indonesia
const waktuSekarang = new Date();

const opsiFormatLengkap = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const tanggalLengkapIndo = waktuSekarang.toLocaleDateString('id-ID', opsiFormatLengkap);

console.log(`a) Tanggal Lengkap Format Hari Ini: "${tanggalLengkapIndo}"`);


// b) Hitung sisa hari menuju Tahun Baru (1 Januari tahun depan)
const tahunDepan = waktuSekarang.getFullYear() + 1;
const tahunBaruTarget = new Date(tahunDepan, 0, 1); // Bulan 0 = Januari, Tanggal 1

// Menghitung selisih waktu dalam satuan milidetik
const selisihMilidetikTahunBaru = tahunBaruTarget - waktuSekarang;

// Konversi milidetik ke hitungan hari (1 hari = 24 jam * 60 menit * 60 detik * 1000 milidetik)
const sisaHariTahunBaru = Math.ceil(selisihMilidetikTahunBaru / (1000 * 60 * 60 * 24));

console.log(`b) Hitung Sisa Hari Menuju Tahun Baru 1 Januari ${tahunDepan}: ${sisaHariTahunBaru} hari lagi`);


// c) Fungsi formatTanggalIndonesia(date) mengembalikan format "DD/MM/YYYY"
function formatTanggalIndonesia(dateObject) {
    // Gunakan padStart(2, '0') agar jika angka satuan (misal 5) otomatis diformat menjadi dua digit (05)
    const tanggal = String(dateObject.getDate()).padStart(2, '0');
    const bulan = String(dateObject.getMonth() + 1).padStart(2, '0'); // Ditambah 1 karena indeks bulan mulai dari 0
    const tahun = dateObject.getFullYear();
    
    return `${tanggal}/${bulan}/${tahun}`;
}

// Menguji fungsi formatTanggalIndonesia
const sampelTanggal = new Date();
console.log(`c) Hasil Fungsi formatTanggalIndonesia(): "${formatTanggalIndonesia(sampelTanggal)}"`);


// d) Menghitung umur dalam satuan hari berdasarkan tanggal lahir
// Contoh simulasi menggunakan tanggal lahir fiktif: 15 Juni 2005
const tanggalLahir = new Date(2005, 5, 15); // Bulan 5 = Juni dalam indeks JavaScript

const selisihMilidetikUmur = waktuSekarang - tanggalLahir;
const umurDalamHari = Math.floor(selisihMilidetikUmur / (1000 * 60 * 60 * 24));

console.log(`d) Umur dalam satuan Hari (Lahir: ${formatTanggalIndonesia(tanggalLahir)}): ${umurDalamHari} hari`);


// ==========================================================================
// SOAL JS-11: DESTRUCTURING, SPREAD & REST
// ==========================================================================

console.log("\n--- Uji Coba Soal JS-11 (Destructuring, Spread & Rest) ---");

// --------------------------------------------------------------------------
// a) Object Destructuring
// --------------------------------------------------------------------------
console.log("a) Hasil Pengujian Object Destructuring:");

const pesanan = {
    idPesanan: "ORD-001",
    pelanggan: "Budi",
    totalHarga: 750000,
    statusBayar: true,
    alamatKirim: "Jl. Merdeka No. 10"
};

// - Destructure properti dasar & rename properti statusBayar -> sudahBayar & set default value untuk kurirPengiriman
const { idPesanan, pelanggan, totalHarga, statusBayar: sudahBayar, kurirPengiriman = "JNE" } = pesanan;

console.log(`   - Ambil Nilai -> ID: ${idPesanan}, Nama: ${pelanggan}, Total: Rp ${totalHarga}`);
console.log(`   - Hasil Rename Properti -> sudahBayar: ${sudahBayar}`);
console.log(`   - Hasil Default Value   -> kurirPengiriman: "${kurirPengiriman}"`);

// - Destructure langsung di parameter fungsi cetakPesanan
function cetakPesanan({ idPesanan, pelanggan }) {
    console.log(`   - Fungsi Parameter -> Pesanan ${idPesanan} dibeli oleh pelanggan bernama ${pelanggan}`);
}
cetakPesanan(pesanan);


// --------------------------------------------------------------------------
// b) Array Destructuring
// --------------------------------------------------------------------------
console.log("\nb) Hasil Pengujian Array Destructuring:");

const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];

// - Mengambil nilai kesatu, kedua, melewatkan nilai ketiga menggunakan koma kosong, dan mengambil nilai keempat
const [longitude, latitude, , negara] = koordinat;
console.log(`   - Longitude: ${longitude}, Latitude: ${latitude}, Negara: "${negara}"`);

// - Menukar nilai dua variabel dengan cepat memanfaatkan array destructuring
let barangA = "Varsity Jacket";
let barangB = "Sneakers Shoes";
console.log(`   - Sebelum ditukar -> A: ${barangA}, B: ${barangB}`);

[barangA, barangB] = [barangB, barangA];
console.log(`   - Sesudah ditukar -> A: ${barangA}, B: ${barangB}`);


// --------------------------------------------------------------------------
// c) Spread Operator
// --------------------------------------------------------------------------
console.log("\nc) Hasil Pengujian Spread Operator:");

// 1. Menyalin array secara independen (bukan sekadar referensi alamat memori)
const arrayProdukAwal = ["Kaos", "Topi"];
const salinanArrayProduk = [...arrayProdukAwal];
salinanArrayProduk.push("Hoodie"); // Modifikasi salinan tidak mengganggu array awal
console.log("   - Array Awal :", arrayProdukAwal);
console.log("   - Copy Array :", salinanArrayProduk);

// 2. Menggabungkan 2 array dengan menyelipkan elemen baru di tengah-tengah
const batchA = ["Varsity Blue", "Varsity Red"];
const batchB = ["Varsity Black", "Varsity Grey"];
const gabunganBatch = [...batchA, "Varsity Purple (Eksklusif)", ...batchB];
console.log("   - Gabungan Array + Sisipan Tengah:", gabunganBatch);

// 3. Menyalin object sekaligus menimpa/update salah satu nilai propertinya
const produkHargaLama = { nama: "Varsity Irishkelly", harga: 1000000, stok: 10 };
const produkHargaBaru = { ...produkHargaLama, harga: 1099000 };
console.log("   - Object Setelah Update Harga via Spread:", produkHargaBaru);

// 4. Menggunakan spread operator untuk menemukan nilai maksimum angka (Math.max)
const kumpulanAngkaHarga =;
const hargaTertinggi = Math.max(...kumpulanAngkaHarga);
console.log(`   - Nilai Maksimum Array Angka: Rp ${hargaTertinggi}`);


// --------------------------------------------------------------------------
// d) Rest Parameter
// --------------------------------------------------------------------------
console.log("\nd) Hasil Pengujian Rest Parameter:");

// 1. Fungsi hitungRataRata menerima kuantitas parameter dinamis
function hitungRataRata(...angka) {
    if (angka.length === 0) return 0;
    const total = angka.reduce((acc, curr) => acc + curr, 0);
    return total / angka.length;
}
console.log(`   - Rata-rata dari (10, 20, 30, 40): ${hitungRataRata(10, 20, 30, 40)}`);

// 2. Fungsi buatPesanan menangkap argumen pertama dan sisa argumen ke dalam array
function buatPesanan(namaPemesan, ...daftarMenu) {
    console.log(`   - Pemesan Atas Nama: "${namaPemesan}"`);
    console.log(`     Daftar menu pakaian yang dipesan (${daftarMenu.length} item):`);
    daftarMenu.forEach((menu, index) => {
        console.log(`     ${index + 1}. ${menu}`);
    });
}
buatPesanan("Ahmad Gen-Z", "Varsity Team Liquid", "Sepatu Sneakers", "Topi Snapback");
