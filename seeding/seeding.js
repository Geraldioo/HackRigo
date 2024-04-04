require ("dotenv").config()
const  database  = require ("./config.js")
const users = [
    {
      "name": "Erigo T-Shirt Basic Olive White Unisex",
      "slug": "basic-olive-white-unisex",
      "description": "T-shirt yang cocok untuk dipadukan dengan berbagai jenis celana. Pilih desain & warna sesuai selera, kami menyediakan banyak macam! Dengan cuttingan regular fit membuat T-shirt ini cocok untuk segala bentuk badan, tidak terlalu longgar & tidak terlalu ketat. Menggunakan bahan cotton combed 30s yang akan membuat nyaman saat berkegiatan di luar ruangan",
      "excerpt": "",
      "price": 65_000,
      "tags": ["T-Shirt", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/cb8b3733b43900716e3ad38627d6980b.jpg?v=1684515022",
      "images": ["https://erigostore.co.id/cdn/shop/files/cb8b3733b43900716e3ad38627d6980b.jpg?v=1684515022"]
    },
    {
      "name": "Erigo T-Shirt Basic Meghan Black",
      "slug": "basic-meghan-black",
      "description": "T-shirt yang cocok untuk dipadukan dengan berbagai jenis celana. Pilih desain & warna sesuai selera, kami menyediakan banyak macam! Dengan cuttingan regular fit membuat T-shirt ini cocok untuk segala bentuk badan, tidak terlalu longgar & tidak terlalu ketat. Menggunakan bahan cotton combed 30s yang akan membuat nyaman saat berkegiatan di luar ruangan",
      "excerpt": "",
      "price": 90_000,
      "tags": ["T-Shirt", "Black"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/T-Shirt-Basic-Meghan-Black.jpg?v=1680747368",
      "images": ["https://erigostore.co.id/cdn/shop/products/T-Shirt-Basic-Meghan-Black.jpg?v=1680747368"]
    },
    {
      "name": "Erigo T-Shirt Basic Mustard White Unisex",
      "slug": "basic-mustard-white-unisex",
      "description": "T-shirt yang cocok untuk dipadukan dengan berbagai jenis celana. Pilih desain & warna sesuai selera, kami menyediakan banyak macam! Dengan cuttingan regular fit membuat T-shirt ini cocok untuk segala bentuk badan, tidak terlalu longgar & tidak terlalu ketat. Menggunakan bahan cotton combed 30s yang akan membuat nyaman saat berkegiatan di luar ruangan",
      "excerpt": "",
      "price": 65_000,
      "tags": ["T-Shirt", "Basic"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/88b4bb5226ace69e998fd67446bd0279.jpg?v=1684515011",
      "images": ["https://erigostore.co.id/cdn/shop/files/88b4bb5226ace69e998fd67446bd0279.jpg?v=1684515011"]
    },
    {
      "name": "Erigo T-Shirt Oversize Fresne Andora",
      "slug": "oversize-fresne-andora",
      "description": "T-shirt ini menggunakan bahan cotton combed 20s yang memberi sensasi sejuk, walaupun banyak beraktivitas di cuaca panas. Diprint dengan desain & logo ikonik, yang membuat penggunanya terlihat semakin keren. Jangan lupa bawa Coach Jacket agar tidak terkena angin saat menjelang malam",
      "excerpt": "",
      "price": 90_000,
      "tags": ["T-Shirt", "Oversize"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/T-Shirt-Oversize-Fresne-Andora-1-1.jpg?v=1666231535",
      "images": ["https://erigostore.co.id/cdn/shop/products/T-Shirt-Oversize-Fresne-Andora-1-1.jpg?v=1666231535"]
    },
    {
      "name": "Erigo T-Shirt Oversize Barents Pale",
      "slug": "oversize-barents-pale",
      "description": "T-shirt ini menggunakan bahan cotton combed 20s yang memberi sensasi sejuk, walaupun banyak beraktivitas di cuaca panas. Diprint dengan desain & logo ikonik, yang membuat penggunanya terlihat semakin keren. Jangan lupa bawa Coach Jacket agar tidak terkena angin saat menjelang malam.",
      "excerpt": "",
      "price": 90_000,
      "tags": ["T-Shirt", "Oversize"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/T-Shirt-Oversize-BARENTS-PALE.jpg?v=1666229929",
      "images": ["https://erigostore.co.id/cdn/shop/products/T-Shirt-Oversize-BARENTS-PALE.jpg?v=1666229929"]
    },
    {
      "name": "Erigo T-Shirt Oversize Aliger Olive Unisex",
      "slug": "oversize-aliger-olive-unisex",
      "description": "T-shirt ini menggunakan bahan cotton combed 20s yang memberi sensasi sejuk, walaupun banyak beraktivitas di cuaca panas. Diprint dengan desain & logo ikonik, yang membuat penggunanya terlihat semakin keren. Jangan lupa bawa Coach Jacket agar tidak terkena angin saat menjelang malam",
      "excerpt": "",
      "price": 90_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/3f504f93177c3d90cef8e4bddf7670f3.jpg?v=1660125455",
      "images": ["https://erigostore.co.id/cdn/shop/products/3f504f93177c3d90cef8e4bddf7670f3.jpg?v=1660125455"]
    },
    {
      "name": "Erigo T-Shirt Oversize Deval Black Unisex",
      "slug": "00versize-deval-black-unisex",
      "description": "T-shirt series terbaru dari Erigo! Didesain dengan sablon HD & fitting oversize. Menggunakan bahan 20s yang memberikan kesan eksklusif pada Erigo T-shirt Typography. Cocok dipadukan dengan celana & outer apapun.",
      "excerpt": "",
      "price": 95_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98p-lro51i6yvh7le0.jpg?v=1707913698",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r990-lro51i46zjip34_b9ae74da-0102-4375-847a-46a3fb77b36c.jpg?v=1707913708", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98p-lro51i6yvh7le0.jpg?v=1707913698"]
    },
    {
      "name": "Erigo Work Shirt Fritz Darkest Spruce",
      "slug": "work-shirt-fritz-darkest-spruce",
      "description": "Erigo Work Shirt merupakan salah satu Kemeja dengan model terbaru yang di keluarkan Erigo, ada berbagai jenis kemeja , salah satu yang di luncurkan saat ini merupakan kemeja dengan bahan yang berkualitas tinggi dengan desain berkerah, kantong serta kombinasi warna yang netral akan menjadikan outfit lebih meanrik.",
      "excerpt": "",
      "price": 108_000,
      "tags": ["Shirt", "Work"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/ginee_20221102002928716_9953701525.jpg?v=1667320418",
      "images": ["https://erigostore.co.id/cdn/shop/products/ginee_20221102002928716_9953701525.jpg?v=1667320418"]
    },
    {
      "name": "Erigo T-Shirt Oversize Pocket Gilda Ultra Violet Unisex",
      "slug": "oversize-pocket-gilda-ultra-violet-unisex",
      "description": "Basic T-shirt menjadi lebih menarik dengan tambahan pocket! T-shirt ini hadir dengan banyak pilihan warna yang timeless. Tidak lupa juga kami menyediakan banyak pilihan warna serta pilihan lengan; panjang atau pendek.",
      "excerpt": "",
      "price": 90_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/TShirt-Oversize-Pocket-Gilda-Ultra-Violet.jpg?v=1680756830",
      "images": ["https://erigostore.co.id/cdn/shop/products/TShirt-Oversize-Pocket-Gilda-Ultra-Violet.jpg?v=1680756830"]
    },
    {
      "name": "Erigo T-Shirt Oversize Koax Black Unisex",
      "slug": "oversize-koax-black-unisex",
      "description": "Menjadi yang paling menarik di jalanan, berkendara dengan penuh kebanggaan bersama T-shirt Motor dari Erigo. Memiliki berbagai macam desain klasik yang bisa dipilih, buat energi semakin membara dengan Erigo T-shirt Motor.",
      "excerpt": "",
      "price": 99_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r992-ls2jri3w1j0y2b_b5e78eb3-19fc-4f1f-9d33-a9e1efc557c9.jpg?v=1709114046",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r992-ls2jri3w1j0y2b_b5e78eb3-19fc-4f1f-9d33-a9e1efc557c9.jpg?v=1709114046", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r992-ls2jrhowngjd3d.jpg?v=1709114027"]
    },
    {
      "name": "Erigo Short Shirt Delwyn Dark Brown",
      "slug": "shorts-shirt-delwyn-dark-brown",
      "description": "Erigo Short Shirt Rayon kemeja pendek berbahan rayon kami dirancang untuk memberikan sentuhan yang lembut dan ringan di kulit, kemeja ini menjadi pilihan ideal untuk tampil kasual yang tetap terlihat rapi. Rayon memiliki sifat elastisitas yang memungkinkan fleksibilitas gerakan yang lebih baik, menjadikan kemeja ini pilihan yang tepat untuk kegiatan sehari-hari. Tersedia dalam berbagai pilihan warna yang menarik, memungkinkan untuk mengekspresikan gaya pribadi dengan lebih bebas.",
      "excerpt": "",
      "price": 89_000,
      "tags": ["Short Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/19d480e5de94bc0cdbf036b51e4c7686.jpg?v=1647944026",
      "images": ["https://erigostore.co.id/cdn/shop/products/19d480e5de94bc0cdbf036b51e4c7686.jpg?v=1647944026"]
    },
    {
      "name": "Erigo Work Shirt Rurik Brown Rice",
      "slug": "work-shirt-rurik-brown-rice",
      "description": "Erigo Work Shirt merupakan salah satu Kemeja dengan model terbaru yang di keluarkan Erigo, ada berbagai jenis kemeja , salah satu yang di luncurkan saat ini merupakan kemeja dengan bahan yang berkualitas tinggi dengan desain berkerah, kantong serta kombinasi warna yang netral akan menjadikan outfit lebih meanrik.",
      "excerpt": "",
      "price": 108_000,
      "tags": ["Work Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/sg-11134201-22110-cicpv9fuadjv81.jpg?v=1667320501",
      "images": ["https://erigostore.co.id/cdn/shop/products/sg-11134201-22110-cicpv9fuadjv81.jpg?v=1667320501"]
    },
    {
      "name": "Erigo Short Shirt Cochise Light Brown",
      "slug": "short-shirt-cochise-light-brown",
      "description": "Erigo Short Shirt Rayon kemeja pendek berbahan rayon kami dirancang untuk memberikan sentuhan yang lembut dan ringan di kulit, kemeja ini menjadi pilihan ideal untuk tampil kasual yang tetap terlihat rapi. Rayon memiliki sifat elastisitas yang memungkinkan fleksibilitas gerakan yang lebih baik, menjadikan kemeja ini pilihan yang tepat untuk kegiatan sehari-hari. Tersedia dalam berbagai pilihan warna yang menarik, memungkinkan untuk mengekspresikan gaya pribadi dengan lebih bebas.",
      "excerpt": "",
      "price": 89_000,
      "tags": ["Short Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/Erigo-Short-Shirt-Cochise-Light-Brown-1.jpg?v=1660120239",
      "images": ["https://erigostore.co.id/cdn/shop/products/Erigo-Short-Shirt-Cochise-Light-Brown-1.jpg?v=1660120239"]
    },
    {
      "name": "Erigo Koko Short Sleeve Bordir Zachary White",
      "slug": "koko-short-sleeve-bordir-zachary-white",
      "description": "Baju yang memancarkan kesederhanaan nan elegan, hadir dengan warna netral yang mencerminkan ketenangan & kesucian. Menggunakan bahan yang memberikan kenyamanan maksimal selama ibadah & puasa. Desain elegan dengan bentuk regular fit, memberikan kebebasan gerak yang nyaman untuk dipakai seharian. Ditambah dengan detail embroidery yang menambah sentuhan istimewa pada keseluruhan tampilan. Erigo Koko adalah pilihan tepat untuk menemani setiap momen berharga di bulan Ramadan.",
      "excerpt": "",
      "price": 139_000,
      "tags": ["Koko", "Short Sleeve"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29.jpg?v=1709293860",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29.jpg?v=1709293860", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98x-lsckgg6rqxtbce.jpg?v=1709293862"]
    },
    {
      "name": "Erigo Koko Long Sleeve Bordir Darvesh White",
      "slug": "koko-long-sleeve-bordir-darvesh-white",
      "description": "Baju yang memancarkan kesederhanaan nan elegan, hadir dengan warna netral yang mencerminkan ketenangan & kesucian. Menggunakan bahan yang memberikan kenyamanan maksimal selama ibadah & puasa. Desain elegan dengan bentuk regular fit, memberikan kebebasan gerak yang nyaman untuk dipakai seharian. Ditambah dengan detail embroidery yang menambah sentuhan istimewa pada keseluruhan tampilan. Erigo Koko adalah pilihan tepat untuk menemani setiap momen berharga di bulan Ramadan.",
      "excerpt": "",
      "price": 159_000,
      "tags": ["Koko", "Long Sleeve"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98p-lsckg6bc72ws15_b733d365-ba71-474d-8645-e7b8bdc0675d.jpg?v=1709293856",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98p-lsckg6bc72ws15_b733d365-ba71-474d-8645-e7b8bdc0675d.jpg?v=1709293856", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98r-lsckg6fs0kyz06.jpg?v=1709293842"]
    },
    {
      "name": "Erigo Koko Short Sleeve Bordir Zaki Green",
      "slug": "koko-short-sleeve-bordir-zaki-green",
      "description": "Baju yang memancarkan kesederhanaan nan elegan, hadir dengan warna netral yang mencerminkan ketenangan & kesucian. Menggunakan bahan yang memberikan kenyamanan maksimal selama ibadah & puasa. Desain elegan dengan bentuk regular fit, memberikan kebebasan gerak yang nyaman untuk dipakai seharian. Ditambah dengan detail embroidery yang menambah sentuhan istimewa pada keseluruhan tampilan. Erigo Koko adalah pilihan tepat untuk menemani setiap momen berharga di bulan Ramadan.",
      "excerpt": "",
      "price": 139_000,
      "tags": ["Koko", "Short Sleeve"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98s-lsckgksyzqc235_4b9a4162-8da4-49dc-a322-00d9c5c8a3b3.jpg?v=1709293752",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98s-lsckgksyzqc235_4b9a4162-8da4-49dc-a322-00d9c5c8a3b3.jpg?v=1709293752", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98o-lsckgl8iczzy07.jpg?v=1709293734"]
    },
    {
      "name": "Erigo Koko Long Sleeve Bordir Ahsan Green",
      "slug": "long-sleeve-bordir-ahsan-green",
      "description": "Baju yang memancarkan kesederhanaan nan elegan, hadir dengan warna netral yang mencerminkan ketenangan & kesucian. Menggunakan bahan yang memberikan kenyamanan maksimal selama ibadah & puasa. Desain elegan dengan bentuk regular fit, memberikan kebebasan gerak yang nyaman untuk dipakai seharian. Ditambah dengan detail embroidery yang menambah sentuhan istimewa pada keseluruhan tampilan. Erigo Koko adalah pilihan tepat untuk menemani setiap momen berharga di bulan Ramadan.",
      "excerpt": "",
      "price": 159_000,
      "tags": ["Koko", "Long Sleeve"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98r-lsclgazyswe979_60b9ee6c-bae6-4696-a9e2-4c0c05b820ff.jpg?v=1709293804",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98r-lsclgazyswe979_60b9ee6c-bae6-4696-a9e2-4c0c05b820ff.jpg?v=1709293804", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98x-lsclgb3knmcy20.jpg?v=1709293788"]
    },
    {
      "name": "Erigo Work Shirt Nardine Brown Rice Unisex",
      "slug": "work-shirt-nardine-brown-rice-unisex",
      "description": "Bagi eksplorator kota outfit harus selalu on point! Seperti koleksi Erigo Work Shirt motor yang nyaman digunakan & stylish saat dikenakan. Explore seluruh sudut kota ditemani dengan kemeja ini. Work shirt dengan sentuhan klasik buat penggunanya tampil elegan di atas motor kesayangan.",
      "excerpt": "",
      "price": 125_000,
      "tags": ["Work Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98y-ls8d3kv35zt611_3011fc65-00ee-42fe-b1b8-5c13a0d87dcd.jpg?v=1709114010",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98y-ls8d3kv35zt611_3011fc65-00ee-42fe-b1b8-5c13a0d87dcd.jpg?v=1709114010", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98w-ls8d3l7knpp23f.jpg?v=1709113994"]
    },
    {
      "name": "Erigo Work Shirt Nauval Navy Unisex",
      "slug": "work-shirt-nauval-navy-unisex",
      "description": "Bagi eksplorator kota outfit harus selalu on point! Seperti koleksi Erigo Work Shirt motor yang nyaman digunakan & stylish saat dikenakan. Explore seluruh sudut kota ditemani dengan kemeja ini. Work shirt dengan sentuhan klasik buat penggunanya tampil elegan di atas motor kesayangan.",
      "excerpt": "",
      "price": 125_000,
      "tags": ["Work Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98u-ls8d3krhb9ff0d.jpg?v=1709113977",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98u-ls8d3krhb9ff0d.jpg?v=1709113977", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98r-ls8d3ni9apjmee.jpg?v=1709113988"]
    },
    {
      "name": "Erigo T-Shirt Oversize Kevyan Black Unisex",
      "slug": "oversize-kevyan-black-unisex",
      "description": "Menjadi yang paling menarik di jalanan, berkendara dengan penuh kebanggaan bersama T-shirt Motor dari Erigo. Memiliki berbagai macam desain klasik yang bisa dipilih, buat energi semakin membara dengan Erigo T-shirt Motor.",
      "excerpt": "",
      "price": 99_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98v-ls2jrisb1sskd2.jpg?v=1709113921",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98v-ls2jrisb1sskd2.jpg?v=1709113921", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98o-ls2jriibgegk89_7ad5b7b4-d85d-4833-8d36-5a7c77ce2af5.jpg?v=1709113934"]
    },
    {
      "name": "Erigo T-Shirt Oversize Dyron Asphalt Unisex",
      "slug": "oversize-dyron-asphalt-unisex",
      "description": "T-shirt series terbaru dari Erigo! Didesain dengan sablon HD & fitting oversize. Menggunakan bahan 20s yang memberikan kesan eksklusif pada Erigo T-shirt Typography. Cocok dipadukan dengan celana & outer apapun.",
      "excerpt": "",
      "price": 95_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98y-lro51io66ak27e.jpg?v=1707913704",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98y-lro51io66ak27e.jpg?v=1707913704", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lro51iwrtpdt93.jpg?v=1707913714"]
    },
    {
      "name": "Erigo T-Shirt Utsunomiya Navy",
      "slug": "utsunomiya-navy",
      "description": "T-shirt yang cocok untuk dipadukan dengan berbagai jenis celana. Pilih desain & warna sesuai selera, kami menyediakan banyak macam! Dengan cuttingan regular fit membuat T-shirt ini cocok untuk segala bentuk badan, tidak terlalu longgar & tidak terlalu ketat. Menggunakan bahan cotton combed 30s yang akan membuat nyaman saat berkegiatan di luar ruangan.",
      "excerpt": "",
      "price": 65_000,
      "tags": ["T-Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/dd3b3a05fe559fef214d16c77363a0a6.jpg?v=1649924560",
      "images": ["https://erigostore.co.id/cdn/shop/products/dd3b3a05fe559fef214d16c77363a0a6.jpg?v=1649924560"]
    },
    {
      "name": "Erigo T-Shirt Tiger Speed Black",
      "slug": "tiger-speed-black",
      "description": "T-shirt yang cocok untuk dipadukan dengan berbagai jenis celana. Pilih desain & warna sesuai selera, kami menyediakan banyak macam! Dengan cuttingan regular fit membuat T-shirt ini cocok untuk segala bentuk badan, tidak terlalu longgar & tidak terlalu ketat. Menggunakan bahan cotton combed 30s yang akan membuat nyaman saat berkegiatan di luar ruangan.",
      "excerpt": "",
      "price": 65_000,
      "tags": ["T-Shirt"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/products/b2387152-511c-4941-a11e-9a78e8f8ec67.jpg?v=1649928720",
      "images": ["https://erigostore.co.id/cdn/shop/products/b2387152-511c-4941-a11e-9a78e8f8ec67.jpg?v=1649928720"]
    },
    {
      "name": "Erigo T-Shirt Oversize Dyron Asphalt Unisex",
      "slug": "oversize-dyron-asphalt-unisex",
      "description": "T-shirt series terbaru dari Erigo! Didesain dengan sablon HD & fitting oversize. Menggunakan bahan 20s yang memberikan kesan eksklusif pada Erigo T-shirt Typography. Cocok dipadukan dengan celana & outer apapun.",
      "excerpt": "",
      "price": 95_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98y-lro51io66ak27e_982f909e-9d40-4197-bcde-cfd1935b3895.jpg?v=1707913723",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r98y-lro51io66ak27e_982f909e-9d40-4197-bcde-cfd1935b3895.jpg?v=1707913723", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98r-lro51iri1fln74.jpg?v=1707913708"]
    },
    {
      "name": "Erigo T-Shirt Oversize Dabeat Olive Unisex",
      "slug": "oversize-dabeat-olive-unisex",
      "description": "T-shirt series terbaru dari Erigo! Didesain dengan sablon HD & fitting oversize. Menggunakan bahan 20s yang memberikan kesan eksklusif pada Erigo T-shirt Typography. Cocok dipadukan dengan celana & outer apapun.",
      "excerpt": "",
      "price": 95_000,
      "tags": ["T-Shirt", "Oversize", "Unisex"],
      "thumbnail": "https://erigostore.co.id/cdn/shop/files/id-11134201-7r990-lro51ioq5hx4d7_a95eeb29-a95f-4cc9-9648-ec9194d52431.jpg?v=1707913736",
      "images": ["https://erigostore.co.id/cdn/shop/files/id-11134201-7r990-lro51ioq5hx4d7_a95eeb29-a95f-4cc9-9648-ec9194d52431.jpg?v=1707913736", "https://erigostore.co.id/cdn/shop/files/id-11134201-7r98w-lro51ixbsw5u15.jpg?v=1707913731"]
    }
  ]

async function seeding() {
    const userDB = database.collection("products");
    const newUsers = users.map((el) => {
        el.createdAt = new Date(),
        el.updatedAt = new Date()
        return el;
    });

    const result = await userDB.insertMany(newUsers);
    console.log(result);
}
seeding();