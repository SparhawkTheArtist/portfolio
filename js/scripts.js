// lightmode
//this object is irrelevant without jquery, display: none acceptable 
$('#lightmode').css('display', 'block');

// lightmomde function
// Cookies to keep lightmode/darkmode across pages: plugin courtesy of: http://code.iamkate.com/javascript/using-cookies/
function lightmode (){
    if ($('#checkbox').is(':checked')) {
        Cookies.set('lightmode', 'on', {path:'/'});
        $('.english').addClass('light'); //toggleClass does weird things with this, hence the add/remove classes
        $('.english').removeClass('dark');
        $('p').css({'font-weight': '700'});
    }
    else {
        Cookies.set('lightmode', 'off', {path:'/'});
        $('.english').addClass('dark');
        $('.english').removeClass('light');
        $('p').css({'font-weight': '100'});
    }
};


//nav.html
$(function(){
    $("#nav-placeholder").append('<aside class="navMenu"><input id="navToggle" name="navToggle" type="checkbox"><label for="navToggle">Navigation</label><img src="/img/sparhawk.png" class="logo" alt="Sparhawk Logo"><ul><li class="nav1"><a href="/index.html">About</a></li><li class="nav2"><a href="/desn.html">Design</a></li><li><a href="/motn.html">Motion</a></li><li class="nav4"><a href="/ills.html">Illustration</a></li><li><a href="/foto.html">Photography</a></li></ul></aside>');  
    if ($('#title').text() == ('Illustration')){
        $('.nav4').addClass('activePage');
    };
    if ($('#title').text() == ('Design')){
        $('.nav2').addClass('activePage');
    };
            
    
});


console.log($('#title').text());

$(function(){
    $("#foot-placeholder").load("footer.txt");
});


// at page load, check for lightmode cookie
if (Cookies.get('lightmode') == ('on')){
    $('#checkbox').attr('checked', true);
    lightmode();
}
else{
    $('#checkbox').attr('checked', false);
    lightmode();
};


// on click, trigger lightmode function
$('#checkbox').on('click', lightmode);
$('#checkbox').on('click', function(){
    console.log(Cookies.get('lightmode'));
});



// Copyright Date
var today = new Date();
var year = today.getFullYear();
$('.year').text(year);



// copy email on icon click
new ClipboardJS('.btn');

$('.btn').click(function(){
    $('.copiedMessage').show();
});
$('.btn').mouseout(function(){
    $('.copiedMessage').delay(2000).fadeOut();
});



// lightgallery
$('.lgGrid').lightGallery({
    mode: 'lg-slide-skew-only-rev',
    download: false,
    thumbnail: false,
    hideBarsDelay: 3000,
    preload: 2,
    autoplayControls: false
  });

  

// burger menu animation
$('#navCheck').click(function(){
    $('.burgerA').toggleClass('menuAnim');
    $('.burgerC').toggleClass('menuAnim');
});



// // http://jquery.eisbehr.de/lazy/
// $('.lazy').Lazy({
//     scrollDirection: 'vertical',
//     effect: 'fadeIn',
//     delay: 500,
//     onError: function(element) {
//         console.log('error loading ' + element.data('src'));
//     },
//     // onFinishedAll: function() {
        
//     //     // called once all elements was handled
//     // }
// });
