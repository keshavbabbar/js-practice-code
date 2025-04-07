let names = ["Keshav","Avinoor","Naresh","Khushman","Angela"];
let party = prompt("What is your name")

if(names.includes(party)){
    alert("welcome " + party + " sir!, Enjoy the party");
}
else{
    alert("Sorry " + party + ", you don't allowed in the party next time")
}