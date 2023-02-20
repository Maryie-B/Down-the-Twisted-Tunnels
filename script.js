import { textNodes } from "./text-nodes.js";

const textEl = document.getElementById('text'); 
const optionButtonsEl = document.getElementById('option-buttons');
const volumeBtn = document.getElementById('volume-btn');
const music = document.querySelector('audio'); 
const startPage = document.getElementById('start-page');
const gamePage = document.getElementById('game-page');
const instructionsPage = document.getElementById('instructions-page')
const finalePage = document.getElementById('finale-page');
const musicPlayerContainer = document.querySelector('.music-player-container');

// Buttons (because the 'onclick' attribute no longer works in html)
const startGameBtn = document.getElementById('start-game');
const instructionsBtn = document.getElementById('instructions-btn');
const playAgainBtn = document.getElementById('play-again'); 
const backBtn = document.getElementById('play-again2');
const startGameBtn2 = document.getElementById('start-game2');


const pages = [startPage, gamePage, instructionsPage, finalePage];

function togglePages(page) {
    pages.forEach(p => {
        p.hidden = true;
    });
    page.hidden = false;
    if (page === gamePage) {
        music.play();
        musicPlayerContainer.removeAttribute('hidden');
    } else {
        musicPlayerContainer.setAttribute('hidden', true);
        music.pause();
    }
}

function toggleAudio() {
    if (volumeBtn.textContent === 'Mute') {
        volumeBtn.textContent = 'Unmute'; 
        music.pause();
    } else {
        volumeBtn.textContent = 'Mute'; 
        music.play();
    }
}

volumeBtn.addEventListener('click', () => {
    toggleAudio();
});


// Keeps track of what the charcter has on them at any given point in the game
export let state = {}; 

function startGame() {
    state = {};
    const textNode = textNodes.find(textNode => textNode.id === 1);
    showTextNodes(textNode); 
}

// Displays options based on the state
function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}


// Displays whichever option we chose
function showTextNodes(textNode) {
    while (textEl.firstChild) {
        textEl.removeChild(textEl.firstChild);
    }
    const text = document.createElement('div'); 
    text.innerText = textNode.text; 
    text.classList.add('text'); 
    text.classList.add('fade');
    textEl.appendChild(text);
    if (textNode.className) {
        textEl.classList.add(textNode.className);
    } else if (!textNode.className) {
        textEl.classList.remove('white');
    }

    // Removes initial options, so that the game can display the proper options taken form the textNodes array 
    while (optionButtonsEl.firstChild) {
        optionButtonsEl.removeChild(optionButtonsEl.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button'); 
            button.innerText = option.text; 
            button.classList.add('btn'); 
            if (option.exception) {
                button.classList.add('disabled');
            } else if (option.white) {
                button.style.background = 'rgba(69, 68, 68, 0.5)';

            }
            button.classList.add('fade');
    
            button.addEventListener('click', () => selectOption(option));
            optionButtonsEl.appendChild(button); 
        } 
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    let textNode = textNodes.find(textNode => textNode.id === nextTextNodeId);
    if (nextTextNodeId < 0) {
        return startGame();
    } else if (nextTextNodeId === 0) {
        startGame();
        return togglePages(finalePage);
    } else if (option.requiredState) {
        if (state.hasKey) {
            textNode = textNode.check[1];
        } else {
            textNode = textNode.check[0];
        }
    }

    state = Object.assign(state, option.setState);
    showTextNodes(textNode);
}

startGameBtn.addEventListener('click', () => {togglePages(gamePage)});
instructionsBtn.addEventListener('click', () => {togglePages(instructionsPage)});
playAgainBtn.addEventListener('click', () => {togglePages(startPage)});
startGameBtn2.addEventListener('click', () => {togglePages(gamePage)});
backBtn.addEventListener('click', () => {togglePages(startPage)});

startGame();
