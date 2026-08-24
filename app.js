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
          b: "pro / max rp239,9–269,9 jt (otr jakarta / listing giias). 395 km nedc. palet warna panjang: moon white, star silver, comet grey, nebula beige, aurora pink, aether green. suv-ish ev di kelas yang rame — bandingkan asuransi + ketersediaan bengkel, bukan cuma sticker price. insentif ev lokal tidak otomatis. konfirmasi ke diler."
        },
        aira: {
          t: "Wuling Aira EV · i",
          b: "rp155 jt / rp175 jt. 205 / 301 km cltc — cltc biasanya lebih optimis dari nedc maupun jalan jakarta. 4 seat, city ev: starry black / galaxy blue / milk tea. cocok kalau radius harian pendek dan ada colokan di rumah. jangan samain angka cltc sama nedc di kartu lain. pajak & diskon pemda: tanya diler kota tujuan."
        },
        cheryq: {
          t: "Chery Q · i",
          b: "pure / rizz rp239,9 / 259,9 jt. 400 km nedc. oat latte / dusk purple / spark white. dua trim, satu angka jarak — bedanya biasanya fitur, bukan battery brag. tco = listrik + asuransi + ketersediaan suku cadang, bukan cuma otr. konfirmasi ke diler."
        },
        m6: {
          t: "BYD M6 DM · i",
          b: "phev family mpv, rp298–390 jt. ini bukan ev murni: ada bensin + colokan. pajak phev di indonesia tidak selalu sama dengan ev (insentif sering lebih ketat / beda skema). kalau jarang ngecas, konsumsi bensin bisa nyerupai hev biasa — tanyakan pola pakai dulu sebelum kejar trim atas. konfirmasi ke diler."
        },
        j5: {
          t: "Jaecoo J5 EV · i",
          b: "rp279,9–309,9 jt. 461 km nedc — klaim terjauh di grid ini. ivory gray / forest green / pristine white / jet black. range di kertas ≠ range ac + tol + hujan jakarta. cek on-board charger, garansi baterai, dan jaringan diler sebelum nulis 'paling jauh jadi paling aman'. konfirmasi ke diler."
        },
        zenix: {
          t: "Toyota Innova Zenix Hybrid · i",
          b: "rp475,4–629,8 jt. hev, bukan ev — bensin tetap jalan, baterai cuma bantu. pajak mengikuti aturan hybrid setempat, biasanya bukan skema ev. harga merentang jauh karena trim; jangan bandingkan tipe terendah zenix dengan ev 200-jutaan seolah kelas yang sama. resale toyota sering jadi alasan orang tahan di sini. konfirmasi ke diler."
        },
        xforce: {
          t: "Mitsubishi New Xforce HEV · i",
          b: "special giias rp445 jt — label special, bukan jaminan stok atau harga after-show. hev. bandingkan dengan zenix (kelas & harga beda) dan ev suv di grid kalau kamu masih galau bensin vs colokan. special price hilang cepat; anggap angka ini titik bincang, bukan invoice. konfirmasi ke diler."
        }
      }
    },
    en: {
      navHome: "home",
      navHow: "how",
      navReview: "review",
      navConsult: "consult",
      lede: "hey — luca. this is a review desk, not a dealer lot. eight giias-2026-hot cars, side by side, then you can ping a reviewer or an owner. card prices are otr jakarta / giias special — not a close; confirm with a dealer.",
      giias: "giias 2026: 496,378 visitors. toyota 6,175 spk, byd 4,000+. not a show-wide sales total — gaikindo has not published official 2026 spk.",
      person: "reviewer",
      ctaInline: "ask a reviewer / owner",
      fAll: "all",
      compareHint: "tap compare (max 3) or bag (max 2) for a consult. the i is a tax / tco note, not a secret price.",
      howTitle: "how this works",
      how: [
        "pick 2–3 cars you are torn between. cards are reviews, not inventory.",
        "tap i for a tax / tco note: otr jakarta or giias special, still confirm with a dealer. we do not invent extra prices.",
        "bag = book a consult on 1–2 cars. not a checkout cart.",
        "leave name, city, whatsapp, budget. luca (or a relevant owner) replies. no bot."
      ],
      disclaimer: "oto123 is a placeholder brand, not a live domain, not an official gaikindo or brand partner. we do not sell units. leads go to a reviewer for a p2p chat.",
      formTitle: "ask a reviewer / owner",
      formLede: "whatsapp + city + budget. pick 2–3 cars you are stuck on. no spam — luca replies.",
      budgetLabel: "budget",
      carsLegend: "torn between (2–3)",
      noteLabel: "note",
      submit: "send to reviewer",
      footWho: "luca · oto123",
      footWhat: "review + p2p consult",
      footNote: "giias footnote: honda 1,939 spk · hyundai ~2,000. booth-reported, not an official gaikindo total.",
      bagEmpty: "empty. bag 1–2 cars to talk through.",
      bagGo: "continue — add whatsapp",
      bagFull: "bag max 2. drop one first.",
      cmpFull: "compare max 3.",
      formNeedCars: "pick 2 or 3 cars first.",
      formNeedWa: "whatsapp is required. the pixel sale page skipped this — we do not.",
      formOk: "saved in this browser. luca can follow up on whatsapp.",
      compare: "compare",
      bag: "bag it",
      inBag: "in bag",
      close: "close",
      info: {
        atto1: {
          t: "BYD Atto 1 · i",
          b: "otr jakarta august 2026, rp199–245m depending on trim. ev hatch in sprout green / apricity white / cosmos black. 300–380 km nedc — nedc is usually kinder than jakarta traffic + ac. ev vehicle tax differs by pemda (bbnkb/pkb/incentive), so rerun the math in your city. home charging vs public charging is the tco people skip. confirm with a dealer."
        },
        ex2: {
          t: "Geely EX2 · i",
          b: "pro / max rp239.9–269.9m (otr jakarta / giias listing). 395 km nedc. colors: moon white, star silver, comet grey, nebula beige, aurora pink, aether green. crowded ev-suv class — compare insurance and workshop coverage, not just the sticker. local ev incentives are not automatic. confirm with a dealer."
        },
        aira: {
          t: "Wuling Aira EV · i",
          b: "rp155m / rp175m. 205 / 301 km cltc — cltc is usually more optimistic than nedc or jakarta roads. 4-seat city ev: starry black / galaxy blue / milk tea. makes sense for a short daily radius and a plug at home. do not equate cltc on this card with nedc on the others. tax and city discounts: ask the destination dealer."
        },
        cheryq: {
          t: "Chery Q · i",
          b: "pure / rizz rp239.9 / 259.9m. 400 km nedc. oat latte / dusk purple / spark white. two trims, one range figure — the split is usually kit, not a bigger pack. tco is power + insurance + parts, not just otr. confirm with a dealer."
        },
        m6: {
          t: "BYD M6 DM · i",
          b: "phev family mpv, rp298–390m. not a pure ev: petrol plus a plug. indonesian phev tax is not always the ev scheme (incentives are often tighter or different). if you rarely charge, fuel use can look like a regular hev — talk through the duty cycle before chasing the top trim. confirm with a dealer."
        },
        j5: {
          t: "Jaecoo J5 EV · i",
          b: "rp279.9–309.9m. 461 km nedc — longest claim on this grid. ivory gray / forest green / pristine white / jet black. paper range ≠ ac + toll + jakarta rain. check the onboard charger, battery warranty, and dealer net before writing 'longest = safest'. confirm with a dealer."
        },
        zenix: {
          t: "Toyota Innova Zenix Hybrid · i",
          b: "rp475.4–629.8m. hev, not ev — petrol does the miles, the pack assists. tax follows local hybrid rules, usually not the ev scheme. the spread is trim; do not compare a base zenix to a 200m ev as the same class. toyota resale is why people stay. confirm with a dealer."
        },
        xforce: {
          t: "Mitsubishi New Xforce HEV · i",
          b: "giias special rp445m — a special label, not a stock or after-show guarantee. hev. compare with zenix (different class and price) and the ev suvs if you are still torn petrol vs plug. specials vanish; treat the figure as a talking point, not an invoice. confirm with a dealer."
        }
      }
    }
  };

  let locale = "id";
  let filter = "all";
  let bag = loadBag();
  let compare = [];

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => [...(root || document).querySelectorAll(sel)];

  function t(key) {
    const pack = I18N[locale];
    return key.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), pack);
  }

  function loadBag() {
    try {
      const raw = JSON.parse(localStorage.getItem(BAG_KEY) || "[]");
      return CARS.map((c) => c.id).filter((id) => raw.includes(id)).slice(0, MAX_BAG);
    } catch {
      return [];
    }
  }

  function saveBag() {
    localStorage.setItem(BAG_KEY, JSON.stringify(bag));
  }

  function posterSvg(car) {
    const { bg, ink, mark } = car.poster;
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="${bg}"/>
      <rect x="28" y="168" width="220" height="8" fill="${ink}" opacity=".35"/>
      <rect x="28" y="188" width="140" height="8" fill="${ink}" opacity=".2"/>
      <text x="28" y="120" fill="${ink}" font-size="42" font-family="Geist, sans-serif" font-weight="500">${mark}</text>
    </svg>`;
  }

  function applyI18n() {
    $$("[data-i]").forEach((el) => {
      const v = t(el.getAttribute("data-i"));
      if (typeof v === "string") el.textContent = v;
    });
    const how = $("#how-list");
    how.innerHTML = t("how").map((line) => `<li>${line}</li>`).join("");
    $$(".lang button").forEach((b) => b.classList.toggle("is-on", b.dataset.locale === locale));
    document.documentElement.lang = locale === "id" ? "id" : "en";
    $$("[data-close]").forEach((b) => { b.textContent = t("close"); });
    renderGrid();
    renderPicks();
    renderBag();
  }

  function renderGrid() {
    const grid = $("#car-grid");
    const list = CARS.filter((c) => filter === "all" || c.kinds.includes(filter));
    grid.innerHTML = list.map((c) => {
      const inBag = bag.includes(c.id);
      const inCmp = compare.includes(c.id);
      const sw = c.colors.map(([n, hex]) => `<span class="dot" title="${n}" style="background:${hex}"></span>`).join("");
      return `<li class="card" data-id="${c.id}">
        <div class="poster">${posterSvg(c)}<span class="poster-meta">${c.tag}</span></div>
        <p class="kicker">${c.brand}</p>
        <h3 class="name">${c.name}</h3>
        <div class="price-row">
          <p class="price">${c.price}</p>
          <span class="range-note">${c.spec}</span>
        </div>
        <p class="spec">${c.colors.map((x) => x[0]).join(" · ")}</p>
        <div class="swatches">${sw}</div>
        <div class="actions">
          <button type="button" class="info-btn" data-info="${c.id}" aria-label="info">i</button>
          <button type="button" class="cmp-btn${inCmp ? " is-on" : ""}" data-cmp="${c.id}">${t("compare")}</button>
          <button type="button" class="bag-add${inBag ? " is-on" : ""}" data-bag="${c.id}">${inBag ? t("inBag") : t("bag")}</button>
        </div>
      </li>`;
    }).join("");
  }

  function renderPicks() {
    const box = $("#car-picks");
    const chosen = new Set([...bag, ...compare]);
    box.innerHTML = CARS.map((c) => {
      const on = chosen.has(c.id);
      return `<label class="${on ? "is-on" : ""}">
        <input type="checkbox" name="cars" value="${c.id}" ${on ? "checked" : ""}>
        ${c.brand} ${c.name}
      </label>`;
    }).join("");
    syncPickStyles();
  }

  function syncPickStyles() {
    $$("#car-picks label").forEach((lab) => {
      lab.classList.toggle("is-on", lab.querySelector("input").checked);
    });
  }

  function renderBag() {
    const btn = $("#bag-btn");
    const count = $("#bag-count");
    const list = $("#bag-list");
    const empty = $("#bag-empty");
    const go = $("#bag-go");
    count.textContent = String(bag.length);
    btn.classList.toggle("has-items", bag.length > 0);
    list.innerHTML = bag.map((id) => {
      const c = CARS.find((x) => x.id === id);
      return `<li><span>${c.brand} ${c.name}</span><button type="button" data-drop="${id}">×</button></li>`;
    }).join("");
    empty.hidden = bag.length > 0;
    go.hidden = bag.length === 0;
  }

  function openSheet(which) {
    $(`#${which}-layer`).hidden = false;
  }
  function closeSheets() {
    $("#info-layer").hidden = true;
    $("#bag-layer").hidden = true;
  }

  function showInfo(id) {
    const pack = t("info")[id];
    $("#info-title").textContent = pack.t;
    $("#info-body").innerHTML = `<p>${pack.b}</p><p>${locale === "id" ? "bukan kemitraan resmi merek / gaikindo." : "not an official brand or gaikindo partnership."}</p>`;
    openSheet("info");
  }

  function flash(msg) {
    const s = $("#form-status");
    s.hidden = false;
    s.textContent = msg;
  }

  document.addEventListener("click", (e) => {
    const localeBtn = e.target.closest("[data-locale]");
    if (localeBtn) {
      locale = localeBtn.dataset.locale;
      applyI18n();
      return;
    }
    const f = e.target.closest("[data-filter]");
    if (f) {
      filter = f.dataset.filter;
      $$("[data-filter]").forEach((b) => b.classList.toggle("is-on", b === f));
      renderGrid();
      return;
    }
    const info = e.target.closest("[data-info]");
    if (info) { showInfo(info.dataset.info); return; }
    const cmp = e.target.closest("[data-cmp]");
    if (cmp) {
      const id = cmp.dataset.cmp;
      if (compare.includes(id)) compare = compare.filter((x) => x !== id);
      else if (compare.length >= MAX_CMP) { flash(t("cmpFull")); return; }
      else compare.push(id);
      renderGrid();
      renderPicks();
      return;
    }
    const add = e.target.closest("[data-bag]");
    if (add) {
      const id = add.dataset.bag;
      if (bag.includes(id)) bag = bag.filter((x) => x !== id);
      else if (bag.length >= MAX_BAG) { flash(t("bagFull")); openSheet("bag"); return; }
      else bag.push(id);
      saveBag();
      renderGrid();
      renderPicks();
      renderBag();
      return;
    }
    if (e.target.closest("#bag-btn")) { renderBag(); openSheet("bag"); return; }
    const drop = e.target.closest("[data-drop]");
    if (drop) {
      bag = bag.filter((x) => x !== drop.dataset.drop);
      saveBag();
      renderGrid();
      renderPicks();
      renderBag();
      return;
    }
    if (e.target.closest("[data-close]") || e.target.classList.contains("sheet-layer")) {
      closeSheets();
      return;
    }
    if (e.target.closest("#bag-go")) closeSheets();
  });

  $("#car-picks").addEventListener("change", (e) => {
    if (e.target.name !== "cars") return;
    const checked = $$("#car-picks input:checked");
    if (checked.length > 3) {
      e.target.checked = false;
      flash(t("cmpFull"));
    }
    syncPickStyles();
  });

  $("#consult-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const wa = String(fd.get("wa") || "").trim();
    const cars = $$("#car-picks input:checked").map((i) => i.value);
    if (!wa) { flash(t("formNeedWa")); return; }
    if (cars.length < 2 || cars.length > 3) { flash(t("formNeedCars")); return; }
    const lead = {
      name: String(fd.get("name") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      wa,
      budget: String(fd.get("budget") || "").trim(),
      cars,
      note: String(fd.get("note") || "").trim(),
      at: new Date().toISOString()
    };
    const prev = JSON.parse(localStorage.getItem(LEAD_KEY) || "[]");
    prev.push(lead);
    localStorage.setItem(LEAD_KEY, JSON.stringify(prev));
    fetch("/api/consult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    }).catch(() => {});
    flash(t("formOk"));
    e.target.reset();
    bag.forEach((id) => {
      const box = $(`#car-picks input[value="${id}"]`);
      if (box) box.checked = true;
    });
    syncPickStyles();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSheets();
  });

  applyI18n();
})();
