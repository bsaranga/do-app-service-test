const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const msgBox = document.getElementById('msg');

let defaultScale = 1.0;
let defaultTranslate = 1;
let index = 0;

const messages = [
    'Seriously???! 😵',
    'You got to be kidding me! 😡',
    'I just can\'t believe it! 😭',
    'Have a heart!! Woman! 😢',
    'You are so mean! 😠',
    'Don\'t break my heart 😞',
    'I am so sad now 😔',
    'You are so cruel! 😖',
    'My heart is in a million pieces now 😩',
    'I am so heartbroken 😫',
    'Just click YES!! 😣',
    'You are so heartless! 😤',
    'You don\'t know how much I want you 🔥',
    'If you clicked yes, it would be the happiest day of my life 😍',
    'Don\'t make my heart bleed anymore 😭',
    'I\'ll die 😵'
]

noBtn.addEventListener('click', () => {
    defaultTranslate += 0.2;
    yesBtn.style.scale = `${defaultScale += 0.8}`;
    yesBtn.style.translate = `0px ${-10*Math.pow(2, defaultTranslate)}px`;
    msgBox.innerText = messages[index];
    index++;
})