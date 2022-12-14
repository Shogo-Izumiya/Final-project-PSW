/*The getInput function will take user input from the textbox with id="input1" on the page. 
 It will run when the user clicks on the GO button.
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the span element that has id="output1" on the page. 
 You can call this function from your code and give it your result.
*/

// https://nerdamer.com/documentation.html

function getInput1() {
  let inputMatrix1 = document.querySelector("#input1_1");
  let inputMatrix2 = document.querySelector("#input1_2");
  let inputMatrix3 = document.querySelector("#input1_3");
  let inputMatrix4 = document.querySelector("#input1_4");
  
  let input = "[" + inputMatrix1.value + "," + inputMatrix2.value + "],[" + inputMatrix3.value + "," + inputMatrix4.value + "]";

  let deter = "determinant((matrix("+input.toString()+")))";
  x = nerdamer(deter);
  
 writeOutput1(x.toString());
  
}

function getInput2() {
  let inputMatrix1 = document.querySelector("#input2_1");
  let inputMatrix2 = document.querySelector("#input2_2");
  let inputMatrix3 = document.querySelector("#input2_3");
  let inputMatrix4 = document.querySelector("#input2_4");
  let inputMatrix5 = document.querySelector("#input2_5");
  let inputMatrix6 = document.querySelector("#input2_6");
  let inputMatrix7 = document.querySelector("#input2_7");
  let inputMatrix8 = document.querySelector("#input2_8");
  let inputMatrix9 = document.querySelector("#input2_9");

  // [x1, y1, z1],[x2, y2, z2]
  let input = "[" + inputMatrix1.value + "," + inputMatrix2.value + "," + inputMatrix3.value + "],[" + inputMatrix4.value + "," + inputMatrix5.value + "," + inputMatrix6.value + "],[" + inputMatrix7.value + "," + inputMatrix8.value + "," + inputMatrix9.value + "]";

  console.log(input.toString());

  // matrix([4,5],[1,7])
  // /determinant(matrix([4,5],[1,7]))
  let deter = "determinant((matrix("+input.toString()+")))";
  
  x = nerdamer(deter);


  // do something with the input
  writeOutput2(x.toString()); // <-- replace this with YOUR CODE
}

// This function will write some text to the output span on the page.
// var subjectObject = {
//   "Matrix": {
//     "Determinant": ["2x2","3x3","4x4"]
//   },
//   "Something": {
//     "I'm working on it": ["I'm working on it"]
//   },
// }
// window.onload = function() {
//   var subjectSel = document.getElementById("subject");
//   var topicSel = document.getElementById("topic");
//   var chapterSel = document.getElementById("chapter");
//   for (var x in subjectObject) {
//     subjectSel.options[subjectSel.options.length] = new Option(x, x);
//   }

// subjectSel.onchange = function() {
//     //empty Chapters- and Topics- dropdowns
//     chapterSel.length = 1;
//     topicSel.length = 1;
//     //display correct values
//     for (var y in subjectObject[this.value]) {
//       topicSel.options[topicSel.options.length] = new Option(y, y);
//     }
//   }
//   topicSel.onchange = function() {
//     //empty Chapters dropdown
//     chapterSel.length = 1;
//     //display correct values
//     var z = subjectObject[subjectSel.value][this.value];
//     for (var i = 0; i < z.length; i++) {
//       chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
//     }
//   }

function writeOutput1(text) {
  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = text;
}

function writeOutput2(text) {
  let outputSpan = document.querySelector("#output2");
  outputSpan.textContent = text;
}
document.querySelector("#buttonGo1").addEventListener("click", getInput1);
document.querySelector("#buttonGo2").addEventListener("click", getInput2);
