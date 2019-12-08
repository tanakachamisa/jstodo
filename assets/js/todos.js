//strike thnrough a todo
$("ul").on("click", "li", function(){
    //if li is grey turn black and vice versa
    $(this).toggleClass("completed");    
}); //"li" clicked inside of a "ul"

//click on x to dlt todo
$("ul").on("click", "span", function(event){ //"span" clicked inside of a "ul"
    $(this).parent().fadeOut(500, function(){ //callback funtcion to make sure we remove AFTER fadeout
        $(this).remove();
    });
event.stopPropagation(); //prevents event from firing up on other elements
});

//input
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
      //get value from input
       var todoText = $(this).val();
       $(this).val(""); //clear after add
       //create a new li and add to ul
       //APPEND method: choose a element to append and add to
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus-square").click(function(){
    $("input[type='text'").fadeToggle();
})