const prev = document.getElementById('pre-btn');
const next = document.getElementById('nxt-btn');
const reviewCard = document.getElementsByClassName('review-card');
// console.log(prev, next);

const reviewCardNumber = Math.ceil(reviewCard.length / 2);
console.log(reviewCardNumber);

let l = 0;
let movePer = 25.34;
let maxMove = 203;

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = () => {
    l = l + movePer;
    if (reviewCard == 1) {
        l = 0;
    }
    for (const i of reviewCard) {
        if (l > maxMove) {
            l = l - movePer;
        }
        i.style.left = '-' + l + '%';
    }

}
let left_mover = () => {
    l = l - movePer;
    if (l <= 0) {
        l = 0;
    }
    for (const i of reviewCard) {
        if (reviewCardNumber > 1) {
            i.style.left = '-' + l + '%';
        }
    }
}
console.log(l);
next.onclick = () => { right_mover(); }
prev.onclick = () => { left_mover(); }