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
      tag: "ev \u00b7 pro / max",
      kinds: ["ev", "suv"],
      price: "Rp239,9\u2013269,9 jt",
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
      tag: "ev \u00b7 pure / rizz",
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
      tag: "phev \u00b7 family mpv",
      kinds: ["phev", "mpv"],
      price: "Rp298\u2013390 jt",
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
      price: "Rp279,9\u2013309,9 jt",
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
      tag: "hev \u00b7 family mpv",
      kinds: ["hev", "mpv"],
      price: "Rp475,4\u2013629,8 jt",
      spec: "hybrid \u00b7 bukan ev",
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
      tag: "hev \u00b7 giias special",
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
