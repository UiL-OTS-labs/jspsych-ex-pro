
//////////////
// STIMULI
///////////////

const LISTS = ["list1"];

const FOLDER_WAV = "stimuli/wav/";
const FOLDER_IMG = "stimuli/img/";
const GOODBYE_WAV = 'stimuli/wav/Goodbye.wav';
const GREETING_WAV = 'stimuli/wav/greeting.wav';

function _prepare_images() {
    function prepare_image(row, index, array) {
        function sanitize_image(img_name) {
            let img = img_name
            if (img.split(".").pop() !== "png") {
                img += ".png";
            }
            return `${FOLDER_IMG}${img}`
        }
        row.img = sanitize_image(row.img)
        row.thumbnails.forEach((value, index, array) => {
            if (value === null || value === undefined || value === "")
                return;
            array[index] = sanitize_image(value);
        });
        array[index] = row;
    }

    PRACTICE_LIST.forEach(prepare_image);
    LIST_1.forEach(prepare_image);
}

function _prepare_wavs() {

    function prepare_wav(row, index, array) {

        function sanitize_wav(wav_name) {
            let wav = wav_name;
            if (wav.split(".").pop() !== "wav") {
                wav += ".wav"
            }
            return `${FOLDER_WAV}${wav}`;
        }

        if (row.space_resp!== undefined)
            row.space_resp = sanitize_wav(row.space_resp);
        if (row.r_resp !== undefined)
            row.r_resp = sanitize_wav(row.r_resp);
        if (row.file !== undefined)
            row.file = sanitize_wav(row.file);
        array[index] = row;
    }

    PRACTICE_LIST.forEach(prepare_wav);
    LIST_1.forEach(prepare_wav);
}

function prepare_stimuli() {
    // only do this once.
    if (prepare_stimuli.done === undefined) {
        PRACTICE_LIST = prac_items
        LIST_1 = test_items
        LIST_1 = prepare_test_trials(LIST_1);
        _prepare_images();
        _prepare_wavs();
        prepare_stimuli.done = true;
    }
}

/**
 * Prepares the trials for the test phase.
 *
 * The stimuli are shuffled, then it is made sure that the exposure/production
 * trials are interleaved.
 *
 * @param {Array.<Object>} trials
 */
function prepare_test_trials(trials) {

    trials = uil.randomization.randomShuffle(trials);
    let reordered_trials = [];

    let production = trials.filter((item) => item.type === "production");
    let exposure = trials.filter((item) => item.type === "exposure");

    for (i = 0; i < Math.min(production.length, exposure.length); i++) {
        reordered_trials.push(exposure[i]);
        reordered_trials.push(production[i]);
    }

    return reordered_trials;
}


PRACTICE_LIST = [
];

LIST_1 = [
];


const DELAYED_AUDIO = [
    {file: 'stimuli/wav/delay_1.wav'},
    {file: 'stimuli/wav/delay_2.wav'},
    {file: 'stimuli/wav/delay_3.wav'},
    {file: 'stimuli/wav/delay_4.wav'},
    {file: 'stimuli/wav/delay_5.wav'},
    {file: 'stimuli/wav/delay_6.wav'},
];

const HESITANT_AUDIO = [
    {file: 'stimuli/wav/hesitant_1.wav'},
    {file: 'stimuli/wav/hesitant_2.wav'},
    {file: 'stimuli/wav/hesitant_3.wav'},
    {file: 'stimuli/wav/hesitant_4.wav'},
    {file: 'stimuli/wav/hesitant_5.wav'},
];

const REMINDER_AUDIO= [
    {file: "stimuli/wav/reminder_1.wav"},
    {file: "stimuli/wav/reminder_2.wav"},
    {file: "stimuli/wav/reminder_3.wav"},
    {file: "stimuli/wav/reminder_4.wav"},
    {file: "stimuli/wav/reminder_5.wav"},
    {file: "stimuli/wav/reminder_6.wav"},
    {file: "stimuli/wav/reminder_7.wav"},
    {file: "stimuli/wav/reminder_8.wav"},
    {file: "stimuli/wav/reminder_9.wav"},
    {file: "stimuli/wav/reminder_10.wav"},
    {file: "stimuli/wav/reminder_11.wav"},
    {file: "stimuli/wav/reminder_12.wav"},
];

function _extractObjectItems(items, keys) {
    let array = [];
    items.forEach(
        item => {
            keys.forEach(
                key => {
                    let value = item[key];
                    if (Array.isArray(value)) {
                        value.forEach(
                            array_item => {
                                if (array_item === undefined || array_item === null) { // array_items can be empty
                                    return;
                                }
                                if (typeof array_item !== "string")
                                    throw new Error(
                                        "Expected string or array of strings"
                                    );
                                array.push(array_item);
                            }
                        );
                    }
                    else if (typeof value === "string") {
                        array.push(value);
                    }
                    else {
                        throw new Error(
                            "Unexpected type, expected an array of string or array"
                        );
                    }
                }
            );
        }
    );
    return array
}

/**
 * Returns a list containing all the audio stimuli
 *
 * Returns {Array<string>} : An array with the sound files
 */
function getImgStimuli() {
    prepare_stimuli();
    let ret = PRACTICE_LIST.concat(LIST_1).flatMap( (item) => {
        let array = [item.img];
        item.thumbnails.forEach(
            (thumb) => {
                // When we have thumbnails extract them
                if (thumb !== "") {
                    array.push(thumb);
                }
            }
        );
        return array;
    })
    
    // console.log(`img stims = ${ret}`);

    return ret;
}

/**
 * Returns a list containing all the audio stimuli
 *
 * Returns {Array<string>} : An array with the sound files
 */
function getAudioStimuli() {
    prepare_stimuli();
    let ret = PRACTICE_LIST.concat(LIST_1)
        .concat(DELAYED_AUDIO)
        .concat(HESITANT_AUDIO)
        .concat(REMINDER_AUDIO) 
        .flatMap((item) => {
            let temp = [];
            if (item.space_resp)
                temp.push(item.space_resp);
            if (item.r_resp)
                temp.push(item.r_resp);
            if (item.file)
                temp.push(item.file);
            return temp;
        });

    // ret.push(GOODBYE_WAV);
    ret.push(GREETING_WAV);

    return ret
}
