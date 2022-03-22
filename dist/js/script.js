document.addEventListener('click', function(event) {
    let target = event.target;
    let targetClosest = target.closest('a');
    if (target.tagName != 'BUTTON' && targetClosest.tagName != 'A' && target.tagName != 'A') return;

    if (target.className == 'button button_collapse' || target.className == 'button button_details') {
        let coursesItem = target.parentNode.parentNode;
        let coursesDetails = coursesItem.querySelector('.courses-item__details');
        let coursesContent = coursesItem.querySelector('.courses-item__content');

        coursesItem.classList.toggle("courses-item_active");
        coursesDetails.classList.toggle("courses-item__details_active");
        coursesContent.classList.toggle("courses-item__content_active");
    }
    else if (target.className == 'button button_transparent') {
        let coursesMain = target.parentNode;
        let coursesMore = coursesMain.querySelector('.courses__more');

        coursesMore.classList.toggle("courses__more_active");
        buttonClickAnimation(target);

        if (target.innerHTML == "ПОКАЗАТЬ ЕЩЕ 5 КУРСОВ") {
            target.innerHTML = "СВЕРНУТЬ";
        } else {
            //Scroll needs to be added
            target.innerHTML = "ПОКАЗАТЬ ЕЩЕ 5 КУРСОВ";
        }
    }
    else if (target.className == 'button button_feed') {
        window.open('https://goo.gl/maps/sr42PRHVRfT4iuDR8','_blank');       
    }

    if (target.className == 'button_more') {
        event.preventDefault();
        let feedbackDescr = target.parentNode.querySelector('.feedback__descr');

        feedbackDescr.classList.toggle("feedback__descr_more");

        if (target.innerHTML == "Свернуть") {
            target.innerHTML = "Развернуть";
        } else {
            target.innerHTML = "Свернуть";
        }
        
    }  
    
    if (targetClosest.className == 'pageup') {
        event.preventDefault();
        smoothScroll(targetClosest);
    }

    if (target.tagName == 'A') {
        event.preventDefault();
        smoothScroll(target);
        humburger.classList.toggle("humburger_active");
        mobileMenu.classList.toggle("menu__list_opened");
    }
});

function buttonClickAnimation(btn) {
    let deg = 0;
    let isDeg = true;
    let degExit = 0;
    let timer = setInterval(function() {
        btn.style.transform = 'skewY(' + deg + 'deg)';
        if (isDeg) {
            if (deg < 2) {
                deg += 0.1;
            } else {
                isDeg = false;
            }
        } else {
            if (deg > -2) {
                deg -= 0.1;
            } else {
                isDeg = true;
                degExit++;
            }
        }

        if (degExit == 1) {
            btn.style.transform = 'skewY(' + 0 + 'deg)';
            clearInterval(timer);
        }        
    }, 1);
}

document.addEventListener('DOMContentLoaded', function() {
    let descr = document.querySelectorAll('.feedback__descr');

    for (let i = 0; i < descr.length; i++) {
        if (descr[i].offsetHeight > 136) {
            let btnExpand = document.createElement('a');
            btnExpand.href = '#';
            btnExpand.innerHTML = 'развернуть';
            btnExpand.classList.add("button_more");
            descr[i].after(btnExpand);
            descr[i].classList.add("feedback__descr_more");
            
        }
    }  
});



document.addEventListener('scroll', function() {
    elSwitcher();
});

//animation switch
function ElSwitch (elem) {   
    this.elem = elem;
    this.isVisible = false;
    this.topPosition = elem.offsetTop;
}

let menuSwitch = new ElSwitch(document.querySelector('.promo').querySelector('.menu'));
let pageupSwitch = new ElSwitch(document.querySelector('.pageup'));

function elSwitcher () {    
    if (window.scrollY > menuSwitch.topPosition && !menuSwitch.isVisible) {
        // console.log(window.screen);
        menuSwitch.isVisible = true;
        menuSwitch.elem.classList.add("menu_active");
    }
    else if (window.scrollY <= menuSwitch.topPosition && menuSwitch.isVisible) {
        menuSwitch.isVisible = false;
        menuSwitch.elem.classList.remove("menu_active");
    }
    if (window.screen.width >= 768) {
        if (window.scrollY > 700 && !pageupSwitch.isVisible) {
            pageupSwitch.isVisible = true;
            fadeIn(pageupSwitch.elem);
        } else if (window.scrollY < 700 && pageupSwitch.isVisible){
            pageupSwitch.isVisible = false;
            fadeOut(pageupSwitch.elem);
        }
    }
}

// pageup animations
function fadeIn (el) {
    let opacity = 0.01;

    el.style.display = "block";

    let timer = setInterval(function() {
        el.style.opacity = opacity;
        opacity += opacity * 0.1;

        if (opacity >= 1) {
            clearInterval(timer);
        }        
    }, 10);
}

function fadeOut (el) {
    let opacity = 1;

    let timer = setInterval(function() {

        el.style.opacity = opacity;
        opacity -= opacity * 0.1;
        
        if (opacity <= 0.1) {
            clearInterval(timer);
            el.style.display = "none";
            el.style.opacity = 0;
        }
    }, 10);
}
//scroll animations
function smoothScroll (elem) {
    const href = elem.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
    top: offsetTop,
    behavior: "smooth"
    });
}

const humburger = document.querySelector(".humburger");
const mobileMenu = document.querySelector(".menu__list");

humburger.addEventListener('click', function() {
    humburger.classList.toggle("humburger_active");
    mobileMenu.classList.toggle("menu__list_opened");
});