



var buttonCurrentTime = document.getElementById('Time')
var buttonHello =document.getElementById('Click')
var inputCurrenTime = document.getElementById('CurrenTime')

function getTime ()  {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return alert(hours + ':' + minutes)
  };
  
  function Hello() {
    return 
  }
 buttonCurrentTime.addEventListener('click',getTime)
 buttonCurrentTime.addEventListener('click',Hello('hay'))



