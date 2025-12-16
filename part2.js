
let RegularTrial = {
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
    end_delay: 300,
    select_by_mouse: true,
    selection_ends_trials: true,
    on_finish: function(data) {
        data.id = jsPsych.timelineVariable('id');
    }
}

let AudioFeedback = {
    stimulus : function getFeedbackStimulus() {

    },
    trial_end_after_audio: true
}


let DuoPartTimeline = {
    timeline = [RegularTrial, AudioFeedback]
    timeline_variables: [] // fill with something useful
}



function getPart2Procedure() {
    let timeline = [
        DuoPartTimeline
    ]
}
