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


let instructions = {
    type: SoundBoardTrial,
    stimulus: `
<div style="text-align: left; font-size: .8em;">欢迎参加这个实验。</div>
<div style="text-align: left; font-size: .8em;">
游戏由你主导。游戏开始时，你会看到图1，同伴看到的是图2，请你根据自己图中的图形排列，告诉同伴问号处应该出现什么图形，例如，图中黑色方块和粉色三角交替出现，那么接下来出现的可能是黑色方块，你可以告诉同伴I think we need a black square。同伴就会在她的图中找到黑色方块对应的单词land，并告诉你So we should choose land。你仅有一次机会请你的同伴重复她指的是哪个词。游戏由你语音控制，你需要清晰地说出你们团队的选择，如We choose land。电脑将识别并高亮出你们的答案，如图3。一旦答案被识别，就不能修改，系统会自动跳到下一题。如果没识别成功，请你再说一遍答案。</div>

<div style="display: flex; justify-content: space-around">
<table>
<tr><td>你的屏幕</td></tr>
<tr><td><img src="stimuli/img/ins1.png" style="width:300px"></td><td>图1</td></tr>
<tr><td><img src="stimuli/img/ins3.png" style="width:300px"></td><td>图3</td></tr>
</table>

<table>
<tr><td>同伴的屏幕</td></tr>
<tr><td><img src="stimuli/img/ins2.png" style="width:300px"></td><td>图2</td></tr>
<tr><td><div style="width: 300px; height: 185px"></div></td></tr>
</table>

</div>

<div style="text-align: left; font-size: .8em;">
句子怎么说都行，也没有时间限制。如果有问题，可以用中文问。接下来有三个练习，期间你还是可以提问。练习结束后，游戏正式开始，那时你就要全程用英文了。
</div>
<center style="margin-top: .5em;"> 说 “I am ready” 开始练习。</center>
    </div>
    `,

    first_sound: 'stimuli/wav/Greeting.wav',
    record: false
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


let trial_procedure = {
    type: SoundBoardTrial,
    stimulus: () => {
        let thumbs = uil.randomization.randomShuffle(
            jsPsych.timelineVariable('thumbnails')
        );
        let table = null; 
        if (typeof thumbs[0] === "string") {
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
    delayed_sound: () => uil.randomization.randomShuffle(DELAYED_AUDIO).find(x => !x.played),
    hesitant_sound: () => uil.randomization.randomShuffle(HESITANT_AUDIO).find(x => !x.played),
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
