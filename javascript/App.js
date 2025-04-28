$(function () {
  $("#video-button").click(function () {
    let about = $(".modal");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal").css("display", "none");
  });
});

$(function () {
  $("#pass").click(function () {
    let about = $(".modal");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal").css("display", "none");
  });
});

$(function () {
  $("#money").click(function () {
    let about = $(".modal-1");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-1").css("display", "none");
  });
});

$(function () {
  $("#aid").click(function () {
    let about = $(".modal-2");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-2").css("display", "none");
  });
});

$(function () {
  $("#sun").click(function () {
    let about = $(".modal-3");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-3").css("display", "none");
  });
});
$(function () {
  $("#tech").click(function () {
    let about = $(".modal-4");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-4").css("display", "none");
  });
});
$(function () {
  $("#cloth").click(function () {
    let about = $(".modal-5");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-5").css("display", "none");
  });
});
$(function () {
  $("#shw").click(function () {
    let about = $(".modal-6");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-6").css("display", "none");
  });
});
$(function () {
  $("#food").click(function () {
    let about = $(".modal-7");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-7").css("display", "none");
  });
});
$(function () {
  $("#botl").click(function () {
    let about = $(".modal-8");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-8").css("display", "none");
  });
});
$(function () {
  $("#items").click(function () {
    let about = $(".modal-9");
    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });

  $(".modal-closed").click(function () {
    $(".modal-9").css("display", "none");
  });
});

let arrow = $('#arrow');

let win = $(window);

win.on('scroll' ,function() {
  let myVariable = win.scrollTop();
  if(myVariable >= 600) {
    arrow.css('display' , 'block')
  }
  else{
    arrow.css('display' , 'none')
  }
  arrow.css('transform', 'rotate(' + myVariable + 'deg)');
})