

console.log(`version 0.2.0`);
/*************************/
function toggleMenu(){
    document.getElementById('header-menu-button').classList.toggle('_active');

    document.getElementById('header-menu').classList.toggle('_active');

    if (document.body.style.overflow === 'hidden')
    document.body.style.overflow = 'auto';
    else
        document.body.style.overflow = 'hidden';


}

document.getElementById('header-menu-button').addEventListener('click', (e) => {
    toggleMenu();

});


let isMobile = (document.documentElement.clientWidth < 769);

if (isMobile){
    let titleMain = document.getElementById('view-main-title');

    titleMain.innerHTML =
        `
                WEB<br>
                PROJECT<br>
                eServices
        `;
}






let positionAboutSlider = 0;
let _arraySlider = document.getElementById('slider-view-about').getElementsByTagName('span');
function checkSlider(pos = (positionAboutSlider+ 1) ){

    _arraySlider[positionAboutSlider].classList.remove('_active');

    positionAboutSlider = pos;
    if (positionAboutSlider > 2){
        positionAboutSlider = 0;
    }

    _arraySlider[positionAboutSlider].classList.add('_active');


    document.getElementById('card-view-about').scrollLeft =(265 * positionAboutSlider);

}

checkSlider();


let cardScroll = document.getElementById('card-view-about');
cardScroll.addEventListener('touchend',()=>{

    function near(x1,x2){
        if (Math.abs(x1-x2) < 100){
            return true;
        }
    }

    if (near(cardScroll.scrollLeft, 0)){
        checkSlider(0);
    }
    else if (near(cardScroll.scrollWidth - cardScroll.offsetWidth,cardScroll.scrollLeft )){
        checkSlider(2)
    }else{
        checkSlider(1);
    }

});



for(let i = 0; i < _arraySlider.length; i++){

    _arraySlider[i].addEventListener('click', ()=>{

        checkSlider(i);

    })
}






let _menuNavigation = document.getElementById('menu-navigation').getElementsByTagName('a');


for(let i = 0;i < _menuNavigation.length; i++){
    _menuNavigation[i].addEventListener('click', () => {
        toggleMenu();
    })
}


document.getElementById('view-main').style.height = document.getElementById('view-main').offsetHeight + 'px';
