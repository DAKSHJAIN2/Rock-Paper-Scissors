let userscore = 0;
let compscore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let p = document.querySelector("#msg");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");

let compresponse = () => {
    let arr=["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()*3)];
} 

rock.addEventListener("click", () => {
    let res = compresponse();
   console.log("rock was chosen", "but computer choose\t"+ res);
 
 if((res)=="rock")
    {
      p.innerText="There is a Tie";
      p.style.backgroundColor = "teal";
    } else if ((res)=="paper")
    {
        p.innerText="You Lose, Computer Wins";
        p.style.backgroundColor = "red";
        compscore = compscore + 1;
        comp.innerText = compscore;
    }
    else if ((res)=="scissors")
        {
            p.innerText="You Win, Computer Lose";
            p.style.backgroundColor = "green";
            userscore = userscore + 1;
            you.innerText = userscore;
        }
});

paper.addEventListener("click", (e) => {
    let res = compresponse();
    console.log("paper was chosen",  "but computer choose\t"+ res);
  
  if((res)=="paper")
    {
      p.innerText="There is a Tie";
      p.style.backgroundColor = "teal";
    } else if ((res)=="scissors")
    {
        p.innerText="You Lose, Computer Wins";
        p.style.backgroundColor = "red";
        compscore = compscore + 1;
        comp.innerText = compscore;
    }
    else if ((res)=="rock")
        {
            p.innerText="You Win, Computer Lose";
            p.style.backgroundColor = "green";
            userscore = userscore + 1;
            you.innerText = userscore;
        }
});

scissors.addEventListener("click", (e) => {
    let res = compresponse();
    console.log("scissors was chosen",  "but computer choose\t"+ res);
  
  if((res)=="scissors")
    {
      p.innerText="There is a Tie";
      p.style.backgroundColor = "teal";
    } else if ((res)=="rock")
    {
        p.innerText="You Lose, Computer Wins";
        p.style.backgroundColor = "red";
        compscore = compscore + 1;
        comp.innerText = compscore;
    }
    else if ((res)=="paper")
        {
            p.innerText="You Win, Computer Lose";
            p.style.backgroundColor = "green";
            userscore = userscore + 1;
            you.innerText = userscore;
        }
});
