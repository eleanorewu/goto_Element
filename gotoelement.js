$("*").each(function () {
    $(this).click(function () { 
        var target =$(this).attr("data-goto-target");
        var duration =$(this).attr("data-goto-duration");

        console.log("目標元素：" + target);
        console.log("時間：" + duration);
    });
    
});