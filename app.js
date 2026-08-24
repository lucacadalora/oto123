(function () {
  const BAG_KEY = "oto123-bag";
  const LEAD_KEY = "oto123-leads";
  const MAX_BAG = 2;
  const MAX_CMP = 3;

  const CARS = [
    {
      id: "atto1",
      brand: "BYD",
      name: "Atto 1",
      tag: "ev hatch",
      kinds: ["ev"],
      price: "Rp199–245 jt",
      spec: "300–380 km NEDC",
      colors: [
        ["Sprout Green", "#6f8f4a"],
        ["Apricity White", "#f3efe6"],
        ["Cosmos Black", "#1a1a1a"]
      ],
      poster: { bg: "#5f7d3e", ink: "#e8f0d8", mark: "ATTO 1" },
      photos: [
        "https://www.byd.com/material/byd-site/id/product/atto1/exterior/atto1-front-ext.png",
        "https://imgcdn.oto.com/large/gallery/exterior/177/3260/byd-atto-1-full-front-view-402203.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/177/3260/byd-atto-1-front-angle-low-view-785269.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/177/3260/byd-atto-1-rear-cross-side-view-145439.jpg"
      ],
      infoId: "atto1"
    },
    {
      id: "ex2",
      brand: "Geely",
      name: "EX2",
      tag: "ev · pro / max",
      kinds: ["ev", "suv"],
      price: "Rp239,9–269,9 jt",
      spec: "395 km NEDC",
      colors: [
        ["Moon White", "#f6f4ef"],
        ["Star Silver", "#c5c7c9"],
        ["Comet Grey", "#7d8084"],
        ["Nebula Beige", "#d8cbb6"],
        ["Aurora Pink", "#e7b3c2"],
        ["Aether Green", "#6a8b6e"]
      ],
      poster: { bg: "#2b2e33", ink: "#e7b3c2", mark: "EX2" },
      photos: [
        "https://www.geely.com/-/media/project/web-portal/models/geely-ex2/model-picture-geely-ex2.png",
        "https://imgcdn.oto.com/large/gallery/exterior/13/3316/geely-ex2-side-view-100718.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/13/3316/geely-ex2-front-angle-low-view-417145.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/13/3316/geely-ex2-rear-cross-side-view-409892.jpg"
      ],
      infoId: "ex2"
    },
    {
      id: "aira",
      brand: "Wuling",
      name: "Aira EV",
      tag: "4-seat city ev",
      kinds: ["ev"],
      price: "Rp155 / 175 jt",
      spec: "205 / 301 km CLTC",
      colors: [
        ["Starry Black", "#141414"],
        ["Galaxy Blue", "#1c3f6e"],
        ["Milk Tea", "#d7c4a8"]
      ],
      poster: { bg: "#1c3f6e", ink: "#d7c4a8", mark: "AIRA" },
      photos: [
        "https://imgcdn.oto.com/large/gallery/exterior/110/3368/wuling-aira-ev-front-angle-low-view-683192.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/110/3368/wuling-aira-ev-front-side-view-409963.jpg",
        "https://wuling.id/assets/images/aira-ev/color-car/milk-tea.png"
      ],
      infoId: "aira"
    },
    {
      id: "cheryq",
      brand: "Chery",
      name: "Q",
      tag: "ev · pure / rizz",
      kinds: ["ev"],
      price: "Rp239,9 / 259,9 jt",
      spec: "400 km NEDC",
      colors: [
        ["Oat Latte", "#c8b59a"],
        ["Dusk Purple", "#5c4d6b"],
        ["Spark White", "#f5f3ef"]
      ],
      poster: { bg: "#5c4d6b", ink: "#c8b59a", mark: "Q" },
      photos: [
        "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/colors/chery-q-pure-dusk-purple-car-thumbnail.webp",
        "https://imgcdn.oto.com/large/gallery/exterior/153/3349/chery-q-front-angle-low-view-551981.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/153/3349/chery-q-front-side-view-291010.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/153/3349/chery-q-side-view-307546.jpg",
        "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/colors/chery-q-pure-spark-white-car-thumbnail.webp"
      ],
      infoId: "cheryq"
    },
    {
      id: "m6",
      brand: "BYD",
      name: "M6 DM",
      tag: "phev · family mpv",
      kinds: ["phev", "mpv"],
      price: "Rp298–390 jt",
      spec: "plug-in hybrid",
      colors: [["Family", "#1f2a36"]],
      poster: { bg: "#1f2a36", ink: "#e6d7b8", mark: "M6 DM" },
      photos: [
        "https://www.byd.com/material/dm-i-into/BYDM6DMFRONT.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/177/3039/byd-m6-full-front-view-525976.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/177/3039/byd-m6-front-angle-low-view-779791.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/177/3039/byd-m6-rear-cross-side-view-325727.jpg"
      ],
      infoId: "m6"
    },
    {
      id: "j5",
      brand: "Jaecoo",
      name: "J5 EV",
      tag: "ev suv",
      kinds: ["ev", "suv"],
      price: "Rp279,9–309,9 jt",
      spec: "461 km NEDC",
      colors: [
        ["Ivory Gray", "#d4d1c8"],
        ["Forest Green", "#2f4a38"],
        ["Pristine White", "#f7f6f2"],
        ["Jet Black", "#111111"]
      ],
      poster: { bg: "#2f4a38", ink: "#d4d1c8", mark: "J5 EV" },
      photos: [
        "https://cms.jaecoo.id/uploads/Group_21_1_7f2fa8a308.png",
        "https://cms.jaecoo.id/uploads/Group_25_faf1e38e0f.png"
      ],
      infoId: "j5"
    },
    {
      id: "zenix",
      brand: "Toyota",
      name: "Innova Zenix Hybrid",
      tag: "hev · family mpv",
      kinds: ["hev", "mpv"],
      price: "Rp475,4–629,8 jt",
      spec: "hybrid · bukan ev",
      colors: [["Zenix", "#6b5340"]],
      poster: { bg: "#6b5340", ink: "#f0e6d4", mark: "ZENIX" },
      photos: [
        "https://paultan.org/image/2023/06/2023-Toyota-Innova-Zenix-Malaysia-launch-official-1.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/38/2685/toyota-innova-zenix-front-angle-low-view-880505.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/38/2685/toyota-innova-zenix-side-view-112998.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/38/2685/toyota-innova-zenix-full-rear-view-505886.jpg",
        "https://imgcdn.oto.com/large/gallery/exterior/38/2685/toyota-innova-zenix-full-front-view-553043.jpg"
      ],
      infoId: "zenix"
    },
    {
      id: "xforce",
      brand: "Mitsubishi",
      name: "New Xforce HEV",
      tag: "hev · giias special",
      kinds: ["hev", "suv"],
      price: "Rp445 jt",
      spec: "giias special",
      colors: [["Xforce", "#7a1f24"]],
      poster: { bg: "#7a1f24", ink: "#efe6dc", mark: "XFORCE" },
      photos: [
        "https://www.mitsubishi-motors.com/jp/newsroom/newsrelease/2026/img/20260716_1_01.png",
        "https://paultan.org/image/2025/03/2025_BIMS_Mitsubishi_XForce_HEV-1-1200x801.jpg",
        "https://paultan.org/image/2025/03/2025_BIMS_Mitsubishi_XForce_HEV-2-1200x801.jpg",
        "https://paultan.org/image/2025/03/2025_BIMS_Mitsubishi_XForce_HEV-3-1200x801.jpg"
      ],
      infoId: "xforce"
    }
  ];

  const I18N = {
    id: {
      navHome: "home",
      navHow: "cara",
      navReview: "review",
      navConsult: "konsul",
      lede: "halo — luca. ini review, bukan lot diler. delapan mobil yang rame di giias 2026, dibandingin jujur, trus bisa tanya reviewer atau pemilik yang udah pegang unit. harga di kartu itu otr jakarta / special giias — jangan dianggap closing; konfirmasi ke diler.",
      giias: "giias 2026: 496.378 pengunjung. toyota 6.175 spk, byd 4.000+. bukan angka penjualan show-wide — gaikindo belum rilis total spk resmi.",
      person: "reviewer",
      ctaInline: "tanya reviewer / pemilik",
      fAll: "semua",
      compareHint: "ketuk bandingkan (maks 3) atau masukin bag (maks 2) buat konsul. tombol i = catatan pajak / tco, bukan harga rahasia.",
      howTitle: "cara kerjanya",
      how: [
        "pilih 2–3 unit yang bikin kamu galau. kartu itu review, bukan stok.",
        "ketuk i buat catatan pajak / tco: otr jakarta atau special giias, masih harus dikonfirmasi diler. kita nggak nambah-nambahin angka.",
        "bag = booking konsul 1–2 mobil. bukan keranjang beli.",
        "isi nama, kota, whatsapp, budget. luca (atau pemilik yang relevan) bales. no bot."
      ],
      disclaimer: "oto123 placeholder brand, bukan domain live, bukan mitra resmi gaikindo / merek. kami tidak jual unit. lead dikirim ke reviewer buat ngobrol p2p.",
      formTitle: "tanya reviewer / pemilik",
      formLede: "isi wa + kota + budget. pilih 2–3 mobil yang lagi bikin pusing. no spam, luca yang bales.",
      budgetLabel: "budget",
      carsLegend: "lagi bingung antara (2–3)",
      noteLabel: "catatan",
      submit: "kirim ke reviewer",
      footWho: "luca · oto123",
      footWhat: "review + konsul p2p",
      footNote: "footnote giias: honda 1.939 spk · hyundai ~2.000. sumber booth, bukan total resmi gaikindo.",
      bagEmpty: "kosong. masukin 1–2 mobil buat dibahas.",
      bagGo: "lanjut isi wa",
      bagFull: "bag maks 2. buang satu dulu.",
      cmpFull: "bandingkan maks 3.",
      formNeedCars: "pilih 2 atau 3 mobil dulu.",
      formNeedWa: "whatsapp wajib. ini celah yang pixel sale belum nutup.",
      formOk: "tercatat di browser ini. luca bisa follow-up via wa.",
      compare: "bandingkan",
      bag: "masuk bag",
      inBag: "di bag",
      close: "tutup",
      info: {
        atto1: {
          t: "BYD Atto 1 · i",
          b: "otr jakarta agustus 2026, kisaran rp199–245 jt tergantung varian. ev hatch, sprout green / apricity white / cosmos black. jarak 300–380 km nedc — nedc biasanya lebih longgar dari pemakaian jakarta macet + ac. pajak kendaraan ev beda per pemda (bbnkb/pkb/insentif), jadi hitung ulang di kota kamu, jangan pakai angka jakarta mentah. listrik rumahan vs ngecas publik = tco yang sering dilupain. konfirmasi ke diler."
        },
        ex2: {
          t: "Geely EX2 · i",
          b: "pro / max rp239,9–269,9 jt (otr jakarta / listing giias). 395 km nedc. palet warna panjang: moon white, star silver, comet grey, nebula beige, aurora pink, aether green. suv-ish ev di kelas yang rame — bandingkan asuransi + kamasediaan bengkel, bukan cuma sticker price. insentif ev lokal tidak otomatis. konfirmasi ke diler."
        }
      }
    }
  };
})();
