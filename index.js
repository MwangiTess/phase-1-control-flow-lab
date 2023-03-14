/*function scuberGreetingForFeet(){
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
} */



function scuberGreetingForFeet(value){
  if( value<= 400) {
    return 'This one is on me!'
  } else if(value <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
      return 'No can do.'
  }
  }

const city = 'NYC'

function ternaryCheckCity(destination){
 return (destination === city? "Ok, sounds good.":"No go.")
}

/*let tip = generous;

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case  'generous':
      return "Thank you.";
    default:
      return 'Bye.';

  }
}*/
function switchOnCharmFromTip(tipAmount){
  if(tipAmount==='generous'){
    return'Thank you so much.';
  }else if (tipAmount==='not as generous'){
    return'Thank you.';
  } else{
    return 'Bye.';
  }
}