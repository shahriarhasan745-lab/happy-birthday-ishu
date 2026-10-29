// ==========================================
// (the birthday of my addopted child ishaaa)
// ==========================================
const scrapbookData = [
    {
        type: 'standard',
        image1: "jpg1.jpg",
        image2: "jpg2.jpg",
        image3: "jpg3.jpg",
        tag: "Chapter 1: Beautiful Beginning 🎈",
        wish: "Happy Birthday to my favorite human! God knows how I tolerate your dramatic behavior every single day."
    },
    {
        type: 'standard',
        image1: "jpg4.jpg",
        image2: "jpg5.jpg",
        image3: "jpg6.jpg",
        tag: "Chapter 2: Vintage Classic 🎂",
        wish: "Don't count the candles, you're officially getting old & wise... well, mostly just old!"
    },
    {
        type: 'standard',
        image1: "jpg7.jpg",
        image2: "jpg8.jpg",
        image3: "jpg9.jpg",
        tag: "Chapter 3: Partner in Crime 🕵️‍♂️",
        wish: "Another year of us making terrible decisions together and blaming each other afterwards!"
    },
    {
        type: 'standard',
        image1: "jpg10.jpg",
        image2: "jpg11.jpg",
        image3: "jpg12.jpg",
        tag: "Chapter 4: Drama Queen 🎉",
        wish: "Happy Birthday! May your brain cells multiply as fast as your weird facial expressions!"
    },
    {
        type: 'standard',
        image1: "jpg13.jpg",
        image2: "jpg14.jpg",
        image3: "jpg15.jpg",
        tag: "Chapter 5: Unstoppable Vibes ⚡",
        wish: "You look decent today, probably because of the lighting or 10 photo filters! 😜"
    },
    {
        type: 'standard',
        image1: "jpg1.jpg",
        image2: "jpg3.jpg",
        image3: "jpg5.jpg",
        tag: "Chapter 6: Good Times 🌟",
        wish: "Here's to another year of hearing your endless gossip and pretending to actually listen!"
    },
    {
        type: 'standard',
        image1: "jpg7.jpg",
        image2: "jpg9.jpg",
        image3: "jpg11.jpg",
        tag: "Chapter 7: Sweet Memories 🍭",
        wish: "May your day be as colorful as your sudden mood swings!"
    },
    {
        type: 'standard',
        image1: "jpg13.jpg",
        image2: "jpg15.jpg",
        image3: "jpg2.jpg",
        tag: "Chapter 8: Dreamer 🌈",
        wish: "Dream big, think smart... but please fix your sleeping schedule first!"
    },
    {
        type: 'standard',
        image1: "jpg4.jpg",
        image2: "jpg6.jpg",
        image3: "jpg8.jpg",
        tag: "Chapter 9: Golden Memories 🏆",
        wish: "Eat as much cake as you want today, you can start your 'imaginary diet' tomorrow!"
    },
    {
        type: 'standard',
        image1: "jpg10.jpg",
        image2: "jpg12.jpg",
        image3: "jpg14.jpg",
        tag: "Chapter 10: Chaos Crew ✨",
        wish: "Shoutout to the only person who can match my level of madness every single day."
    },
    {
        type: 'standard',
        image1: "jpg1.jpg",
        image2: "jpg5.jpg",
        image3: "jpg9.jpg",
        tag: "Chapter 11: Crazy Adventures 🚀",
        wish: "Life is full of mysteries, and how you survived this long is definitely one of them!"
    },
    {
        type: 'standard',
        image1: "jpg2.jpg",
        image2: "jpg7.jpg",
        image3: "jpg12.jpg",
        tag: "Chapter 12: Big Smiles 😊",
        wish: "Keep smiling like an idiot today! It confuses people and makes them wonder what you're up to."
    },
    {
        type: 'standard',
        image1: "jpg3.jpg",
        image2: "jpg8.jpg",
        image3: "jpg13.jpg",
        tag: "Chapter 13: Vintage Era 🌸",
        wish: "Looking at these old pictures reminds me of how weird we both were... wait, we still are!"
    },
    {
        type: 'standard',
        image1: "jpg4.jpg",
        image2: "jpg11.jpg",
        image3: "jpg15.jpg",
        tag: "Chapter 14: Partners in Crime 💖",
        wish: "We will always be best friends because you already know way too many embarrassing secrets about me!"
    },
    {
        type: 'standard',
        image1: "jpg5.jpg",
        image2: "jpg10.jpg",
        image3: "jpg14.jpg",
        tag: "Chapter 15: Grand Finale 🎆",
        wish: "Happy Birthday! Hope your day is as awesome and noisy as you are. Treat de ekhon jaldi! 🎉"
    },
    // DEDICATED ROASTING FUNNY MEMORIES PAGE (CHAPTER 16)
    {
        type: 'funnyCollage',
        funnyImages: [
            "Screenshot 2026-10-29 212857.png",
            "Screenshot 2026-10-29 212907.png",
            "Screenshot 2026-10-29 212918.png",
            "Screenshot 2026-10-29 212933.png",
            "Screenshot 2026-10-29 212950.png"
        ],
        tag: "Chapter 16: The Crime Scene 🤪",
        wish: "Warning: High level illegal facial expressions ahead! Delete korar jonne bribe kora lagbe, cheap e chharbo na! 😂 🔥"
    }
];

let currentPage = 0;
let isAutoplay = true;
let autoplayTimer = null;
let typingInterval = null;
let isMusicPlaying = false;

// Direct Overlay Dismiss & Start Scrapbook
function startScrapbook() {
    const overlay = document.getElementById('welcome-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }

    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.play().then(() => {
            isMusicPlaying = true;
            updateMusicIcon();
        }).catch(e => {
            console.log("Audio autoplay prevented:", e);
            isMusicPlaying = false;
            updateMusicIcon();
        });
    }

    createFloatingElements();
    renderPages();
    showPage(0);
    startAutoplay();
}

function toggleMusic() {
    const audio = document.getElementById('bg-music');
    if (!audio) return;
    if (isMusicPlaying) {
        audio.pause();
        isMusicPlaying = false;
    } else {
        audio.play().then(() => {
            isMusicPlaying = true;
            updateMusicIcon();
        }).catch(e => console.log("Audio play error:", e));
    }
    updateMusicIcon();
}

function updateMusicIcon() {
    const icon = document.getElementById('musicIcon');
    if (!icon) return;
    if (isMusicPlaying) {
        icon.className = 'fa-solid fa-music text-lg md:text-xl text-rose-700 animate-pulse';
    } else {
        icon.className = 'fa-solid fa-volume-xmark text-lg md:text-xl text-amber-900/50';
    }
}

function createFloatingElements() {
    const container = document.getElementById('ambient-container');
    if (!container) return;
    container.innerHTML = '';
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

function renderPages() {
    const wrapper = document.getElementById('pages-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    
    const totalPagesEl = document.getElementById('total-pages');
    if (totalPagesEl) totalPagesEl.innerText = scrapbookData.length;

    scrapbookData.forEach((data, index) => {
        const pageEl = document.createElement('div');
        pageEl.id = `page-${index}`;
        pageEl.className = `scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 ${index === 0 ? 'page-active' : 'page-hidden-next'}`;

        if (data.type === 'funnyCollage') {
            pageEl.innerHTML = `
                <div class="w-full md:w-3/5 h-full flex flex-col justify-between relative overflow-hidden p-1">
                    <h3 class="text-center font-bold text-lg md:text-xl text-amber-900 border-b border-amber-800/30 pb-1">
                        😜 Funny Hall of Fame Collage 📸
                    </h3>
                    <div class="funny-grid grid grid-cols-3 gap-2 my-auto p-2">
                        ${data.funnyImages.map((imgSrc, i) => `
                            <div class="funny-frame bg-white p-1.5 shadow-md border border-amber-200 rounded transform hover:scale-110 hover:z-30 transition duration-300 ${i === 0 ? 'col-span-2 row-span-2' : ''}">
                                <div class="w-full ${i === 0 ? 'h-32 md:h-44' : 'h-16 md:h-20'} overflow-hidden rounded bg-amber-100">
                                    <img src="${imgSrc}" alt="Funny Memory" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150?text=Funny+Pic'">
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
            // 3 Photos per Page Layout
            pageEl.innerHTML = `
                <div class="w-full md:w-1/2 flex items-center justify-center relative h-64 md:h-full">
                    <!-- Photo 1 -->
                    <div class="absolute left-1 top-2 w-32 md:w-38 bg-white p-1.5 pb-5 shadow-xl border border-amber-200 rounded transform -rotate-6 z-10 hover:scale-110 hover:z-40 transition">
                        <div class="w-full h-24 md:h-30 overflow-hidden bg-amber-100 rounded">
                            <img src="${data.image1}" alt="Memory A" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150?text=Photo'">
                        </div>
                    </div>
                    <!-- Photo 2 -->
                    <div class="absolute right-1 top-4 w-32 md:w-38 bg-white p-1.5 pb-5 shadow-xl border border-amber-200 rounded transform rotate-6 z-20 hover:scale-110 hover:z-40 transition">
                        <div class="w-full h-24 md:h-30 overflow-hidden bg-amber-100 rounded">
                            <img src="${data.image2}" alt="Memory B" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150?text=Photo'">
                        </div>
                    </div>
                    <!-- Photo 3 -->
                    <div class="absolute bottom-1 left-1/4 w-34 md:w-42 bg-white p-1.5 pb-6 shadow-2xl border border-amber-200 rounded transform -rotate-2 z-30 hover:scale-110 hover:z-40 transition">
                        <div class="w-full h-24 md:h-30 overflow-hidden bg-amber-100 rounded">
                            <img src="${data.image3}" alt="Memory C" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150?text=Photo'">
                        </div>
                        <div class="mt-1 text-center text-amber-950 text-xs md:text-sm font-bold truncate">
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
                            ~ Stay Roasted 🔥
                        </span>
                    </div>
                </div>
            `;
        }
        wrapper.appendChild(pageEl);
    });
}

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

    const pageNumEl = document.getElementById('page-num');
    if (pageNumEl) pageNumEl.innerText = pageIndex + 1;

    triggerParticleBurst();
    animateHandwriting(pageIndex);
}

function triggerParticleBurst() {
    const container = document.getElementById('particle-container');
    if (!container) return;
    container.innerHTML = '';
    const symbols = ['💖', '✨', '⭐', '🎈', '🤪', '🔥'];
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

function changePage(direction) {
    currentPage += direction;
    if (currentPage >= scrapbookData.length) currentPage = 0;
    if (currentPage < 0) currentPage = scrapbookData.length - 1;

    showPage(currentPage);

    if (isAutoplay) {
        restartAutoplayTimer();
    }
}

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
    if (!playIcon || !playText) return;

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

// Fallback direct event listener for overlay
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('open-gift-btn');
    if (btn) {
        btn.addEventListener('click', startScrapbook);
    }
});
