const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const cardPanel = document.querySelector('.card-panel');

let scrollPosition = 0;

leftButton.addEventListener('click', () => {
    if(scrollPosition > -1000){

        scrollPosition -= 220; // Adjust the value based on card width and spacing
        updateScrollPosition();
    }
});

rightButton.addEventListener('click', () => {
    console.log(scrollPosition)

    if(scrollPosition < 1000){
        console.log(scrollPosition)
        scrollPosition += 220; // Adjust the value based on card width and spacing
        updateScrollPosition();
    }
});

function updateScrollPosition() {
  cardPanel.style.transform = `translateX(${scrollPosition}px)`;
}
