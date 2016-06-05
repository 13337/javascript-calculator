$(document).ready(function() {
var lastAns = "",reg = /,/g, chain = [],ops = ["+","-","/","*"];

$(".btn-default").click(function() {
  if (chain.length === 0) {
    $("#tf").html("");  
  }
  chain.push(this.innerHTML);
  $("#tf").append(this.innerHTML);
});

$("#percent").click(function() {
  var lastNum = chain[chain.length-1];
  if (ops.indexOf(lastNum) < 0) {
    chain.pop();
    chain.push(eval(lastNum/100));
    $("#tf").append("%");
  } 
  
})

$("#equals").click(function() {
  var sum = eval(chain.join().replace(reg, "").replace(" ",""))
  $("#tf").html(sum)
  lastAns=sum.toString();
  while (chain.length > 0) {
    chain.pop();
  }
})

$("#allClear").click(function() {
  while (chain.length > 0) {
      chain.pop();
  }
  $("#tf").html("");
 
})

$('#ans').click(function() {
 
 chain.push(lastAns.toString());
 $("#tf").append(lastAns.toString());
 

});



$("#clearEntry").click(function() {
  if ($("#tf").html() !== "0") {
    if (chain.length > 0) {
      chain.pop();
      $("#tf").html(chain.join().replace(reg,""));
      $("#tf").html("0");

    } else {
      $("#tf").html("0");
    }
      
  }
})
})