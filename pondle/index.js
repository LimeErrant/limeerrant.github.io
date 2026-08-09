const wordOfTheDay = "pond";

let gameWon = false;
let guessIndex = 0;
/**
 * @type {{str: string[], el: HTMLElement}[]}
*/
const guesses = [];
const getCurrentGuess = () => {
    return guesses[guessIndex];
}

const mainEl = document.getElementsByTagName("main")[0]
const shake = () => {
    mainEl.classList.remove("wrong");
    setTimeout(() => mainEl.classList.add("wrong"), 0)
}

const headerEl = document.getElementById("header")
const win = () => {
    if (gameWon) return;
    gameWon = true
    if (!headerEl) return;
    headerEl.textContent = "🎉 yaay you won!! 🎊"
}

/**
 * 
 * @param {{str: string[], el: HTMLElement}} obj 
 * @param {null | (boolean | null)[]} successes
 */
const updateGuess = (obj, successes = null) => {
    for (const i of [0,1,2,3]) {
        const currString = obj.str[i];
        const currChildEl = obj.el.children[i]
        currChildEl.textContent = currString ?? "";
        if (successes) {
            const isGreen = successes[i] === true;
            const isYellow = successes[i] === false;
            if (isGreen) currChildEl.classList.add("green");
            else if (isYellow) currChildEl.classList.add("yellow");
            else currChildEl.classList.add("incorrect");
        }
    }
};

const addLetter = (str) => {
    if (gameWon) return shake();
    const currentGuess = getCurrentGuess();
    if (currentGuess.str.length === 4) return shake();
    currentGuess.str.push(str)
    updateGuess(currentGuess);
    console.log(currentGuess);
};

const removeLetter = (str) => {
    if (gameWon) return shake();
    const currentGuess = getCurrentGuess();
    if (currentGuess.str.length === 0) return shake();
    currentGuess.str.pop();
    updateGuess(currentGuess);
    console.log(currentGuess);
};

const guess = () => {
    if (gameWon) return shake();
    const currentGuess = getCurrentGuess();
    if (currentGuess.str.length !== 4) return shake();
    const successes = currentGuess.str.map((x, i) => {
        if (x === wordOfTheDay[i]) return true
        else if (wordOfTheDay.includes(x)) return false
        else return null
    })
    updateGuess(currentGuess, successes)
    if (successes.every((x) => x)) win();

    guessIndex++;
};

const keyboardRows = {
    one: ["q","w","e","r","t","y","u","i","o","p"],
    two: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    three: ["↵", "z", "x", "c", "v", "b", "n", "m", "⌫"],
}

const allKeys = Object.values(keyboardRows).flatMap((x) => x);

const isEnter = (str) => str === "Enter" || str === "↵";
const isBackspace = (str) => str === "Backspace" || str === "⌫";
const isLetterKey = (str) => allKeys.includes(str);

document.addEventListener("keyup", (evt) => {
    if (isBackspace(evt.key)) {
        evt.preventDefault();
        removeLetter();
    }
})

document.addEventListener("keypress", (evt) => {
    if (isEnter(evt.key)) {
        evt.preventDefault();
        guess()
    };

    if (isLetterKey(evt.key)) {
        evt.preventDefault();
        addLetter(evt.key);
    };
})

function getResultRow() {
    const newElement = document.createElement("div");
    newElement.classList.add("result-row");
    const resultBlocks = [1,2,3,4].map((x) => {
        const block = document.createElement("div");
        block.classList.add("result-row__block");
        return block;
    })
    newElement.append(...resultBlocks);
    return newElement;
}

function populateResults() {
    const resultsElement = document.getElementById("results");
    const resultRows = [1,2,3,4,5,6].map(getResultRow);
    resultsElement?.append(...resultRows);
    guesses.push(...resultRows.map((x) => {
        return {el: x, str: []}
    }))
    return resultsElement;
}

function hydrateKeyboardButton(str) {
    const but = document.createElement("button");
    but.textContent = str;
    but.onclick = () => {
        if (isEnter(str)) guess();
        else if (isBackspace(str)) removeLetter();
        else if (isLetterKey(str)) addLetter(str);
    };
    but.classList.add("keyboard-row__button");
    if (str === "↵" || str === "⌫") {
        but.classList.add("keyboard-row__button--special");
    }
    return but;
}

function keyboardRow(arr) {
    const newElement = document.createElement("div");
    newElement.classList.add("keyboard-row");
    const buttons = arr.map(hydrateKeyboardButton);
    newElement.append(...buttons);
    return newElement;
}

function populateKeyboard() {
    const keyboardElement = document.getElementById("keyboard");
    const row1 = keyboardRow(keyboardRows.one);
    const row2 = keyboardRow(keyboardRows.two);
    const row3 = keyboardRow(keyboardRows.three);
    keyboardElement?.append(row1, row2, row3);
    return keyboardElement;
}

function main() {
    populateResults();
    populateKeyboard();
}

main()