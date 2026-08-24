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
        "https://www.byd.com/material/byd-site/id/product/atto1/exterior/eksterior-siluetbelakang-atto1.png",
        "https://www.byd.com/material/byd-site/id/product/atto1/pc/atto1-header.png"
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
        "https://www.datocms-assets.com/202757/1778503384-ex2-22.png",
        "https://www.geely.com/-/media/project/web-portal/models/geely-ex2/model-picture-geely-ex2.png",
        "https://www.geely.com/-/media/project/web-portal/models/geely-ex2/kv/geely-ex2-back.jpg",
        "https://www.geely.com/-/media/project/web-portal/models/geely-ex2/kv/geely-ex2-top-image-kv.jpg"
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
        "https://wuling.id/assets/images/aira-ev/exterior-revamp/Gallery1v2.png",
        "https://wuling.id/assets/images/aira-ev/exterior-revamp/Gallery2v2.png",
        "https://wuling.id/assets/images/aira-ev/exterior-revamp/Gallery3v2.png",
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
        "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/main-image-front.webp",
        "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/thumbnail-side-image-desktop.png",
        "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/colors/chery-q-pure-dusk-purple-car-thumbnail.webp",
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
        "https://www.byd.com/material/dm-i-into/m6dmextside.jpg",
        "https://www.byd.com/material/dm-i-into/m6dmextback.jpg"
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
        "https://cms.jaecoo.id/uploads/J5_Horizontal_1_c788ba794b.jpg",
        "https://cms.jaecoo.id/uploads/J5_1_2e7da5b171.jpeg",
        "https://cms.jaecoo.id/uploads/J5_Vertical_Opt1_1_9928b03e43.jpg"
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
        "https://www.toyotaliekmotor.com/uploads/foto_produk/Q_Hybrid_Type_0_3.png",
        "https://www.toyotaliekmotor.com/uploads/foto_keterangan/img_1.jpg",
        "https://www.toyotaliekmotor.com/uploads/foto_keterangan/img_2.jpg",
        "https://www.toyotaliekmotor.com/uploads/foto_produk/Home-Banner-Desktop-1293x628_51.jpg"
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
        "https://paultan.org/image/2025/03/2025_BIMS_Mitsubishi_XForce_HEV-2-1200x801.jpg",
        "https://paultan.org/image/2025/03/2025_BIMS_Mitsubishi_XForce_HEV-3-1200x801.jpg",
        "https://paultan.org/image/2025/03/2025_BIMS_Mitsubishi_XForce_HEV-4-1200x801.jpg"
      ],
      infoId: "xforce"
    }
  ];
