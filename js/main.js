var canvas, stage, exportRoot;

function init() {

    canvas = document.getElementById("logoCanvas");
    exportRoot = new lib.logo();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);


    TweenMax.set("#topRow", {alpha:0});
    TweenMax.set("#workRow", {alpha: 0});
    TweenMax.set("#portfolioRow", {alpha: 0});
    TweenMax.set("#portfolioRow2", {alpha: 0});
    TweenMax.set("#portfolioRow3", {alpha: 0});
    TweenMax.set("#portfolioRow4", {alpha: 0});
    TweenMax.set("#portfolioRow5", {alpha: 0});

    TweenMax.to("#topRow", 1,  {alpha: 1, y:0, delay: 1});
    TweenMax.to("#workRow", 1,  {alpha: 1, y:0, delay: 1.5});
    TweenMax.to("#portfolioRow", 1,  {alpha:  1, delay: 2});
    TweenMax.to("#portfolioRow2", 1,  {alpha: 1, delay: 2.5});
    TweenMax.to("#portfolioRow3", 1,  {alpha: 1, delay: 3});
    TweenMax.to("#portfolioRow4", 1,  {alpha: 1, delay: 3.5});
    TweenMax.to("#portfolioRow5", 1,  {alpha: 1, delay: 4});
    //$(".portfolioRow").css("opacity", 0);

    addPortfolioListeners();

}

function onWindowResize(){
    if ($(window).width() < 700)
    {
        $("#logoCanvas").attr("width", "350px");
    }
}




function addPortfolioListeners()
{
    addPortfolioButtonListener($('#calvinLink'), 'vids/calvin.mp4', 'vids/calvin.ogv', "Calvin Klein mini-site");
    addPortfolioButtonListener($('#fordLink'), 'vids/ford.mp4', 'vids/ford.ogv', "Ford mini-site");
    addPortfolioButtonListener($('#plazaLink'), 'vids/plaza.mp4', 'vids/plaza.ogv', "Plaza mini-site");
    addPortfolioButtonListener($('#whataburgerLink'), 'vids/wat.mp4', 'vids/wat.oggtheora.ogv', "Whataburger min-site");
    addPortfolioButtonListener($('#weblordsLink'), 'vids/weblords_showreel.mp4', 'vids/weblords_showreel.oggtheora.ogv',  "Weblords game" );
    addPortfolioButtonListener($('#ciscoLink'), 'vids/superFlashCards.mp4', 'vids/superFlashCards.oggtheora.ogv', "Cisco Card Game" );

}

function addPortfolioButtonListener(im, url, url2, title)
{
    im.click(function()
    {
        loadVideo(url, url2, title);
    });


}


function makeBubbles (){

}

function loadVideo(url, url2, title)
{
    console.log(url2);

    $(".modal-body").empty();
    var appendString = '<video  autoplay="true" controls> <source src='+url+' type="video/mp4">  <source src='+url2+' type="video/ogg">Your browser does not support the video tag.</video>';
    $(".modal-body").append(appendString);
    $("#myModalLabel").html(title);
    console.log("Title: "+title);
    $("#vidModal").modal();


}
