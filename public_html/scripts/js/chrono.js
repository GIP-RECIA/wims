!! no more in use in administrative module 20221128
!! deprecated use chronoid.js
!! TODO_clean

<script>
  var fixrtick=$wims_read_parm;
  var rtick=fixrtick;
  var enter=new Date();
  function tempo() {
    exit=new Date();
    return Math.ceil((exit.getTime()-enter.getTime())/1000);
  }
  function clock() {
    document.chrono.clock.value=rtick;
    rtick=fixrtick-tempo();
    if(rtick<0) rtick=0;
    Timer= setTimeout("clock()",1000);
  }
</script>
!set wims_html_onload=clock();
