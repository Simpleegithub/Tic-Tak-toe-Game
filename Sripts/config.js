function OpenPlayerConfig(event){
    const selectedplayerid= +event.target.dataset.playerid;
    editedplayer=selectedplayerid;
    
    PlayerConfigOverlay.style.display='block';
    Backdrop.style.display='block';
}


function ClosePlayerConfig(){
    PlayerConfigOverlay.style.display='none';
    Backdrop.style.display='none';
    formelement.firstElementChild.classList.remove('error');
    ErrorsoutputElement.textContent="";
  formelement.firstElementChild.lastElementChild.value="";
}


function SavePlayerConfig(e){
e.preventDefault();

const enteredplayername=document.getElementById('playername').value.trim();

if(!enteredplayername){
    formelement.firstElementChild.classList.add('error')
  ErrorsoutputElement.textContent="Please enter a valid name !";
}


const updatedPlayerdataelement=document.getElementById('player-'+ editedplayer +'-data')
updatedPlayerdataelement.children[1].textContent=enteredplayername;


if(editedplayer===1){
    players[0].name=enteredplayername;
}
else{
    players[1].name=enteredplayername;
}


ClosePlayerConfig();



}