
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
            //adds the wins to the winCount//
            function winner() { 
            alert("You won!");
            winCount++; 
            $('#wincounter').text(winCount);
             reset();
            }
            //addes the losses to the lossCount//
            function loser(){
            alert ("You lose!");
            lossCount++;
            $('#lossCounter').text(lossCount);
            reset()
           }

            //crystal clicks//
            $('#blueCrystal').on('click', function(){
                scoreCount = scoreCount + num1;
                console.log("New score= " + scoreCount);
                $('#score').text(scoreCount); 
                      //sets win/lose conditions
                    if (scoreCount == gameScore){
                      winner();
                    }
                    else if ( scoreCount > gameScore){
                      loser();
                    }   
              }) 
              $('#pinkCrystal').on('click', function(){
                scoreCount = scoreCount + num2;
                console.log("New score= " + scoreCount);
                $('#score').text(scoreCount); 
                      //sets win/lose conditions
                    if (scoreCount == gameScore){
                      winner();
                    }
                    else if ( scoreCount > gameScore){
                      loser();
                    }   
              }) 
              $('#yellowCrystal').on('click', function(){
                scoreCount = scoreCount + num3;
                console.log("New score= " + scoreCount);
                $('#score').text(scoreCount); 
                      //sets win/lose conditions
                    if (scoreCount == gameScore){
                      winner();
                    }
                    else if ( scoreCount > gameScore){
                      loser();
                    }   
              })
              $('#purpleCrystal').on('click', function(){
                scoreCount = scoreCount + num4;
                console.log("New score= " + scoreCount);
                $('#score').text(scoreCount); 
                      //sets win/lose conditions
                    if (scoreCount == gameScore){
                      winner();
                    }
                    else if ( scoreCount > gameScore){
                      loser();
               
                    }   
              }); 
        


    
            };
    
        
    
            
        });
       

