if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const d=e=>c(e,f),r={module:{uri:f},exports:n,require:d};s[f]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AppointmentsIndex.0f58385e.js",revision:"51c9b33fd1d84d3c164000a646aca51e"},{url:"assets/axios.5e3041b9.js",revision:"21beb484f983f97c13f4d18890704fc6"},{url:"assets/AyudaIndex.6e58226e.js",revision:"353074d920b00fc971560e186646cf64"},{url:"assets/ClosePopup.c56c0674.js",revision:"f4046f84f95657ecf1c22f6d6b69579e"},{url:"assets/ColegiosIndex.df4f326f.js",revision:"ce79e5065e7edabcf32fdea1b4ef6558"},{url:"assets/ErrorNotFound.1b869e8d.js",revision:"c5e0edf8ef8b0c657f3f9981c298278d"},{url:"assets/fa-brands-400.3a8924cd.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"assets/fa-brands-400.5656d596.ttf",revision:"1931427c23716bb4ff98d03627f7137c"},{url:"assets/fa-regular-400.2bccecf0.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"assets/fa-regular-400.5d02dc9b.ttf",revision:"a0cc1c8265e3163aa654a5284ea11ace"},{url:"assets/fa-solid-900.9fc85f3a.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"},{url:"assets/fa-solid-900.fbbf06d7.ttf",revision:"25914cfeafced317e1a0372187fbb2b9"},{url:"assets/fa-v4compatibility.09663a36.ttf",revision:"71808e147dc6d82c198a4ba292c0cb69"},{url:"assets/fa-v4compatibility.4d4a2d7f.woff2",revision:"c9e50ccabe9e36f370272197595ea1e5"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.c9e35088.js",revision:"c6ef44204b6444f76df7fcd35b8ece03"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.138ba591.css",revision:"be67bf743dbbe2b3ca884edc07296578"},{url:"assets/index.4c944c28.js",revision:"7182ff532b8e7b368e6b434f490a66b9"},{url:"assets/IndexPage.84b8b47d.css",revision:"897d516b0337d52346ca78cc7be99604"},{url:"assets/IndexPage.a902f675.js",revision:"b2ba0a2b8036edceecc2c17c05a02007"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.9fa1738d.js",revision:"1afab6d90b0baf31568070bdf258dce0"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.9a7ed765.js",revision:"7f3f10ced6d1da535f780425b8665cfb"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProtocolosIndex.be706c49.js",revision:"274e09e3fb067759d31d060aa82d28aa"},{url:"assets/QBtnDropdown.ec9cef97.js",revision:"952f6a8ba7fdc12703adf580f280b4ac"},{url:"assets/QEditor.c64a0300.js",revision:"6845fb03f9276068f88522426ac6b169"},{url:"assets/QForm.a9cc9ba5.js",revision:"5a73bddea1929916e3d82fb3fd22049e"},{url:"assets/QImg.f72e4f17.js",revision:"c1c34152122b038c13fa006e4c6e20b4"},{url:"assets/QList.d16d784f.js",revision:"2975590d1c9d0841542d6be5a75b4d80"},{url:"assets/QMenu.97e23524.js",revision:"395c42a73590dda7e0fe3c2e6079634b"},{url:"assets/QPage.6d5a3cd5.js",revision:"86d81f16bef161fcf5d3346bced36502"},{url:"assets/QPageContainer.fdc94850.js",revision:"29907bca7984fc03ca9adbd272c9bb50"},{url:"assets/QSpace.c7ad135b.js",revision:"e083b27d24403a0d3c93d709aa4c1437"},{url:"assets/QTable.92166c4c.js",revision:"0474edaab9f1c33b8f6c21c60c219b51"},{url:"assets/ReportesIndex.670b9d96.js",revision:"8c0e6b5d323a83d696c5af45edf559c4"},{url:"assets/StudentsHistory.4047b268.js",revision:"b591febd22c55a5ffe3daf4553bdd0de"},{url:"assets/StudentsHistory.f53f564e.css",revision:"6aa6b03c04084ecf22cebf83a5c3db6c"},{url:"assets/StudentsIndex.ebd30ed7.js",revision:"850c40ac6bf3d1b91e06f94ec55a6cf9"},{url:"assets/use-fullscreen.93df3499.js",revision:"3e45d8f9347917ab7265e6de89ce5950"},{url:"assets/UsersIndex.ea394e98.js",revision:"7fc601e2680640ada0ffb141497c314d"},{url:"favicon.ico",revision:"63611c8a591a42c01940c4abc36aa87d"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"9b183e47131f6704c2f1c36ed0cfd427"},{url:"icons/apple-icon-152x152.png",revision:"d75b9696bc3bd28d270efd9dc4d2283b"},{url:"icons/apple-icon-167x167.png",revision:"0023f5b26b36ae2abcce55b79a13ef7a"},{url:"icons/apple-icon-180x180.png",revision:"177c0bdb2c9ce62f3f49dc312a479ca7"},{url:"icons/apple-launch-1080x2340.png",revision:"90cf718ecd60f54ccdf0c59e12df6931"},{url:"icons/apple-launch-1125x2436.png",revision:"a64b0e41f4ee16752f80eb2a1b4e6909"},{url:"icons/apple-launch-1170x2532.png",revision:"e716dd16b4b5fa00c0d6312e58b26dd7"},{url:"icons/apple-launch-1179x2556.png",revision:"8ba4ff2fda202fe17cc8827983c87197"},{url:"icons/apple-launch-1242x2208.png",revision:"4ba5f82c0beeac7684ae83994bca42ec"},{url:"icons/apple-launch-1242x2688.png",revision:"24c236262422abba36ca94783c39146a"},{url:"icons/apple-launch-1284x2778.png",revision:"989c110b3de513a58bb31a0d393d7350"},{url:"icons/apple-launch-1290x2796.png",revision:"0716d2050bad25455cef1fdfd9aceed7"},{url:"icons/apple-launch-1536x2048.png",revision:"0cb478e6cd6eba1871f4bb9994bbcb85"},{url:"icons/apple-launch-1620x2160.png",revision:"6dad8a31b8f4dcdb973619863e585554"},{url:"icons/apple-launch-1668x2224.png",revision:"d169ded14e1b866a3ba8336ca52bd224"},{url:"icons/apple-launch-1668x2388.png",revision:"18c63c3498e417566877bbc6397c2469"},{url:"icons/apple-launch-2048x2732.png",revision:"731e017d09370a8a9824960c6784315a"},{url:"icons/apple-launch-750x1334.png",revision:"ea5fb9efd722b1b2167c818a4ae79657"},{url:"icons/apple-launch-828x1792.png",revision:"f355a0596f2be162748598d51f472abc"},{url:"icons/favicon-128x128.png",revision:"f5e86683d12cab3525a0a517d7c0ac96"},{url:"icons/favicon-16x16.png",revision:"897ef8381b1d21210f366f520c5305a5"},{url:"icons/favicon-32x32.png",revision:"c8e338a85627c69354cdb3997d8c3726"},{url:"icons/favicon-96x96.png",revision:"6e7efb36b8ecfce027bde39165162f20"},{url:"icons/icon-128x128.png",revision:"f5e86683d12cab3525a0a517d7c0ac96"},{url:"icons/icon-192x192.png",revision:"28405c2ed80174e3aff611f85d8f6a1b"},{url:"icons/icon-256x256.png",revision:"15d137360b63084a3e13643c43c1f968"},{url:"icons/icon-384x384.png",revision:"a091837c1a1a3ad688a55cb33665bcb7"},{url:"icons/icon-512x512.png",revision:"5cee70f86ca0dc64663404b3f5cec332"},{url:"icons/ms-icon-144x144.png",revision:"c6451ad8858c5454dfa635e60dc186c2"},{url:"icons/safari-pinned-tab.svg",revision:"08ba8897eedd7cc5829beb12dd38cf6c"},{url:"index.html",revision:"2ce8ba5cff938af7c839cb5397dea3d8"},{url:"logo.jpeg",revision:"5424d56af914c3cc9110613414725024"},{url:"logo.png",revision:"329dc889681cb1de73eafe4e45a23212"},{url:"logo2.png",revision:"2bcf8ec0e180b6090ae72427dc262583"},{url:"logo3.png",revision:"b6094930030af4c4c0cfea4ee801dc82"},{url:"manifest.json",revision:"278a27d7eaf5119ad05aaad6cc763a4e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
