#! /bin/sh

cd $w_wims_home/$w_wims_sesdir || exit
if [ -s submit.oef ] && [ ! -f user-deposit ]; then
 src=submit.oef
else
 src=user-deposit
fi
content=`sed 's/\&/\&amp;/g;s/</\&lt;/g' 2>/dev/null <$src`
cat <<@
<textarea cols="70" rows="24" class="nowrap"
name="wims_deposit" id="wims_deposit_id">$w_sourcedescription$content</textarea>
@

rm -f user-deposit >/dev/null

