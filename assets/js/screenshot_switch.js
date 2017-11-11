function changeDevice(event) {
    var show = $(event.target).data("show")
    $('.nav-buttons button').removeClass("active");
    $('.nav-buttons button[data-show=' + show + ']').addClass("active");
    $(".screenshot").hide();
    $(".screenshot."+show).show();
}
$('.nav-buttons button').on("click", changeDevice);
