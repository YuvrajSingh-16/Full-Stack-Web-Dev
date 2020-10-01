var firstName = prompt("Hello and Welcome. Please enter your first name:")
var lastName = prompt("Please enter your Last Name:")
var age = prompt("How old are you?")
var ht = prompt("Your height??")
var petName = prompt("Your pet name??") 

if(firstName[0] === lastName[0]){
  if(age<30 && age>20){
    if(ht>=175){
      if(petName[petName.length-1] == 'y')
      console.log("Hey agent Welcome");
      alert("We have identified you as an agent!!!")

    }
  }
}
else{
  prompt("Thank you")
}
