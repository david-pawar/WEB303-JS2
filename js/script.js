$(document).ready(function() {
    $('.accordion').on('click', '.accordion-control', function(e) {
        e.preventDefault();
        
        $('.accordion-panel').not($(this).closest('li').find('.accordion-panel')).slideUp();
        $(this).closest('li').find('.accordion-panel').slideToggle();
    });
});
$(document).ready(function () {
    $(".tab-control").click(function () {
        
        $(".tab-control").removeClass("active");
        $(".tab-panel").removeClass("active");
        $(this).addClass("active");
        var targetPanelId = $(this).attr("href");
        $(targetPanelId).addClass("active");
    });
});