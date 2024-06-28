!!hack to be able to use getopt after even if there are some = signs in the objects
!!in $(replyoption$i) commas are replaced by spaces

!set symb=!replace internal = by _equal_ in $(replyoption$i)
!set symb=!replace internal symbols_equal_ by symbols= in $symb
!set symbol$i=!getopt symbols in $symb
!set symbol$i=!declosing $(symbol$i)
!set symbol$i=!replace internal _equal_ by = in $(symbol$i)
!set symbol$i=!singlespace $(symbol$i)
!set bcnt=!wordcnt $(symbol$i)
!for b=1 to $bcnt
  !set a=!word $b of $(symbol$i)
  !if chemeq isin $(replytype$i)
    !set chemeq_option=l
    !set c=!exec chemeq $a
    !if error isin $c
      !set c=$a
    !endif
  !else
    !set c=$a
  !endif
  !set a=!replace internal ' by \' in $a
  !set symbol_out$i=!append word <span onclick="appendToInput($i,' $a ');" \
    class="wims_button wims_secondary_button">\($c\)</span> to $(symbol_out$i)
!next a

<script>
function appendToInput(n,msg){
  var field = document.getElementById("reply"+n);
  var cursorPosition=field.selectionStart;
  var front=field.value.substring(0, cursorPosition);
  var back=field.value.substring(cursorPosition, field.value.lenght);
  field.value=front+msg+back;
  cursorPosition= cursorPosition + msg.length;
  field.selectionStart = cursorPosition;
  field.selectionEnd = cursorPosition;
  field.focus();
  }
</script>
<div id="symbols_reply$i">
$(symbol_out$i)
</div>
