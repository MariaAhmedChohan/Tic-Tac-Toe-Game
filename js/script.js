let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-button');
let newButton = document.querySelector('.new-button');
let turn = 'true';
let msg = document.querySelector('.msg');


let arr = [[0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [0,4,8],
           [2,4,6]
        ];



boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (!box.textContent) {
            box.textContent = turn === 'true' ? 'X' : 'O';
            turn = turn === 'true' ? 'false' : 'true';
        }
        checkWinner();
       


          
    });
});

// Enable all boxes
const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
    });
};

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};


// function to reset/new the game
const button = () => {
    boxes.forEach(box => {
        box.textContent = '';
    });
    turn = 'true';
    enableBoxes();
    msg.classList.add("hide");
    };

resetButton.addEventListener("click", button);
newButton.addEventListener("click", button);


const showwinner = (winner) => {
    msg.textContent = `Congratulations! You are Winner Player ${winner}`;
    msg.classList.remove('hide');
}

const showDraw = () => {
    msg.textContent = `Game is draw!`;
    msg.classList.remove('hide');
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of arr)
    {
        console.log(checkWinner);
        const [a, b, c] = pattern;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            setTimeout(() => {
                showwinner(boxes[a].textContent);
                disableBoxes();
            }, 100);
        }
    }
};

