import { useState } from "react";

const Rps= () =>{
    const [darkMode, setDarkMode] = useState(false);
    let userWin=true;
    var winnerMessage="";
    const [userCount,setUserCount]=useState(0);
    const[computerCount,setComputerCount]=useState(0);
const choices=["Rock","Paper","Scissors"];
const [result,setResult]=useState("Game starts");


const toogleDarkMode=()=>{
    if(darkMode){
    document.documentElement.classList.remove('dark');
        console.log("light");
}
    else{
        document.documentElement.classList.add('dark');
        console.log("dark");
    }
    setDarkMode((curr)=>!curr);
    

}

const getComputerChoice=()=>{
   return choices[Math.floor(Math.random()*choices.length)];
}

const declareWinner=(userWin)=>{
    if(userWin){
        setUserCount((curr)=>curr+1);
        return "You win";
    }
    else{
        setComputerCount((curr)=>curr+1);
        return "Computer wins";
    }
}


const declareFinalWinner=(newUserCount,newComputerCount)=>{
    if(newUserCount===5 || newComputerCount===5){
        
            alert(newUserCount > newComputerCount ? "You are the final winner!" : "Computer is the final winner!");
            setUserCount(0);
            setComputerCount(0);
        
    }
}

const determineWinner = (userChoice, computerChoice)=>{
if(userChoice===computerChoice)
     winnerMessage="It is a tie";
else{
    
    if(userChoice==="Rock"){
        userWin =computerChoice==="Paper"? false:true;

    } else if(userChoice==="Paper"){
        userWin =computerChoice==="Scissors"? false:true;

    } else if(userChoice==="Scissors"){
        userWin =computerChoice==="Rock"? false:true;
    }
    winnerMessage=declareWinner(userWin);
}




declareFinalWinner(userWin?userCount+1:userCount, userWin?computerCount:computerCount+1);
setResult(`You chose ${userChoice} and computer chose ${computerChoice}. ${winnerMessage}`);
}


const handleClick = (userChoice) => {
    
    const computerChoice= getComputerChoice();
    determineWinner(userChoice,computerChoice);
    

}
return(
<div className="bg-white text-black rounded-3xl p-9  justify-center dark:bg-black dark:text-white ">
    <div className=" p-6 font-mono text-5xl "><h1>Rock Paper Scissors</h1>
    </div>

    <div className="flex justify-center space-x-44 mt-12">
       { choices.map((choice)=>(
        <button key={choice} className="text-2xl text-black dark:text-white font-serif bg-orange-500 w-24 h-24 flex items-center justify-center  rounded-full hover:bg-orange-200 hover:text-black " onClick={()=>handleClick(choice)}
        >{choice}</button>
       )
    )}


       
    </div>

    <div className="text-2xl mt-12 ">

<div className="flex flex-direction-col justify-center space-x-24 ">
<div>
    <p>{userCount}</p>
    <h1 className="mt-7">User count</h1>
</div>
<div >
    <p>{computerCount}</p>
    <h1 className="mt-7">Computer count</h1></div>
</div>
    </div>

    <div className="text-2xl mt-12">
        <p>{result}</p>
    </div>

    <button className="absolute bottom-16 right-16 p-2 w-16 h-16 bg-neutral-800 rounded-full text-white dark:bg-white dark:text-black" onClick={toogleDarkMode}>
        {darkMode?"Light":"Dark"}</button>

</div>

);

};

export default Rps;