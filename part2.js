
let P2Instruction = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div class="instruction">
        <h1>${instruction_title_p2}</h1>
        <p>${instruction_text_p2}</p>
    </div>
    <div>
        <table style="margin:auto;">
            <tr>
                <td>pic 1</td>
                <td>pic 2</td>
            </tr>
            <tr>
                <td><image src="stimuli/img/instruction_a_0.png"
                           class="instruction1"
                           alt="Oops picture not found"/>
                </td>
                <td><image src="stimuli/img/instruction_aa_0.png"
                           class="instruction1"
                           alt="Oops picture not found"/>
                </td>
            </tr>
        </table>
    </div>
    `,
    choices: ["Continue"]
};

let test_intro2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="instruction">This is the end of the practice part.</div>`,
    choices: ["Continue"]
}

let P2Trial = {
    type: SoundBoardTrial,
    stimulus: () => {
        let img = jsPsych.timelineVariable('img');
        let word = jsPsych.timelineVariable('word')
        return `<div><img src="${img}" class="top_pic"></div>
            <div><H1>${word}</H1></div>`;
    },
    space_sound: () => jsPsych.timelineVariable('space_resp'),
    r_sound: () => jsPsych.timelineVariable('r_resp'),
    delayed_sound: () => pop_and_requeue_stimulus(DELAYED_AUDIO),
    hesitant_sound: () => pop_and_requeue_stimulus(HESITANT_AUDIO),
    reminder_sound: () => pop_and_requeue_stimulus(REMINDER_AUDIO),
    end_delay: 300,
    select_by_mouse: false,
    selection_ends_trials: false,
    on_finish: function(data) {
        data.id = jsPsych.timelineVariable('id');
    }
}

let AudioFeedback = {
    type: jsPsychAudioKeyboardResponse,
    stimulus : function getFeedbackStimulus() {
        return jsPsych.timelineVariable("click");
    },
    trial_ends_after_audio: true
}

let DuoPartTimeline = {
    timeline : [P2Trial, AudioFeedback],
    timeline_variables: P2_LIST,
}

function getPart2Procedure() {
    DuoPartTimeline.timeline_variables = getList(2);
    
    let PracticeTimeline = {
        timeline: [P2Trial, AudioFeedback],
        timeline_variables: P2_PRACTICE_LIST,
    }
    
    let timeline = [
        P2Instruction,
        PracticeTimeline,
        test_intro2,
        DuoPartTimeline
    ];
    return timeline
}
