$("#dl_box_title_box").dragDiv($("#dl_box_div"));//拖拽div头部


//下拉菜单
$("div.tab").hover(function(i){
	$(this).removeClass("tab").addClass("tab_cur");
	var top_left = $(this).offset();

	var height = $(this).height();
	top_left.top += height;
	var index = $(this).index();
	$("#dropmenudivs>.dropmenudiv").eq(index).css({top:top_left.top + "px",left:top_left.left + "px"}).show();
},function(){
	$(this).removeClass("tab_cur").addClass("tab");
	$("#dropmenudivs>.dropmenudiv").hide();
});

$("#dropmenudivs>.dropmenudiv").hover(function(){
	$("div.tab").eq($(this).index()).removeClass("tab").addClass("tab_cur");
	$(this).show();
},function(){
	$(this).hide();
});