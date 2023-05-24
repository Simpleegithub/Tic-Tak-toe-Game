
function ResetGame(){
    activeplayer=0;
    currentRound=0;
    gameisover=false;
    gameoverelemnt.firstElementChild.innerHTML='You won! <span id="winner-name">PLAYERNAME</span>';
    gameoverelemnt.style.display="none";


    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
         Gamedata[i][j]=0;
      
        }
    }
    for(const Fieldelements of gamefieldElement ){
        Fieldelements.textContent="";
         Fieldelements.classList.remove('disabled');
    }
    
    // gamefieldElement.textContent="";
}





function startnewgame(){
    if(players[0].name ==="" || players[1].name ===""){
       alert('Please set custom player names for both players!')
        return;
    }


    gameAreaelement.style.display="block";
    ResetGame();
}


function switchPlayer(){
    if(activeplayer==0){
        activeplayer=1;
    }
    else{
        activeplayer =0
    }
    avtiveplayerNameElement.textContent=players[activeplayer].name;
}


function selectgamefield(event){
    if(gameisover){
        return;
    }
    const selectedcol=event.target.dataset.col-1;
    const selectedrow=event.target.dataset.row-1;
   
    if(Gamedata[selectedrow][selectedcol]>0){
        alert('Please select an empty field!');
        return;
    }
    event.target.textContent=players[activeplayer].symbol;
    event.target.classList.add('disabled');

    Gamedata[selectedrow][selectedcol]=activeplayer+1;
    

    const winnerId=checkforGamewinner();
    if(winnerId!==0){
        endGame(winnerId);
    }

     currentRound++;
    switchPlayer();



}


function checkforGamewinner(){
    // Checking the rows equality
    for(let i=0;i<3;i++){

        if(Gamedata[i][0]>0 && 
         Gamedata[i][0] === Gamedata[i][1] && 
         Gamedata[i][1] ===Gamedata[i][2]){
        return Gamedata[i][0];
        }
    }

    // checking for cols
    for(let i=0;i<3;i++){

        if(Gamedata[0][i]>0 && 
         Gamedata[0][i] === Gamedata[1][i] && 
         Gamedata[0][i] ===Gamedata[2][i]){
        return Gamedata[0][i];
        }
    }
   // check the daigonal from top to bottom
    if(Gamedata[0][0] >0 && Gamedata[0][0] === Gamedata[1][1] && Gamedata[1][1] === Gamedata[2][2]){
        return Gamedata[0][0];
    }

    // check the daigonal from left to right
    if(Gamedata[2][0] >0 && Gamedata[2][0] === Gamedata[1][1] && Gamedata[1][1] === Gamedata[0][2]){
        return Gamedata[2][0];
    }

    if(currentRound===9){
        return -1;
    }


   return 0;


 
    
}



function endGame(winnerId){
    gameisover=true;
    gameoverelemnt.style.display="block";
    if(winnerId>0){

        const winnerName=players[winnerId-1].name;
        gameoverelemnt.firstElementChild.firstElementChild.textContent=winnerName;
    }
    else{
        gameoverelemnt.firstElementChild.textContent='It\'s a draw!' ;
    }
   }