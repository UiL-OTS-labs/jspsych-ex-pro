
//////////////
// STIMULI
///////////////

const LISTS = ["list1"];

const FOLDER_WAV = "stimuli/wav/";
const FOLDER_IMG = "stimuli/img/";
const GOODBYE_WAV = 'stimuli/wav/Goodbye.wav';
const GREETING_WAV = 'stimuli/wav/Greeting.wav';


const PRACTICE_LIST = [
    {id: "Practice1", img: "practice 1.png", first: "Practice1_1st.wav", second: "Practice1_2nd.wav",
     thumbnails: ["apple.png", "drill.png", "hammer.png", "lemon.png"]},
    {id: "Practice2", img: "practice 2.png", first: "Practice2_1st.wav", second: "Practice2_2nd.wav",
     thumbnails: [undefined, undefined, undefined, undefined]},
];

const LIST_1 = [
//    {id: "Trial1_pat", img: "1.png", first: "Trial1_pat_1st.wav", second: "Trial1_pat_2nd.wav",
//     thumbnails: ["pat", "wipe", "feak", "beit"]},
//    {id: "Trial2_pad", img: "2.png", first: "Trial2_pad_1st.wav", second: "Trial2_pad_2nd.wav",
//     thumbnails: ["pad", "sun", "hag", "fik"]},
//    {id: "Trial3_pak", img: "3.png", first: "Trial3_pak_1st.wav", second: "Trial3_pak_2nd.wav",
//     thumbnails: ["pak", "thirst", "hat", "nud"]},
//    {id: "Trial4_pag", img: "4.png", first: "Trial4_pag_1st.wav", second: "Trial4_pag_2nd.wav",
//     thumbnails: ["pag", "jot", "book", "feag"]},
//    {id: "Trial5_sat", img: "5.png", first: "Trial5_sat_1st.wav", second: "Trial5_sat_2nd.wav",
//     thumbnails: ["sat", "red", "fit", "tove"]},
//    {id: "Trial6_sad", img: "6.png", first: "Trial6_sad_1st.wav", second: "Trial6_sad_2nd.wav",
//     thumbnails: ["sad", "peat", "zaut", "bed"]},
//    {id: "Trial7_sak", img: "7.png", first: "Trial7_sak_1st.wav", second: "Trial7_sak_2nd.wav",
//     thumbnails: ["sak", "heart", "fead", "jouse"]},
//    {id: "Trial8_sag", img: "8.png", first: "Trial8_sag_1st.wav", second: "Trial8_sag_2nd.wav",
//     thumbnails: ["sag", "fid", "vase", "pik"]},
//    {id: "Trial9_fat", img: "9.png", first: "Trial9_fat_1st.wav", second: "Trial9_fat_2nd.wav",
//     thumbnails: ["fat", "tief", "brug", "road"]},
//    {id: "Trial10_fad", img: "10.png", first: "Trial10_fad_1st.wav", second: "Trial10_fad_2nd.wav",
//     thumbnails: ["fad", "kev", "pig", "dute"]},
//    {id: "Trial11_fak", img: "11.png", first: "Trial11_fak_1st.wav", second: "Trial11_fak_2nd.wav",
//     thumbnails: ["fak", "cat", "seag", "hug"]},
//    {id: "Trial12_fag", img: "12.png", first: "Trial12_fag_1st.wav", second: "Trial12_fag_2nd.wav",
//     thumbnails: ["fag", "sik", "hand", "biut"]},
//    {id: "Trial13_pit", img: "13.png", first: "Trial13_pit_1st.wav", second: "Trial13_pit_2nd.wav",
//     thumbnails: ["pit", "sead", "rud", "milk"]},
//    {id: "Trial14_pid", img: "14.png", first: "Trial14_pid_1st.wav", second: "Trial14_pid_2nd.wav",
//     thumbnails: ["pid", "fouk", "head", "tuck"]},
//    {id: "Trial15_pik", img: "15.png", first: "Trial15_pik_1st.wav", second: "Trial15_pik_2nd.wav",
//     thumbnails: ["pik", "doon", "fish", "jast"]},
//    {id: "Trial16_pig", img: "16.png", first: "Trial16_pig_1st.wav", second: "Trial16_pig_2nd.wav",
//     thumbnails: ["pig", "viok", "houp", "sat"]},
//    {id: "Trial17_sit", img: "17.png", first: "Trial17_sit_1st.wav", second: "Trial17_sit_2nd.wav",
//     thumbnails: ["sit", "twek", "hate", "fag"]},
//    {id: "Trial18_sid", img: "18.png", first: "Trial18_sid_1st.wav", second: "Trial18_sid_2nd.wav",
//     thumbnails: ["sid", "cute", "jisak", "peag"]},
//    {id: "Trial19_sik", img: "19.png", first: "Trial19_sik_1st.wav", second: "Trial19_sik_2nd.wav",
//     thumbnails: ["sik", "feet", "sag", "pout"]},
//    {id: "Trial20_sig", img: "20.png", first: "Trial20_sig_1st.wav", second: "Trial20_sig_2nd.wav",
//     thumbnails: ["sig", "pid", "nise", "kiest"]},
//    {id: "Trial21_fit", img: "21.png", first: "Trial21_fit_1st.wav", second: "Trial21_fit_2nd.wav",
//     thumbnails: ["fit", "pack", "bast", "woik"]},
//    {id: "Trial22_fid", img: "22.png", first: "Trial22_fid_1st.wav", second: "Trial22_fid_2nd.wav",
//     thumbnails: ["fid", "wait", "cask", "boat"]},
//    {id: "Trial23_fik", img: "23.png", first: "Trial23_fik_1st.wav", second: "Trial23_fik_2nd.wav",
//     thumbnails: ["fik", "queste", "frust", "cup"]},
//    {id: "Trial24_fig", img: "24.png", first: "Trial24_fig_1st.wav", second: "Trial24_fig_2nd.wav",
//     thumbnails: ["fig", "dream", "sack", "sery"]},
//    {id: "Trial25_peat", img: "25.png", first: "Trial25_peat_1st.wav", second: "Trial25_peat_2nd.wav",
//     thumbnails: ["peat", "dog", "raist", "fack"]},
//    {id: "Trial26_pead", img: "26.png", first: "Trial26_pead_1st.wav", second: "Trial26_pead_2nd.wav",
//     thumbnails: ["pead", "juice", "hide", "taik"]},
//    {id: "Trial27_peak", img: "27.png", first: "Trial27_peak_1st.wav", second: "Trial27_peak_2nd.wav",
//     thumbnails: ["peak", "meas", "pat", "laut"]},
//    {id: "Trial28_peag", img: "28.png", first: "Trial28_peag_1st.wav", second: "Trial28_peag_2nd.wav",
//     thumbnails: ["peag", "bird", "throve", "gek"]},
//    {id: "Trial29_seat", img: "29.png", first: "Trial29_seat_1st.wav", second: "Trial29_seat_2nd.wav",
//     thumbnails: ["seat", "jouk", "beach", "pik"]},
//    {id: "Trial30_sead", img: "30.png", first: "Trial30_sead_1st.wav", second: "Trial30_sead_2nd.wav",
//     thumbnails: ["sead", "pirth", "hit", "food"]},
//    {id: "Trial31_seak", img: "31.png", first: "Trial31_seak_1st.wav", second: "Trial31_seak_2nd.wav",
//     thumbnails: ["seak", "kast", "kid", "pag"]},
//    {id: "Trial32_seag", img: "32.png", first: "Trial32_seag_1st.wav", second: "Trial32_seag_2nd.wav",
//     thumbnails: ["seag", "fad", "bus", "geote"]},
//    {id: "Trial33_feat", img: "33.png", first: "Trial33_feat_1st.wav", second: "Trial33_feat_2nd.wav",
//     thumbnails: ["feat", "mouth", "sid", "nied"]},
//    {id: "Trial34_fead", img: "34.png", first: "Trial34_fead_1st.wav", second: "Trial34_fead_2nd.wav",
//     thumbnails: ["fead", "pad", "sit", "ceste"]},
//    {id: "Trial35_feak", img: "35.png", first: "Trial35_feak_1st.wav", second: "Trial35_feak_2nd.wav",
//     thumbnails: ["feak", "stuff", "drive", "paask"]},
//    {id: "Trial36_feag", img: "36.png", first: "Trial36_feag_1st.wav", second: "Trial36_feag_2nd.wav",
//     thumbnails: ["feag", "sad", "hoogs", "kopt"]},
//    {id: "Trial37_wealth", img: "37.png", first: "Trial37_wealth_1st.wav", second: "Trial37_wealth_2nd.wav",
//     thumbnails: ["wealth", "map", "sig", "loste"]},
//    {id: "Trial38_thirst", img: "38.png", first: "Trial38_thirst_1st.wav", second: "Trial38_thirst_2nd.wav",
//     thumbnails: ["thirst", "drink", "peak", "net"]},
//    {id: "Trial39_throve", img: "39.png", first: "Trial39_throve_1st.wav", second: "Trial39_throve_2nd.wav",
//     thumbnails: ["throve", "fat", "help", "thist"]},
//    {id: "Trial40_houp", img: "40.png", first: "Trial40_houp_1st.wav", second: "Trial40_houp_2nd.wav",
//     thumbnails: ["houp", "dig", "feat", "bute"]},
//    {id: "Trial41_doon", img: "41.png", first: "Trial41_doon_1st.wav", second: "Trial41_doon_2nd.wav",
//     thumbnails: ["doon", "sleep", "pit", "lasy"]},
//    {id: "Trial42_juice", img: "42.png", first: "Trial42_juice_1st.wav", second: "Trial42_juice_2nd.wav",
//     thumbnails: ["juice", "fig", "top", "cisk"]},
//    {id: "Trial43_tuck", img: "43.png", first: "Trial43_tuck_1st.wav", second: "Trial43_tuck_2nd.wav",
//     thumbnails: ["tuck", "box", "wealth", "mait"]},
//    {id: "Trial44_frust", img: "44.png", first: "Trial44_frust_1st.wav", second: "Trial44_frust_2nd.wav",
//     thumbnails: ["frust", "mix", "seat", "hius"]},
//    {id: "Trial45_stuff", img: "45.png", first: "Trial45_stuff_1st.wav", second: "Trial45_stuff_2nd.wav",
//     thumbnails: ["stuff", "pead", "jam", "leask"]}
];


const DELAYED_AUDIO = [
    {file: 'delayed_01.wav'},
    {file: 'delayed_02.wav'},
    {file: 'delayed_03.wav'},
];

const HESITANT_AUDIO = [
    {file: 'hesitant_01.wav'},
    {file: 'hesitant_02.wav'},
    {file: 'hesitant_03.wav'},
    {file: 'hesitant_04.wav'},
    {file: 'hesitant_05.wav'},
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
    let ret = [];

    ret = ret.concat(_extractObjectItems(PRACTICE_LIST, ["img", "thumbnails"]));
    ret = ret.concat(_extractObjectItems(LIST_1, ["img", "thumbnails"]));

    ret = ret.map( (item) => {
        let temp = FOLDER_IMG + item;
        if (temp.split(".").pop() !== "png") {
            temp += ".png"
        }

        return temp;
    })

    return ret;
}

/**
 * Returns a list containing all the audio stimuli
 *
 * Returns {Array<string>} : An array with the sound files
 */
function getAudioStimuli() {
    let ret = [];

    ret = ret.concat(_extractObjectItems(PRACTICE_LIST, ["first", "second"]));
    ret = ret.concat(_extractObjectItems(LIST_1, ["first", "second"]));
    ret = ret.concat(_extractObjectItems(DELAYED_AUDIO, ["file"]));
    ret = ret.concat(_extractObjectItems(HESITANT_AUDIO, ["file"]));

    ret = ret.map((item) => FOLDER_WAV + item);

    ret.push(GOODBYE_WAV);
    ret.push(GREETING_WAV);

    return ret
}
