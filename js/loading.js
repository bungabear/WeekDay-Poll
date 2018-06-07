document.addEventListener("DOMContentLoaded", ()=>{
    $('.preloader-background').delay(500).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(500)
        .fadeOut();
});

function hideLoading(){
    $('.preloader-background').fadeOut('slow');
    $('.preloader-wrapper')
        .fadeOut();
    
}
// TODO show str
function showLoading(str = "", opacity = 0.5){
    $('.preloader-background').css("opacity", opacity);
    $('.preloader-background').fadeIn();
    $('.preloader-wrapper').fadeIn();
}