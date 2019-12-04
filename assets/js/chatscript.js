var botui = new BotUI('Chatbot');
userinput = document.getElementById("userinputbox");
botui.message.add({
    content: 'Hello!',
})




$(".col-3 input").val("");

$(".input-effect input").focusout(function () {
    if ($(this).val() != "") {
        $(this).addClass("has-content");
    } else {
        $(this).removeClass("has-content");
    }
})

function putHumanMsg(response) {

    botui.message.add({
        content: response,
        delay: 0,
        human: true,
    });
}


function putBotMsg(response) {

    botui.message.add({
        content: response,
        loading: true,
        human: false,
        delay: 1000,
    });
}

function getResponse(userinput) {
    fetch("https://cors-anywhere.herokuapp.com/" + "https://ziva-api-bundle.herokuapp.com/chat/" + userinput)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            putBotMsg(json);
        })
}

async function userSentMsg() {

    input = userinput.value;
    userinput.value = "";
    await putHumanMsg(input);
    await getResponse(input);

}



function startSurvey() {
    botui.message.add({
        content: "You have a survey to take, Do you want to answer now?",
        loading: true,
        human: false,
        delay: 1000,
    }).then(() => {
        return botui.action.button({
            loading: true,
            human: false,
            delay: 1000,
            action: [{
                    text: 'Yes',
                    value: 'yes'
                },
                {
                    text: 'No',
                    value: 'no'
                }
            ]
        })
    }).then((res) => {
        if (res.value == "yes") {
            return botui.message.add({
                content: "Great! Lets start then.",
                loading: true,
                human: false,
                delay: 1000,
            }).then(() => {
                return botui.message.add({
                    content: "Answer the survey by choosing your rating. 1 beeing lowest and 5 beeing highest",
                    loading: true,
                    human: false,
                    delay: 1000,

                }).then(() => {
                    survey()
                });
            })
        } else {
            return botui.message.add({
                content: "Ok then, Next time.",
                loading: true,
                human: false,
                delay: 1000,
            })
        }
    })
}


function commentRate(rate) {

    var output = ""
    if (rate == "1") {
        output = "1 ? ok we will work on it"
    } else if (rate == "2") {
        output = "2, we will do better."

    } else if (rate == "3") {
        output = "3.. ok noted"
    } else if (rate == "4") {
        output = "Good to know!"
    } else if (rate == "5") {
        output = "Awesome!"
    }
    botui.message.add({

        content: output,
        loading: true,
        human: false,
        delay: 1000,
    })
}



function survey() {
    var results = [];
    return botui.message.add({
        content: "How would you rate your work-life balance?",
        loading: true,
        human: false,
        delay: 1000,
    }).then(() => {
        return botui.action.button({
            loading: true,
            human: false,
            delay: 1000,
            action: [{
                    text: '1',
                    value: '1 ? ok we will work on it',
                    rate: '1'
                },
                {
                    text: '2',
                    value: '2, we will do better.',
                    rate: '2'
                },
                {
                    text: '3',
                    value: '3.. ok noted',
                    rate: '3'
                },
                {
                    text: '4',
                    value: '4. good to know!',
                    rate: '4'
                },
                {
                    text: '5',
                    value: '5. Awesome!',
                    rate: '5'
                }
            ]
        })
    }).then((res) => {
        commentRate(res.rate)
        results.push(res.rate)
    }).then(() => {
        return botui.message.add({
            content: "Do you believe you'll be able to reach your full potential here?",
            loading: true,
            human: false,
            delay: 1000,
        }).then(() => {
            return botui.action.button({
                loading: true,
                human: false,
                delay: 1000,
                action: [{
                        text: '1',
                        value: '1 ? ok we will work on it',
                        rate: '1'
                    },
                    {
                        text: '2',
                        value: '2, we will do better.',
                        rate: '2'
                    },
                    {
                        text: '3',
                        value: '3.. ok noted',
                        rate: '3'
                    },
                    {
                        text: '4',
                        value: '4. good to know!',
                        rate: '4'
                    },
                    {
                        text: '5',
                        value: '5. Awesome!',
                        rate: '5'
                    }
                ]
            })
        }).then((res) => {
            commentRate(res.rate)
            results.push(res.rate)
        })
    }).then(() => {
        return botui.message.add({

            content: "you have a clear understanding of your career or promotion path?",
            loading: true,
            human: false,
            delay: 1000,
        }).then(() => {
            return botui.action.button({
                loading: true,
                human: false,
                delay: 1000,
                action: [{
                        text: '1',
                        value: '1 ? ok we will work on it',
                        rate: '1'
                    },
                    {
                        text: '2',
                        value: '2, we will do better.',
                        rate: '2'
                    },
                    {
                        text: '3',
                        value: '3.. ok noted',
                        rate: '3'
                    },
                    {
                        text: '4',
                        value: '4. good to know!',
                        rate: '4'
                    },
                    {
                        text: '5',
                        value: '5. Awesome!',
                        rate: '5'
                    }
                ]
            })
        }).then((res) => {
            commentRate(res.rate)
            results.push(res.rate)
        })
    }).then(() => {
        return botui.message.add({

            content: "Do you believe the leadership team takes your feedback seriously ?",
            loading: true,
            human: false,
            delay: 1000,
        }).then(() => {
            return botui.action.button({
                loading: true,
                human: false,
                delay: 1000,
                action: [{
                        text: '1',
                        value: '1 ? ok we will work on it',
                        rate: '1'
                    },
                    {
                        text: '2',
                        value: '2, we will do better.',
                        rate: '2'
                    },
                    {
                        text: '3',
                        value: '3.. ok noted',
                        rate: '3'
                    },
                    {
                        text: '4',
                        value: '4. good to know!',
                        rate: '4'
                    },
                    {
                        text: '5',
                        value: '5. Awesome!',
                        rate: '5'
                    }
                ]
            })
        }).then((res) => {
            commentRate(res.rate)
            results.push(res.rate)
        })
    }).then(() => {
        return botui.message.add({
            content: "how happy are you at work ?",
            loading: true,
            human: false,
            delay: 1000,
        }).then(() => {
            return botui.action.button({
                loading: true,
                human: false,
                delay: 1000,
                action: [{
                        text: '1',
                        value: '1 ? ok we will work on it',
                        rate: '1'
                    },
                    {
                        text: '2',
                        value: '2, we will do better.',
                        rate: '2'
                    },
                    {
                        text: '3',
                        value: '3.. ok noted',
                        rate: '3'
                    },
                    {
                        text: '4',
                        value: '4. good to know!',
                        rate: '4'
                    },
                    {
                        text: '5',
                        value: '5. Awesome!',
                        rate: '5'
                    }
                ]
            })
        }).then((res) => {
            commentRate(res.rate)
            results.push(res.rate)
        })
    }).then(() => {
        return botui.message.add({
            content: "Thank you for your feedback.",
            loading: true,
            human: false,
            delay: 1000,
        })
    })
}






