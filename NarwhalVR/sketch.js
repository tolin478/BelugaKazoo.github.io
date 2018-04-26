var narwhals = 0;
var narwhalNames = ["Clive","Alfred","Maxwell","Ainsley"];

// function loop() {
// 	var sceneEl = document.querySelector('a-scene');

// 	if ()
// 	requestAnimationFrame(loop);
// }
// AFRAME.registerComponent('modelr', {
//   init: function () {
//     var els = this.el;  
//     var sceneEl = document.querySelector('a-scene');
// 	els.addEventListener('mouseenter', function () {
// 		narwhals++;
// 		var narwhal = sceneEl.querySelector('#modely');
// 		narwhal.sceneEl.removeChild(narwhal);
// 		sceneEl.querySelector('#UItext').setAttribute('value',"Narwhal Count:" + narwhals);
// 		// console.log(narwhals);
// 	});
//   }
// });

var f = 0;
for (var i = 0; i < 4; i++) {

    var sceneEl = document.querySelector('a-scene');
    var entity = document.createElement('a-entity');
    var newEntity = sceneEl.appendChild(entity);
    // newEntity.object3D.position.set(-20,10,i*10-20);
    // newEntity.object3D.rotation.set(0,0,180);
    newEntity.setAttribute("id","modely"+i);
    newEntity.setAttribute("modely"+i);
    newEntity.setAttribute("gltf-model","#narwhal");
    newEntity.setAttribute("name",narwhalNames[i%narwhalNames.length]);
    var animation = document.createElement('a-animation');
    animation.setAttribute("attribute","rotation");
    animation.setAttribute("to","0 360 0");
    animation.setAttribute("repeat","indefinite");
    animation.setAttribute("fill","forwards");
        animation.setAttribute("duration", "1000");

    newEntity.appendChild(animation);

        console.log(animation);

    AFRAME.registerComponent('modely'+i, {
        init: function() {
          var data = this.data;
          var el = this.el;
         el.object3D.position.set(-20,4,f*10-20);
         // el.object3D.rotation.set(0,0,180);
         f++;
          var pressTimer = null;
          var sizeTimer = null;
          var longpress = false;
          var sceneEl = document.querySelector('a-scene');
          el.addEventListener('mouseleave', function(e) {
            if (pressTimer !== null) {
              clearTimeout(pressTimer);
              clearInterval(sizeTimer);
              pressTimer = null;
            }
            if (longpress) {
              return false;
            }
            console.log('mouse up');
          }); 
          
          el.addEventListener('mouseenter', function(e) {
            console.log("mouse down");
            longpress = false;
            sizeTimer = setInterval(function(){   
              //el.object3D.scale.set(el.object3D.scale.x/1.1,el.object3D.scale.y/1.1,el.object3D.scale.z/1.1);
            }, 100);

            pressTimer = setTimeout(function(){
              console.log("long click");
              narwhals++;
              //narwhalNames.push(el.getAttribute('name'));
              var opedia = sceneEl.querySelector('#Narwhalopedia');
              //console.log(opedia);
              opedia.setAttribute('value',opedia.getAttribute('value') + el.getAttribute('name') + ", ");
              var narwhal = sceneEl.querySelector('#'+el.getAttribute('id'));
              narwhal.sceneEl.removeChild(narwhal);
              sceneEl.querySelector('#UItext').setAttribute('value',"Narwhal Count: " + narwhals);
              longpress = true;
            },2000);
          });
      }
  });
}


// var canvas = document.getElementById('mycanvas');

// var ctx = canvas.getContext('2d');

// canvas.height = 500;
// canvas.width = 700;
// var x = 100;
// function loop() {
// 	x++;
// 	ctx.strokeRect(x,100,50,x);
// requestAnimationFrame(loop);
// console.log(x)

// }
// loop();