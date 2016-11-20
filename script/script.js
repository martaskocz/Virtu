$(document).ready(function () {
    function menuDropdown() {
        var switcher = true;
        $('nav .menubar').click(function () {
            if (switcher == true) {
                $('#menu').slideDown(1000).removeClass('hideMenu');
                switcher = false;

            } else {
                $('#menu').slideUp(1000);
                switcher = true;
            }
        });
    }

    menuDropdown();

    

    /*window.addEventListener('load', function () {
        var zdjecie = document.getElementById("ofirmie");
        var tla = ['url(img/ofirmie.png)', 'url(img/kariera_tlo.png)'];
        var czas = 3; // 3 sekundy

        var i = 0;
        setInterval(function () {
            i++;
            i%=tla.length;

            zdjecie.style.backgroundImage = tla[i];
            zdjecie.css('opacity:1');

        }, czas * 1000);

    }, false);*/


    var images = ["ofirmie.png", "kariera_tlo.png"];
    $(function () {
        var i = 0;
        $("#ofirmie").css("background-image", "url(img/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#ofirmie").fadeOut("slow", function () {
                $(this).css("background-image", "url(img/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
    });

    
    var images2 = ["kariera_tlo.png", "ofirmie.png"];
    $(function () {
        var i = 0;
        $("#kariera").css("background-image", "url(img/" + images2[i] + ")");
        setInterval(function () {
            i++;
            if (i == images2.length) {
                i = 0;
            }
            $("#kariera").fadeOut("slow", function () {
                $(this).css("background-image", "url(img/" + images2[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 3000);
    });


    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var slide = document.getElementsByClassName("slider");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > slide.length) {myIndex = 1}
        slide[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    var myIndex2 = 0;
    carousel2();

    function carousel2() {
        var i;
        var slide2 = document.getElementsByClassName("slider2");
        for (i = 0; i < slide2.length; i++) {
            slide2[i].style.display = "none";
        }
        myIndex2++;
        if (myIndex2 > slide2.length) {myIndex2 = 1}
        slide2[myIndex2-1].style.display = "block";
        setTimeout(carousel2, 3500); // Change image every 2 seconds
    }

});