// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("clientForm").reset();
  }
}

function getDataFromForm(){
var inputs = document.forms["clientForm"].getElementsByTagName("input");
var input =[];
  for(i=0; i < inputs.length;i++) {
    input.push(inputs[i].value);
  }
  input[3] = input[3].replace('.',',');
  input[4] = input[4].replace('.',',');
  google.script.run.withSuccessHandler(onSuccess).insertNewClient(input);

}

function onSuccess(){
    modal.style.display = "none";
    document.getElementById("clientForm").reset();
}
