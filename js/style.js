$(function() {
    $("#select1 dd").click(function (){
	$(this).addClass("selected").siblings().removeClass("selected");
	if($(this).hasClass('select-all')){
	    $("#selectA").remove();
	}else{
	    var copyThisA = $(this).clone();
	    if($("#selectA").length > 0){
		$("#selectA a").html($(this).text());
	    }else{
		$(".select-result dl").append(copyThisA.attr("id", "selectA")); 
	    }
	}
    });
    $("#select2 dd").click(function(){
	$(this).addClass("selected").siblings().removeClass("selected");
	if($(this).hasClass("select-all")){
	    $("#selectB").remove();
	}else{
	    var copyThisB = $(this).clone();
	    if($("#selectB").length > 0){
		$("#selectB a").html($(this).text());
	    }else{
		$(".select-result dl").append(copyThisB.attr("id","selectB"));
	    }
	}
    });
    $(document).on('click',"#selectA",function() {
	$(this).remove();
	$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    $(document).on('click',"#selectB",function() {
	$(this).remove();
	$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    $(document).on("click", ".select dd",function () { 
        if ($(".select-result dd").length > 1) { 
            $(".select-no").hide(); 
        } else { 
            $(".select-no").show(); 
        } 
    }); 
});