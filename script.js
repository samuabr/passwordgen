//promting the user to choose password length
    var userChoice=prompt("Please choose your password length.Must be between 8 and 128");
userChoice=parseInt(userChoice);
  //asking user weather to include characters
  var specialCharneeded=prompt(" type Yes for special characters to be included or type NO");
  var numericNeeded=prompt("type Yes for Numeric characters to be included or or type NO");
  var lowercaseNeeded=prompt("type Yes for Lowercase characters to be included or  or type NO");
  var uppercaseNeeded=prompt("type Yes for Uppercase characters to be included or type NO");
  specialCharneeded=specialCharneeded.toLocaleLowerCase();
  numericNeeded=numericNeeded.toLocaleLowerCase();
  lowercaseNeeded=lowercaseNeeded.toLocaleLowerCase();
  uppercaseNeeded=uppercaseNeeded.toLocaleLowerCase();

function run(){
  


var charspecial="+-&!()[]^?:";
var charnumeric="0123456789";
var charlowercase="abcdefghijklmnopqrstuvwxyz";
var charuppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsall = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-&!()[]^?:";
if(userChoice<=128 && userChoice>=8){
//for all included
if( specialCharneeded==='yes' && numericNeeded==='yes' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='yes'){
var randomstring = '';
for (var i=0; i<userChoice; i++) {
    var rnum = Math.floor(Math.random() * charsall.length);
    randomstring += charsall.substring(rnum,rnum+1);
   
}

var text= document.getElementById('password');
text.textContent=randomstring;
}
//for uppercase only
else if( specialCharneeded==='no' && numericNeeded==='no' && lowercaseNeeded=== 'no' && uppercaseNeeded==='yes'){
    var randomstring = '';
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * charuppercase.length);
        randomstring += charuppercase.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for lowercase only
else if( specialCharneeded==='no' && numericNeeded==='no' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='no'){
    var randomstring = '';
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * charlowercase.length);
        randomstring += charlowercase.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for numeric
else if( specialCharneeded==='no' && numericNeeded==='yes' && lowercaseNeeded=== 'no' && uppercaseNeeded==='no'){
    var randomstring = '';
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * charnumeric.length);
        randomstring += charnumeric.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for special
else if( specialCharneeded==='yes' && numericNeeded==='no' && lowercaseNeeded=== 'no' && uppercaseNeeded==='no'){
    var randomstring = '';
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * charspecial.length);
        randomstring += charspecial.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for lower and upper
else if( specialCharneeded==='no' && numericNeeded==='no' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='yes'){
    var randomstring = '';
    var mix1=charlowercase+charuppercase;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix1.length);
        randomstring += mix1.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for lower and numeric
else if( specialCharneeded==='no' && numericNeeded==='yes' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='no'){
    var randomstring = '';
    var mix2=charlowercase+charnumeric;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix2.length);
        randomstring += mix2.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for lower and special
else if( specialCharneeded==='yes' && numericNeeded==='no' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='no'){
    var randomstring = '';
    var mix3=charlowercase+charspecial;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix3.length);
        randomstring += mix3.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for upper and lower
else if( specialCharneeded==='no' && numericNeeded==='no' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='yes'){
    var randomstring = '';
    var mix4=charuppercase+charlowercase;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix4.length);
        randomstring += mix4.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for upper and numeric
else if( specialCharneeded==='no' && numericNeeded==='yes' && lowercaseNeeded=== 'no' && uppercaseNeeded==='yes'){
    var randomstring = '';
    var mix5=charuppercase+charnumeric;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix5.length);
        randomstring += mix5.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for upper and special
else if( specialCharneeded==='yes' && numericNeeded==='no' && lowercaseNeeded=== 'no' && uppercaseNeeded==='yes'){
    var randomstring = '';
    var mix6=charuppercase+charspecial;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix6.length);
        randomstring += mix6.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for numeric and lower
else if( specialCharneeded==='no' && numericNeeded==='yes' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='no'){
    var randomstring = '';
    var mix7=charnumeric+charlowercase;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix7.length);
        randomstring += mix7.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for numeric and upper
else if( specialCharneeded==='no' && numericNeeded==='yes' && lowercaseNeeded=== 'no' && uppercaseNeeded==='yes'){
    var randomstring = '';
    var mix8=charnumeric+charuppercase;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix8.length);
        randomstring += mix8.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for numeric and special
else if( specialCharneeded==='yes' && numericNeeded==='yes' && lowercaseNeeded=== 'no' && uppercaseNeeded==='no'){
    var randomstring = '';
    var mix9=charnumeric+charspecial;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix9.length);
        randomstring += mix9.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for special and lower
else if( specialCharneeded==='yes' && numericNeeded==='no' && lowercaseNeeded=== 'yes' && uppercaseNeeded==='no'){
    var randomstring = '';
    var mix10=charspecial+charlowercase;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix10.length);
        randomstring += mix10.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for special and upper
else if( specialCharneeded==='yes' && numericNeeded==='no' && lowercaseNeeded=== 'no' && uppercaseNeeded==='yes'){
    var randomstring = '';
    var mix11=charspecial+charuppercase;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix11.length);
        randomstring += mix11.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
//for special and numric
else if( specialCharneeded==='yes' && numericNeeded==='yes' && lowercaseNeeded=== 'no' && uppercaseNeeded==='no'){
    var randomstring = '';
    var mix12=charspecial+charnumeric;
    for (var i=0; i<userChoice; i++) {
        var rnum = Math.floor(Math.random() * mix12.length);
        randomstring += mix12.substring(rnum,rnum+1);
       
    }
    
    var text= document.getElementById('password');
    text.textContent=randomstring;
}
else if( specialCharneeded==='no' && numericNeeded==='no' && lowercaseNeeded=== 'no' && uppercaseNeeded==='no'){
    alert("please choose atleast one character");
    location.reload();
}

else 
{alert("Please choose again correctly");
location.reload();
}
}
else {
alert("Password length should be between 8 and 128");
location.reload();
}}
//copy button
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0,130); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }





var button= document.getElementById('generate');
button.addEventListener('click',run);//generates password
var button2=document.getElementById('myInput');
button2.addEventListener("click",myFunction);//copies the text content