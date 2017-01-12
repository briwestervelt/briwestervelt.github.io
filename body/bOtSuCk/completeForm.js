/*
Why all this stupid string stuff you ask?
I figure it'll probably defeat bots that
look at my source codce for contact info
*/

function reverseString(input){
  var splitString, reverseArray, joinedOutput;
  splitString = input.split("");
  reverseArray = splitString.reverse();
  joinedOutput = reverseArray.join("");
  return joinedOutput;
}

function cleanString(input){
  input = input.replace(/q|9|3/g, "")
  return input.replace("at_sign", "@").replace("(dot)", ".");
}

function addFormTag(emailIn){
  var index = emailIn.indexOf("@");
  return emailIn.slice(0, index) + "+formspree" + emailIn.slice(index);
}

$(document).ready(function(){
  var emailString = "mqoc)t" + "odq(l"  + "iamg9ngi"  + "s_t99atlev"  + "retseq9wi9rb",
  phoneString = "44" + "535-8995" + "2 3)26" + "8(",
  emailStringFS = "";

  emailString = cleanString(reverseString(emailString));
  phoneString = cleanString(reverseString(phoneString));
  emailStringFS = addFormTag(emailString);


  $("#email").append("<a href='" + "mailto:" + emailString + "'>" + emailString + "</a>");
  $("#phone").text(phoneString);

  var $form = document.getElementById("contact-form");
  $form.action = "http://formspree.io/" + emailStringFS;
  $form.method = "POST";

  var $redirect = document.getElementById("redirect-input");
  $redirect.value = getRootAddress() + "?thank-you"
});
