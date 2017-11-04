function changeDevice(event) {
    $('.nav-buttons button').removeClass("active");
    $(event.target).addClass("active");
    $(".screenshot").hide();
    $(".screenshot."+$(event.target).data("show")).show();
}
$('.nav-buttons button').on("click", changeDevice);
