const arrow = document.querySelector('.to-top__arrow');

const showArrow = function() {
    if (arrow) {
    if (this.scrollY >= this.innerHeight/2) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }        
    }

}

window.addEventListener('scroll', showArrow);