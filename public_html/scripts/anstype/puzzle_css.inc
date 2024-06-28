!! test if style tag is already set in DOM (if multiple instance of same anstype)
!if $puzzle_css!=set
  !set oef_anstype_css=!append line \
    .puzzle_row{display:flex;}\
    .wimscenter .puzzle_row{justify-content: center;}\
    .puzzle_piece{\
      display: flex;\
      justify-content: center;\
      text-align: center;\
      align-items: center;\
      margin-right:1px;\
      border:solid 2px;\
      transition: border-color .5s, opacity .5s;\
      background-color:lightblue;\
    }\
    .puzzle_piece.active{cursor:pointer;border-color:#999}\
    .oef_indbad.puzzle_piece{background-color:#ffe1e9;}\
    .oef_indgood.puzzle_piece{background-color:#d9eec7;}\
    .puzzle_piece.active:hover{\
      border-color:#004077;\
      opacity:.75;\
    }\
    .puzzle_piece.selected{\
      border-color:#1779BA;\
      font-weight:bold;\
    }\
    to $oef_anstype_css
  !set puzzle_css=set
!endif