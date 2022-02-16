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
}); */

let item = {
    button: document.getElementsByClassName('button__details')[0],
    content: document.getElementsByClassName('courses-item__content'),
    details: document.getElementsByClassName('courses-item__details')
};
item.button.addEventListener("click", function() {
    alert("adfadsf");
});
/* for (var i = 0 ; i < item.button.length; i++) {
    item.button[i].addEventListener("click", function(){
       doc[this].classList.toggle('courses-item__content_active');
       det[this].classList.toggle('courses-item__details_active');
    });
 } */

