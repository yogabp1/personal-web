// VARIABLE

// Sring -> "" or '' or ``
// Number -> 25 or 100 or dst

// Boolean -> true or false
// const isLampOn = true

// console.log(isLampOn)

// Object -> key and value
// const orang1= {
//     nama: "Yoga",
//     umur: 25,
//     alamt: "Trenggalek"
// }

// const orang2= {
//     nama: "Budi",
//     umur: 26,
//     alamt: "Surabaya"
// }

// console.log(orang1, orang2)

// Array -> Sekumpulan data
// const orang1= {
//     nama: "Yoga",
//     umur: 25,
//     alamt: "Trenggalek"
// }

// const orang2= {
//     nama: "Budi",
//     umur: 26,
//     alamt: "Surabaya"
// }

// const orang3= {
//     nama: "Setya",
//     umur: 27,
//     alamt: "Jogja"
// }

// const sirkel = [orang1, orang2, orang3]

// console.log (sirkel[2])

// const person = {
//     name: "Yoga",
//     age: 26,
//     education: [
//         {
//             name: "TK X",
//             duration: 2,
//         },
//         {
//             name: "SD Y",
//             duration: 6,
//         },
//         {
//             name: "SMK Z",
//             duration: 3,
//         },
//     ],
// };

// console.log(person.education[2])

// OPERATOR ->
// let angka1 = 7;
// let angka2 = 15;

// console.log(angka1 + angka2)
// console.log(angka1 - angka2)
// console.log(angka1 * angka2)
// console.log(angka1 / angka2)
// console.log(angka1 % angka2)

// CONDITION ->
// const isHandsome = true

// if(isHandsome == true) {
//     console.log("Dia Ganteng!")
// } else {
//     console.log("Dia Jelek!")
// }

// CONDITION : CASE NILAI KELULUSAN SEKOLAH
// const nilaiYoga = 90
// const nilaiBudi = 80
// const nilaiSetya = 70

// const SyaratLulus = 80

// if(nilaiBudi >= SyaratLulus) {
//     console.log("Lulus")
// } else {
//     console.log("Tidak Lulus")
// }

// LOOPING
// for loop -> udah tau batasnya
// for(let index = 0; index < 100; index++) {
//     if(index % 2 == 0) {
//         console.log(index)
//     }
// }

// while loop -> belum tau batasnya
// do while loop -> eksekusi satu kali dulu baru looping

// FUNCTION
function makeCoffee(merk, stock) {
  console.log(`Kita mau buat kopi ${merk}`);
  if (stock == 0) {
    console.log(`Maaf, kopi ${merk} habis!`)
  } else {
  boilWater()
  putCoffee()
  purWater()
  }
}

function boilWater() {
  console.log("Panaskan air");
}

function putCoffee() {
  console.log("Taruh kopi dalam gelas");
}

function purWater() {
  console.log("Tuangkan air panas ke dalam gelas");
}

makeCoffee("Kapal Api", 0);
