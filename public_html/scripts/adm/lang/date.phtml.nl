!distribute items $wims_read_parm into record,_year,_month,_day
!set lang_exists=yes
!bound record within date,months default $
!set months=Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December
!if $record=$empty
  !exit
!endif

!goto $record

:date
!set c_date=!nospace __$_year/$_month/$_day __
!set c_date=!replace internal __/ by in $c_date
!set c_date_out=!replace internal /__ by in $c_date
!set c_date_out=!replace internal __ by in $c_date_out

!set l_m=!item $_month of $months
!set l_date_out=$_year, $l_m, $_day

!exit

:months
!exit
