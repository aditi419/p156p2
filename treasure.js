AFRAME.registerComponent('coins',{
    init: function(){
        for(var i = 1; i<=10; i++){
            var id = `coin$(i)`
            var posX = (Math.random()*100+(-50))
            var posY = (Math.random()*5+(5))
            var posZ = (Math.random()*60+(-40))
            var position = {x:posX, y:posY, z:posZ}
            this.createCoins(id,position)
        }
    },

    createCoins: function(id,position){
        var coinEl = document.createElement('a-entity')
        var terrainEl = document.querySelector('#islandModel')
        coinEl.setAttribute('id', id)
        coinEl.setAttribute('position', position)
        coinEl.setAttribute('material','color','#FCD411')
        coinEl.setAttribute('static-body',{shape:'sphere',sphereRadius:2});
        coinEl.setAttribute('geometry',{primitive:'circle',radius:0.5})
        coinEl.setAttribute('animation', {
            property: 'rotation',
            to: ' 0 360 0',
            dur: 1000
        });
        terrainEl.appendChild(coinEl)
    }
})