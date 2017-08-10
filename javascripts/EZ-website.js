$(document).ready(function() {
  
	//tab切換
	$(".tabs-item").hide();
	var pd_rec = $("ul.tabs-area").children(".active").attr("rel");
  $("#"+pd_rec).fadeIn();

	$("ul.tabs-area li").click(function() {
		
    $(".tabs-item").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
	
    $("ul.tabs-area li").removeClass("active");
    $(this).addClass("active");
	  
  });

	//關鍵字內容tab切換
	$(".tabs-table").hide();
    $(".tabs-table:first").show();

	$("ul.keyword-tabs li").click(function() {
		
    $(".tabs-table").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
	
    $("ul.keyword-tabs li").removeClass("active");
    $(this).addClass("active");
	  
  });

	var cate_table = $("ul.cate-tabs").children(".active").attr("rel");
	$("#"+cate_table).fadeIn();
	
	$("ul.cate-tabs li").click(function() {
		
    $(".tabs-table").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
	
    $("ul.cate-tabs li").removeClass("active");
    $(this).addClass("active");
	  
  });

  //scroll to top
  $(window).scroll(function(){
    var scr_top = $(window).scrollTop();
    var kw_tab = $('.keyword-tabs');
    var cate_tab = $('.cate-tabs');
    if(scr_top>100){
      kw_tab.addClass('tabs-fixed');
      cate_tab.addClass('tabs-fixed');
    }
    else if(scr_top<=100){
      kw_tab.removeClass('tabs-fixed');
      cate_tab.removeClass('tabs-fixed');
    }
  });
});