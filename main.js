/*
 * This file creates and starts the jsPsych timeline.
 * The sub parts/trials that represent the basic building blocks of the lexical
 * decision are in the file ld_trials.js.
 */

let jsPsych = initJsPsych(
    {
    }
);


let start_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        return "<div class='instruction' >" +
               "<p>Click below to start when you are ready</p></div>";
    },
    choices: [OK_BUTTON_TEXT],
    response_ends_trial: true,
    on_finish : function(data) {
        if (typeof data.rt === "number") {
            data.rt = Math.round(data.rt);
        }
    }
};

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

let instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div class="instruction">
        <h1>${instruction_title}</h1>
        <p>${instruction_text}</p>
    </div>
    <div>
        <table style="margin:auto;">
            <tr>
                <td>pic 1</td>
                <td>pic 2</td>
            </tr>
            <tr>
                <td><image src="stimuli/img/Instruction_0.png" class="instruction1" alt="Oops picture not found"/></td>
                <td><image src="stimuli/img/instruction_partner_0.png" class="instruction1" alt="Oops picture not found"/></td>
            </tr>
        </table>
    </div>
    `,
    choices: ["Continue"]

};

let preload_media = {
    type: jsPsychPreload,
    message: PRELOAD_MSG,
    audio: null, // set in initExperiment
    images: null,  // set in initExperiment
};


let score = Math.ceil(Math.random() * 13 + 85);

let end_screen = {
    type: SoundBoardTrial,
    stimulus: DEBRIEF_MESSAGE + `<div>Score: ${score}</div>`,
    choices: [],
    trial_duration: DEBRIEF_MESSAGE_DURATION,
    on_start : function(data) {
        jsPsych.data.get().localSave(
            'csv',
            'E1S2_PP' + jsPsych.data.dataProperties.ppid.padStart(4, 0) + '.csv'
        );
    },
    first_sound: GOODBYE_WAV,
    record: false
};

/**
 * Pops a stimulus from the front and pushes it to the back
 *
 * The first item of the array will be returned and it will be
 * put on the back again.
 *
 * @param stimuli Array<string> An array of stimuli.
 * @Returns the first stimulus in the array
 */
function pop_and_requeue_stimulus(stimuli) {
    let stimulus = stimuli.shift();
    stimuli.push(stimulus)
    return stimulus;
}

let trial_procedure = {
    type: SoundBoardTrial,
    stimulus: () => {
        let thumbs = uil.randomization.randomShuffle(
            jsPsych.timelineVariable('thumbnails')
        );
        let table = null; 
        if (typeof thumbs[0] === "string" && thumbs[0] !== "") {
            let temp = thumbs.map(
                img => {
                    return `<td><div class="word">
                                <img class="thumbnail" src="${img}"/>
                            </div></td>`;
                }
            ).join('');
            thumbs = temp;
        }
        else {
            thumbs = ""
        }

        if (thumbs) {
            table = `<table style="width:100%;"><tr>${thumbs}</tr></table>`
        }

        let img = jsPsych.timelineVariable('img');
        if (table)
            return `<div><img src="${img}" class="top_pic"></div><div>${table}</div>`;
        else
            return `<div><img src="${img}" class="top_pic"></div>`
    },
    space_sound: () => jsPsych.timelineVariable('space_resp'),
    r_sound: () => jsPsych.timelineVariable('r_resp'),
    delayed_sound: () => pop_and_requeue_stimulus(DELAYED_AUDIO),
    hesitant_sound: () => pop_and_requeue_stimulus(HESITANT_AUDIO),
    reminder_sound: () => pop_and_requeue_stimulus(REMINDER_AUDIO),
    end_delay: 100,
    on_finish: function(data) {
        data.id = jsPsych.timelineVariable('id');
    }
};


let test_intro = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div>This is the end of the practice part.</div>
        <div>Say “I am ready” to start the game.</div>`,
    choices: ["ArrowRight"]
}

jsPsych.pluginAPI.initializeMicrophoneRecorder = function(stream) {
    let recorder = new MediaRecorder(stream);
    this.microphone_recorder = recorder;
};

jsPsych.pluginAPI.getMicrophoneRecorder = function() {
    return this.microphone_recorder;
};

let initialize_microphone = {
    type: InitAudio
};


function initExperiment() {
    //////////////// timeline /////////////////////////////////

    let timeline = [];

    preload_media.audio = getAudioStimuli();
    preload_media.images = getImgStimuli();

    timeline.push(start_screen);
    timeline.push(preload_media);
    timeline.push(initialize_microphone);
    timeline.push(instructions);

    timeline.push({
        timeline: [trial_procedure],
        timeline_variables: PRACTICE_LIST
    });

    timeline.push(test_intro);

    timeline.push({
        timeline: [trial_procedure],
        timeline_variables: LIST_1
    });

    timeline.push(end_screen);

    // Start jsPsych when running on a Desktop or Laptop style pc.
    uil.browser.rejectMobileOrTablet();
    jsPsych.run(timeline);
}


function main() {
    // Make sure you've updated your key in globals.js
    uil.setAccessKey(ACCESS_KEY);
    uil.stopIfExperimentClosed();

    jsPsych.data.addProperties ({
        ppid: prompt('Please enter participant id: '),
    });

    initExperiment();
}
