const levels = [
  { word: "ELMA", hint: "Kırmızı, yeşil veya sarı olabilir, tatlı bir meyve", letters: ["E", "L", "M", "A", "K", "R", "S"] },
  { word: "KAPI", hint: "Evin girişinde kullanılır", letters: ["K", "A", "P", "I", "T", "O", "L"] },
  { word: "ARABA", hint: "Dört tekerlekli taşıt", letters: ["A", "R", "B", "A", "K", "L", "M"] },
  { word: "KUTU", hint: "Eşyaları koymak için kullanılır", letters: ["K", "U", "T", "O", "L", "M", "S"] },
  { word: "SAAT", hint: "Zamanı gösterir", letters: ["S", "A", "T", "H", "O", "L", "M"] },
  { word: "EV", hint: "İnsanların yaşadığı yer", letters: ["E", "V", "K", "T", "L", "M", "S"] },
  { word: "BİLGİ", hint: "Öğrenilen şeyler", letters: ["B", "İ", "L", "G", "İ", "M", "S"] },
  { word: "DENİZ", hint: "Büyük su kütlesi", letters: ["D", "E", "N", "İ", "Z", "K", "M"] },
  { word: "YILDIZ", hint: "Gece gökyüzünde parlayan", letters: ["Y", "I", "L", "D", "I", "Z", "M"] },
  { word: "KİTAP", hint: "Okumak için", letters: ["K", "İ", "T", "A", "P", "M", "S"] },

  // 11-20: 6-7 harfli kelimeler biraz daha zor
  { word: "BİSİKLET", hint: "İki tekerlekli ulaşım aracı", letters: ["B", "İ", "S", "İ", "K", "L", "E", "T"] },
  { word: "MUTFAK", hint: "Yemek yapılan yer", letters: ["M", "U", "T", "F", "A", "K", "L"] },
  { word: "ÖĞRENCİ", hint: "Okula giden kişi", letters: ["Ö", "Ğ", "R", "E", "N", "C", "İ"] },
  { word: "KULE", hint: "Yüksek yapı", letters: ["K", "U", "L", "E", "T", "M", "S"] },
  { word: "YEMEK", hint: "İnsanın yediği şey", letters: ["Y", "E", "M", "E", "K", "L", "S"] },
  { word: "BİLGİSAYAR", hint: "Teknoloji cihazı", letters: ["B", "İ", "L", "G", "İ", "S", "A", "Y", "A", "R"] },
  { word: "MÜZİK", hint: "Seslerden oluşan sanat", letters: ["M", "Ü", "Z", "İ", "K", "L", "S"] },
  { word: "TAŞ", hint: "Sert doğal malzeme", letters: ["T", "A", "Ş", "K", "L", "M", "S"] },
  { word: "KIRMIZI", hint: "Bir renk", letters: ["K", "I", "R", "M", "I", "Z", "I"] },
  { word: "SEVİM", hint: "Sevgiyle ilgili", letters: ["S", "E", "V", "İ", "M", "L", "A"] },

  // 21-40: 7-8 harf, zorlaşmaya başlıyor
  { word: "ÖĞRETMEN", hint: "Okulda ders veren kişi", letters: ["Ö", "Ğ", "R", "E", "T", "M", "E", "N"] },
  { word: "DOSTLUK", hint: "İki kişi arasındaki iyi ilişki", letters: ["D", "O", "S", "T", "L", "U", "K"] },
  { word: "KUTUP", hint: "Dünyanın en kuzey veya güney noktası", letters: ["K", "U", "T", "U", "P", "L", "M"] },
  { word: "ŞEHİR", hint: "Büyük yerleşim yeri", letters: ["Ş", "E", "H", "İ", "R", "L", "M"] },
  { word: "TARİH", hint: "Geçmişte yaşanan olaylar", letters: ["T", "A", "R", "İ", "H", "M", "S"] },
  { word: "ANLAM", hint: "Bir şeyin ifade ettiği şey", letters: ["A", "N", "L", "A", "M", "S", "K"] },
  { word: "KUTSAL", hint: "Çok değerli, kutsanmış", letters: ["K", "U", "T", "S", "A", "L", "M"] },
  { word: "BAŞARI", hint: "İstenen sonucu elde etme", letters: ["B", "A", "Ş", "A", "R", "I", "L"] },
  { word: "ÜNİVERSİTE", hint: "Yüksek öğrenim kurumu", letters: ["Ü", "N", "İ", "V", "E", "R", "S", "İ", "T", "E"] },
  { word: "FİKİR", hint: "Düşünce", letters: ["F", "İ", "K", "İ", "R", "L", "S"] },

  // 41-60: 8-9 harf, zor seviye devam
  { word: "HATIRA", hint: "Anı", letters: ["H", "A", "T", "I", "R", "A", "L", "M"] },
  { word: "KARANLIK", hint: "Işığın olmadığı yer", letters: ["K", "A", "R", "A", "N", "L", "I", "K"] },
  { word: "DENİZCİ", hint: "Denizle uğraşan kişi", letters: ["D", "E", "N", "İ", "Z", "C", "İ", "K"] },
  { word: "KUŞLAR", hint: "Uçan hayvanlar", letters: ["K", "U", "Ş", "L", "A", "R", "M", "S"] },
  { word: "MÜZİSYEN", hint: "Müzik yapan kişi", letters: ["M", "Ü", "Z", "İ", "S", "Y", "E", "N"] },
  { word: "BAĞLANTI", hint: "İki şey arasındaki ilişki", letters: ["B", "A", "Ğ", "L", "A", "N", "T", "I"] },
  { word: "SANATÇI", hint: "Sanatla uğraşan kişi", letters: ["S", "A", "N", "A", "T", "Ç", "I"] },
  { word: "KİTAPLAR", hint: "Birden fazla kitap", letters: ["K", "İ", "T", "A", "P", "L", "A", "R"] },
  { word: "BAHÇE", hint: "Çiçeklerin yetiştiği yer", letters: ["B", "A", "H", "Ç", "E", "L", "M"] },
  { word: "YAZAR", hint: "Kitap yazan kişi", letters: ["Y", "A", "Z", "A", "R", "L", "M"] },

  // 61-80: 9-10 harf, zor seviye devam
  { word: "TELEVİZYON", hint: "Evde yayın izlemek için", letters: ["T", "E", "L", "E", "V", "İ", "Z", "Y", "O", "N"] },
  { word: "BİLİM", hint: "Bilgi edinme süreci", letters: ["B", "İ", "L", "İ", "M", "L", "S"] },
  { word: "PROGRAM", hint: "Bilgisayarda çalışan yazılım", letters: ["P", "R", "O", "G", "R", "A", "M"] },
  { word: "FOTOĞRAF", hint: "Resim çekme işlemi", letters: ["F", "O", "T", "O", "Ğ", "R", "A", "F"] },
  { word: "KİTAPLIK", hint: "Kitapların koyulduğu yer", letters: ["K", "İ", "T", "A", "P", "L", "I", "K"] },
  { word: "ÖĞRETMEN", hint: "Ders veren kişi", letters: ["Ö", "Ğ", "R", "E", "T", "M", "E", "N"] },
  { word: "ÇALIŞKAN", hint: "İşine düşkün", letters: ["Ç", "A", "L", "I", "Ş", "K", "A", "N"] },
  { word: "KURŞUN", hint: "Kalem ucu malzemesi", letters: ["K", "U", "R", "Ş", "U", "N", "M"] },
  { word: "SANAT", hint: "Yaratıcılık gerektiren faaliyet", letters: ["S", "A", "N", "A", "T", "L", "M"] },
  { word: "DOĞA", hint: "Tabiat", letters: ["D", "O", "Ğ", "A", "L", "M", "S"] },

  // 81-100: 10+ harf, en zor seviyeler
  { word: "KALKAN", hint: "Koruyucu araç", letters: ["K", "A", "L", "K", "A", "N", "M", "S"] },
  { word: "DÜNYA", hint: "Yaşadığımız gezegen", letters: ["D", "Ü", "N", "Y", "A", "L", "M"] },
  { word: "ÇİÇEK", hint: "Baharda açar", letters: ["Ç", "İ", "Ç", "E", "K", "L", "M"] },
  { word: "TARLA", hint: "Tarım yapılan yer", letters: ["T", "A", "R", "L", "A", "M", "S"] },
  { word: "TEKNOLOJİ", hint: "Bilim ve teknoloji", letters: ["T", "E", "K", "N", "O", "L", "O", "J", "İ"] },
  { word: "KİTAPÇI", hint: "Kitap satan kişi", letters: ["K", "İ", "T", "A", "P", "Ç", "I", "L"] },
  { word: "BİLGİSAYAR", hint: "Dijital cihaz", letters: ["B", "İ", "L", "G", "İ", "S", "A", "Y", "A", "R"] },
  { word: "YAZILIM", hint: "Programlama ürünleri", letters: ["Y", "A", "Z", "I", "L", "I", "M", "S"] },
  { word: "DERSHANE", hint: "Ek ders verilen yer", letters: ["D", "E", "R", "S", "H", "A", "N", "E"] },
  { word: "KÜTÜPHANE", hint: "Kitapların toplandığı yer", letters: ["K", "Ü", "T", "Ü", "P", "H", "A", "N", "E"] },
  { word: "YAZILIMCI", hint: "Yazılım geliştiren kişi", letters: ["Y", "A", "Z", "I", "L", "I", "M", "C", "I"] },
  { word: "MÜHENDİS", hint: "Teknik işleri yapan kişi", letters: ["M", "Ü", "H", "E", "N", "D", "İ", "S"] },
  { word: "ELEKTRİK", hint: "Enerji türü", letters: ["E", "L", "E", "K", "T", "R", "İ", "K"] },
  { word: "İNTERNET", hint: "Dünya çapında iletişim ağı", letters: ["İ", "N", "T", "E", "R", "N", "E", "T"] },
  { word: "BİLİMSEL", hint: "Bilimle ilgili", letters: ["B", "İ", "L", "İ", "M", "S", "E", "L"] },
  { word: "TASARIM", hint: "Planlama, çizim", letters: ["T", "A", "S", "A", "R", "I", "M"] },
  { word: "KÜLTÜR", hint: "Toplumun özellikleri", letters: ["K", "Ü", "L", "T", "Ü", "R"] },
  { word: "ÖĞRENCİLİK", hint: "Öğrenci olma durumu", letters: ["Ö", "Ğ", "R", "E", "N", "C", "İ", "L", "İ", "K"] },
  { word: "KİTAPLILIK", hint: "Kitaplarla dolu yer", letters: ["K", "İ", "T", "A", "P", "L", "I", "L", "I", "K"] },
  { word: "TEKNOLOJİK", hint: "Teknoloji ile ilgili", letters: ["T", "E", "K", "N", "O", "L", "O", "J", "İ", "K"] }
];


let currentLevel = null;
let unlockedLevels = 1; // Başlangıçta sadece 1. seviye açık
let currentGuess = new Array();

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
  for(let i = 0; i < levels.length; i++){
    const btn = document.createElement("button");
    btn.textContent = (i + 1);
    btn.classList.add("level-btn");
    if(i + 1 > unlockedLevels){
      btn.classList.add("locked");
      btn.disabled = true;
    }
    btn.addEventListener("click", () => {
      if(i + 1 <= unlockedLevels){
        startLevel(i);
      }
    });
    levelsContainer.appendChild(btn);
  }
  levelsContainer.parentElement.classList.remove("hidden");
}

function startLevel(levelIndex) {
  currentLevel = levelIndex;
  currentGuess = [];
  messageDiv.textContent = "";
  hintDiv.textContent = levels[levelIndex].hint;

  guessContainer.innerHTML = "";
  // Yeni: Üstte boşluk kutusu (tek kutu)
  const guessBox = document.createElement("div");
  guessBox.id = "guess-box";
  guessBox.textContent = "";
  guessContainer.appendChild(guessBox);

  letterPool.innerHTML = "";
  levels[levelIndex].letters.forEach(letter => {
    addLetterToPool(letter);
  });

  submitBtn.disabled = false;

  gameArea.classList.remove("hidden");
  levelsContainer.parentElement.classList.add("hidden");
}

function addLetterToPool(letter){
  const lDiv = document.createElement("div");
  lDiv.classList.add("letter");
  lDiv.textContent = letter;
  lDiv.addEventListener("click", () => {
    if(currentGuess.length >= levels[currentLevel].word.length) return; // Dolmuşsa ekleme yok
    currentGuess.push(letter);
    updateGuessBox();
    lDiv.remove();
  });
  letterPool.appendChild(lDiv);
}

function updateGuessBox() {
  const guessBox = document.getElementById("guess-box");
  guessBox.textContent = currentGuess.join("");
}

submitBtn.addEventListener("click", () => {
  if(currentGuess.length !== levels[currentLevel].word.length){
    showMessage("Lütfen tüm harfleri seç!", "red");
    return;
  }
  const guessStr = currentGuess.join("");
  if(guessStr === levels[currentLevel].word){
    showMessage("Tebrikler, doğru bildin!", "lightgreen");

    if(unlockedLevels === currentLevel + 1 && unlockedLevels < levels.length){
      unlockedLevels++;
    }

    setTimeout(() => {
      if(unlockedLevels <= levels.length){
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

function resetGuess(){
  currentGuess = [];
  updateGuessBox();
  letterPool.innerHTML = "";
  levels[currentLevel].letters.forEach(letter => {
    addLetterToPool(letter);
  });
}

function showMessage(text, color){
  messageDiv.style.color = color;
  messageDiv.style.opacity = 0;
  messageDiv.textContent = text;
  setTimeout(() => {
    messageDiv.style.opacity = 1;
  }, 100);
}

backToLevelsBtn.addEventListener("click", () => {
  gameArea.classList.add("hidden");
  levelsContainer.parentElement.classList.remove("hidden");
  messageDiv.textContent = "";
  resetGuess();
});
