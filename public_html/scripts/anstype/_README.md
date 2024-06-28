# How to add a new anstype (called here `_name`)

Each anstype contains two files, `_name.input` is the input form element, and
`_name` is the answer processing file.

Specific anstypes need not be put into this directory.
One can create a subdirectory "anstype" in the module, then put the files there.
Any name will do, but we recommend that module-specific anstypes use a specific
prefix for its names, like "mynumeric", "myfunction", ..., in order to avoid
possible confusions.
In an oef exercise, the anstype is called by the line

  `\answer{xxx}{yyy}{type=_name}{option=zzz}`

see later for the intern variables corresponding to the values.

The input file should contain the following two definitions:

1. define `anstype=yes`. Otherwise the OEF manager will not recognize the
existence of the anstype.

2. define the form style using the variable `anstyle`. Here are the possible
words to declare in this variable:

  * `mc`: multiple choice style.
  * `symtext`: allows symtext processing.
  * `numeric`: the data is numeric or with an input field
  * `dprompt`: correct answer prompt given under double-underlined variable (internal `reply__$i`);
    in this mode, the correct answer is not present by default.
  * `nogood`: never present correct answer (because there cannot be).
  * `noanswer`: never present the answer analysis (because there is no correct or wrong answer)

These scripts accept the following input variables:

* `i`: The number of the reply field.
* `replyname$i`: The prompt of the form element.
* `reply$i`: The answer given by the student.
* `replygood$i`: The correct answer given by the author.
  so the value of the second field of `\answer{}{}`.
* `replyoption$i`: Option words. Anstypes are more or less free to
  define their own recognized option words.
  In oef exercises, it correspond to the value `zzz` in `{option=zzz}`
* `inputsize`: the second item of the field \embed{} (the first one is
* `r$i` ou `reply$i`). In general, it contains the size of the form element.

Moreover, if no comparison is wanted, the answer processing file can have a
calling parameter "nocompare" (not useful in oef exercices).

Output variables of the answer processing file:

* `Test`: Put `bad $i` if the correct answer given by the author
is not understandable.
* `test`: Put `NaN` followed possibly by an error indicator,
  if the answer given by the student is not understandable.
  some available error indicators:
    * `badsize` (following by a number)
    * `badform`
    * `badform noreduced`
    * `nocompute`
    * `nocomputecomplex`
    * `notunit`
    * `bad_variable`
    * `unknownword` followed by some words
    * `chemdraw_empty_data`
    * `chemclick_empty_data`
* `diareply$i`: Diagnostics result. Possible values: `good`, `bad`.
* `precreply$i`: If the answer misses the correct result just by a
  problem of precision, put `yes` to this variable and put
  `bad` to `diareply$i`. In the computation of the score, a coefficient
  depending on the level is introduced. In thise case, one must
  not advance `freegot` at all.
* `partialgood$i`: If the answer should be considered as partially correct,
  put `yes` to this variable and put `good` to `diareply$i`.
  It has no consequence on the calculation of the real score  (use `freegot` for that).
* `freegot`: This is a numerical variable. Its content is incremented
  by 1 if the answer is 100% OK, none if it is false,
  or anything between 0 and 1 for partially correct answer.
  It is not recommended to decrement this value, nor to
  increment it more than 1. The real score is computed using it.

So,
`partialgood$i=yes + diareply$i=good + freegot` advances of a number strictly between 0 and 1
or
`!advance precgood + diareply$i=bad + fregot=0 + precreply$i=yes`

There are also some optional output variables (they can be left empty).

* `replyGood$i`: This variable can be defined for the correct answer
    shown to the students after replying to the exercise,
    It should be different than the real `replygood$i`.
    It is not shown in the analysis of the answer for false student
    answer if dprompt is declared in anstyle.
* `m_reply$i`: This variable can be defined for the answer shown back
    in the oef variable `reply$i`, if it should be different than the
    real answer typed in.
* `reply_$i`: The answer of the student shown in the html page in place
    of `\embed{}` or in the analysis zone (for oef exercises).
* `reply__$i`: A special prompt in the analysis of the answer
    to show when `dprompt` is declared in anstyle. If it is empty, its
    value is the value of `reply_$i`. If the variable `noshow$i` is yes,
    the student reply is not shown in the answer analysis.
* `m_sc_reply$i`: by default 0, 0.5 or 1 according to `diareply$i`, `partialgood$i` and
    `freegot`. Can be set to special values. Give the possibility
    to the developer of exercises to give feedbacks without testing again.

There are also some variables which can be used (new/2009)

* `oef_formnosubmit`: if `yes`, no "Send answer" button appear.
* `oef_js_submit`: can be used to put javascript in the answer button,
  the line `onclick="javascript:$oef_js_submit;"` will be present
   in this button (in test).
* `oef_anstype_css`: style css (what is inside `<style></style>`)
  will be include at the end of the web page.

If the following variables are defined in the file `_name.input`, they can be reused
in the file `_name`:
  `oef_applet_option`,`oef_applet_command`,`oef_fill_option`,`oef_answer_option1`...,
    (for reuse applet options or embed options for example, if one wants to use the anstype several
    times in the same html page, it is recommanded to use `oef_answer_option$i` indexed by the
    answer's number).

If you use an external software, use the variable `ans_require` (best if there is a version number).

Add the help in `scripts/help/anstype` and `scripts/help/anstype.$lang` and in the list
`help/$lang/reply.phtml`.
