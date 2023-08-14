
//VARIABLES INITIALIZATION
let indexofsong= 0;//song 0 se shuru hoga
let audioElement=new Audio('songs/1.mp3');//audio variable takay audio objects chlskay web me
let go= document.getElementById("playbutton");//play walay button ko get kray ga jiski id ye hai
let bar=document.getElementById('progressbar');//progressbar ko catch kray ga
let gif=document.getElementById('gif');//gif ka data pkray gaa
let mastersong= document.getElementById('mastersong');



//----------------------displaying songs name on web with image----------------------------------------
//ARRAY INITIALIZATION
// let arr = ['hello','byebye','how are you']
let songitems=Array.from(document.getElementsByClassName("songitem"));//saray song k divs with songitem class are selected andconverts them into array
let songs=[//this songs is an array of objects and obj attributes cover etc are self declared variabels by me
    { songName: "Calm Down-Selena Gomez", filePath:"songs/1.mp3", cover:"covers/10.jpg"},//zruri ni hota k file path ./ se he define kren usk bgher b hojata
    { songName: "Janiye", filePath: "songs/2.mp3", cover: "covers/2.jpg" },
    { songName: "Kahani Suno", filePath: "songs/3.mp3", cover: "covers/5.jpg" },
    { songName: "Mi Amor", filePath: "songs/4.mp3", cover: "covers/1.jpg" },
    { songName: "Tere Hawaale", filePath: "songs/5.mp3", cover: "covers/7.jpg" },
    { songName: "Tere Liye", filePath: "songs/6.mp3", cover: "covers/8.jpg" },
    { songName: "Tera Chehra", filePath: "songs/7.mp3", cover: "covers/3.jpg" },
    { songName: "Dil Ibadat", filePath: "songs/8.mp3", cover: "covers/9.jpg" },
    { songName: "Bela Chao", filePath: "songs/9.mp3", cover: "covers/6.jpg" },
    { songName: "Haal-e-Dil", filePath: "songs/10.mp3", cover: "covers/4.jpg" }
];


//map,foreach,loop arrays k lye use krtay hain map n foreach are same almost
songitems.map((element, i) => {//array ka hr element index i se shuru se map hoga bari bari
    element.getElementsByTagName('img')[0].src=songs[i].cover;//.src is builtin method to change path
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
}
)


//------------------------------play songs by bottom--------------------------------------

//making a song play or pause by click
go.addEventListener('click',()=>
{//by clicking playbutton ki id p toh variable go 
    if(audioElement.paused || audioElement.currentTime<=0){//agr audio pause hai ya shuru he ni hue 
        audioElement.play();//gana chljayee
        go.classList.remove('fa-play-circle');//remove icon play
        go.classList.add('fa-pause-circle');
        gif.style.opacity=1;}//gif b nzr ajaye ga 
    else{
        audioElement.pause();
        go.classList.remove('fa-pause-circle');
        go.classList.add('fa-play-circle');
        gif.style.opacity=0;}//ni chlra toh gif nzr ni iayga
})

//audioelemetn k according progressbar MOVE
audioElement.addEventListener('timeupdate', ()=>{//audio is controlled through timeupdate builtin 
    let progress=Number((audioElement.currentTime/ audioElement.duration)*100);//0/2:30 ye jo string me inko number me kr k * 100
bar.value=progress;//progress bar move kray ga
});
//progressbar k according song change
bar.addEventListener('change', ()=>{
    audioElement.currentTime=bar.value *audioElement.duration/100;
})


//changing icons in bottom
const allplay =()=>{ //declared a varialbe arrow function
    Array.from(document.getElementsByClassName('playitplease')).map((element)=>{//saray icons ko map krdia
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
});
};
//change icon of each songelement
Array.from(document.getElementsByClassName('playitplease')).map((element)=>{
element.addEventListener('click',(e)=>{
    allplay();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle'); //with icon change of each song it must also play
    indexofsong=Number(e.target.id);//song ki id he index bnjaye g in number
    audioElement.src=`songs/${indexofsong +1}.mp3`;//jo index wo song
    mastersong.innerText=songs[indexofsong].songName; //jo gana sleect kru uska he neechay naam iay ga
    gif.style.opacity=1;//tb b gif nzr iay
    audioElement.currentTime=0;
    audioElement.play();
    go.classList.remove('fa-play-circle');
    go.classList.add('fa-pause-circle');
})
})
//agla gana lgay next icon se
document.getElementById("next").addEventListener('click',()=>{
    if(indexofsong>=9){
        indexofsong=0;
    }
    else{
        indexofsong += 1;
    }
    audioElement.src = `songs/${indexofsong + 1}.mp3`;//jo index wo song
    mastersong.innerText=songs[indexofsong].songName;//jo gana sleect kru uska he neechay naam iay ga
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    go.classList.remove('fa-play-circle');
    go.classList.add('fa-pause-circle');
})
// pichla gana from previous icon
document.getElementById('previous').addEventListener('click',()=>{
    if(indexofsong<=0){
        indexofsong=0;
    }
    else{
        indexofsong-=1;
    }
    audioElement.src = `songs/${indexofsong + 1}.mp3`;//jo index wo song
    mastersong.innerText=songs[indexofsong].songName;//jo gana sleect kru uska he neechay naam iay ga
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masteplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})






