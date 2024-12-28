Symbol = Symbol("Key1")
 let userDetails = {
    fname : "Ali", 
    lname : "Hamza", 
    [Symbol] : "SymbolKey1",
    Location : "Nafees Town",
     Email : "ziddibacha@gmail.com"
 }
 userDetails.Email = "bushra@gmail.com" 
 userDetails.fname = "Malika"
 Object.freeze(userDetails)
//  document.write(userDetails)
userDetails.fname = "Bushra"
 document.write(userDetails["fname"])
 document.write(userDetails["lname"])
 document.write(userDetails["Location"])
 document.write(userDetails["Email"])
 document.write(userDetails[Symbol])
 Object.freeze(userDetails)
 userDetails.fname = "Maaz"
 document.write(userDetails)


let a = [
    {fname : "Ali", lname : "Hamza", Location : "Nafees Town", Email : "ziddibacha@gmail.com"},
    {fname : "bushra", lname : "Sultan", Location : "Nafees Town", Email : "bushra123@gmail.com"}, 
    {fname : "Malika", lname : "Sultan", Location : "Nafees Town", Email : "malika@gmail.com"}, 
    {fname : "Bisma", lname : "Sultan", Location : "Nafees Town", Email : "bisma@gmail.com"},
    {fname : "Jaweria", lname : "Sultan", Location : "Nafees Town", Email : "jaweria@gmail.com"},
    {fname : "Hiba", lname : "Saeed", Location : "Jinnah Square", Email : "hiba@gmail.com"},
]
// let b = "Hamza"
// console.log(Array.isArray(b))
 for(let i = 0; i < a.length; i++){
    document.write(a[i]["fname"],"<br>")
    document.write(a[i].lname,"<br>")
    document.write(a[i].Location,"<br>")
    document.write(a[i].Email,"<br>")
 }