function incrementHome(){
   var element = document.getElementById('homeScore');
   var value = parseInt(element.innerHTML);

   value++;

   console.log(value);
   document.getElementById('homeScore').innerHTML = value;
}

function incrementHome2(){
    var element = document.getElementById('homeScore');
    var value = parseInt(element.innerHTML);
 
    value += 2;
 
    console.log(value);
    document.getElementById('homeScore').innerHTML = value;
 }

 function incrementHome3(){
    var element = document.getElementById('homeScore');
    var value = parseInt(element.innerHTML);
 
    value += 3;
 
    console.log(value);
    document.getElementById('homeScore').innerHTML = value;
 }

function decrementHome(){
    var element = document.getElementById('homeScore');
    var value = parseInt(element.innerHTML);

    if(value > 0){
        value--;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('homeScore').innerHTML = value;
}

function decrementHome2(){
    var element = document.getElementById('homeScore');
    var value = parseInt(element.innerHTML);

    if(value > 2){
        value -= 2;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('homeScore').innerHTML = value;
}

function decrementHome3(){
    var element = document.getElementById('homeScore');
    var value = parseInt(element.innerHTML);

    if(value > 3){
        value -= 3;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('homeScore').innerHTML = value;
}

function incrementAway(){
    var element = document.getElementById('awayScore');
    var value = parseInt(element.innerHTML);

    value++;

    console.log(value);
    document.getElementById('awayScore').innerHTML = value;
}

function incrementAway2(){
    var element = document.getElementById('awayScore');
    var value = parseInt(element.innerHTML);
 
    value += 2;
 
    console.log(value);
    document.getElementById('awayScore').innerHTML = value;
 }

 function incrementAway3(){
    var element = document.getElementById('awayScore');
    var value = parseInt(element.innerHTML);
 
    value += 3;
 
    console.log(value);
    document.getElementById('awayScore').innerHTML = value;
 }

function decrementAway(){
    var element = document.getElementById('awayScore');
    var value = parseInt(element.innerHTML);

    if(value > 0){
        value--;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('awayScore').innerHTML = value;
}

function decrementAway2(){
    var element = document.getElementById('awayScore');
    var value = parseInt(element.innerHTML);

    if(value > 2){
        value -= 2;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('awayScore').innerHTML = value;
}

function decrementAway3(){
    var element = document.getElementById('awayScore');
    var value = parseInt(element.innerHTML);

    if(value > 3){
        value -= 3;
    }
    else{
        value = 0;
    }

    console.log(value);
    document.getElementById('awayScore').innerHTML = value;
}

function resetScore(){
    var homeScore = document.getElementById('homeScore');
    var awayScore = document.getElementById('awayScore');
    var home = homeScore.innerHTML;
    var away = awayScore.innerHTML;

    home = 0;
    away = 0;

    console.log(home, away);
    document.getElementById('homeScore').innerHTML = home;
    document.getElementById('awayScore').innerHTML = away;
}

function getScore(){
    var homeScore = document.getElementById('homeScore');
    var home = parseInt(homeScore.innerHTML);
    var awayScore = document.getElementById("awayScore")
    var away = parseInt(awayScore.innerHTML);
    var homeName = document.getElementById('home-name').innerText;
    var awayName = document.getElementById('away-name').innerText;

    localStorage.setItem("home_score", home);
    localStorage.setItem("away_score", away);
    localStorage.setItem("home_name", homeName);
    localStorage.setItem("away_name", awayName);
}

var displayWindow;
function openWindow(){
    if(displayWindow === undefined || displayWindow.closed){
        displayWindow = window.open("display.html");
    }
    setInterval(getScore, 1000);
}

function displayImage() {
    var input = document.getElementById('uploadInput');
    var image = document.getElementById('uploadedImage');
  
    var file = input.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e) {
      image.src = e.target.result;
      localStorage.setItem('uploadedImageSrc', e.target.result);
    };
  
    reader.readAsDataURL(file);
  }

  function clearStorage(){
    localStorage.clear();
  }
