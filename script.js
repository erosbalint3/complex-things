
$('#gomb').on("click", function() {
    console.log("Yeah, you clicked me!");
});
$('#gomb2').on("click", function(){
    $('#gomb').text("igen");
});
$('#gomb3').on("click", function(){
    $('#gomb, #gomb2, #gomb3, #gomb4').css("background-color","blue");
});
let clicks = 0;
$('#gomb4').on("click", function(){
    let color = $(this).val();
    if(clicks < 1){
        $("#gomb, #gomb2, #gomb3, #gomb4").css("background-color", color);
        clicks++;
    }
    else{

    }
});