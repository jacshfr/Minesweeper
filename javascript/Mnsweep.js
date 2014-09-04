$(function() {

var bombs = 1;

  function layABomb() {
    $(".block").each(function() {
      if (bombs <= 10 && !$(this).prop("bomb")) {
        var blockBomb = Math.floor(Math.random() * 100);
        if (blockBomb < 10) {
          $(this).append("<h5 style='display:none' class='bomb'>!</h5>");
          bombs++;
          console.log(bombs);
        }
      }
        // console.log(blockBomb);
      else if (bombs > 10) {
        return false;
      }
    })
    if (bombs < 11) {
      layABomb();
    }
  }

  // function layNumbers() {
  //   $(".block").each(function() {
  //     if (!$(this).prop("bomb") && ) {
  //     }
  //   })
  // }

  function checkForProximity(target) {
    var startingBlock = $(target).attr("id");
  }

  function loadUp() {

  }
  function init() {
    layABomb();
    // layNumbers();

  }

  $(document).on("click", ".block", isThereABomb)

  function isThereABomb() {
    if ($(this).children().prop("class") == "bomb") {
      revealAllBombs();
      console.log($(this).attr("id"));
    }
    else {
      revealAllZeros();


    }
  }

  function revealAllBombs() {
    $(".block").children().show();
  }

  // function revealAllZeros() {
  //   $(".block").()
  // }

  init();


})
