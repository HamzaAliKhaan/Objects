let a = [
    {fname : "Ali", lname : "Hamza", Location : "Nafees Town", Email : "ziddibacha@gmail.com"},
    {fname : "Ahmad", lname : "Raza", Location : "Sofura", Email : "ahmad123@gmail.com"}, 
    {fname : "Shahbaz", lname : "Ali", Location : "F-south", Email : "shahbaz@gmail.com"}, 
    {fname : "Hassan", lname : "Sami", Location : "F-south", Email : "hassan@gmail.com"},
    {fname : "Alish", lname : "Khan", Location : "Jinnah Square ", Email : "alish@gmail.com"},
    {fname : "Daniyal", lname : "Ahmad", Location : "Askari-5 Malir Cantt", Email : "daniyal@gmail.com"},
]
 for(let i = 0; i < a.length; i++){
    document.write("<div>")
    document.write(a[i]["fname"],"<br>")
    document.write(a[i].lname,"<br>")
    document.write(a[i].Location,"<br>")
    document.write(a[i].Email,"<br>")
    document.write("</div>")
 }
