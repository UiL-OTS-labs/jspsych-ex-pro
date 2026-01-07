const BUTTONS = ['1', '2', '3', '4', 'ArrowRight', ' ', 'r', 'g', 'p', 'l'];

let recorder;

class InitAudio {
    static info = {

    }

    constructor(jsPsych) {
        this.jsPsych = jsPsych;
    }

    trial(display_element, trial) {
        const promise = navigator.mediaDevices.getUserMedia({ audio: {
            noiseSupression: false,
            echoCancellation: false
        }, video: false});

        promise.then(stream => {
            this.audioContext = new AudioContext();
            let inputPoint = this.audioContext.createGain();
            let audioInput = this.audioContext.createMediaStreamSource(stream);
            audioInput.connect(inputPoint);

            recorder = new Recorder(inputPoint);
            this.jsPsych.finishTrial();
        });
    }
}

class SoundBoardTrial {
    static info = {
        name: "sound-board-trial",
        parameters: {
            stimulus: {
                type: jsPsychModule.ParameterType.HTML_STRING,
                default: undefined
            },
            space_sound: {
                type: jsPsychModule.ParameterType.STRING,
                default: undefined
            },
            r_sound: {
                type: jsPsychModule.ParameterType.STRING,
                default: null
            },
            delayed_sound: {
                type: jsPsychModule.ParameterType.STRING,
                default: null
            },
            hesitant_sound: {
                type: jsPsychModule.ParameterType.STRING,
                default: null
            },
            reminder_sound: {
                type: jsPsychModule.ParameterType.STRING,
                default: null
            },
            end_delay: {
                type: jsPsychModule.ParameterType.INT,
                default: 0
            },
            record: {
                type: jsPsychModule.ParameterType.BOOLEAN,
                default: true
            },
            select_by_mouse: { // Select class by mouse clicks instead of keyboard
                type: jsPsychModule.ParameterType.BOOLEAN,
                default: false
            },
            selection_ends_trials: { // a selection terminates trial instead of forward arrow
                type: jsPsychModule.ParameterType.BOOLEAN,
                default: false
            }
        }
    }

    constructor(jsPsych) {
        this.jsPsych = jsPsych;
        this.playing = false;
    }

    playSound(name, indicator) {
        if (this.playing) return;
        let audio = new Audio(name);
        audio.addEventListener('ended', () => {this.playing = false});
        this.playing = true;
        audio.play();

        this.prepareIndicator(audio, indicator);
    }

    trial(display_element, trial) {
        let indicator = document.createElement('img');
        indicator.style.opacity = 0;
        indicator.style.position = 'fixed';
        indicator.style.bottom = '20px';
        indicator.style.left = '50%';
        indicator.style.transform = 'translateX(-50%)';
        indicator.src = 'plugins/mic.png';

        let after_response = (info) => {
            switch(info.key) {
            case '1':
                highlightWord(0);
                break;
            case '2':
                highlightWord(1);
                break;
            case '3':
                highlightWord(2);
                break;
            case '4':
                highlightWord(3);
                break;
            case ' ':
                if (trial.space_sound) this.playSound(trial.space_sound, indicator);
                break;
            case 'r':
                if (trial.r_sound) this.playSound(trial.r_sound, indicator);
                break;
            case 'g':
                if (trial.delayed_sound) {
                    this.playSound(trial.delayed_sound, indicator);
                }
                break;
            case 'p':
                if (trial.hesitant_sound) {
                    this.playSound(trial.hesitant_sound, indicator);
                }
                break;
            case 'l':
                if (trial.reminder_sound) {
                    this.playSound(trial.hesitant_sound, indicator);
                }
                break;
            case 'arrowright':
                end_trial();
                break;
            }
        };

        let keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: BUTTONS,
            persist: true,
            allow_held_key: false,
        });

        let end_trial = () => {
            display_element.innerHTML = "";
            this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            if (!trial.record) {
                this.jsPsych.finishTrial({});
                return;
            }

            setTimeout(() => {
                recorder.stop();
                recorder.exportWAV(wav => {
                    const reader = new FileReader();
                    reader.addEventListener("load", () => {
                        const base64 = reader.result.split(",")[1];
                        this.jsPsych.finishTrial({audio: base64});
                    });
                    reader.readAsDataURL(wav);
                });
            }, trial.end_delay);
        };

        let highlightWord = (idx) => {
            let highlighted = display_element.querySelector('.word.highlight');
            if (highlighted) return;

            let target = display_element.querySelectorAll('.word')[idx];
            if (target) target.classList.add('highlight');
            if (trial.selection_ends_trials) {
                end_trial();
            }
        };

        display_element.innerHTML = trial.stimulus;
        display_element.append(indicator);

        if (trial.record) {
            recorder.clear();
            recorder.record();
        }

        if (trial.select_by_mouse) {
            let words = display_element.querySelectorAll('.word')
            words.forEach(
                (element, index) => {
                element.customIndex = index;
                element.addEventListener("click", (element) => {
                    highlightWord(element.currentTarget.customIndex);
                });
            });
        }
    }

    prepareIndicator(audio, indicator) {
        indicator.style.opacity = 1;
        audio.addEventListener('ended', () => {
            indicator.style.opacity = 0;
        });
    }
}
