let prac_items = [
    {
        type: "practice_exposure",
        id: "practice_1_exp",
        img: "practice_1_exp_0.png",
        thumbnails: [
            "practice_1_exp_1.png",
            "practice_1_exp_2.png",
            "practice_1_exp_3.png",
            "practice_1_exp_4.png"
        ],
        space_resp: "practice_1_exp_1st.wav",
        r_resp: "practice_1_exp_2nd.wav",
        click: ""
    },
    {
        type: "practice_production",
        id: "practice_1_pro",
        img: "practice_1_pro_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "practice_1_pro_1st.wav",
        r_resp: "practice_1_pro_2nd.wav",
        click: ""
    },
    {
        type: "practice_exposure",
        id: "practice_2_exp",
        img: "practice_2_exp_0.png",
        thumbnails: [
            "practice_2_exp_1.png",
            "practice_2_exp_2.png",
            "practice_2_exp_3.png",
            "practice_2_exp_4.png"
        ],
        space_resp: "practice_2_exp_1st.wav",
        r_resp: "practice_2_exp_2nd.wav",
        click: ""
    },
    {
        type: "practice_production",
        id: "practice_2_pro",
        img: "practice_2_pro_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "practice_2_pro_1st.wav",
        r_resp: "practice_2_pro_2nd.wav",
        click: ""
    }
]
let test_items = [
    {
        type: "exposure",
        id: "throw_1a_exp",
        img: "throw_1a_exp_0.png",
        thumbnails: [
            "throw_1a_exp_1.png",
            "throw_1a_exp_2.png",
            "throw_1a_exp_3.png",
            "throw_1a_exp_4.png"
        ],
        space_resp: "throw_1a_exp_1st.wav",
        r_resp: "throw_1a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "throw_1b_exp",
        img: "throw_1b_exp_0.png",
        thumbnails: [
            "throw_1b_exp_1.png",
            "throw_1b_exp_2.png",
            "throw_1b_exp_3.png",
            "throw_1b_exp_4.png"
        ],
        space_resp: "throw_1b_exp_1st.wav",
        r_resp: "throw_1b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "throw_1c_exp",
        img: "throw_1c_exp_0.png",
        thumbnails: [
            "throw_1c_exp_1.png",
            "throw_1c_exp_2.png",
            "throw_1c_exp_3.png",
            "throw_1c_exp_4.png"
        ],
        space_resp: "throw_1c_exp_1st.wav",
        r_resp: "throw_1c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "throw_2a_exp",
        img: "throw_2a_exp_0.png",
        thumbnails: [
            "throw_2a_exp_1.png",
            "throw_2a_exp_2.png",
            "throw_2a_exp_3.png",
            "throw_2a_exp_4.png"
        ],
        space_resp: "throw_2a_exp_1st.wav",
        r_resp: "throw_2a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "throw_2b_exp",
        img: "throw_2b_exp_0.png",
        thumbnails: [
            "throw_2b_exp_1.png",
            "throw_2b_exp_2.png",
            "throw_2b_exp_3.png",
            "throw_2b_exp_4.png"
        ],
        space_resp: "throw_2b_exp_1st.wav",
        r_resp: "throw_2b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "throw_2c_exp",
        img: "throw_2c_exp_0.png",
        thumbnails: [
            "throw_2c_exp_1.png",
            "throw_2c_exp_2.png",
            "throw_2c_exp_3.png",
            "throw_2c_exp_4.png"
        ],
        space_resp: "throw_2c_exp_1st.wav",
        r_resp: "throw_2c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cut_1a_exp",
        img: "cut_1a_exp_0.png",
        thumbnails: [
            "cut_1a_exp_1.png",
            "cut_1a_exp_2.png",
            "cut_1a_exp_3.png",
            "cut_1a_exp_4.png"
        ],
        space_resp: "cut_1a_exp_1st.wav",
        r_resp: "cut_1a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cut_1b_exp",
        img: "cut_1b_exp_0.png",
        thumbnails: [
            "cut_1b_exp_1.png",
            "cut_1b_exp_2.png",
            "cut_1b_exp_3.png",
            "cut_1b_exp_4.png"
        ],
        space_resp: "cut_1b_exp_1st.wav",
        r_resp: "cut_1b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cut_1c_exp",
        img: "cut_1c_exp_0.png",
        thumbnails: [
            "cut_1c_exp_1.png",
            "cut_1c_exp_2.png",
            "cut_1c_exp_3.png",
            "cut_1c_exp_4.png"
        ],
        space_resp: "cut_1c_exp_1st.wav",
        r_resp: "cut_1c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cut_2a_exp",
        img: "cut_2a_exp_0.png",
        thumbnails: [
            "cut_2a_exp_1.png",
            "cut_2a_exp_2.png",
            "cut_2a_exp_3.png",
            "cut_2a_exp_4.png"
        ],
        space_resp: "cut_2a_exp_1st.wav",
        r_resp: "cut_2a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cut_2b_exp",
        img: "cut_2b_exp_0.png",
        thumbnails: [
            "cut_2b_exp_1.png",
            "cut_2b_exp_2.png",
            "cut_2b_exp_3.png",
            "cut_2b_exp_4.png"
        ],
        space_resp: "cut_2b_exp_1st.wav",
        r_resp: "cut_2b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cut_2c_exp",
        img: "cut_2c_exp_0.png",
        thumbnails: [
            "cut_2c_exp_1.png",
            "cut_2c_exp_2.png",
            "cut_2c_exp_3.png",
            "cut_2c_exp_4.png"
        ],
        space_resp: "cut_2c_exp_1st.wav",
        r_resp: "cut_2c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cook_1a_exp",
        img: "cook_1a_exp_0.png",
        thumbnails: [
            "cook_1a_exp_1.png",
            "cook_1a_exp_2.png",
            "cook_1a_exp_3.png",
            "cook_1a_exp_4.png"
        ],
        space_resp: "cook_1a_exp_1st.wav",
        r_resp: "cook_1a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cook_1b_exp",
        img: "cook_1b_exp_0.png",
        thumbnails: [
            "cook_1b_exp_1.png",
            "cook_1b_exp_2.png",
            "cook_1b_exp_3.png",
            "cook_1b_exp_4.png"
        ],
        space_resp: "cook_1b_exp_1st.wav",
        r_resp: "cook_1b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cook_1c_exp",
        img: "cook_1c_exp_0.png",
        thumbnails: [
            "cook_1c_exp_1.png",
            "cook_1c_exp_2.png",
            "cook_1c_exp_3.png",
            "cook_1c_exp_4.png"
        ],
        space_resp: "cook_1c_exp_1st.wav",
        r_resp: "cook_1c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cook_2a_exp",
        img: "cook_2a_exp_0.png",
        thumbnails: [
            "cook_2a_exp_1.png",
            "cook_2a_exp_2.png",
            "cook_2a_exp_3.png",
            "cook_2a_exp_4.png"
        ],
        space_resp: "cook_2a_exp_1st.wav",
        r_resp: "cook_2a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cook_2b_exp",
        img: "cook_2b_exp_0.png",
        thumbnails: [
            "cook_2b_exp_1.png",
            "cook_2b_exp_2.png",
            "cook_2b_exp_3.png",
            "cook_2b_exp_4.png"
        ],
        space_resp: "cook_2b_exp_1st.wav",
        r_resp: "cook_2b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "cook_2c_exp",
        img: "cook_2c_exp_0.png",
        thumbnails: [
            "cook_2c_exp_1.png",
            "cook_2c_exp_2.png",
            "cook_2c_exp_3.png",
            "cook_2c_exp_4.png"
        ],
        space_resp: "cook_2c_exp_1st.wav",
        r_resp: "cook_2c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "wash_1a_exp",
        img: "wash_1a_exp_0.png",
        thumbnails: [
            "wash_1a_exp_1.png",
            "wash_1a_exp_2.png",
            "wash_1a_exp_3.png",
            "wash_1a_exp_4.png"
        ],
        space_resp: "wash_1a_exp_1st.wav",
        r_resp: "wash_1a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "wash_1b_exp",
        img: "wash_1b_exp_0.png",
        thumbnails: [
            "wash_1b_exp_1.png",
            "wash_1b_exp_2.png",
            "wash_1b_exp_3.png",
            "wash_1b_exp_4.png"
        ],
        space_resp: "wash_1b_exp_1st.wav",
        r_resp: "wash_1b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "wash_1c_exp",
        img: "wash_1c_exp_0.png",
        thumbnails: [
            "wash_1c_exp_1.png",
            "wash_1c_exp_2.png",
            "wash_1c_exp_3.png",
            "wash_1c_exp_4.png"
        ],
        space_resp: "wash_1c_exp_1st.wav",
        r_resp: "wash_1c_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "wash_2a_exp",
        img: "wash_2a_exp_0.png",
        thumbnails: [
            "wash_2a_exp_1.png",
            "wash_2a_exp_2.png",
            "wash_2a_exp_3.png",
            "wash_2a_exp_4.png"
        ],
        space_resp: "wash_2a_exp_1st.wav",
        r_resp: "wash_2a_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "wash_2b_exp",
        img: "wash_2b_exp_0.png",
        thumbnails: [
            "wash_2b_exp_1.png",
            "wash_2b_exp_2.png",
            "wash_2b_exp_3.png",
            "wash_2b_exp_4.png"
        ],
        space_resp: "wash_2b_exp_1st.wav",
        r_resp: "wash_2b_exp_2nd.wav",
        click: ""
    },
    {
        type: "exposure",
        id: "wash_2c_exp",
        img: "wash_2c_exp_0.png",
        thumbnails: [
            "wash_2c_exp_1.png",
            "wash_2c_exp_2.png",
            "wash_2c_exp_3.png",
            "wash_2c_exp_4.png"
        ],
        space_resp: "wash_2c_exp_1st.wav",
        r_resp: "wash_2c_exp_2nd.wav",
        click: ""
    },
    {
        type: "production",
        id: "throw_1a_pro",
        img: "throw1.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "throw_1a_pro_1st.wav",
        r_resp: "throw_1a_pro_2nd.wav",
        click: "deatec_a_click.wav"
    },
    {
        type: "production",
        id: "throw_1b_pro",
        img: "throw1.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "throw_1b_pro_1st.wav",
        r_resp: "throw_1b_pro_2nd.wav",
        click: "deatec_b_click.wav"
    },
    {
        type: "production",
        id: "throw_1c_pro",
        img: "throw1.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "throw_1c_pro_1st.wav",
        r_resp: "throw_1c_pro_2nd.wav",
        click: "seapec_a_click.wav"
    },
    {
        type: "production",
        id: "throw_2a_pro",
        img: "throw2.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "throw_2a_pro_1st.wav",
        r_resp: "throw_2a_pro_2nd.wav",
        click: "seapec_b_click.wav"
    },
    {
        type: "production",
        id: "throw_2b_pro",
        img: "throw2.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "throw_2b_pro_1st.wav",
        r_resp: "throw_2b_pro_2nd.wav",
        click: "teakec_a_click.wav"
    },
    {
        type: "production",
        id: "throw_2c_pro",
        img: "throw2.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "throw_2c_pro_1st.wav",
        r_resp: "throw_2c_pro_2nd.wav",
        click: "teakec_b_click.wav"
    },
    {
        type: "production",
        id: "cut_1a_pro",
        img: "cut1.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cut_1a_pro_1st.wav",
        r_resp: "cut_1a_pro_2nd.wav",
        click: "zeatec_a_click.wav"
    },
    {
        type: "production",
        id: "cut_1b_pro",
        img: "cut1.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cut_1b_pro_1st.wav",
        r_resp: "cut_1b_pro_2nd.wav",
        click: "zeatec_b_click.wav"
    },
    {
        type: "production",
        id: "cut_1c_pro",
        img: "cut1.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cut_1c_pro_1st.wav",
        r_resp: "cut_1c_pro_2nd.wav",
        click: "gookec_a_click.wav"
    },
    {
        type: "production",
        id: "cut_2a_pro",
        img: "cut2.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cut_2a_pro_1st.wav",
        r_resp: "cut_2a_pro_2nd.wav",
        click: "gookec_b_click.wav"
    },
    {
        type: "production",
        id: "cut_2b_pro",
        img: "cut2.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cut_2b_pro_1st.wav",
        r_resp: "cut_2b_pro_2nd.wav",
        click: "goopec_a_click.wav"
    },
    {
        type: "production",
        id: "cut_2c_pro",
        img: "cut2.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cut_2c_pro_1st.wav",
        r_resp: "cut_2c_pro_2nd.wav",
        click: "goopec_b_click.wav"
    },
    {
        type: "production",
        id: "cook_1a_pro",
        img: "cook1.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cook_1a_pro_1st.wav",
        r_resp: "cook_1a_pro_2nd.wav",
        click: "koosec_a_click.wav"
    },
    {
        type: "production",
        id: "cook_1b_pro",
        img: "cook1.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cook_1b_pro_1st.wav",
        r_resp: "cook_1b_pro_2nd.wav",
        click: "koosec_b_click.wav"
    },
    {
        type: "production",
        id: "cook_1c_pro",
        img: "cook1.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cook_1c_pro_1st.wav",
        r_resp: "cook_1c_pro_2nd.wav",
        click: "kooshec_a_click.wav"
    },
    {
        type: "production",
        id: "cook_2a_pro",
        img: "cook2.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cook_2a_pro_1st.wav",
        r_resp: "cook_2a_pro_2nd.wav",
        click: "kooshec_b_click.wav"
    },
    {
        type: "production",
        id: "cook_2b_pro",
        img: "cook2.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cook_2b_pro_1st.wav",
        r_resp: "cook_2b_pro_2nd.wav",
        click: "hakec_a_click.wav"
    },
    {
        type: "production",
        id: "cook_2c_pro",
        img: "cook2.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "cook_2c_pro_1st.wav",
        r_resp: "cook_2c_pro_2nd.wav",
        click: "hakec_b_click.wav"
    },
    {
        type: "production",
        id: "wash_1a_pro",
        img: "wash1.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "wash_1a_pro_1st.wav",
        r_resp: "wash_1a_pro_2nd.wav",
        click: "hapec_a_click.wav"
    },
    {
        type: "production",
        id: "wash_1b_pro",
        img: "wash1.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "wash_1b_pro_1st.wav",
        r_resp: "wash_1b_pro_2nd.wav",
        click: "hapec_b_click.wav"
    },
    {
        type: "production",
        id: "wash_1c_pro",
        img: "wash1.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "wash_1c_pro_1st.wav",
        r_resp: "wash_1c_pro_2nd.wav",
        click: "hashec_a_click.wav"
    },
    {
        type: "production",
        id: "wash_2a_pro",
        img: "wash2.1_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "wash_2a_pro_1st.wav",
        r_resp: "wash_2a_pro_2nd.wav",
        click: "hashec_b_click.wav"
    },
    {
        type: "production",
        id: "wash_2b_pro",
        img: "wash2.2_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "wash_2b_pro_1st.wav",
        r_resp: "wash_2b_pro_2nd.wav",
        click: "hathec_a_click.wav"
    },
    {
        type: "production",
        id: "wash_2c_pro",
        img: "wash2.3_p_0.png",
        thumbnails: [
            "",
            "",
            "",
            ""
        ],
        space_resp: "wash_2c_pro_1st.wav",
        r_resp: "wash_2c_pro_2nd.wav",
        click: "hathec_b_click.wav"
    }
]
