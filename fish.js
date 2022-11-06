AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFish(id, position);
      }
    },
    createFish: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#islandModel");
  
      //creating the bird model entity
      var fishEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 5, y: 5, z: 5 });
      fishEl.setAttribute('static-body',{shape:'sphere',sphereRadius:5});
      fishEl.setAttribute('game-play',{elementId:`#${id}`});
  
      //set the gLTF model attribute
      fishEl.setAttribute("gltf-model", "./Models/clownfish/scene.gltf");
  
      //set animation mixer of models with animation
      fishEl.setAttribute("animation-mixer", {});
  
      
      //append the bird entity as the child of the terrain entity
      terrainEl.appendChild(fishEl);
    },
  });