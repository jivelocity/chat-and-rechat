// Parallax effect
function parallaxIt(e, container, target, movement) {
    const $this = container;
    const relX = e.clientX - $this.getBoundingClientRect().left;
    const relY = e.clientY - $this.getBoundingClientRect().top;
  
    TweenLite.to(target, 1, {
      transformStyle: "preserve-3d",
      x: (relX - $this.offsetWidth / 2) / $this.offsetWidth * movement,
      y: (relY - $this.offsetHeight / 2) / $this.offsetHeight * movement
    });
  }
  
  // On hover, parallax effect takes place.
  const handlerIn = (e, self) => {
    mouseHandler(e, 'in', self)
  }
  
  // Once user's mouse leaves container, images are transitioned back into place.
  const handlerOut = (e, self) => {
    mouseHandler(e, 'out', self)
  }
  
  const mouseHandler = (e, mousePosition, self) => {
    const container = e.target;
    const innerImage = e.target.children[0];
  
    // Making sure the assets are loaded
    if (container && innerImage) {
      switch (mousePosition) {
        case 'in':
          // On hover, parallax effect takes place.
          $(self).mousemove((evt) => {
            // Effect on container           
            parallaxIt(evt, container, container, -80);
            // Effect on inner image
            parallaxIt(evt, container, innerImage, -30);
          });
          break;
        case 'out':
          // Once user's mouse leaves container, images are transitioned back into place.
          $(self).off('mousemove');
          TweenLite.to([container, innerImage], 1, {
            x: 0,
            y: 0
          })
          break;
        default:
          // $(self).off('mousemove');
      }
    }
  }
  
  $("[data-parallax").each(function () {
    $(this).on({
      mouseenter: (e) => {
        handlerIn(e, this);
      },
      mouseleave: (e) => {
        handlerOut(e, this)
      }
    })
  })