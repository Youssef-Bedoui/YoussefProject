var fullDate =new Date();
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
$(".date").append(currentDate);
var addBtn = $("#add");
var products = [];
addBtn.click(function () {
var product  = $(".bottom").val();
var price  = $(".top").val();              
products.push(Number(price))
console.log(products)


  $(".bottom").val("");
  $(".top").val("");
  $(".item").append(`<p>${product}</p>`);
  $(".prx").append(`<p>${price}</p>`);
  $(".resultDiv").css("margin-left", "20px");
  $(".item").css({
    "margin-left": "20px",
    color: "white",
    "font-size": "24px",
    "font-weight": "bold",
  });
  $(".prx").css({
    "margin-left": "20px",
    color: "red",
    "font-size": "24px",
    "font-weight": "bold",
  });
});

var check = $(".result");
check.click(function(){
var total = products.reduce(function(acc,v){
return acc+v

})
$('.finalResult').text(total);
if(total<100000){
  setTimeout(function(){ alert("Economic man ! Your expenses for today is "+total); }, 2000);
}
else if (total>100000){
  setTimeout(function(){ alert("So much Expenses!! , Your expenses for today is "+total); }, 2000);
}
})

