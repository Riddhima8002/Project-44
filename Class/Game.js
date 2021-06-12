class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef= database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
     
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
     
      
        image(grassimg, 0,0,1000,800);
        
        //var display_position = 100;
        
        //index of the array
        
  
        //x and y position of the cars
        var x = 100 ;
        var y = 200;
  
        drawSprites();
        for(var plr in allPlayers){
          var index = 0;
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = 500- allPlayers[plr].distance
          //use data form the database to display the cars in y direction
          y = 500 
        
         // console.log(index, player.index)
  
 
         
         
          textSize(15);
          text("Welcome Helpers!"+allPlayers.player1.name, 120,display_position);
        }
  
      }
  
    
    
                                                                                          
    end(){
      console.log("Game Ended");
    }
    
}
  