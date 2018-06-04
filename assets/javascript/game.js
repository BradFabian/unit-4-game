

$(function() {
    var gameScore = Math.floor(Math.random() * ((120-19)+1) + 19);
    console.log(gameScore);
    $("#targetNumber").text(gameScore);
    
});

