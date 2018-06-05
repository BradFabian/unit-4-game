
    // Generate number for player to match //
        $(document).ready(function() {
            var gameScore = Math.floor(Math.random() * ((120-19)+1) + 19);
            console.log(gameScore);
            $("#targetNumber").text(gameScore);

    // Crystals Generate numbers by clicks//
    
    // Setting up random numbers for each jewel
        // Random number has to be between 1 - 12
        // 

        var num1= Math.floor(Math.random() * ((12-1)+1) + 1); 
        var num2= Math.floor(Math.random() * ((12-1)+1) + 1); 
        var num3= Math.floor(Math.random() * ((12-1)+1) + 1); 
        var num4= Math.floor(Math.random() * ((12-1)+1) + 1); 

        // set counters to zero //
        var winCount = 0;
        var lossCount = 0;
        var scoreCount = 0;
        // declaring counter wins and loses //
        $('#winCounter').text(winCount);
        $('#lossCounter').text(lossCount);
        //reset counters//
        function reset() {
            gameScore = Math.floor(Math.random() * ((120-19)+1) + 19);
            $("#targetNumber").text(gameScore);
            var num1= Math.floor(Math.random() * ((12-1)+1) + 1); 
            var num2= Math.floor(Math.random() * ((12-1)+1) + 1); 
            var num3= Math.floor(Math.random() * ((12-1)+1) + 1); 
            var num4= Math.floor(Math.random() * ((12-1)+1) + 1); 
            scoreCount = 0
            $('#score').text(scoreCount);
            //wins and loses functions //
            //adds the wins to the userTotal
            function winner() { 
            alert("You won!");
            winCount++; 
            $('#wincounter').text(winCount);
             reset();
            }
    //addes the losses to the userTotal
    function loser(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }

            //crystal clicks//
        }


    
        
    
        
    
            
        });
       

