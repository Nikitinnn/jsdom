button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Ура!');
    }
  };

document.getElementById('binaryInput').addEventListener('keydown', function(event){
    if (!['+','1','2','3','4','5','Backspace','Delete','Tab'].includes(event.key)) {
        event.preventDefault();
    }      
});
window.onkeydown = function(event) {
  if (event.keyCode == 13) { // 13 - код клавиши Enter
    document.getElementById("image-container").style.display = "flex";
  }
};

window.onclick = function() {
  document.getElementById("image-container").style.display = "none";
};

