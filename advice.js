function displayAdvice() {
    const req = new XMLHttpRequest();
    req.open('GET', "https://api.adviceslip.com/advice", true);
    req.onload = function() {
      const resp = JSON.parse(req.responseText);  
      const advice = resp.slip.advice;
      const num = resp.slip.id;
      document.getElementsByTagName('h1')[0].innerHTML = `ADVICE #${num}`; 
      document.getElementById('advice').innerHTML ="&ldquo;" + advice + "&rdquo;";
    }
    req.send();
}
displayAdvice();
document.getElementById('dice').addEventListener('click', ()=>{  
  setTimeout(()=>{
    displayAdvice();
    document.getElementById('load').style.transform = "rotate(360deg)"; 
  }, 1000);
  document.getElementById('load').style.transform = "rotate(-360deg)";
  document.getElementById('advice').innerHTML = "" /*"Please wait 1s for the advice, thanks :)"*/;
});

