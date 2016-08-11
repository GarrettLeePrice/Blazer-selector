$(document).ready(function(){
  $("#blazer").submit(function(event){
    var petInput = $("input:radio[name=pet]:checked").val();
    var foodInput = $("#food").val();
    if (petInput === "dog"){
    alert("Your favorite Blazer must be Rasheed Wallace!");
  } else if (petInput === "cat"){
    alert("Your favorite Blazer must be Zach Randolph!");
    } else {
    alert("Your favorite Blazer must be Qyntel Woods")
  }


    event.preventDefault();
  });
});
