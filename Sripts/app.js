
const Gamedata=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]



let editedplayer=0;
let activeplayer=0;
let currentRound=1;
let gameisover=false;
const players=[
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'0'  
    }
]


const Editplayer1btn=document.getElementById('Edit-Player-1-btn');
const Editplayer2btn=document.getElementById('Edit-Player-2-btn');
const PlayerConfigOverlay=document.getElementById('config-overlay');
const Backdrop=document.getElementById('backdrop');
const cancelbtn=document.getElementById('canel-config-btn');
const formelement=document.querySelector('form');
const ErrorsoutputElement=document.querySelector('#erros');
const startnewbtn=document.getElementById('start-game-btn');
const gameAreaelement=document.getElementById('active-game');
const gamefieldElement=document.querySelectorAll('#game-board li');
const avtiveplayerNameElement=document.getElementById('active-player-name');

const gameoverelemnt=document.getElementById('game-over');



Editplayer1btn.addEventListener('click',OpenPlayerConfig);
Editplayer2btn.addEventListener('click',OpenPlayerConfig);

cancelbtn.addEventListener('click',ClosePlayerConfig);
Backdrop.addEventListener('click',ClosePlayerConfig);

formelement.addEventListener('submit',SavePlayerConfig)

startnewbtn.addEventListener('click',startnewgame);

for(const Fieldelements of gamefieldElement ){
    Fieldelements.addEventListener('click',selectgamefield);
}


