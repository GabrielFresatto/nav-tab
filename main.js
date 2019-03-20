$('.nav-tab a').click(function(){
     var tget = $(this).attr("href");
     $('.nav-tab li, .tab-panel').removeClass('active');
     $(this).parent().addClass('active');
     $(tget).addClass('active');
});