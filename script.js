// ==========================================
// CONFIGURATION: 10 Images & Birthday Wishes
// ==========================================
const scrapbookData = [
    {
        image: "images/pic1.jpg", // Tomar image path/folder name
        tag: "Chapter 1: The Beginning 🎈",
        wish: "Happy Birthday to my favorite human! Cheers to another year of making questionable life choices together and surviving to tell the tale."
    },
    {
        image: "images/pic2.jpg",
        tag: "Chapter 2: Eternal Youth 🎂",
        wish: "Don't count the candles, just enjoy the glow! You're not getting older, you're just becoming a vintage classic edition."
    },
    {
        image: "images/pic3.jpg",
        tag: "Chapter 3: Partner in Crime 🕵️‍♂️",
        wish: "They say wisdom comes with age... guess that means you're still a toddler! Wishing you a day filled with laughter and zero adult responsibilities."
    },
    {
        image: "images/pic4.jpg",
        tag: "Chapter 4: Party Animal 🎉",
        wish: "Another year around the sun! May your hair stay full, your back stay pain-free, and your birthday cake stay enormous."
    },
    {
        image: "images/pic5.jpg",
        tag: "Chapter 5: Unstoppable ⚡",
        wish: "Keep smiling while you still have all your original teeth! Just kidding—you're looking as gorgeous and vibrant as ever. Have the best day!"
    },
    {
        image: "images/pic6.jpg",
        tag: "Chapter 6: Good Vibes Only 🌟",
        wish: "Happy Birthday! I was going to roast you, but the fire hazard from all your birthday candles is already dangerous enough."
    },
    {
        image: "images/pic7.jpg",
        tag: "Chapter 7: Sweet Memories 🍭",
        wish: "Here's to a person who is smart, charming, funny, and reminds me a lot of myself! May your birthday be as awesome as you are."
    },
    {
        image: "images/pic8.jpg",
        tag: "Chapter 8: Dreamer 🌈",
        wish: "Age is merely the number of years the world has been enjoying your presence. Keep shining and spreading your infectious joy!"
    },
    {
        image: "images/pic9.jpg",
        tag: "Chapter 9: Golden Times 🏆",
        wish: "May your day be filled with lots of love, endless happiness, and cake—mostly cake. You deserve all the good things today and always."
    },
    {
        image: "images/pic10.jpg",
        tag: "Chapter 10: Grand Finale 🎆",
        wish: "Happy Birthday my friend! May this new chapter bring you endless adventures, boundless joy, and all the success in the world. Cheers!"
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

    // Play Background Song
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
        icon.className = 'fa-solid fa-music text-xl text-rose-700 animate-pulse';
    } else {
        icon.className = 'fa-solid fa-volume-xmark text-xl text-amber-900/50';
    }
}

// Generate ambient floating elements in background
function createFloatingElements() {
    const container = document.getElementById('ambient-container');
    const icons = ['✨', '🎈', '⭐', '💖', '🎂', '🌸', '💫'];
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

// Render 10 Scrapbook Pages dynamically
function renderPages() {
    const wrapper = document.getElementById('pages-wrapper');
    wrapper.innerHTML = '';

    scrapbookData.forEach((data, index) => {
        const pageEl = document.createElement('div');
        pageEl.id = `page-${index}`;
        pageEl.className = `scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index === 0 ? 'page-active' : 'page-hidden-next'}`;

        pageEl.innerHTML = `
            <!-- Left Column: Polaroid Photo -->
            <div class="w-full md:w-1/2 flex flex-col items-center justify-center relative">
                <!-- Tape Decoration -->
                <div class="washi-tape absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 z-20 rotate-[-2deg]"></div>
                
                <div class="polaroid w-full max-w-[280px] md:max-w-[310px]">
                    <div class="w-full h-48 md:h-60 overflow-hidden bg-amber-100 rounded shadow-inner">
                        <img src="${data.image}" alt="Memory ${index + 1}" class="w-full h-full object-cover hover:scale-110 transition duration-500">
                    </div>
                    <div class="mt-3 text-center text-amber-950 text-xl font-bold tracking-wide">
                        ${data.tag}
                    </div>
                </div>
            </div>

            <!-- Right Column: Animated Handwriting Text -->
            <div class="w-full md:w-1/2 flex flex-col justify-center h-full text-left relative pl-2 md:pl-4">
                <div class="text-amber-900/30 text-5xl absolute -top-4 left-0 font-serif">“</div>
                
                <div id="text-target-${index}" class="text-2xl md:text-3xl lg:text-4xl text-amber-900 leading-relaxed font-semibold min-h-[140px] flex items-center">
                    <!-- Typing animation text goes here -->
                </div>
                
                <div class="mt-4 text-right">
                    <span class="inline-block border-b-2 border-amber-800/40 text-amber-800 text-lg md:text-xl italic">
                        ~ Forever & Always 💕
                    </span>
                </div>
            </div>
        `;
        wrapper.appendChild(pageEl);
    });
}

// Display page with extreme particle burst effect
function showPage(pageIndex) {
    const totalPages = scrapbookData.length;
    
    for (let i = 0; i < totalPages; i++) {
        const page = document.getElementById(`page-${i}`);
        if (i === pageIndex) {
            page.className = 'scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 page-active';
        } else if (i < pageIndex) {
            page.className = 'scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 page-hidden-prev';
        } else {
            page.className = 'scrapbook-page absolute inset-0 w-full h-full bg-[#faf4e1] border-2 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 page-hidden-next';
        }
    }

    document.getElementById('page-num').innerText = pageIndex + 1;
    triggerParticleBurst();
    animateHandwriting(pageIndex);
}

// Particle Burst Effect on Page Turn
function triggerParticleBurst() {
    const container = document.getElementById('particle-container');
    const symbols = ['💖', '✨', '⭐', '🎈'];
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

// Real-time typewriter ink writing simulation
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
    }, 30); // Writing speed
}

// Change Page (Next / Prev)
function changePage(direction) {
    currentPage += direction;
    if (currentPage >= scrapbookData.length) currentPage = 0;
    if (currentPage < 0) currentPage = scrapbookData.length - 1;

    showPage(currentPage);

    if (isAutoplay) {
        restartAutoplayTimer();
    }
}

// Autoplay features
function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
        changePage(1);
    }, 7000); // 7 seconds per page
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
