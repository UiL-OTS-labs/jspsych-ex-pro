/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */


let instruction_title = "Instructions";
let instruction_title_p2 = "Instructions part two";

let instruction_text = `You and your partner will collaborate to play a 
picture-matching game. One of you will see a picture with incomplete information 
(such as pic 1, the missing information is always one of: the subject, the action,
or the object), while the other will see the picture with the complete information
(such as pic 2): A rabbit is burying a vegetable. The person with incomplete
information needs to ask the partner for the missing information: e.g.,
What is the rabbit doing with a vegetable?, and then find the matching picture
from below and click on it. This person can ask the partner to repeat, but just
once. Please always use complete sentences. Click the continue buttons to start the
practice.
`

let instruction_text_p2 = `You and your partner will see either pic 1 or pic 2.
The one sees two options (pic 2) will need to guess the pronunciation and ask the
partner for the matching word so that she can make the choice. For example, the one
making the choice will have to ask “I see a lecon and a deatec. What do you see?” When
she gets the answer I see deatec. She can click on it and move forward. The objects
and words do not exist in real world. (The instructions will be in Chinese)
`


const PRE_TEST_INSTRUCTION =
    "End of the practice part.<br><br>"                 +
    "Click OK to continue with the real task."
    ;

const DEBRIEF_MESSAGE = `
    <h1>Well done!</h1>
    `;


const FEEDBACK_PREAMBLE = `
    <p>The experiment is now complete. <strong>Please do not close this window yet.</strong></p>
    `;

const FEEDBACK_PROMPT = `
    Do you have any further comments or feedback about the experiment? If not, please leave empty
    `;
