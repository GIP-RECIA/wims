/* make a reverse count on identifier id */
  function clockid(tick,id) {
    var timeStr;
    tick=(tick>1)? tick-1:0;
    minutes=Math.floor(tick/60); seconds=tick%60;
    timeStr= ((minutes < 10) ? "0" : "") + minutes;
    timeStr+= ((seconds < 10) ? ":0" : ":") + seconds;
    window.status=timeStr;
    document.getElementById(id).innerHTML = timeStr;
      if (tick>0) {setTimeout(clockid,1000,tick,id)};
    };


    
