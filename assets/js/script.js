/*Aseguararse que todo funcione*/
$(document).ready(function(){
    /*Hablitar tooltip*/
    $('[data-bs-toggle="tooltip"]').tooltip();
    /*Toggle Cards*/
    $('.tg1').click(function(){
      $('.tgsh1').toggle();
    });
    $('.tg2').click(function(){
      $('.tgsh2').toggle();
    });
    $('.tg3').click(function(){
      $('.tgsh3').toggle();
    });
    $('.tg4').click(function(){
        $('.tgsh4').toggle();
      });
});
/*Hablitar modal*/
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });