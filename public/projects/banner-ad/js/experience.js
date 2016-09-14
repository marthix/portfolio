document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {

    // Layouts
    TweenLite.set('#ball', {xPercent: -80, yPercent: -250});
    TweenLite.set('#foot', {xPercent: -100, yPercent: -190});
    TweenLite.set('#goal', {xPercent: 200, yPercent: -160});
    TweenLite.set('#scene1', {xPercent: 0, yPercent: 0});
    TweenLite.set('#scene2', {xPercent: 100, yPercent: -195});

    // Animations
    timeline = new TimelineLite({
       paused: true
    })
      .to('#scene1', 0.5, {x: -300})
      .to('#foot', 0.3, {x: 50, rotation: '-=45', transformOrigin: '0% 50%'})
      .to('#ball', 2.7, {x: 350, y: -120, rotation: '+=540', ease: Power2.easeOut}, 'sequence1')
      .to(['#crowd', '#foot'], 2, {x: -180}, 'sequence1')
      .to('#goal', 1.8, {x: -200}, '-=2.5')
      .to('#scene2', 0.8, {x: -300}, '-=0.3')


    document.querySelector('#experience').addEventListener('mouseover', () => {
      timeline.play()
    });
  }
}
