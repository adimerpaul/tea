if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const r=e=>c(e,n),o={module:{uri:n},exports:f,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),f)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AppointmentsIndex.b744a682.js",revision:"45b77e760c47a7898118236ee8e106ce"},{url:"assets/axios.7b789378.js",revision:"50278b6c13dc33c3530d067c3ee1ba83"},{url:"assets/ClosePopup.da2b375c.js",revision:"0d311c6e0cd050037a5e6428c61273ae"},{url:"assets/ColegiosIndex.ac801821.js",revision:"ec770a4d11260c3caf64a4da744f4933"},{url:"assets/ErrorNotFound.30f10250.js",revision:"7bc1151625ee800fe6d017821c5c22ec"},{url:"assets/fa-brands-400.3a8924cd.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"assets/fa-brands-400.5656d596.ttf",revision:"1931427c23716bb4ff98d03627f7137c"},{url:"assets/fa-regular-400.2bccecf0.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"assets/fa-regular-400.5d02dc9b.ttf",revision:"a0cc1c8265e3163aa654a5284ea11ace"},{url:"assets/fa-solid-900.9fc85f3a.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"},{url:"assets/fa-solid-900.fbbf06d7.ttf",revision:"25914cfeafced317e1a0372187fbb2b9"},{url:"assets/fa-v4compatibility.09663a36.ttf",revision:"71808e147dc6d82c198a4ba292c0cb69"},{url:"assets/fa-v4compatibility.4d4a2d7f.woff2",revision:"c9e50ccabe9e36f370272197595ea1e5"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.517473c7.js",revision:"9f5466d9b314ed9ae2095f06bc4057c5"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.3e132a6d.js",revision:"30a7b3cd849b01bf8924b94253fd04b2"},{url:"assets/index.41ff6b56.css",revision:"7a48264fd3fa497d745f94c623370224"},{url:"assets/IndexPage.84b8b47d.css",revision:"897d516b0337d52346ca78cc7be99604"},{url:"assets/IndexPage.b0ac1556.js",revision:"20d7e53357be0b90115199b1f816950d"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.cb81c95b.js",revision:"4ab7ab887ec31fa87193530205d93902"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.55a12feb.js",revision:"0cb949fca8bfcd9e5de82953e3701dee"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/position-engine.a5fe8838.js",revision:"07845543bf2ef6bf6f65f5c6f71d6bc9"},{url:"assets/QBtnDropdown.a6359940.js",revision:"978b5c3ac56e9e573a56adb2ff9e28c6"},{url:"assets/QForm.ea881cca.js",revision:"de05df5cfa95eb6b239c8a173ff364c0"},{url:"assets/QImg.74080c2a.js",revision:"a673fe0d01755b4a5833224417d13215"},{url:"assets/QList.9141fcd3.js",revision:"7008ab900550efc544065b02c1170b82"},{url:"assets/QPage.e5cfc105.js",revision:"7de66df95c6fce2fa88f105f4709ac0e"},{url:"assets/QPageContainer.c0eb04b6.js",revision:"8259f9aaea446a1a78e385bd9d4b474b"},{url:"assets/QSpace.f4123e6e.js",revision:"1337cc3b561585ce9d0a1e341f8d270f"},{url:"assets/QTable.29df19bd.js",revision:"498e3d42d2a2791f907ffa723d075c1a"},{url:"assets/QTooltip.cb4d4ce4.js",revision:"2f0bca97cd35556c827e887519ccc9fd"},{url:"assets/StudentsHistory.0ccdf956.js",revision:"d96979c676b3f8156aa8f00633ac201e"},{url:"assets/StudentsHistory.f53f564e.css",revision:"6aa6b03c04084ecf22cebf83a5c3db6c"},{url:"assets/StudentsIndex.0704193b.js",revision:"6fc3c4536d3ba5092abb418b9e047d92"},{url:"assets/UsersIndex.ece494ad.js",revision:"bcbd35e55493918ce5f4e5c5edb20e67"},{url:"favicon.ico",revision:"63611c8a591a42c01940c4abc36aa87d"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"9b183e47131f6704c2f1c36ed0cfd427"},{url:"icons/apple-icon-152x152.png",revision:"d75b9696bc3bd28d270efd9dc4d2283b"},{url:"icons/apple-icon-167x167.png",revision:"0023f5b26b36ae2abcce55b79a13ef7a"},{url:"icons/apple-icon-180x180.png",revision:"177c0bdb2c9ce62f3f49dc312a479ca7"},{url:"icons/apple-launch-1080x2340.png",revision:"90cf718ecd60f54ccdf0c59e12df6931"},{url:"icons/apple-launch-1125x2436.png",revision:"a64b0e41f4ee16752f80eb2a1b4e6909"},{url:"icons/apple-launch-1170x2532.png",revision:"e716dd16b4b5fa00c0d6312e58b26dd7"},{url:"icons/apple-launch-1179x2556.png",revision:"8ba4ff2fda202fe17cc8827983c87197"},{url:"icons/apple-launch-1242x2208.png",revision:"4ba5f82c0beeac7684ae83994bca42ec"},{url:"icons/apple-launch-1242x2688.png",revision:"24c236262422abba36ca94783c39146a"},{url:"icons/apple-launch-1284x2778.png",revision:"989c110b3de513a58bb31a0d393d7350"},{url:"icons/apple-launch-1290x2796.png",revision:"0716d2050bad25455cef1fdfd9aceed7"},{url:"icons/apple-launch-1536x2048.png",revision:"0cb478e6cd6eba1871f4bb9994bbcb85"},{url:"icons/apple-launch-1620x2160.png",revision:"6dad8a31b8f4dcdb973619863e585554"},{url:"icons/apple-launch-1668x2224.png",revision:"d169ded14e1b866a3ba8336ca52bd224"},{url:"icons/apple-launch-1668x2388.png",revision:"18c63c3498e417566877bbc6397c2469"},{url:"icons/apple-launch-2048x2732.png",revision:"731e017d09370a8a9824960c6784315a"},{url:"icons/apple-launch-750x1334.png",revision:"ea5fb9efd722b1b2167c818a4ae79657"},{url:"icons/apple-launch-828x1792.png",revision:"f355a0596f2be162748598d51f472abc"},{url:"icons/favicon-128x128.png",revision:"f5e86683d12cab3525a0a517d7c0ac96"},{url:"icons/favicon-16x16.png",revision:"897ef8381b1d21210f366f520c5305a5"},{url:"icons/favicon-32x32.png",revision:"c8e338a85627c69354cdb3997d8c3726"},{url:"icons/favicon-96x96.png",revision:"6e7efb36b8ecfce027bde39165162f20"},{url:"icons/icon-128x128.png",revision:"f5e86683d12cab3525a0a517d7c0ac96"},{url:"icons/icon-192x192.png",revision:"28405c2ed80174e3aff611f85d8f6a1b"},{url:"icons/icon-256x256.png",revision:"15d137360b63084a3e13643c43c1f968"},{url:"icons/icon-384x384.png",revision:"a091837c1a1a3ad688a55cb33665bcb7"},{url:"icons/icon-512x512.png",revision:"5cee70f86ca0dc64663404b3f5cec332"},{url:"icons/ms-icon-144x144.png",revision:"c6451ad8858c5454dfa635e60dc186c2"},{url:"icons/safari-pinned-tab.svg",revision:"08ba8897eedd7cc5829beb12dd38cf6c"},{url:"index.html",revision:"ef789adb7c6abcd7fd853a7dbe7cc10d"},{url:"logo.png",revision:"329dc889681cb1de73eafe4e45a23212"},{url:"manifest.json",revision:"278a27d7eaf5119ad05aaad6cc763a4e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
