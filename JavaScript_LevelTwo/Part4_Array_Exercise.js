// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []
// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew(name){
  roster.push(name)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

// REMOVE STUDENT
function remove(name){
  for(var i =0; i<roster.length; i++){
    if(roster[i]==name){
      roster.pop(name)
    }
  }
}
function removen(){
    var remName = prompt("What name would you like to remove ?")
    var index = roster.indexOf(remName);
    roster.splice(index, 1);
}

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display(){
  console.log(roster)
}

// Create a function called display that prints out the orster to the console.

// Start by asking if they want to use the web app
var ans = prompt("Would you like to start the roster web app? y/n")
var choice = "empty";
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
if(ans === 'y'){
while(choice!== "quit"){
  choice = prompt("Enter the action you wanna make happen(add, remove, display or quit):--")
  if(choice == "add"){
    var add_name = prompt("Enter the name you wanna add : -- ")
    addNew(add_name)
  }
  else if(choice == "remove"){
  
    removen();
  }
  else if(choice == "display"){
    display()
  }
  else if(choice ==  "quit"){
    alert("Thanks for using our page....")
  }
}
}
// Use if and else if statements to execute the correct function for each command.
