$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var monthInput = $("input#month").val();
    var colorInput = $("input#color").val();
    var animalInput= $("input#animal").val();
    var browserInput = $("input#browser").val();

    var formArray = [monthInput, colorInput, animalInput, browserInput];
//create an array and add 4 items to array

    console.log(formArray[1],formArray[0],formArray[2]);
//shows and pulls the order results in the console, color, month, and animal, only reorders for the sake of the exercise

    var newArrayorder = [];
//defines an empty new array
    newArrayorder.push(formArray[1]);
    newArrayorder.push(formArray[0]);
    newArrayorder.push(formArray[2]);
//lists out the 3 elements and appends them with the .push
    console.log(newArrayorder);
//shows the new array in the consule
    $("#list").append("<li>" + newArrayorder[0] + "</li>");
    $("#list").append("<li>" + newArrayorder[1] + "</li>");
    $("#list").append("<li>" + newArrayorder[2] + "</li>");
//defines the list class, elements, and it's new order from when it was defined by the original array elements
    event.preventDefault();
  });
});
