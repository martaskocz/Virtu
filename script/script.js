$(document).ready(function () {
    function menuDropdown() {
        var switcher = true;
        $('nav .menubar').click(function () {
            if (switcher == true) {
                $('#menu').removeClass('hide').slideDown(1000);
                switcher = false;

            } else {
                $('#menu').slideUp(1000);
                switcher = true;
            }
        });
    }

    menuDropdown();
});