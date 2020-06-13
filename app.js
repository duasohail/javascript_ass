function task1(){
    alert("Thanks for visiting our site");
}

function task2(){
    alert("ERROR! please enter a valid password");
}

function task3(){
    alert("Welcome to JS land... \n Happy coding");
}

function task4(){
    alert("Welcome to JS land...");
    alert('Happy coding! \n prevent this page from creating additional dialogues' );
}

function task5(){
    console.log(alert("hello... i can run my code through web browser's console"));
}

function task6(){
    alert("Your response submitted successfully");
}
 

// chap 2 start frm here.

//task 1
//declare a variable name username
var username ;


//task2
//declare a variable called myname and assign it a string represent full name ;
var myName= "dua khan";

//task 3
 function ch2_t3(){
     var message="hello world";
     alert(message);
 }


//task4
function ch2_t4(){
    var a= "JHON DOE";
    var b=" 15 years old ";
    var c="certified mobile app developer";
    alert(a);
    alert(b);
    alert(c);
}

//task 5
function ch2_t5(){
    alert("pizza \n pizz \n piz \n pi \n p");
    
}

//task 6
function ch2_t6(){
    var em="duak3710@gmail.com";
    alert("my email is "+ em);
    
}

//task 7
function ch2_t7(){
    var book =" A smarter way to learn javascript";
    alert(book);
    
}

//task 8
function ch2_t8(){
    var msg =" yah ! i can write HTML content through js";
    alert(msg);
    
}

//task 9
function ch2_t9(){
    
    alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ");
    
}

//chapter 3 start frm here
//task 1 
function ch3_t1(){
    var age = "i am 15 years old";
    alert(age);
}

//task 2 
function ch3_t2(){
    var msg = "You have visited this site 14 times";
    alert(msg);
}

//task 3
function ch3_t3(){
    var birthYear=1999;
    alert("My birth year is " + birthYear + "\n Datatype of my declared variable is number");
}

//task 4
function ch3_t4(){
    var Visitor_name="John Doe";
    var product_title="ordered t-shirt";
    var quantity="5";
    alert(Visitor_name +" "+ product_title + " "+ quantity + " on XYZ clothing store");
}

//chapter 4
//task 1
//declare 3 variable in one statement
 var a , b , c;

 //task 2
 // Declare 5 legal & 5 illegal variable names. 
 //legal
 var a;
 var a1;
 var go_down;
 var work2home;
 var myWork;
 //illegal
//  var !a;
//  var 12abc;
//  var work?home;
//  var -abc;
//  var /abc;

 //task 3
 function ch4_t3(){
     document.write("<h1>Rules for naming JS variables</h1>");
     document.write("variable name can only contain  numbers , $ , _ , . For example : $my_1stVariable <br> variable must begin with a letter , $ , _ , . For example : $name , _name , name");
     document.write("<br> variable name are case sensitive");
     document.write("<br> variable name should not be JS keyword");

 }

 //chapter 5
 //task 1

 function ch5_t1(){
     var a=prompt("enter number");
     var b=prompt("enter 2nd number");
     var num1 = parseInt(a);
     var num2= parseInt(b);
     var res = num1 + num2;
     document.write("sum of " + num1 + " and  " + num2 + " is "+ res);
 }

 //task2
 function ch5_t2(){
    var a=prompt("enter number");
    var b=prompt("enter 2nd number");
    var num1 = parseInt(a);
    var num2= parseInt(b);
    var sub = num1 - num2;
    document.write("subtraction of " + num1 + " and  " + num2 + " is "+ sub + "<br>");
    var div = num1 / num2;
    document.write("division of " + num1 + " and  " + num2 + " is "+ div + "<br>");
    var mul = num1 * num2;
    document.write("multiplication  of " + num1 + " and  " + num2 + " is "+ mul + "<br>");
    var mod = num1 % num2;
    document.write("modulus of " + num1 + " and  " + num2 + " is "+ mod + "<br>");
    
 }

 //task3
 function ch5_t3(){
     var a ;
     document.write("Variable after decleration is: " + a + "<br>");
     var b=5;
     document.write("Variable after initializing is: "+ b + "<br>");
     b++;
     document.write("Value after increament is: "+ b + "<br>");
    var c=b+7;
    document.write("Value after addittion is: "+ c + "<br>");
    c--;
    document.write("value after decreament is: "+ c + "<br>");
    var rem=c%3; 
    document.write("remainder after dividing value by 3 is: "+ rem);

 }

 //task 4
 function ch5_t4(){
     var tick=600;
     var res= 600*5;
     document.write("Total cost to buying 5 tickets is: " + res + " PKR");
 }

 //task 5
 function ch5_t5(){
     var a=4;
     for(var i=1; i<=10; i++){
         document.write(a +" x "+ i + " = "+ a*i + "<br>");
     }
 }

 //task 6
 function ch5_t6(){
     var c=33.333;
     var f=92;
     var cel=(f-32)*(5/9);
     document.write(f +" F into celcius is: "+ cel +"<br><br>");
     var far=(c*(9/5))+32;
     document.write(c + "C into farenhiet is: "+ far);
     
 }

 //task 7
 function ch5_t7(){
     var p1=650;
     var p2=100;
     var q1=3;
     var q2=7;
     var ship=100;
     document.write("<h1>Shopping Cart <h1> "+ "<br>"+" price of item 1 is: "+p1 + "<br> quantity of item i is: "+q1+ "<br>price of item 2 is: "+p2+"<br>quantity of item 2 is: "+q2+"<br>shipping charges is: "+ship);
     var res=(p1*q1)+(p2*q2)+ship;
     document.write("<br> Total cost of your order is: "+res);

 }

 //task 8
 function ch5_t8(){
     var t_mrk=500;
     var ob=336;
     var per=(ob/t_mrk)*100;
     document.write("<h1>MARKSHEET</h1>");
     document.write("total marks= "+t_mrk +"<br> obtained marks= "+ob + " <br> percentage= "+per);
 }

 //task 9
 function ch5_t9(){
     var dol=10;
     var riyal=25;
     var res=(dol*104.80) + (riyal*28);
     document.write("<h1>Currency in pkr</h1>");
     document.write("Total currency in PKR is: "+res);
 }
 
 //task 10
 function ch5_t10(){
     var a=2;
     var res= ((a+5)*10)/2;   
     document.write("total is: "+ res);
 }

 //task 11
 function ch5_t11(){
     var c_y=2020;
     var b_y=1999;
     var age=c_y-b_y;
     document.write("current year= "+c_y +"<br> birth year= "+b_y+"<br> your age is: "+age);
 }

 //task 12
function ch5_t12(){
    var r=20;
    var cir=(2*(3.14))*r;
    var area=3.14*r*r;
    document.write("radius of a circle is: "+r +"<br> circumference of circle is: "+cir +"<br> area of a circle is: "+area);
}


//task 13
function ch5_t13(){
    var fv="lays";
    var c_age=21;
    var est_age=60;
    var perday=2;
    var res=(est_age - c_age)*2;
    document.write("You will need " + res + " to last you until the ripe old age of "+ est_age);
}

//chapter 6 to 9
//task 1
function ch6_t1(){
    var a=10;
    document.write("Result: <br> The value of a is: "+a +"<br>-------------------------------------------------");
    ++a;
    document.write("<br> The value of ++a is: "+a+"<br> now the value of a is: "+a);
    a++;
    document.write("<br> the value of a++ is: "+a+"<br> now the value of a is: "+a);
    --a;
    document.write("<br><br> the value of --a is: "+a+"<br> now thw value of a is: "+a);
    a--;
    document.write("<br> the value of a-- is: "+a+"<br> now the value of a is: "+a);

    
}

//task2
function ch6_t2(){
    var a = 2, b = 1; 
    //var res = --a - --b + ++b + b--; 
    // on --a = 1
    //on - --b = 0
    //on + ++b = 2
    //+b-- = 0 
    
    document.write("a= "+ a +"<br> b= "+ b + "<br> res is= " +res);

}

//task 3
function ch6_t3(){
    var name=prompt("write ur name");
    document.write("welcome to our site "+name);
}

//task 4
function ch6_t4(){

    var b=prompt("enter number")||5;
    var c=parseInt(b);
   
        for(var i=1; i<=10; i++){
            document.write(c +" x "+ i + " = " + c*i + "<br>");
        }
   
}

//task 5

function ch6_t5(){
    
  
	var sub1=prompt("eneter subject 1");
    var sub2=prompt("eneter subject 2");
    var sub3=prompt("eneter subject 3");
    var a1=prompt("obtained marks of subject 1");
    var ob1=parseInt(a1);
    var a2=prompt("obtained marks of subject 2");
    var ob2=parseInt(a2);
    var a3=prompt("obtained marks of subject 2");
    var ob3=parseInt(a3);
	var t_mrk=100;
	   
    var per1=(ob1/t_mrk)*100;
    var per2=(ob2/t_mrk)*100;
    var per3=(ob3/t_mrk)*100;
   
    document.write("<table><tr><td> subject </td><td> total marks</td><td> obtained marks </td><td> percaentage </td></tr>");
    document.write("<tr><td>"+ sub1 +"</td><td>"+ t_mrk +"</td><td>"+ob1+"</td><td>"+ per1+"</td></tr>");
    document.write("<tr><td>"+ sub2 +"</td><td>"+ t_mrk +"</td><td>"+ob2+"</td><td>"+ per2+"</td></tr>");
    document.write("<tr><td>"+ sub3 +"</td><td>"+ t_mrk +"</td><td>"+ob3+"</td><td>"+ per3+"</td></tr></table>");
    
}

//chap 9 to 11
//task 1
function ch9_t1(){

    var a=prompt("enter the city name");
    if(a=="karachi"){
        document.write("welcome to city of light");
    }else{
        document.write("the city u eneterd is not correct");
    }
}

//task 2
function ch9_t2(){

    var a=prompt("enter ur gender");
    if(a=="female"){
        document.write("good morning ma'am");
    }else{
        document.write("good morning sir");
    }
}

//task 3
function ch9_t3(){

    var a=prompt("enter ur color red , yellow, green");
    if(a=="red"){
        document.write("Must Stop");
    }if(a=="green"){
        document.write("move now");
    }
    else{
        document.write("ready to move");
    }
}

//task 4
function ch9_t4(){

    var a=prompt("enter a remaining furl in car");
    if(a <= 0.25){
        document.write("please refill fuel in the car");
    }
    else{
        document.write("dontworry you fuel is full");
    }
}

//task5a
function ch9_t5a(){
     var a = 4; 
     if (++a === 5){
          alert("given condition for variable a is true");
         } 
 
}

//task5b
function ch9_t5b(){
    var b = 82;
    
    if (b++ === 83){
         alert("given condition for variable b is true");
         } 
 

}
//task5c
function ch9_t5c(){
    var c = 12; 
    if (c++ === 13){ 
        alert("condition 1 is true");
     } if (c === 13){ 
         alert("condition 2 is true");
     } if (++c < 14){ 
         alert("condition 3 is true"); 
    } if(c === 14){ alert("condition 4 is true"); } 
 

}
//task5d
function ch9_t5d(){
    var materialCost = 20000;
     var laborCost = 2000; 
     var totalCost = materialCost + laborCost; 
     if (totalCost === laborCost + materialCost){ 
         alert("The cost equals"); 
        } 
 

}
//task5e
function ch9_t5e(){
    if (true){
        alert("True"); 
       } if (false){
            alert("False"); 
       } 

}
//task5f
function ch9_t5f(){
    if("car" < "cat"){
         alert("car is smaller than cat"); 
        } 
}

//task 6
function ch9_t6(){
    var a=prompt("enter subject1 marks");
    var sub1=parseInt(a);
    var b=prompt("enter subject2 marks");
    var sub2=parseInt(b);
    var c=prompt("enter subject3 marks");
    var sub3=parseInt(c);
    var total=300;
    var ob=sub1+sub2+sub3;
    var per=(ob/total)*100;
    var grade;
    var remarks;
    if(per>=80){
        grade="A-one";
        remarks="EXCELLENT";
    }if(per==70 || per <80){
        grade="A";
        remarks="Good"
    }if(per==60 || per <70){
        grade="B";
        remarks="you need to improve";
    }if(per <60){
        grade="fail";
        remarks="sorry";
    }
    document.write("<h1>MARKSHEET</h1>");
    document.write("total marks: "+total+" <br> marks obtained: "+ob+"<br> percentage: "+per+"% <br> grade: "+grade+"<br> remarks: "+ remarks);

}

//task7
function ch9_t7(){
    var a=3;
    var b=prompt("enter ur number");
    if(b==a){
        document.write("Bingo! Correct Answer");

    }if(++b==a){
        document.write("close enough");
    }else{
        document.write("number not matched SORRY ");
    }

}

//task8
function ch9_t8(){
    var a=prompt("enter a number");
    if(a%3==0){
        document.write("number is divible by 3");
    }else{
        document.write("number is not divsible by 3");
    }
}


//task9
function ch9_t9(){
    var a=prompt("enter a number");
    if(a%2==0){
        document.write("number is even");
    }else{
        document.write("number is odd");
    }

}


//task10
function ch9_t10(){
    var a=prompt("enter a temperature ");
    //var a=parseInt(num1);
    if(a> 40){
        document.write("too hot outside");
    }if(a==30 || a<40){
        document.write("today whather is normal");
    }if(a==20 || a<30){
        document.write("today weather is cool");
    }if(a==10 || a<20){
        document.write("OMG ! today is so cool");
    }

}


//task11
function ch9_t11(){
    var a=prompt("enter a number 1");
    var b=prompt("enter a number 2 ");
    var c=prompt("enter an operater * + / - %");
    
    if(c=='+'){
        document.write("Sum of "+a+" and "+b+" is: "+ (a+b));
    }if(c=='-'){
        document.write("Subtraction of "+a+" and "+b+" is: "+ (a-b));
    }if(c=='*'){
        document.write("multiplication of "+a+" and "+b+" is: "+ (a*b));
    }if(c=='/'){
        document.write("division of "+a+" and "+b+" is: "+ (a/b));
    }if(c=='%'){
        document.write("modulus of "+a+" and "+b+" is: "+ (a%b));
    }

}

//chap 12 to 13
//task1
function ch12_t1(){
    var num1=prompt("enter a char");
    var num =num1.charCodeAt(0);

    if(num >=65 && num <=90){
        document.write("u entered capital letter");

    }if(num >=95 && num <=122){
        document.write("u enetered small letter");

    }if(num >=48 && num <=57){
        document.write("u entered a number");

    }else{
        document.write("u entered a special character");
    }
}

//task2
function ch12_t2(){
    var num1=prompt("enter number 1");
    var num2=prompt("enter number 2");
    if(num1==num2){
        document.write("both numbers are equal");
    }if(num1>num2){
        document.write("num1 is greater than num2");

    }else{
        document.write("num1 is smaller than num2");
    }
}

//task3
function ch12_t3(){
    var num1=prompt("enter number 1");
    //var num2=prompt("enter number 2");
    if(num1<0){
        document.write("number is negative");
    }if(num1==0){
        document.write("number is 0");

    }if(num1>0){
        document.write("number is positive");

    }
}

//task4
function ch12_t4(){
    var val=prompt("enter any alphabet");
    if(val=='a'|| val=='e'|| val=='i' || val=='o' || val=='u'){
        document.write("true its a vowel");
    }else{
        document.write("false");
    }
}

//task5
function ch12_t5(){
    var a='pass123';
    var val=prompt("enter ur password");
    if(a==val){
        document.write("password matched");
    }else{
        document.write("incorrect password");
    }
}

//task6
function ch12_t6(){
    var greeting;
     var hour = 13;
     if (hour < 18) { 
         greeting = "Good day";
      } else {
          greeting = "Good evening"; 
        }
        document.write(greeting);
}

//task 7
function ch12_t7(){
        var time=prompt("enter time");
        if(time==0000 || time<1200){
            document.write("good morning");

        }if(time==1200 || time<1700){
            document.write("good afternoon");

        }if(time==1700 || time<2100){
            document.write("good evening");

        }if(time==2100 || time<2300){
            document.write("good night");

        }
}


//chap 14 to 16
//task3
function ch14_t3(){
    var arry =[]
arry=["abc","efj","klm"];
}

//task 4
function ch14_t4(){
    var arry =[]
arry=[2,4,5];

}
//task 5
function ch14_t5(){
    var arry =[]
arry=[true,true,false];
}

//task 6
function ch14_t6(){
    var arry =[]
arry=["abc",true,4];
}

//task 7
function ch14_t7(){
    var arry =[]
arry=["SSC","HSC","BE","BCOM","MCOM","PHD"];
document.write(arry);
}
//task10
function ch14_t10(){
    var arry =[]
arry=[320,230,480,120];
document.write(arry.sort(function(a, b){return a - b}));

}
//task 11
function ch14_t11(){
    var arry =[]
arry=["Islamabad","Hyderabad","Karachi","Lahore"];
document.write("Cities List: "+arry+"<br>");
document.write("Selected City: "+arry[0]+" "+arry[1]);
}
//task 12
function ch14_t12(){
    var arry =[]
arry=["This", "is", "my", "cat"];
document.write("Array: "+arry+"<br>");
document.write("String: "+arry.join()+"<br>");

}
//task 13
function ch14_t13(){
    //task 15
arry=['Apple','Samsung','Motorola','Nokia','Sony','Haier'];

document.write("<select>");
document.write("<option> "+arry[0]+" </option>");
document.write("<option> "+arry[1]+" </option>");
document.write("<option> "+arry[2]+" </option>");
document.write("<option> "+arry[3]+" </option>");
document.write("<option> "+arry[4]+" </option>");
document.write("<option> "+arry[5]+" </option>");
document.write("</select>");

}

//chap 17-29
//task 1
function ch17_t1(){
    
var arry = [null][null];
}
 

//task2
function ch17_t2(){
var arry1 = [1,2,3];
var arry2 = [0,1,2];
var arry3 = [1,0,1];

var final_arry = [arry1, arry2, arry3];
document.write(arry1+"<br>"+arry2+"<br>"+arry3); 
}

//task3
function ch17_t3(){
    for(var a=1; a<=10; a++){
        document.write(a+"<br>");
    }
}

//task 4
function ch17_t4(){
    var number=prompt("Enter a number shows its table of multiplication");
var leng=prompt("Enter a length of multiplication table");

for(var i = number; i<=leng; i++){
	document.write(number+" x "+i+" = "+i*number+" <br>");
}
}

//task 5
function ch17_t5(){
    fruits = ['apple','banna','mango','orange','stawberry'];

for(var i = 0; i<fruits.length; i++){
	document.write("Element at index "+i+" is "+fruits[i]+" <br>");
}
}

//task 6
function ch17_t6(){
    document.write("Counting <br>");
for(var i = 0; i<=15; i++){
	document.write(i+", ");
}



document.write("<br><br>Reverse Counting <br>");
for(var i = 15; i>=0; i--){
	document.write(i+", ");
}



document.write("<br><br>Even <br>");
for(var i = 0; i<=15; i+=2){
	document.write(i+", ");
}


document.write("<br><br>Odd <br>");
for(var i = 1; i<=15; i+=2){
	document.write(i+", ");
}



document.write("<br><br>Series <br>");
for(var i = 0; i<=20; i+=2){
	document.write(i+"k, ");
}

}

//task 7
function ch17_t7(){
    order=window.prompt("Welcome to ABC Bakery, What will you like to order?");

Arry = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var a = Arry.indexOf(order);

if(a == -1){
	document.write("oyeeee");
}else{
	document.write(order+" is available at index "+a+" in our bakery");	
}
}

//task 8
function ch17_t8(){
    var arry = [24,53,78,91,12];

document.write("Array items: "+arry+"<br>");
document.write("The Largest number is "+Math.max(...arry));


}

//task 9
function ch17_t9(){
    var arry = [24,53,78,91,12];

document.write("Array items: "+arry+"<br>");
document.write("The Smallest number is "+Math.min(...arry));
}

//task 10
function ch17_t10(){
    for(var i=1; i<=20; i++ ){
        document.write((i*5) + " , ");
    }
}