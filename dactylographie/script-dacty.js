let words = [], currentWords = [], wordIndex = 0, startTime = null;

// Charger les mots depuis un fichier dictionnaire
async function loadWords() {
    const response = await fetch('dictionnaire.txt');
    words = (await response.text()).split(/\r?\n/); // Séparation des lignes
}

// Réinitialiser le test
function resetTest() {
    wordIndex = 0;
    document.getElementById('typingInput').value = ''; // Réinitialiser le champ de saisie
    document.getElementById('wpmDisplay').innerText = ''; // Réinitialiser le WPM
    document.getElementById('charCountDisplay').innerText = 'Caractères : 0'; // Réinitialiser le compteur de caractères
    document.getElementById('wordCountDisplay').innerText = 'Mots restants : 0'; // Réinitialiser le compteur de mots
    selectRandomWords();
    startTime = Date.now();
}

// Sélectionner des mots aléatoires
function selectRandomWords(count = 10) {
    currentWords = Array.from({ length: count }, () => words[Math.floor(Math.random() * words.length)]);
    document.getElementById('wordDisplay').innerText = currentWords.join(' ');
    document.getElementById('currentWordDisplay').innerText = currentWords[0]; // Afficher le premier mot
    document.getElementById('wordCountDisplay').innerText = `Mots restants : ${count}`; // Afficher le nombre de mots restants
}

// Calculer les Mots Par Minute (MPM)
function calculateWPM() {
    const elapsedTime = (Date.now() - startTime) / 60000; // Temps écoulé en minutes
    return wordIndex > 0 && elapsedTime > 0 ? Math.floor(wordIndex / elapsedTime) : 0;
}

// Afficher les résultats dans <span id="currentWordDisplay"></span> à la fin du test
function showResultsInPlace() {
    const wpm = calculateWPM();
    document.getElementById('currentWordDisplay').innerText = `Vitesse : ${wpm} MPM`; // Afficher le score
}

// Normaliser le texte pour supprimer les accents
const normalizeText = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Gérer l'entrée de texte de l'utilisateur
document.getElementById('typingInput').addEventListener('input', function (event) {
    const typedValue = normalizeText(event.target.value); // Texte tapé par l'utilisateur
    const currentWord = normalizeText(currentWords[wordIndex]); // Mot actuel à taper

    // Construire le mot avec des lettres colorées selon la correction
    let formattedWord = '';
    for (let i = 0; i < currentWord.length; i++) {
        if (i < typedValue.length) {
            // Si la lettre est correcte, elle est en vert
            formattedWord += currentWord[i] === typedValue[i] ? 
                `<span class="correct-letter">${currentWord[i]}</span>` : 
                `<span class="incorrect-letter">${currentWord[i]}</span>`;
        } else {
            formattedWord += currentWord[i]; // Lettres restantes non tapées
        }
    }

    // Afficher les lettres colorées dans currentWordDisplay
    document.getElementById('currentWordDisplay').innerHTML = formattedWord;

    // Ajouter ou enlever l'effet de tremblement si l'utilisateur tape incorrectement
    if (currentWord.startsWith(typedValue)) {
        event.target.classList.remove('error'); // Enlever l'effet de tremblement
    } else {
        event.target.classList.add('error'); // Ajouter l'effet de tremblement si incorrect
    }

    // Si le mot est terminé
    if (typedValue === currentWord) {
        wordIndex++;
        if (wordIndex < currentWords.length) {
            document.getElementById('currentWordDisplay').innerText = currentWords[wordIndex]; // Afficher le mot suivant
        } else {
            showResultsInPlace(); // Afficher les résultats si tous les mots sont terminés
        }
        event.target.value = ''; // Réinitialiser l'input

        // Mettre à jour les mots restants et l'affichage des mots tapés
        document.getElementById('wordDisplay').innerHTML = currentWords
            .map((word, index) => (index < wordIndex ? `<span class="correct-word">${word}</span>` : word))
            .join(' ');

        document.getElementById('wordCountDisplay').innerText = `Mots restants : ${currentWords.length - wordIndex}`;
    }

    // Mettre à jour le compteur de caractères
    document.getElementById('charCountDisplay').innerText = `Caractères : ${typedValue.length}`;
});

// Démarrer le test
function startTypingTest() {
    resetTest(); // Réinitialiser et démarrer le test
}

// Charger les mots et démarrer le test
loadWords().then(startTypingTest);

// Ajouter un événement pour le bouton de réinitialisation
document.getElementById('resetButton').addEventListener('click', resetTest);
