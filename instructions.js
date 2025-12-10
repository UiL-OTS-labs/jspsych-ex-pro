/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */


let instruction_title = "Instructions";

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
