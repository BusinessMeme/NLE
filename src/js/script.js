/* $(document).ready(function () {
    //your code here
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.courses-item__content').eq(i).toggleClass('courses-item__content_active');
                $('.courses-item').eq(i).toggleClass('courses-item_active');
                $('.courses-item__details').eq(i).toggleClass('courses-item__details_active');
            })
        });
    };
    toggleSlide('.button__details');
    toggleSlide('.button__collapse');
});
 */


document.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON' && target.tagName != 'A') return;

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
    }
    else if (target.className == 'button button_feed') {
        window.open('https://goo.gl/maps/sr42PRHVRfT4iuDR8','_blank');       
    }

    if (target.className == 'button_more') {
        event.preventDefault();
        let btnParent = target.parentNode;
        let feedbackDescr = btnParent.querySelector('.feedback__descr');

        feedbackDescr.classList.toggle("feedback__descr_more");

        if (target.innerHTML == "Свернуть") {
            target.innerHTML = "Развернуть";
        } else {
            target.innerHTML = "Свернуть";
        }
        
    }    
});

document.addEventListener('DOMContentLoaded', function() {
    let descr = document.querySelectorAll('.feedback__descr');

    for (let i = 0; i < descr.length; i++) {
        if (descr[i].offsetHeight != 114) {
            let btnExpand = document.createElement('a');
            btnExpand.href = '#';
            btnExpand.innerHTML = 'развернуть';
            btnExpand.classList.add("button_more");
            descr[i].after(btnExpand);
            descr[i].classList.add("feedback__descr_more");
            
        }
    }  
});