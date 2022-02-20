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
    if (target.tagName != 'BUTTON') return;

    if (target.className != 'button button_transparent') {
        let coursesItem = target.parentNode.parentNode;
        let coursesDetails = coursesItem.querySelector('.courses-item__details');
        let coursesContent = coursesItem.querySelector('.courses-item__content');

        coursesItem.classList.toggle("courses-item_active");
        coursesDetails.classList.toggle("courses-item__details_active");
        coursesContent.classList.toggle("courses-item__content_active");
    }
    else if(target.className == 'button button_transparent') {
        let coursesMain = target.parentNode;
        let coursesMore = coursesMain.querySelector('.courses__more');

        coursesMore.classList.toggle("courses__more_active");
    }
    
})





