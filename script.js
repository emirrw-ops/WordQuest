const levels = [
  { word: "ELMA", hint: "Kırmızı, yeşil veya sarı olabilir, tatlı bir meyve", letters: ["L", "E", "A", "M"] },
  { word: "KAPI", hint: "Evin girişinde kullanılır", letters: ["P", "I", "K", "A"] },
  { word: "ARABA", hint: "Dört tekerlekli taşıt", letters: ["B", "A", "R", "A", "A"] },
  { word: "KUTU", hint: "Eşyaları koymak için kullanılır", letters: ["U", "T", "K", "U"] },
  { word: "SAAT", hint: "Zamanı gösterir", letters: ["T", "S", "A", "A"] },
  { word: "EV", hint: "İnsanların yaşadığı yer", letters: ["E", "V"] },
  { word: "BİLGİ", hint: "Öğrenilen şeyler", letters: ["G", "İ", "L", "B", "İ"] },
  { word: "DENİZ", hint: "Büyük su kütlesi", letters: ["D", "E", "Z", "N", "İ"] },
  { word: "YILDIZ", hint: "Gece gökyüzünde parlayan", letters: ["Y", "L", "Z", "D", "I", "I"] },
  { word: "KİTAP", hint: "Okumak için", letters: ["T", "K", "A", "P", "İ"] },

  // 11-20
  { word: "BİSİKLET", hint: "İki tekerlekli ulaşım aracı", letters: ["S", "B", "K", "İ", "L", "E", "T", "İ"] },
  { word: "MUTFAK", hint: "Yemek yapılan yer", letters: ["T", "A", "F", "K", "U", "M"] },
  { word: "ÖĞRENCİ", hint: "Okula giden kişi", letters: ["C", "Ö", "İ", "Ğ", "N", "E", "R"] },
  { word: "KULE", hint: "Yüksek yapı", letters: ["U", "L", "E", "K"] },
  { word: "YEMEK", hint: "İnsanın yediği şey", letters: ["M", "K", "E", "E", "Y"] },
  { word: "BİLGİSAYAR", hint: "Teknoloji cihazı", letters: ["A", "R", "B", "İ", "Y", "S", "L", "G", "A", "İ"] },
  { word: "MÜZİK", hint: "Seslerden oluşan sanat", letters: ["M", "Z", "İ", "K", "Ü"] },
  { word: "TAŞ", hint: "Sert doğal malzeme", letters: ["T", "Ş", "A"] },
  { word: "KIRMIZI", hint: "Bir renk", letters: ["I", "Z", "M", "K", "I", "R", "I"] },
  { word: "SEVİM", hint: "Sevgiyle ilgili", letters: ["S", "M", "İ", "E", "V"] },

  // 21-40
  { word: "ÖĞRETMEN", hint: "Okulda ders veren kişi", letters: ["R", "Ö", "M", "T", "E", "Ğ", "N", "E"] },
  { word: "DOSTLUK", hint: "İki kişi arasındaki iyi ilişki", letters: ["K", "S", "D", "U", "O", "T", "L"] },
  { word: "KUTUP", hint: "Dünyanın en kuzey veya güney noktası", letters: ["K", "P", "U", "T", "U"] },
  { word: "ŞEHİR", hint: "Büyük yerleşim yeri", letters: ["İ", "H", "R", "Ş", "E"] },
  { word: "TARİH", hint: "Geçmişte yaşanan olaylar", letters: ["T", "H", "A", "R", "İ"] },
  { word: "ANLAM", hint: "Bir şeyin ifade ettiği şey", letters: ["N", "L", "M", "A", "A"] },
  { word: "KUTSAL", hint: "Çok değerli, kutsanmış", letters: ["L", "K", "S", "U", "T", "A"] },
  { word: "BAŞARI", hint: "İstenen sonucu elde etme", letters: ["A", "B", "R", "A", "I", "Ş"] },
  { word: "ÜNİVERSİTE", hint: "Yüksek öğrenim kurumu", letters: ["V", "E", "İ", "N", "Ü", "S", "E", "T", "R", "İ"] },
  { word: "FİKİR", hint: "Düşünce", letters: ["İ", "K", "F", "R", "İ"] },

  // 41-60
  { word: "HATIRA", hint: "Anı", letters: ["R", "A", "I", "H", "T", "A"] },
  { word: "KARANLIK", hint: "Işığın olmadığı yer", letters: ["R", "L", "K", "A", "K", "N", "I", "A"] },
  { word: "DENİZCİ", hint: "Denizle uğraşan kişi", letters: ["C", "D", "Z", "İ", "E", "N", "İ", "İ"] },
  { word: "KUŞLAR", hint: "Uçan hayvanlar", letters: ["L", "K", "A", "Ş", "U", "R"] },
  { word: "MÜZİSYEN", hint: "Müzik yapan kişi", letters: ["N", "S", "M", "Y", "Z", "E", "İ", "Ü"] },
  { word: "BAĞLANTI", hint: "İki şey arasındaki ilişki", letters: ["A", "L", "I", "T", "N", "B", "A", "Ğ"] },
  { word: "SANATÇI", hint: "Sanatla uğraşan kişi", letters: ["I", "T", "A", "S", "N", "Ç", "A"] },
  { word: "KİTAPLAR", hint: "Birden fazla kitap", letters: ["P", "T", "A", "L", "R", "A", "K", "İ"] },
  { word: "BAHÇE", hint: "Çiçeklerin yetiştiği yer", letters: ["A", "E", "L", "Ç", "B", "H"] },
  { word: "YAZAR", hint: "Kitap yazan kişi", letters: ["Y", "Z", "A", "R", "A"] },

  // 61-80
  { word: "TELEVİZYON", hint: "Evde yayın izlemek için", letters: ["N", "L", "İ", "T", "O", "Y", "E", "Z", "E", "V"] },
  { word: "BİLİM", hint: "Bilgi edinme süreci", letters: ["İ", "L", "B", "M", "İ"] },
  { word: "PROGRAM", hint: "Bilgisayarda çalışan yazılım", letters: ["R", "P", "G", "M", "A", "O", "R"] },
  { word: "FOTOĞRAF", hint: "Resim çekme işlemi", letters: ["T", "O", "F", "Ğ", "R", "A", "O", "F"] },
  { word: "KİTAPLIK", hint: "Kitapların koyulduğu yer", letters: ["P", "L", "A", "I", "K", "K", "T", "İ"] },
  { word: "ÖĞRETMEN", hint: "Ders veren kişi", letters: ["N", "Ö", "R", "T", "E", "M", "Ğ", "E"] },
  { word: "ÇALIŞKAN", hint: "İşine düşkün", letters: ["N", "L", "A", "K", "Ç", "I", "Ş", "A"] },
  { word: "KURŞUN", hint: "Kalem ucu malzemesi", letters: ["N", "U", "K", "Ş", "R", "U"] },
  { word: "SANAT", hint: "Yaratıcılık gerektiren faaliyet", letters: ["N", "S", "A", "T", "A"] },
  { word: "DOĞA", hint: "Tabiat", letters: ["Ğ", "A", "O", "D"] },

  // 81-100
  { word: "KALKAN", hint: "Koruyucu araç", letters: ["L", "K", "A", "K", "A", "N"] },
  { word: "DÜNYA", hint: "Yaşadığımız gezegen", letters: ["Y", "D", "N", "A", "Ü"] },
  { word: "ÇİÇEK", hint: "Baharda açar", letters: ["Ç", "K", "E", "Ç", "İ"] },
  { word: "TARLA", hint: "Tarım yapılan yer", letters: ["T", "L", "R", "A", "A"] },
  { word: "TEKNOLOJİ", hint: "Bilim ve teknoloji", letters: ["N", "J", "T", "O", "K", "L", "İ", "O", "E"] },
  { word: "KİTAPÇI", hint: "Kitap satan kişi", letters: ["K", "T", "I", "P", "Ç", "A", "İ"] },
  { word: "BİLGİSAYAR", hint: "Dijital cihaz", letters: ["R", "A", "B", "S", "Y", "L", "İ", "G", "İ", "A"] },
  { word: "YAZILIM", hint: "Programlama ürünleri", letters: ["M", "A", "Y", "I", "Z", "I", "L"] },
  { word: "DERSHANE", hint: "Ek ders verilen yer", letters: ["N", "D", "S", "E", "H", "A", "R", "E"] },
  { word: "KÜTÜPHANE", hint: "Kitapların toplandığı yer", letters: ["H", "N", "K", "Ü", "T", "E", "P", "U", "A"] },
  { word: "YAZILIMCI", hint: "Yazılım geliştiren kişi", letters: ["L", "M", "A", "Z", "I", "Y", "I", "C", "A"] },
  { word: "MÜHENDİS", hint: "Teknik işleri yapan kişi", letters: ["H", "S", "N", "M", "Ü", "D", "İ", "E"] },
  { word: "ELEKTRİK", hint: "Enerji türü", letters: ["R", "K", "E", "L", "İ", "K", "E", "T"] },
  { word: "İNTERNET", hint: "Dünya çapında iletişim ağı", letters: ["E", "I", "T", "R", "E", "N", "N", "T"] },
  { word: "BİLİMSEL", hint: "Bilimle ilgili", letters: ["L", "İ", "B", "M", "S", "E", "İ", "L"] },
  { word: "TASARIM", hint: "Planlama, çizim", letters: ["A", "M", "I", "R", "S", "T", "A"] },
  { word: "KÜLTÜR", hint: "Toplumun özellikleri", letters: ["K", "T", "R", "Ü", "L", "Ü"] },
  { word: "ÖĞRENCİLİK", hint: "Öğrenci olma durumu", letters: ["R", "C", "N", "L", "İ", "İ", "K", "Ğ", "E", "Ö"] },
  { word: "KİTAPLILIK", hint: "Kitaplarla dolu yer", letters: ["K", "I", "P", "T", "A", "L", "I", "K", "L", "İ"] },
  { word: "TEKNOLOJİK", hint: "Teknoloji ile ilgili", letters: ["N", "T", "O", "J", "L", "İ", "E", "K", "K", "O"] }
];



// localStorage'dan kaydedilmiş seviyeyi oku veya 1 ile başla
let unlockedLevels = parseInt(localStorage.getItem("unlockedLevels")) || 1;
let currentLevel = null;
let currentGuess = [];

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const gameScreen = document.getElementById("game-screen");
const levelsContainer = document.getElementById("levels-container");
const gameArea = document.getElementById("game-area");
const hintDiv = document.getElementById("hint");
const guessContainer = document.getElementById("guess-container");
const letterPool = document.getElementById("letter-pool");
const submitBtn = document.getElementById("submit-btn");
const messageDiv = document.getElementById("message");
const backToLevelsBtn = document.getElementById("back-to-levels-btn");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  showLevelSelect();
});

function showLevelSelect() {
  gameArea.classList.add("hidden");
  levelsContainer.innerHTML = "";

  levels.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.classList.add("level-btn");

    if (i + 1 > unlockedLevels) {
      btn.classList.add("locked");
      btn.disabled = true;
    }

    btn.addEventListener("click", () => {
      if (i + 1 <= unlockedLevels) startLevel(i);
    });

    levelsContainer.appendChild(btn);
  });

  levelsContainer.parentElement.classList.remove("hidden");
}

function startLevel(levelIndex) {
  currentLevel = levelIndex;
  currentGuess = [];
  messageDiv.textContent = "";
  hintDiv.textContent = levels[levelIndex].hint;

  guessContainer.innerHTML = `<div id="guess-box"></div>`;
  letterPool.innerHTML = "";

  levels[levelIndex].letters.forEach(addLetterToPool);

  submitBtn.disabled = false;
  gameArea.classList.remove("hidden");
  levelsContainer.parentElement.classList.add("hidden");
}

function addLetterToPool(letter) {
  const lDiv = document.createElement("div");
  lDiv.classList.add("letter");
  lDiv.textContent = letter;
  lDiv.addEventListener("click", () => {
    if (currentGuess.length >= levels[currentLevel].word.length) return;
    currentGuess.push(letter);
    updateGuessBox();
    lDiv.remove();
  });
  letterPool.appendChild(lDiv);
}

function updateGuessBox() {
  document.getElementById("guess-box").textContent = currentGuess.join("");
}

function resetGuess() {
  currentGuess = [];
  updateGuessBox();
  letterPool.innerHTML = "";
  levels[currentLevel].letters.forEach(addLetterToPool);
}

function showMessage(text, color) {
  messageDiv.style.color = color;
  messageDiv.style.opacity = 0;
  messageDiv.textContent = text;
  setTimeout(() => {
    messageDiv.style.opacity = 1;
  }, 100);
}

submitBtn.addEventListener("click", () => {
  if (currentGuess.length !== levels[currentLevel].word.length) {
    showMessage("Lütfen tüm harfleri seç!", "red");
    return;
  }

  const guessStr = currentGuess.join("");
  if (guessStr === levels[currentLevel].word) {
    showMessage("Tebrikler, doğru bildin!", "lightgreen");

    if (unlockedLevels === currentLevel + 1 && unlockedLevels < levels.length) {
      unlockedLevels++;
      localStorage.setItem("unlockedLevels", unlockedLevels);
    }

    setTimeout(() => {
      if (unlockedLevels <= levels.length) {
        showLevelSelect();
      } else {
        showMessage("Tüm seviyeleri tamamladın! 🎉", "gold");
      }
    }, 1500);
  } else {
    showMessage("Yanlış, tekrar dene.", "red");
    resetGuess();
  }
});

backToLevelsBtn.addEventListener("click", () => {
  gameArea.classList.add("hidden");
  levelsContainer.parentElement.classList.remove("hidden");
  messageDiv.textContent = "";
  resetGuess();
});

