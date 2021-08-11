---
layout: page
title:
---

<p class="">
Tucker is Software Engineer based out of Richmond, Virginia USA.
He loves computing 👨‍💻 trail running 🏔🏃‍♂️🏔 & dance music 💃
</p>
<canvas id="pts"></canvas>

<script type="text/javascript" src="https://unpkg.com/pts@0.10.6/dist/pts.js">
  Pts.namespace( window );

  (function() {
    var space = new CanvasSpace("#pt").setup({ bgcolor: "#ffff", retina: true, resize: true });
    var form = space.getForm();
    space.add( {
      start: (bound) => {},

      animate: (time, ftime) => {
        form.point( space.pointer, 10 );
      },

      action: (type, x, y) => {}
    });
    space.bindMouse().bindTouch().play();
  })();
</script>
