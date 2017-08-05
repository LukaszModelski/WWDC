/* DROPDOWN MENU */

$('body').click(function(evt){    

    if(evt.target.className == "dropDownMenuContainer" || evt.target.className == "fa-bars")
      return;
    //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
    if($(evt.target).closest('.dropDownMenuContainer').length)
      return;             

    if($(evt.target).closest('.fa-bars').length)
      return;    
    //Do processing of click event here for every element except with id menu_content
    $( ".dropDownMenuContainer" ).slideUp();
});

$( ".fa-bars" ).click(function() {

    if ($( ".dropDownMenuContainer" ).css('display') == 'none')
    {
        $( ".dropDownMenuContainer" ).slideDown();
    }
    else 
    {
        $( ".dropDownMenuContainer" ).slideUp();
    } 
});

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.dropDownMenuContainer').slideUp();
     }
 });

$(".checkUsMenu").click(function() {
    $('html, body').animate({
        scrollTop: $(".placeholder").offset().top
    }, 500);
});

$(".chartsMenu").click(function() {
    $('html, body').animate({
        scrollTop: $(".charts").offset().top
    }, 500);
});

$(".ourTeamMenu").click(function() {
    $('html, body').animate({
        scrollTop: $(".ourTeam").offset().top
    }, 500);
});

$(".portfolioMenu").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolioHeading").offset().top
    }, 500);
});

$(".brandsMenu").click(function() {
    $('html, body').animate({
        scrollTop: $(".brandsHeading").offset().top
    }, 500);
});


/* CHECK US BUTTON AND ARROWS */

$(".checkUsButton, .arrows").click(function() {
    $('html, body').animate({
        scrollTop: $(".charts").offset().top
    }, 500);
});

/* CHARTS */

$(function() {
    $('.chart1').easyPieChart({
    	trackColor:	'rgb(229,229,227)',
        size: '200',
        lineWidth: '5',
        barColor: 'rgb(243,71,57)',
        scaleColor: false
    });
});

$(function() {
    $('.chart2').easyPieChart({
    	trackColor:	'rgb(229,229,227)',
        size: '200',
        lineWidth: '5',
        barColor: 'rgb(0,153,137)',
        scaleColor: false
    });
});

$(function() {
    $('.chart3').easyPieChart({
    	trackColor:	'rgb(229,229,227)',
        size: '200',
        lineWidth: '5',
        barColor: 'rgb(21,43,60)',
        scaleColor: false
    });
});


var isActive = false;

$(window).scroll(function() {

    if ($(this).scrollTop()>200)
    {
        if(isActive === false){ 
            $('.chart1').data('easyPieChart').update(50);
            $('.chart2').data('easyPieChart').update(35);
            $('.chart3').data('easyPieChart').update(80);
            isActive = true;
        }
    }

});