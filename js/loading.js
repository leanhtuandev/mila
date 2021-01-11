
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  onReady(function() {
    setVisible('#navbar', true);
    setVisible('#banner', true);
    setVisible('#mockup', true);
    setVisible('#feature', true);
    setVisible('#translation-assistance', true);
    setVisible('#feed-back', true);
    setVisible('#buy-now', true);
    setVisible('#contact', true);
    setVisible('#map', true);
    setVisible('#footer', true);
    setVisible('#loading', false);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  });

  