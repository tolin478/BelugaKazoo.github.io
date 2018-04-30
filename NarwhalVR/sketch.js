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

var sizer = 1.01;
var revSizer = 1.005;
var timer = 16;
var f = 0;
for (var i = 0; i < 4; i++) {

    var sceneEl = document.querySelector('a-scene');
    var entity = document.createElement('a-entity');
    var modelEnt = document.createElement('a-entity');

    var newEntity = sceneEl.appendChild(entity);
    var narwhalEnt = entity.appendChild(modelEnt);
    // newEntity.object3D.position.set(-20,10,i*10-20);
    // newEntity.object3D.rotation.set(0,0,180);
    narwhalEnt.setAttribute("id","modely"+i);
    narwhalEnt.setAttribute("modely"+i);
    narwhalEnt.setAttribute("gltf-model","#narwhal");
    narwhalEnt.setAttribute("name",narwhalNames[i%narwhalNames.length]);
    var animation = document.createElement('a-animation');
    animation.setAttribute("attribute","rotation");
    animation.setAttribute("dur", "10000");
    // animation.setAttribute("fill","forwards");
    animation.setAttribute("easing", "linear");
    animation.setAttribute("to","0 360 0");
    animation.setAttribute("repeat","indefinite");
    newEntity.appendChild(animation);

    var facingAnimation = document.createElement('a-animation');
    facingAnimation.setAttribute("attribute","rotation");
    facingAnimation.setAttribute("dur", "100000");
    facingAnimation.setAttribute("easing", "linear");
    facingAnimation.setAttribute("to","0 360 0");
    facingAnimation.setAttribute("repeat","indefinite");
    narwhalEnt.appendChild(facingAnimation);

    AFRAME.registerComponent('modely'+i, {
        init: function() {
          var data = this.data;
          var el = this.el;
         el.object3D.position.set(-20,f*4+4,f*10-20);
         // el.object3D.rotation.set(0,0,180);
         f++;
          var pressTimer = null;
          var sizeTimer = null;
          var longpress = false;
          var sceneEl = document.querySelector('a-scene');
          el.addEventListener('mouseleave', function(e) {
            // if (pressTimer !== null) {
            //   clearTimeout(pressTimer);
              clearInterval(sizeTimer);
            //   pressTimer = null;
            // }
            // if (longpress) {
            //   return false;
            // }
            sizeTimer = setInterval(function(){   
              if (el.object3D.scale.x > 1) {
              clearInterval(sizeTimer);
              }
              el.object3D.scale.set(el.object3D.scale.x*revSizer,el.object3D.scale.y*revSizer,el.object3D.scale.z*revSizer);
            }, timer);
            console.log('mouse up');
          }); 
          
          el.addEventListener('mouseenter', function(e) {
            console.log("mouse down");
            longpress = false;
              clearInterval(sizeTimer);

            sizeTimer = setInterval(function(){   
              console.log(sizer);
              el.object3D.scale.set(el.object3D.scale.x/sizer,el.object3D.scale.y/sizer,el.object3D.scale.z/sizer);
            }, timer);
            if (el.object3D.scale.x < .3) {
              console.log("long click");
              narwhals++;
              //narwhalNames.push(el.getAttribute('name'));
              var opedia = sceneEl.querySelector('#Narwhalopedia');
              //console.log(opedia);
              opedia.setAttribute('value',opedia.getAttribute('value') + el.getAttribute('name') + "\n");
              var narwhal = sceneEl.querySelector('#'+el.getAttribute('id'));
              narwhal.sceneEl.removeChild(narwhal.parentElement);
              sceneEl.querySelector('#UItext').setAttribute('value',"Narwhal Count: " + narwhals);
              longpress = true;
            }
           // pressTimer = setTimeout(function(){
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