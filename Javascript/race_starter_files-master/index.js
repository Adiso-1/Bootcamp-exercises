const player1Race = document.querySelector("#player1-race");
const player2Race = document.querySelector("#player2-race");
const button = document.querySelector('button')
function handleKeyUp(e) {
    if (
        e.key === "ArrowRight" &&
        player1Race.lastChild.previousSibling.classList.value === 'finish') {
            const car1 = document.querySelector("#player1-race .active");
            car1.classList = "";
            car1.nextElementSibling.classList = "active";
        } else if (e.key === "d" && player2Race.lastChild.previousSibling.classList.value === 'finish') {
            const car2 = document.querySelector("#player2-race .active");
            car2.classList = "";
            car2.nextElementSibling.classList = "active";
        } else {
            document.removeEventListener('keyup', handleKeyUp)
            setTimeout(() => {
                button.style.display = 'block';
            },1000)
            button.addEventListener('click', () => location.reload())
        }
    }    
document.addEventListener('keyup', handleKeyUp)