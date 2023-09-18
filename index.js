function scuberGreetingForFeet(feet){
 
  let ride;
  if(feet<=400){
    ride="This one is on me!"
    
  }
  else if(feet>2000 && feet <=2500){
    ride="I will gladly take your thirty bucks."
  }
  else{
    ride="No can do."
  }
  return ride;
  // Write your code here!
}

function ternaryCheckCity(city){
 
  return city==="NYC"? "Ok, sounds good.":"No go."
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let message;
  if (tip==="generous"){
message="Thank you so much."
  }
  else if(tip==="not as generous"){
    message="Thank you."
  }
  else{
    message="Bye."
  }
  return message;
  // Write your code here!
}