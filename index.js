// var rock = document.getElementById("rock")
// var scissors = document.getElementById("scissors")
// var paper = document.getElementById("paper")



// rock.addEventListener("click", myRockFunction);
// scissor.addEventListener("click", myScissorFunction);
// paper.addEventListener("click", myPaperFunction);

// // myRockFunction
// // myScissorFunction
// // myPaperFunction

// // comp choice

// // var computerChoice = Math.random()
// //   if (computerChoice <= 0.33) {
// //       computerChoice = "rock"
// //   } else if(computerChoice < 0.67) {
// //       computerChoice = "paper"
// //   } else {
// //       computerChoice = "scissors"
// //   }


//   choice1 = userChoice
//   choice2 = computerChoice

//   function compare(choice1, choice2)
  
//   // {
//   //   if choice1===choice2
//   // {
//   //     return ("its a tie!!")
//   // }


//   // {
//   //     if choice1 === "rock" && choice2 === "scissors"{

      
//   //   return("congrats your rock beats scissors!!")
//   // }
//   //   else
//   //   { 
//   //     return("paper beats rock, you lose!!")
//   //   }

    


  
//   // display choices to browser
//   // decide winner

// // debugger
// // })




// var userChoice = prompt("Do you choose rock, paper or scissors?");

// var computerChoice = Math.random();
//   if (computerChoice < 0.34) {
// 	computerChoice = "rock";
//   } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
//   } else {
// 	computerChoice = "scissors";
//   } 
//   //console.log("Computer chooses: " + computerChoice);

// var compare = function(choice1,choice2) {
    
//     if (choice1 === choice2) {
        
//         return "The result is a tie!" + " " + "Lets play again." ;
//     }
    
//     else if (choice1 === "rock") {
        
//         if (choice2 === "scissors") {
//             return "rock wins" + "<br>" + "You beat the computer, nice job!";
//         }
//         else {
//             return "paper wins" + "<br>" + "Your really smart computer beat you.";
//         }
//     }
    
//     else if (choice1 === "paper") {
        
//         if (choice2 === "rock") {
//             return "paper wins" + "<br>" + "You beat the computer, nice job!";
//         }
//         else {
//             return "scissors wins" + "<br>" + "Your really smart computer beat you.";
//         }
            
//     }
    
//     else if (choice1 === "scissors") {
        
//         if (choice2 === "rock") {
//             return "rock wins" + "<br>" + "Your really smart computer beat you.";
//         }
//         else {
//             return "scissors win" + "<br>" + "You beat the computer, nice job!";
//         }
//     }
    
    
//     } 

    
//    document.write("Computer chose: " + computerChoice + "<br>");
//    document.write(compare(userChoice,computerChoice));
    
    
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
  if (computerChoice < 0.34) {
	computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  } 
  //console.log("Computer chooses: " + computerChoice);

var compare = function(choice1,choice2) {
    
    if (choice1 === choice2) {
        
        return "tie game folks" ;
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return "rock wins" + "<br>" + "congrats on beating a CPU";
        }
        else {
            return "paper wins" + "<br>" + "YOU LOST BOIIIII";
        }
    }
    
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return "paper wins" + "<br>" + "NICE WIN!!!";
        }
        else {
            return "scissors wins" + "<br>" + "SUCKERRRRRR";
        }
            
    }
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "rock") {
            return "rock wins" + "<br>" + "loserrrrrrrrrr XD";
        }
        else {
            return "scissors win" + "<br>" + "two thumbs up for winning!!";
        }
    }
    
    
    } //closes compare function

   document.write("Computer chose: " + computerChoice + "<br>");
   document.write(compare(userChoice,computerChoice));
    