$(document).ready(function () {
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




