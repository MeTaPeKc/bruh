$('input[type=range]').on('input', function () {
  $('#fill-color').css({'padding-right': 'calc(100% - ' + ($(this).val()/10) + '%)'});
});
