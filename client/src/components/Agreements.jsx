import React from 'react';

<div className="Agreements">
<h1>"Hola<code/> Commitment Agreement"</h1>
<p>"Hola<code/>is an intensive, immersive program that requires a substantial investment of your time and resources, as well as the time and resources of Hola<code/> staff. As you enter the hola<code/> program, we make a commitment to you that we will provide you with 12 hours of training a day."</p>

<div class=phrasebox>"Desire is the key to motivation, but it’s determination and commitment to an unrelenting pursuit of your goal – a commitment to excellence – that will enable you to attain the success you seek.” –Mario Andretti"</div>
<p>"By joining hola<code/> program, you are agreeing to commit to the following:"</p>
<ol>
<li>"I pledge to be honest with myself, my peers, my instructors, and other Hola<code/> staff 100% of the time."</li>
<li>"I am able to devote 12 hours per day, 6 days per week to the Hola<code/> program for the full 5 months of the program."</li>
<li>"I commit to attending ALL classroom lectures, group project meetings, co-working sessions, study groups and other events during the 5 months of the Hola<code/> program. I am aware that with the completion with this commitment I am able to obtain 100% of the weekly stipend."</li>
<li>"I will NOT work any full-time, part-time, intern, or freelance job and I will NOT participate in any volunteer work as long as it will not interfere with attendance and concentration during the bootcamp."</li>
<li>"I will have NO external education commitments during the Hola&lt<code/> program. This means that I will not be enrolled in any university classes, language classes, or vocational training programs for the full 5 months of the Hola<code/> program."</li>
<li>"If there are unforeseen personal commitments (like family emergencies), this shall be notified and discussed with the Students' Success Counsellor, in order to agree on the attendance of such event.'" </li>
<li>"I understand that excessive social media use (Facebook, Instagram, WhatsApp, snapchat, etc.) during the hola<code/> program will cause my work to suffer considerably and will be grounds for further discussion with the Students' Success Counsellor."</li>
<li>"I will make Hola<code/>my SINGLE POINT OF FOCUS and devote 100% of my energies to the program."</li>
<li>"I understand that the Hola<code/> program is taught entirely in ENGLISH. I affirm that I have good English language Comprehension. (That is, I affirm that I have been able to read this form without the use of a translator or any dictionary, I am able to watch English language movies or television without subtitles, and I can read complex English language websites without the use if a translator or dictionary.)"</li>
<li>"Upon concluding the program and obtaining a job in tech, I commit to pay back my tuition understanding that I'll be paying it forward for another person to be able to join Hola<code/> with all the benefits and support I was able to obtain."</li>
</ol>
  <Radio checked readOnly>
    Radio
  </Radio>
  <FormGroup>
    <Radio name="agreement">
     "I agree to this commitments"
   </Radio>{' '}
   <Radio name="I am unwilling to make this commitment" inline>
     2
    </Radio>{' '}
 </FormGroup>
  <button onClick={this.add}>Submit</button>
export default agreements.jsx

//missing on clickHandler for submit button
//radio button to pick answer (onChange)
