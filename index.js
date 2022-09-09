



var buttonCurrentTime = document.getElementById('Time')
var buttonNextPage = document.getElementById('NextPage')
var buttonInterstingInformation = document.getElementById('Intersting')

function getTime ()  {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return alert(hours + ':' + minutes)
  };
  
  function nextPage() {
    document.location.href = "OtherInformations.html"
  }
  function interstingInformation() {
    document.location.href = "https://www.youtube.com/c/ptuxermann/featured"
  }

buttonCurrentTime.addEventListener('click',getTime)
buttonNextPage.addEventListener('click', nextPage )
buttonInterstingInformation.addEventListener('click', interstingInformation)


