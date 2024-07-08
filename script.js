let currentColor = 'black';
let currentSize = 16;

const gridcontainer = document.getElementById('gridcontainer');

makeGrid(currentSize);

//===Make the actual grid

function makeGrid(numDivs) {
    gridcontainer.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;
    gridcontainer.style.gritTemplateRows = `repeat(${numDivs}, 1fr)`;
    
    for (let d = 0; d < numDivs * numDivs; d++) {
        let squares = document.createElement('div');
        gridcontainer.appendChild(squares);
        squares.addEventListener('mouseover', colorHover);
    }
};


//===Change of color setting

function colorHover() {
    if (currentColor === 'black') {
        this.style.backgroundColor = 'black';
    } else if (currentColor === 'random1') {
        this.style.backgroundColor = chooseRandom1();
    } else if (currentColor === 'random2') {
        this.style.backgroundColor = chooseRandom2();
    } else if (currentColor === 'erase') {
        this.style.backgroundColor = 'white';
    }
};

function setColor(colorChoice) {
    return currentColor = colorChoice;
};

function chooseRandom1() {
    let choose = ['#1affed', '#00ffeb', '#1af8ff', '#1affd6', '#1a6fff', '#22fb77'
    , '#13cee0', '#3791ff', '#7155fc', '#8e2efc'];
    return choose[Math.floor(Math.random() * choose.length)];
};

function chooseRandom2() {
    let choose = ['#9dad86', '#9eb878', '#94d465', '#9bba59', '#af94c5', '#984adc'
    , '#c096e5', '#ab8ec4', 'a9dca5#', '#d2e8d0'];
    return choose[Math.floor(Math.random() * choose.length)];
};

//Clear or reload board

function clearIt() {
    gridcontainer.innerHTML = '';
    makeGrid(currentSize);
};

 
function reloadIt() {
    gridcontainer.innerHTML = '';
};

//Change grid-square size

function changeCurrentSize(value) {
    let currentSize;
    currentSize = value;
    reloadIt();
    makeGrid(currentSize);
};


