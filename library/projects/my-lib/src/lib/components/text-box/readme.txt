============ Text Box Component Explain ============

++ Validation Message ++ 
________________________

\* Validation Message အား အောက်ပါအတိုင်း Input 6 မျိုးတောင်းထားပါသည်။ Form Control တွင် ဖြည့်ထားသော
validator အတိုင်း validation Message input ဖြည့်ပေးရန်လိုအပ်ပြီး မဖြည့်ပါက default သက်မှတ်ထားသည့် value
အတိုင်း ဖော်ပြပါမည် */

validateRequiredMessage
validateMinLengthMessage
validateMaxLengthMessage
validateEmailMessage
validatePatternMessage
validateCustomMessage

\* Validate Custom Message သည် validate Rule တွင် custom ရေးသည့်အခါ ပြသနိုင်ရန်ဖြစ်ပါသည်။ */

-------------------------------------------------------------------------------------------------------

++ style ++ 
___________

\* Application Folder ၏ Root Style တွင် lib ၏ text box ကို Application တစ်ခုလုံးစာ uniform ဖြစ်စေရန်
သတ်မှတ်ပေးနိုင်သည့် default class name များဖြစ်ပါသည်။ */

.lib_text_box_parent <= text box တစ်ခုလုံးကို အုပ်ထားသည့် div ကိုပြင်ရန် class name ဖြစ်ပါသည်
.lib_text_box_label  <= text box label ကိုပြင်ရန် class name ဖြစ်ပါသည်
.lib_text_box_input  <= text box input ကိုပြင်ရန် class name ဖြစ်ပါသည်
.lib_text_box_icon   <= text box တွင် icon ထည့်ရန်လိုအပ်ပါက css တွင် content ဖြင့် ပေးနိုင်ရန်၊ default value မရှိပါ။
.lib_text_box_error  <= text box error ကိုပြင်ရန် class name ဖြစ်ပါသည်

\* Text Box အား Application တစ်ခုလုံးစာ မပြင်ချင်ဘဲ တစ်နေရာစာအတွက်သာပြင်ခြင်ရင် selector ရှိ အောက်ပါ input
များတွင် class name အား string value အနေဖြင့်ထည့်ပေးနိုင်ပါသည်။ */

[textBoxParentDiv] = 'your_class'
[textBoxLabelStyle] = 'your_class'
[textBoxInputStyle] = 'your_class'
[textBoxErrorMessageStyle] = 'your_class'

-------------------------------------------------------------------------------------------------------

++ Data Model ++ 
________________

label       <= string value (can used with translate pipe) [eg., [label]="translate.json | translate"]
placeHolder <= string value (can used with translate pipe) 
control     <= Form Control Value
valueChange <= Emit String Value
isReadOnly  <= boolen value (Text box will readOnly if ture)
isDisable   <= boolen value (Text box will disable if ture)
*Note => isDisable သည် control input ရှိမှသာ data insert လုပ်မည်ဖြစ်သဖြင့် seletor တွင် control input
အောက်တွင်သာအလုပ်လုပ်ပါမည်။

onSubmitted  <= boolen value (submit နှိပ်သည့်အခါ true value ထည့်ပေးမှသာ validate message ကိုပြပါမည်။)
*Note => onSubmitted value false မဟုတ်ပါက value ဖြည့်သည့်အခါတိုင်း validate fail ပါက message ပြပါမည်။
isReadOnly and isDisable တစ်ခုခု true ဖြစ်နေပါကလည်း ထို input အတွက် validate message မပြပါ။

