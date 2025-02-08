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
<div className="h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white p-4 sm:p-6 lg:p-9 transition-all">

    <div className=" font-mono text-3xl sm:text-4xl lg:text-5xl "><h1>Rock Paper Scissors</h1>
    </div>

    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8">
       { choices.map((choice)=>(
        <button key={choice} className="text-l sm:text-xl lg:text-2xl text-black dark:text-white font-serif bg-indigo-600 dark:bg-orange-500 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center  rounded-full hover:bg-indigo-400 dark:hover:bg-orange-200 hover:text-black transition-all" onClick={()=>handleClick(choice)}
        >{choice}</button>
       )
    )}


       {/* Scores */}
    </div>

    <div className="text-xl sm:text-2xl mt-8 w-full max-w-md ">

<div className="grid grid-cols-2 gap-6 text-center ">
<div>
    <p className="text-4xl">{userCount}</p>
    <h1 className="mt-3">User count</h1>
</div>
<div >
    <p className="text-4xl">{computerCount}</p>
    <h1 className="mt-3">Computer count</h1></div>
</div>
    </div>

    <div className="text-xl sm:text-2xl mt-8 text-center max-w-mid">
        <p>{result}</p>
    </div>


    {/*Dark mode toggle button*/ }
    <button className="absolute top-10 right-10 p-3 w-16 h-16 sm:h-16 s:w-16  bg-neutral-800 rounded-full text-white dark:bg-white dark:text-black shadow-lg transition-all" onClick={toogleDarkMode}>
        {darkMode?"Light":"Dark"}</button>

</div>

);

};

export default Rps;