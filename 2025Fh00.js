$('.flex-grow-1.dots, .label.bg.d-flex.fl').hide();

const observer = new MutationObserver(() => {
  const $buttons = $('a[data-toggle="tab"][href="#l1"], a[data-toggle="tab"][href="#l2"], a[data-toggle="tab"][href="#l3"]');

  if (!$('.center-buttons').length && $buttons.length === 3) {
    $buttons.wrapAll('<div class="center-buttons"></div>');

    $('.center-buttons').css({
      'display': 'flex',
      'justify-content': 'center',
      'flex-wrap': 'wrap',
      'gap': '6px',
      'margin': '10px 0',
      'margin-left': '8px'
    });

    $buttons.css({
      'background-color': '#fff',
      'color': '#000',
      'padding': '8px 12px',
      'border-radius': '12px',
      'font-size': '15px',
      'font-weight': '500',
      'text-decoration': 'none',
      'display': 'inline-block',
      'min-width': '100px',
      'text-align': 'center',
      'box-shadow': 'none',
      'border': 'none',
      'transition': 'background-color 0.3s ease-in-out'
    }).hover(function () {
      $(this).css('background-color', '#f5f5f5');
    }, function () {
      $(this).css('background-color', '#fff');
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });

$(document).ready(function () {
  $('button[onclick="Login_(1);"], input[onclick="Login_(1);"]').css({
    width: '90%',
    padding: '12px',
    'font-size': '17px',
    'background-color': '#4d7c72',
    color: 'white',
    border: 'none',
    'border-radius': '12px',
    margin: '10px auto',
    display: 'block',
    'font-weight': 'bold',
    cursor: 'pointer',
    'text-align': 'center',
    'box-shadow': '0 2px 5px rgba(0,0,0,0.2)'
  }).hover(function () {
    $(this).css('background-color', '#3a5f57');
  }, function () {
    $(this).css('background-color', '#4d7c72');
  });

  $('#u1').css({
    width: '90%',
    padding: '12px',
    'font-size': '16px',
    'border-radius': '14px',
    border: 'none',
    'background-color': '#f2f2f2',
    margin: '10px auto',
    display: 'block',
    'text-align': 'right'
  });

  $('#loginstat').css({
    'display': 'flex',
    'align-items': 'flex-start',
    'justify-content': 'center',
    'height': '40px',
    'background-color': '#4CAF50',
    'color': 'white',
    'border-radius': '10px 10px 0 0',
    'font-weight': 'bold',
    'font-size': '15px',
    'padding': '2px 0 0 0',
    'margin': '0',
    'box-sizing': 'border-box',
    'text-align': 'center'
  });

  $('#loginstat *').css({
    'margin': '0',
    'padding': '0',
    'line-height': '1',
    'font-size': 'inherit',
    'font-weight': 'inherit',
    'display': 'block'
  });

  $('#s1').css({
    'background-color': '#4CAF50',
    'color': 'white',
    'padding': '6px 10px',
    'border-radius': '0 0 10px 10px',
    'font-size': '13px',
    'margin-right': '5px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'margin-top': '0px'
  });

  $('.btn-primary.mini.fl').attr('style', function (i, style) {
    return (style || '') + '; background-color: #4CAF50 !important; margin-top: 18px;';
  });

  $('button[onclick="Login_(2);"]').css({
    width: '90%',
    padding: '12px 0',
    'font-size': '16px',
    'background-color': '#4CAF50',
    color: 'white',
    border: 'none',
    'border-radius': '50px',
    'font-weight': 'bold',
    cursor: 'pointer',
    'text-align': 'center',
    'box-shadow': '0 2px 5px rgba(0,0,0,0.2)',
    float: 'left',
    margin: '5px auto 10px 2%'
  }).hover(function () {
    $(this).css('background-color', '#3a9f45');
  }, function () {
    $(this).css('background-color', '#4CAF50');
  });

  $('#u2, #pass1').css({
    'width': '50%',
    'padding': '12px',
    'font-size': '16px',
    'border-radius': '12px',
    'border': 'none',
    'background-color': '#f2f2f2',
    'margin-top': '12px',
    'text-align': 'center',
    'float': 'right',
    'box-shadow': '0 2px 6px rgba(0, 0, 0, 0.1)',
    'transition': 'all 0.3s ease-in-out',
    'font-family': 'Tahoma, sans-serif',
    'color': '#333',
    'font-weight': 'bold'
  }).focus(function () {
    $(this).css('box-shadow', '0 0 8px rgba(76, 175, 80, 0.5)');
  }).blur(function () {
    $(this).css('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.1)');
  });

  $('#u3, #pass2').css({
    'width': '50%',
    'padding': '12px',
    'font-size': '16px',
    'border-radius': '12px',
    'border': 'none',
    'background-color': '#f2f2f2',
    'margin-top': '12px',
    'text-align': 'center',
    'float': 'right',
    'box-shadow': '0 2px 6px rgba(0, 0, 0, 0.1)',
    'transition': 'all 0.3s ease-in-out',
    'font-family': 'Tahoma, sans-serif',
    'color': '#333',
    'font-weight': 'bold'
  }).focus(function () {
    $(this).css('box-shadow', '0 0 8px rgba(76, 175, 80, 0.5)');
  }).blur(function () {
    $(this).css('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.1)');
  });

  $('button[onclick="Login_(3);"]').css({
    width: '95%',
    padding: '12px 0',
    'font-size': '16px',
    'background-color': '#4CAF50',
    color: 'white',
    border: 'none',
    'border-radius': '50px',
    'font-weight': 'bold',
    cursor: 'pointer',
    'text-align': 'center',
    'box-shadow': '0 2px 5px rgba(0,0,0,0.2)',
    float: 'left',
    margin: '5px auto 10px 2%'
  }).hover(function () {
    $(this).css('background-color', '#3a9f45');
  }, function () {
    $(this).css('background-color', '#4CAF50');
  });

  const allTargets = $('input, button, textarea, a[data-toggle="tab"][href="#l1"], a[data-toggle="tab"][href="#l2"], a[data-toggle="tab"][href="#l3"]');

  allTargets.css({
    'transition': 'background-color 0.4s ease, box-shadow 0.4s ease'
  }).hover(function () {
    $(this).css({
      'background-color': 'rgba(100, 100, 100, 0.1)',
      'box-shadow': '0 0 8px rgba(100, 100, 100, 0.4)'
    });
  }, function () {
    $(this).css({
      'background-color': '',
      'box-shadow': ''
    });
  });

  $('#u1').css({
    'text-align': 'center'
  });
});

$(document).ready(function () {
  const banner = $(".isbnr.fr.ls-is-cached.lazyloaded");

  banner.css({
    "position": "relative",
    "z-index": "1"
  });

  const gradientOverlay = $('<div></div>').css({
    "position": "absolute",
    "bottom": "0",
    "left": "0",
    "width": "100%",
    "height": "40px",
    "background": "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
    "z-index": "2",
    "pointer-events": "none"
  });

  banner.append(gradientOverlay);
});





$(document).ready(function () {
  // تحميل Font Awesome إذا ما كانت مضافة
  if (!$("link[href*='font-awesome']").length) {
    $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
  }

  const $eyeBtn = $('span.btn.fa-eye');

  // إزالة كلاس fa-eye نهائياً واستبداله بـ 🐵
  $eyeBtn.removeClass('fa-eye').text('🐵');

  // تنسيق الزر بدون خلفية
  $eyeBtn.css({
    'position': 'absolute',
    'top': '290px',
    'right': '25px',
    'z-index': '9999',
    'padding': '8px',
    'background-color': 'transparent',  // ← بدون خلفية
    'border-radius': '10px',
    'transition': 'all 0.3s ease',
    'box-shadow': 'none',              // ← بدون ظل
    'cursor': 'pointer'
  });

  // هوفر
  $eyeBtn.hover(
    function () {
      $(this).css({
        'transform': 'scale(1.1)',
        'opacity': '0.8'
      });
    },
    function () {
      $(this).css({
        'transform': 'scale(1)',
        'opacity': '1'
      });
    }
  );

  // عند الضغط: تبديل بين 🙈 و 🐵 بدون خلفية
  $eyeBtn.on('click', function (e) {
    e.preventDefault();
    const $btn = $(this);

    if ($btn.text() === '🐵') {
      $btn.text('🙈');
    } else {
      $btn.text('🐵');
    }
  });
});
