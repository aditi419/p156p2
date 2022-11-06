AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },
    },
  
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    init: function(){
      var duration = 120;
      const timerEl = document.querySelector('#timer');
      this.startTimer(duration, timerEl);
    },
  
    startTimer: function(duration, timerEl){
      setInterval(()=>{
        if (duration >= 0){
          minutes = parseInt(duration/60);
          seconds = parseInt(duration%60);
          if (minutes < 10){
            minutes = '0' + minutes;
          }
  
          if(seconds < 10){
            seconds = '0' + seconds;
          }
  
          timerEl.setAttribute('text',{
            value: minutes + ' :' + seconds,
          })
  
          duration -= 1
        }
        else{this.gameOver()};
      }, 1000)
    },
  
    isCollided: function (elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", (e) => {
        if (elementId.includes("#coin")) {
          element.setAttribute('visible', false);
          this.updateTargets();
          this.updateScore();
        } 
        else{this.gameOver()};
      });
    },
  
    updateTargets: function(){
      const element = document.querySelector('#targets');
      var count = element.getAttribute('text').value;
      let currentTargets = parseInt(count);
      currentTargets -= 1;
      element.setAttribute('text',{
        value: currentTargets,
      })
    },
  
    updateScore: function(){
      const element = document.querySelector('#score');
      var count = element.getAttribute('text').value;
      let currentScore = parseInt(count);
      currentScore += 10;
      element.setAttribute('text',{
        value: currentScore,
      })
    },
  
    gameOver: function () {
      var diverEl = document.querySelector("#diverModel");
      var element = document.querySelector("#game_over_text");
      element.setAttribute("visible", true);
      diverEl.setAttribute("dynamic-body", {
        mass: 1
      });
    },
  
  });