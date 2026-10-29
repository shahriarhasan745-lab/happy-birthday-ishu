// ==========================================
// CONFIGURATION: 16 Pages (Including Final Funny Memory Collage Page)
// ==========================================
const scrapbookData = [
    {
        type: 'standard',
        image1: "868403049_2034146983938570_365889107342376931_n.jpg",
        image2: "867070386_975619545618629_3336066903520033502_n.jpg",
        image3:"jpg1",
        tag: "Chapter 1: Beautiful Beginning 🎈",
        wish: "Happy Birthday to my favorite DAUGHTER! Cheers to another year of making questionable life choices together."
    },
    {
        type: 'standard',
        image1: "865862834_1496768158985678_6985069026965173472_n.jpg",
        image2: "865739118_1175957871661541_6265686729919635046_n.jpg",
        image3:"jpg2",
        tag: "Chapter 2: Eternal Youth 🎂",
        wish: "Don't count the candles, just enjoy the glow! You're not getting older(CUZ YOU ARE MY DAUGHTER), you're becoming a vintage classic edition."
    },
    {
        type: 'standard',
        image1: "864178927_1016512707515714_4418618544865811491_n.jpg",
        image2: "864121715_2719584235125921_7176428879991977859_n.jpg",
        tag: "Chapter 3: Partner in Crime 🕵️‍♂️",
        wish: "Wishing you a day filled with endless laughter, zero responsibilities, and unlimited happy memories!"
    },
    {
        type: 'standard',
        image1: "862948692_1113680281040082_49915280495487114_n.jpg",
        image2: "862653981_1630008375522450_1093298957683069808_n.jpg",
        tag: "Chapter 4: Party Animal 🎉",
        wish: "Another year around the sun! May your smile stay bright, your heart stay full, and your cake stay huge!"
    },
    {
        type: 'standard',
        image1: "862653981_1630008375522450_1093298957683069808_n (1).jpg",
        image2: "861533507_1795156331723948_5146577588199318099_n.jpg",
        tag: "Chapter 5: Unstoppable Vibes ⚡",
        wish: "Keep smiling and shining bright as always! You're looking as gorgeous and vibrant as ever today."
    },
    {
        type: 'standard',
        image1: "859884538_2110975712857755_6045011585703822527_n.jpg",
        image2: "857187213_2324266725003230_8858900254570656757_n.jpg",
        tag: "Chapter 6: Good Times 🌟",
        wish: "Happy Birthday! Here's to more secret jokes, late-night chats, and unforgettable moments together."
    },
    {
        type: 'standard',
        image1: "857187213_2324266725003230_8858900254570656757_n (1).jpg",
        image2: "856690705_1149361057431510_7930650617370625869_n.jpg",
        tag: "Chapter 7: Sweet Memories 🍭",
        wish: "May your day be as sweet, cheerful, and charming as you are to everyone around you!"
    },
    {
        type: 'standard',
        image1: "856690705_1149361057431510_7930650617370625869_n (1).jpg",
        image2: "868403049_2034146983938570_365889107342376931_n.jpg",
        tag: "Chapter 8: Dreamer & Doer 🌈",
        wish: "Age is merely a number! Keep chasing your big dreams and spreading your infectious joy everywhere."
    },
    {
        type: 'standard',
        image1: "867070386_975619545618629_3336066903520033502_n.jpg",
        image2: "865862834_1496768158985678_6985069026965173472_n.jpg",
        tag: "Chapter 9: Golden Memories 🏆",
        wish: "May your year ahead be filled with lots of love, success, and tons of delicious birthday cake!"
    },
    {
        type: 'standard',
        image1: "865739118_1175957871661541_6265686729919635046_n.jpg",
        image2: "864178927_1016512707515714_4418618544865811491_n.jpg",
        tag: "Chapter 10: Pure Happiness ✨",
        wish: "To a wonderful person who brings so much warmth and happiness to our lives every single day!"
    },
    {
        type: 'standard',
        image1: "864121715_2719584235125921_7176428879991977859_n.jpg",
        image2: "862948692_1113680281040082_49915280495487114_n.jpg",
        tag: "Chapter 11: Crazy Adventures 🚀",
        wish: "Life is an adventure, and having you along makes it 100 times better! Happy Birthday!"
    },
    {
        type: 'standard',
        image1: "862653981_1630008375522450_1093298957683069808_n.jpg",
        image2: "861533507_1795156331723948_5146577588199318099_n.jpg",
        tag: "Chapter 12: Radiant Smiles 😊",
        wish: "Never lose that innocent smile of yours. Hope your birthday brings you as much joy as you give to others."
    },
    {
        type: 'standard',
        image1: "859884538_2110975712857755_6045011585703822527_n.jpg",
        image2: "857187213_2324266725003230_8858900254570656757_n.jpg",
        tag: "Chapter 13: Best Times 🌸",
        wish: "Looking back at all these pictures makes me realize how lucky I am to share these memories with you!"
    },
    {
        type: 'standard',
        image1: "856690705_1149361057431510_7930650617370625869_n.jpg",
        image2: "868403049_2034146983938570_365889107342376931_n.jpg",
        tag: "Chapter 14: Forever Friends 💖",
        wish: "No matter how many years pass, we'll always remain as weird and crazy together as day one!"
    },
    {
        type: 'standard',
        image1: "867070386_975619545618629_3336066903520033502_n.jpg",
        image2: "865862834_1496768158985678_6985069026965173472_n.jpg",
        tag: "Chapter 15: Grand Finale 🎆",
        wish: "Wishing you the absolute best birthday ever! May all your dreams come true this year! Cheers! 🎉"
    },
    // DEDICATED FUNNY MOMENTS & MEMORY WALL PAGE
    {
        type: 'funnyCollage',
        funnyImages: [
            "Screenshot 2026-10-29 212857.png",
            "Screenshot 2026-10-29 212907.png",
            "Screenshot 2026-10-29 212918.png",
            "Screenshot 2026-10-29 212933.png",
            "Screenshot 2026-10-29 212950.png"
        ],
        tag: "Chapter 16: The Hall of Fame 🤪",
        wish: "And finally... the illegal & hilarious moments we promise never to delete! Stay funny and keep smiling forever! 😂 ❤️"
    }
];

// State variables
let currentPage = 0;
let isAutoplay = true;
let autoplayTimer = null;
let typingInterval = null;
let isMusicPlaying = false;

// Start Scrapbook from Welcome Overlay
function startScrapbook() {
    const overlay = document.getElementById('welcome-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 700);

    const audio = document.getElementById('bg-music');
    audio.play().then(() => {
        isMusicPlaying = true;
        updateMusicIcon();
    }).catch(e => console.log("Audio autoplay prevented by browser:", e));

    createFloatingElements();
    renderPages();
    showPage(0);
    startAutoplay();
}

// Toggle Background Music
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    if (isMusicPlaying) {
        audio.pause();
        isMusicPlaying = false;
    } else {
        audio.play();
        isMusicPlaying = true;
    }
    updateMusicIcon();
}

function updateMusicIcon() {
    const icon = document.getElementById('musicIcon');
    if (isMusicPlaying) {
        icon.className = 'fa-solid fa-music text-lg md:text-xl text-rose-700 animate-pulse';
    } else {
        icon.className = 'fa-solid fa-volume-xmark text-lg md:text-xl text-amber-900/50';
    }
}

// Generate ambient floating elements
function createFloatingElements() {
    const container = document.getElementById('ambient-container');
    const icons = ['✨', '🎈', '⭐', '💖', '🎂', '🌸', '💫', '🤪'];
    const count = 25;

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element text-amber-700/40 opacity-50';
        el.innerText = icons[Math.floor(Math.random() * icons.length)];
        el.style.left = `${Math.random() * 100}vw`;
        el.style.fontSize = `${Math.random() * 22 + 16}px`;
        el.style.animationDuration = `${Math.random() * 12 + 8}s`;
        el.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(el);
    }
}

// Render Pages
function renderPages() {
    const wrapper = document.getElementById('pages-wrapper');
    wrapper.innerHTML = '';
    document.getElementById('total-pages').innerText = scrapbookData.length;

    scrapbookData.forEach((data, index) => {
        const pageEl = document.createElement('div');
        pageEl.id = `page-${index}`;
        pageEl.className = `scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 ${index === 0 ? 'page-active' : 'page-hidden-next'}`;

        if (data.type === 'funnyCollage') {
            // Render Dedicated Funny Memory Collage Wall
            pageEl.innerHTML = `
                <div class="w-full md:w-3/5 h-full flex flex-col justify-between relative overflow-hidden p-1">
                    <h3 class="text-center font-bold text-lg md:text-xl text-amber-900 border-b border-amber-800/30 pb-1">
                        😜 Funny Hall of Fame Collage 📸
                    </h3>
                    <div class="funny-grid grid grid-cols-3 gap-2 my-auto p-2">
                        ${data.funnyImages.map((imgSrc, i) => `
                            <div class="funny-frame bg-white p-1.5 shadow-md border border-amber-200 rounded transform hover:scale-125 hover:z-30 transition duration-300 ${i === 0 ? 'col-span-2 row-span-2' : ''}">
                                <div class="w-full h-24 ${i === 0 ? 'md:h-48 h-32' : 'md:h-20'} overflow-hidden rounded">
                                    <img src="${imgSrc}" alt="Funny Memory" class="w-full h-full object-cover">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="w-full md:w-2/5 flex flex-col justify-between h-full text-left relative py-2 pr-2 z-20">
                    <div class="text-amber-900/25 text-4xl font-serif leading-none select-none mb-1">“</div>
                    <div class="flex-1 flex items-center">
                        <div id="text-target-${index}" class="text-xl md:text-2xl text-amber-900 leading-relaxed font-semibold min-h-[120px] w-full"></div>
                    </div>
                    <div class="text-right mt-2">
                        <span class="inline-block border-b-2 border-amber-800/40 text-amber-800 text-base md:text-lg italic">
                            ~ Best Friends Forever 🤪❤️
                        </span>
                    </div>
                </div>
            `;
        } else {
            // Render Standard 2-Photo Page Layout
            pageEl.innerHTML = `
                <div class="w-full md:w-1/2 flex items-center justify-center relative h-64 md:h-full">
                    <div class="photo-frame-1 absolute left-2 md:left-4 top-4 w-36 md:w-44 bg-white p-2 pb-6 shadow-xl border border-amber-200 rounded z-10">
                        <div class="w-full h-32 md:h-38 overflow-hidden bg-amber-100 rounded">
                            <img src="${data.image1}" alt="Memory A" class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="photo-frame-2 absolute right-2 md:right-6 bottom-4 w-38 md:w-48 bg-white p-2 pb-6 shadow-2xl border border-amber-200 rounded z-20">
                        <div class="w-full h-36 md:h-42 overflow-hidden bg-amber-100 rounded">
                            <img src="${data.image2}" alt="Memory B" class="w-full h-full object-cover">
                        </div>
                        <div class="mt-1 text-center text-amber-950 text-sm md:text-base font-bold">
                            ${data.tag}
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/2 flex flex-col justify-between h-full text-left relative py-2 pr-2 z-20">
                    <div class="text-amber-900/25 text-4xl font-serif leading-none select-none mb-1">“</div>
                    <div class="flex-1 flex items-center">
                        <div id="text-target-${index}" class="text-xl md:text-2xl lg:text-3xl text-amber-900 leading-relaxed font-semibold min-h-[120px] w-full"></div>
                    </div>
                    <div class="text-right mt-2">
                        <span class="inline-block border-b-2 border-amber-800/40 text-amber-800 text-base md:text-lg italic">
                            ~ Forever & Always 💕
                        </span>
                    </div>
                </div>
            `;
        }
        wrapper.appendChild(pageEl);
    });
}

// Display Page Function
function showPage(pageIndex) {
    const totalPages = scrapbookData.length;
    
    for (let i = 0; i < totalPages; i++) {
        const page = document.getElementById(`page-${i}`);
        if (!page) continue;
        if (i === pageIndex) {
            page.className = 'scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 page-active';
        } else if (i < pageIndex) {
            page.className = 'scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 page-hidden-prev';
        } else {
            page.className = 'scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 page-hidden-next';
        }
    }

    document.getElementById('page-num').innerText = pageIndex + 1;
    triggerParticleBurst();
    animateHandwriting(pageIndex);
}

// Particle Burst Effect on Page Turn
function triggerParticleBurst() {
    const container = document.getElementById('particle-container');
    const symbols = ['💖', '✨', '⭐', '🎈', '🤪'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle text-xl';
        p.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 250 + 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        p.style.left = `${centerX}px`;
        p.style.top = `${centerY}px`;
        p.style.setProperty('--tx', `${tx}px`);
        p.style.setProperty('--ty', `${ty}px`);
        p.style.animationDuration = `${Math.random() * 0.4 + 0.6}s`;

        container.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
}

// Real-time Typewriter Effect
function animateHandwriting(pageIndex) {
    if (typingInterval) clearInterval(typingInterval);

    const target = document.getElementById(`text-target-${pageIndex}`);
    if (!target) return;

    const fullText = scrapbookData[pageIndex].wish;
    target.innerHTML = '';
    target.classList.add('typing-cursor');

    let charIndex = 0;
    typingInterval = setInterval(() => {
        if (charIndex < fullText.length) {
            target.innerHTML = fullText.substring(0, charIndex + 1);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            target.classList.remove('typing-cursor');
        }
    }, 30);
}

// Page Navigation
function changePage(direction) {
    currentPage += direction;
    if (currentPage >= scrapbookData.length) currentPage = 0;
    if (currentPage < 0) currentPage = scrapbookData.length - 1;

    showPage(currentPage);

    if (isAutoplay) {
        restartAutoplayTimer();
    }
}

// Autoplay
function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
        changePage(1);
    }, 7000);
}

function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
}

function restartAutoplayTimer() {
    stopAutoplay();
    startAutoplay();
}

function toggleAutoplay() {
    isAutoplay = !isAutoplay;
    const playIcon = document.getElementById('playIcon');
    const playText = document.getElementById('playText');

    if (isAutoplay) {
        playIcon.className = 'fa-solid fa-pause';
        playText.innerText = 'Auto';
        startAutoplay();
    } else {
        playIcon.className = 'fa-solid fa-play';
        playText.innerText = 'Manual';
        stopAutoplay();
    }
}
