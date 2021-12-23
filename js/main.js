window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
})

const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('.transitionend', removeTransistion));
    window.addEventListener('keydown', playSound);

function removeTransistion(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}