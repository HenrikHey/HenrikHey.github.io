//jquery code here.
$(document).ready(function(){

  //CONTACT BUTTON//
  /*$('#contact-button').hover(
    function () {
      $('#contact-button').animate({'width':'18em'}, "slow");
      $('#contact-button h1').css({'opacity':'0'});
    },
    function () {
      $('#contact-button').animate({'width':'8.4em'}, "slow");
      $('#contact-button h1').css({'opacity':'1'});
    }
  );*/
  //END OF CONTACT BUTTON//

  //FIELD CARDS//
  $('#num1').hover(
    function () {
      $('#num1').animate({'bottom':'3em'}, "slow");
      $('#num1 h1').animate({'top':'8em'});
      $('#num1 h4').animate({'top':'20em','opacity':'1'});
    },
    function () {
      $('#num1').animate({'bottom':'0em'}, "slow");
      $('#num1 h1').animate({'top':'13em'});
      $('#num1 h4').animate({'top':'25em','opacity':'0'});
    }
  );

  $('#num2').hover(
    function () {
      $('#num2').animate({'bottom':'3em'}, "slow");
      $('#num2 h1').animate({'top':'8em'});
      $('#num2 h4').animate({'top':'20em','opacity':'1'});
    },
    function () {
      $('#num2').animate({'bottom':'0em'}, "slow");
      $('#num2 h1').animate({'top':'13em'});
      $('#num2 h4').animate({'top':'25em','opacity':'0'});
    }
  );

  $('#num3').hover(
    function () {
      $('#num3').animate({'bottom':'3em'}, "slow");
      $('#num3 h1').animate({'top':'8em'});
      $('#num3 h4').animate({'top':'20em','opacity':'1'});
    },
    function () {
      $('#num3').animate({'bottom':'0em'}, "slow");
      $('#num3 h1').animate({'top':'13em'});
      $('#num3 h4').animate({'top':'25em','opacity':'0'});
    }
  );
  //END OF FIELD CARDS//

  //ABOUT ME BOX'S//
  $('#box1').hover(
    function () {
      $('#box1').animate({'height':'20em'}, "slow");
      $('#box1 h1').animate({'left':'0em', 'bottom':'6.5em'}, "slow");
      $('#box1 h4').animate({'top':'4em','opacity':'1'}, "slow");
    },
    function () {
      $('#box1').animate({'height':'8em'}, "slow");
      $('#box1 h1').animate({'left':'2em', 'bottom':'1em'}, "slow");
      $('#box1 h4').animate({'top':'6em','opacity':'0'}, "slow");
    }
  );

  $('#box2').hover(
    function () {
      $('#box2').animate({'height':'20em'}, "slow");
      $('#box2 h1').animate({'left':'-4em', 'bottom':'6.5em'}, "slow");
      $('#box2 h4').animate({'top':'4em','opacity':'1'}, "slow");
    },
    function () {
      $('#box2').animate({'height':'8em'}, "slow");
      $('#box2 h1').animate({'right':'2em', 'left':'2em','bottom':'1em'}, "slow");
      $('#box2 h4').animate({'top':'6em','opacity':'0'}, "slow");
    }
  );

  $('#box3').hover(
    function () {
      $('#box3').animate({'height':'20em'}, "slow");
      $('#box3 h1').animate({'left':'0em', 'bottom':'6.5em'}, "slow");
      $('#box3 h4').animate({'top':'4em','opacity':'1'}, "slow");
    },
    function () {
      $('#box3').animate({'height':'8em'}, "slow");
      $('#box3 h1').animate({'left':'2em', 'bottom':'1em'}, "slow");
      $('#box3 h4').animate({'top':'6em','opacity':'0'}, "slow");
    }
  );
  //END OF ABOUT ME BOX'S//
});
