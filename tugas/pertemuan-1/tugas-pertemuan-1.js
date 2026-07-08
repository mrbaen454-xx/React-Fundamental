// 1.
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "23110001",
  prodi: "Teknik Informatasi",
  semester: 4,
  nilai: [85, 90, 78, 88],
};


// 2.
let semester = mahasiswa.semester;
const { nama, nim, prodi, nilai } = mahasiswa;


// 3.
const hitungRataRata = (arrNilai) => {
  const total = arrNilai.reduce((acc, curr) => acc + curr, 0);
  return total / arrNilai.length;
};

const rataRata = hitungRataRata(nilai);


// 4.
console.log(`===== DATA MAHASISWA =====`);
console.log(`Nama      : ${nama}`);
console.log(`NIM       : ${nim}`);
console.log(`Prodi     : ${prodi}`);
console.log(`Semester  : ${semester}`);
console.log(`Nilai     : ${nilai.join(", ")}`);
console.log(`Rata-rata : ${rataRata.toFixed(2)}`);

// 5.
const mahasiswaAktif = {
  ...mahasiswa,
  semester,
  status: "Aktif",
};

console.log(`\n===== OBJECT BARU (dengan status) =====`);
console.log(mahasiswaAktif);

console.log(`\n===== OBJECT ASLI (tidak berubah) =====`);
console.log(mahasiswa);


// 6.
const hitungTotalNilai = (...semuaNilai) => {
  return semuaNilai.reduce((acc, curr) => acc + curr, 0);
};

const totalNilai = hitungTotalNilai(...nilai);

console.log(`\n===== TOTAL NILAI (Rest Operator) =====`);
console.log(`Total seluruh nilai ${nama} adalah: ${totalNilai}`);


