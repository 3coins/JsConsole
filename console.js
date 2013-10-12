 (function(){
  var div = document.body.appendChild(document.createElement("div"));
     div.style.cssText = "background-color:#000000;color:#ffffff;width:100%;opacity:0.7;height:100px;padding:10px;border:solid 5px #f1f1f1;position:fixed;bottom:0px;left:0px;font-size:12px;display:block;";   
  var isClear = true;   
  window.JsConsole = {
    log: function(){
      isClear = false;  
      var args = Array.prototype.slice.call(arguments);
      for(var i = 0, len = args.length; i < len; i++){
        div.appendChild(document.createElement("div")).appendChild(document.createTextNode("- " + args[i]));
      }
    }
  };

  var pressed = 0;
  var hidden = false;
  document.body.addEventListener("keydown", function(e){
    var key = e.keyCode;
    // ctrl, shift, c
    if(key === 17 || key === 16 || key === 67){
      pressed++;
    }
    if(pressed === 3){
      if(hidden){
        div.style.display = "block";
        hidden = false;
      } else {
          if(isClear){
              div.style.display = "none";
              hidden = true;
          } else {
              while (div.hasChildNodes()) {
                div.removeChild(div.firstChild);
              }
              isClear = true;
          }
      }
      return true;
    }  
  });

  document.body.addEventListener("keydown", function(e){
    var key = e.keyCode;
    // ctrl, shift, c
    if(key === 16 || key === 17 || key === 67){
      setTimeout(function(){
        pressed--;
      }, 500);
    }
  });
})();