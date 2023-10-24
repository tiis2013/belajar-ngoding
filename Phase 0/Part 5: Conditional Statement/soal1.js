//Part 5 Soal 1
let nama = ""
let peran = ""

if (nama == `` || nama == null) {    //nama kosong
    if (peran == '' | peran == null){   //nama dan peran kosong
        console.log("Lu niat main kagak sih?")
    }
    else { //nama tidak ada, tetapi peran diisi
        console.log("nama wajib diisi")
    }
}
else {  //nama ada
    if (peran == '' || peran == null){   //nama ada, peran kosong
        console.log("Pilih Peranmu untuk memulai game")
    }
    else {
        if (peran.toLowerCase() == "ksatria") { //Ksatria
            console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
        }
        else if (peran.toLowerCase() == "tabib"){   //Tabib
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
        }
        else if (peran.toLowerCase()== "penyihir"){ //Penyihir
            console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
        }
        else if (peran.toLowerCase() !== ''){   //Peran lainnya
            console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
        }
    }
}

/* Algoritma
Pertama, cek nama. Ada 2 kemungkinan, nama diisi dan nama tidak diisi.
Kedua, jika nama diisi, lanjut ke langkah berikutnya. Jika tidak, berikan pemberitahuan.
Ketiga, cek peran. Ada 3 kemungkinan, peran diisi dengan yang tersedia, peran diisi dengan yang tidak tersedia, dan peran tidak diisi.
Terakhir, jika peran yang diisi tersedia, berikan teks. Jika peran tidak tersedia, berikan teks yang berbeda. Jika tidak diisi maka berikan pemberitahuan.
*/