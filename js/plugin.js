$(function(){
    $(".sideButton").click(function(){
        $(".left-side").toggleClass("active");
        $(".right-side").toggleClass("side")
        $(this).find(".myIcon").toggleClass("fa-times").toggleClass("fa-bars")
    })
    $('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
    });
    $("body,.doctos-details ul").niceScroll();
})

