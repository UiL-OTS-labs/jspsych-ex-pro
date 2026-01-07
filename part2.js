
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
    let timeline = [
        DuoPartTimeline
    ]
    return timeline
}
