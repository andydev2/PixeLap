function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}
//aqui es lo de los botones
document.addEventListener("DOMContentLoaded", ()=>{


    const cards = document.querySelectorAll('.section__card');
    

    const prevButton = document.querySelector(".carusel__control.prev");


    const nextButton = document.querySelector(".carusel__control.next");

    let currentCardindex = 0;

    const showCard = (index, direction)=> {
        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = `translateX(${direction === 'next' ? '-' : '' }100%)`
            card.classList.remove('show');
        });
        cards[index].classList.add("show");

        setTimeout(()=>{
            cards.forEach(card=>card.style.transition = 'opacity 0.5s, transform 0.5s');
            cards[index].style.opacity = "1";
            cards[index].style.transform = "translateX(0)";
        },50);
    }
    const changeCard = (increment, direction) => {
        currentCardindex = (currentCardindex + increment + cards.length) % cards.length;
        showCard(currentCardindex, direction);

    }
    const autoScroll = ()=>{
        changeCard(1, 'next');
    }

    nextButton.addEventListener("click",(event)=>{
        event.preventDefault();
        changeCard(1, 'next');
    });
    prevButton.addEventListener("click",(event)=>{
        event.preventDefault();
        changeCard(-1, 'prev');
    });
    
    let autoScrollInterval = setInterval(autoScroll,5000)
    document.querySelector('.carusel-section').addEventListener('mouseenter',()=>{
        clearInterval(autoScrollInterval);
    });

    document.querySelector('.carusel-section').addEventListener('mouseleave',()=>{
        autoScrollInterval = setInterval(autoScroll,5000);
    });
});
