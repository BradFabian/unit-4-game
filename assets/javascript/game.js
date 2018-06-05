
    // Generate number for player to match //
        $(document).ready(function() {
            var gameScore = Math.floor(Math.random() * ((120-19)+1) + 19);
            console.log(gameScore);
            $("#targetNumber").text(gameScore);

    // Crystals Generate numbers by clicks loop??//
    var crystalNumbers = Math.floor(Math.random() * ((12-1)+1) + 1); 
    console.log(crystalNumbers);
    $("#blueCrystal").on('click', function(crystalNumbers) {
        $('#score').text(crystalNumbers);
    
        
    });

    // show total score //

    // set conditions for winning or losses//


    // reset counter back to zero //
    var winCount = 0
    var LossCount = 0
    var scoreCount = 0
            
        });
       

