var narwhals = 0;

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
  AFRAME.registerComponent('modely'+i, {
        init: function() {
          console.log(f);
          var data = this.data;
          var el = this.el;
          el.object3D.position.set(-20,10,f*10-20);
                      f++;

          var pressTimer = null;
          var longpress = false;
          var sceneEl = document.querySelector('a-scene');
          el.addEventListener('mouseleave', function(e) {
            if (pressTimer !== null) {
              clearTimeout(pressTimer);
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
            pressTimer = setTimeout(function(){
              console.log("long click");
              narwhals++;
              console.log(sceneEl.querySelector('#'+el.getAttribute('id')));

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