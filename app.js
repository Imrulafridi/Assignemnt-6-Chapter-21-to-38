// ====== Chapter From 21 To 25 ======

// ====== Task # 1
// var firstName = prompt("Enter your First Name")
// var lastName = prompt("Enter your Last Name")
// var fullName = firstName + lastName
// alert("Welcome Mr. " + fullName)

// ====== Task # 2
// var phModel = prompt("What's Your Favourite Mobile Model Name")
// var charlength = phModel.length
// document.write("My Favourite Phone is " + phModel)
// document.write(" <br> Length of String :  " + charlength)

// ====== Task # 3
// var country = "Pakistani"
// document.write("String : " + country)
// var ind = country.indexOf("n")
// document.write(" <br> Index of 'n' : " + ind)

// ====== Task # 4
// var text = "Hello World"
// document.write("String : " + text)
// var ind = text.lastIndexOf("l")
// document.write(" <br>  Last Index of 'l' : " + ind)


// ====== Task # 5
// var country = "Pakistani"
// document.write("String : " + country)
// var ind = country.charAt(3)
// document.write(" <br> Character at Index 3 : " + ind)


// ====== Task # 7
// var city1 = "Hyderabad"
// document.write(" <br> City : " + city1)
// var repalceCity = city1.replace("Hyder" , "Islam" )
// document.write(" <br> After Replacement  : " + repalceCity)


// ====== Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(" Message is : " + message)
// var repalce = message.replace( /and/g , "&")
// document.write(" <br> New Message is : " + repalce)


// ====== Task # 9
// var str = "472"
// document.write("Value : " + str )
// document.write(" <br> Type : " + typeof(str) )
// var num = 472
// document.write(" <br> Value : " + num )
// document.write(" <br> Type : " + typeof(num) )


// ====== Task # 10
// var input = prompt("write Your Messsage")
// document.write(" User Input : " + input)
// var upinput = input.toUpperCase()
// document.write(" <br> Upper Case : " + upinput)


// ====== Task # 11
// var input = prompt("write Your Messsage")
// document.write(" User Input : " + input)
// var firstchar = input.slice(0,1)
// firstchar = firstchar.toUpperCase()
// var otherchar = input.slice(1)
// otherchar = otherchar.toLowerCase()
// fullchar = firstchar + otherchar
// document.write(" <br> Title Case : " + fullchar)


// ====== Task # 11







// ====== Chapter From 26 To 30 ======
// ====== Task # 1
// var num = prompt("Enter Your Number")
// document.write("Number : " + num)
// roundnum = Math.round(num)
// document.write("<br> Round Off Value : " + roundnum)
// document.write("<br> Floor Value : " + roundnum)
// roundnum = Math.ceil(num)
// document.write("<br> Ceil Value : " + roundnum)


// ====== Task # 2
// var num = prompt("Enter Your Number")
// document.write("Number : " + num)
// num = Math.round(num)
// document.write("<br> Round Off Value : " + num)
// num = Math.floor(num)
// document.write("<br> Floor Value : " + num)
// num = Math.ceil(num)
// document.write("<br> Ceil Value : " + num)


// ====== Task # 3
// var num = prompt("Enter Your Number")
// var absnum = Math.abs(num)
// document.write("The absolute Value of " + num + " is " + absnum)


// ====== Task # 4
// var num = Math.floor((Math.random() * 6) + 1);
// document.write("Random Dice Value is : " + num)


// ====== Task # 5
// var num = Math.floor((Math.random() * 2) + 1);
// document.write("Random Coin Value is : " + num)
// if(num === 2){
//     document.write("<br> Heads")
// }else(
//     document.write("<br> Tails")
// )


// ====== Task # 6
// var num = Math.floor((Math.random() * 100) + 1);
// document.write("Random Number Between 1 and 100 is : " + num)


// ====== Task # 7
// var weight = prompt("Enter Your Weight in Kg")
// weight = parseInt(weight)
// document.write("The weight of user is : " + weight)


// ====== Task # 8
// var num = prompt("Enter Your Number between 1 to 10")
// var secret = Math.floor((Math.random() * 10) + 1)
// if( secret == num){
//     alert("Congratulation You are right")
// }else{
//     alert("Try Again")
// }




// ====== Chapter From 31 To 34 ======
// ====== Task # 1
// var a = new Date()
// document.write(a) 


// ====== Task # 2
// var a = new Date()
// var now = a.getMonth()
// if(now === 5){
//    alert("Current Month : December")
// }else(
//   alert("Not a month")
// )


// ====== Task # 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday)


// ====== Task # 4
// var a = new Date()
// var now = a.getDay()
// if(now == 0){
//   alert("It's Fun Day")
// }else if(now == 6){
//   alert("It's Fun Day")
// }else(
//   alert("it's Working Day")
// )


// ====== Task # 5
// var a = new Date()
// var now = a.getDate()
// if ( now <= 15){
//   alert("First fifteen days of the month")
// }else{
//   alert("Last days of the month")
// }


// ====== Task # 6
// var now = new Date()
// document.write("Current Date : " + now)
// var currentmili = now.getTime()
// document.write(" <br> Elapsed Miliseconds Since January 1, 1970 : " + currentmili)
// var currentmin = currentmili/(1000*60)
// document.write(" <br> Elapsed Minutes Since January 1, 1970 : " + currentmin)


// ====== Task # 7
// var now = new Date()
// var currentHour = now.getHours()
// if( currentHour < 12 ){
//     alert("It's AM ")
// }
// else if( currentHour >= 12){
//     alert("It's PM")
// }


// ====== Task # 8
// var laterDate = new Date("Dec 31, 2020")
// document.write(" Latter Date = " + laterDate)


// ====== Task # 9
// var ramadan = new Date("April, 23, 2020")
// var a = ramadan.getTime()
// var now = a/(1000 * 60 * 60 * 24 * 29 * 12 )
// document.write( now + " " + "Days are past Since 1st Ramadan 2020")


// ====== Task # 10
// var now = new Date()
// var msnow = now.getTime()
// document.write(" On Reference Date : " + now  + "<br>")
// var since = first.getTime("Jan 1, 2020 00:00:00")
// var diff = now
// var sec = now/(1000 * 60) 
// document.write( sec + " " + " Seconds has pass since beginning From 2020 ")






// ====== Chapter From 35 To 38 ======

// ====== Task # 1
// function time(){
//   var a = new Date()
// document.write(a) 
// }
// time()


// ====== Task # 2
// function name(){
//   var firstName = prompt("Write Your First Name")
//   var lastName = prompt("Write Your Last Name")
//   var fullName = firstName + lastName
//   alert("Welcome Mr : " + fullName)
// }
// name()


// ====== Task # 3
// function sum(){
//     var firstNum = prompt("Write Your First Number")
//     var secondNum = prompt("Write Your Second Number")
//     var fullsum = Number(firstNum) + Number(secondNum)
//     alert("Your Sum Is :  " + fullsum)
//   }
//   sum()



