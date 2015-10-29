var $show = 0;
window.addEventListener("scroll", function (event) {
    var $top = this.scrollY,
        $aboutUs_detail = $(".AboutUs_detail"),
        $team_container = $(".Team_container"),
        $Slogan_title = $(".Slogan_title");
    console.log($top);
    if ($top >= 68 && $show == 0) {
        $aboutUs_detail.removeClass('display-none');
        $aboutUs_detail.addClass('animated fadeInUp');
        $show = 1;
    }

    if ($top >= 572 && $show == 1) {
        $Slogan_title.removeClass('display-none');
        $Slogan_title.addClass('animated flipInY');
        $show = 2;
    }

    if ($top >= 1100 && $show == 2) {
        $team_container.removeClass('display-none');
        $team_container.addClass('animated fadeInUp');
        $show = 3;
    }

});

