<template>
    <div class="quiz-container">
        <div class="container_1">
            <div>
                <p class="title">{{ quiz[quizStep].question }}</p>
                <div v-if="quizStep === 7">
                    <img src="/images/quiz/roles_1.svg" alt="roles_1" class="roles_first" />
                    <img src="/images/quiz/roles_2.svg" alt="roles_2" class="roles_second" />
                </div>
                <div v-if="quizStep !== 7">
                    <div v-for="text in quiz[quizStep].answers" :key="text" class="radio-element">
                        <RadioButton :title="text" @click="handleChange(text)" :active="!!quizANSREW.filter((t) => t.value === text).length" />
                    </div>
                </div>

                <div v-if="quizStep === 7" class="lng_wrap">
                    <div v-for="lng in quiz[quizStep].answers" :key="lng">
                        <p class="lng_item" @click="handleSelect(lng)" :class="{ active: quizANSREW[quizStep - 1].value.some((t) => t === lng) }">+ {{ lng }}</p>
                    </div>
                    <div class="divider" />
                </div>

                <div v-if="quizStep === 8">
                    <div class="form-element">
                        <p class="label">Email</p>
                        <InputComponent :modelValue="email" @update:modelValue="handleFieldChange('email', $event)" id="email" name="email" placeholder="Enter your email" :errorMessage="emailError" />
                    </div>

                    <div class="form-element">
                        <p class="label">Company Name</p>
                        <InputComponent :modelValue="company_name" @update:modelValue="handleFieldChange('company_name', $event)" id="company_name" name="company_name" placeholder="Enter your company name" :errorMessage="companyNameError" />
                    </div>

                    <div class="form-element">
                        <p class="label">Contact Name</p>
                        <InputComponent :modelValue="contact_name" @update:modelValue="handleFieldChange('contact_name', $event)" id="contact_name" name="contact_name" placeholder="Enter your contact name" :errorMessage="contactNameError" />
                    </div>

                    <div v-if="is_sent" :class="{ blocked: is_blocked }" class="contact-form__frame_2">
                        <vLottiePlayer v-if="is_done" class="contact-form__frame_2__image" name="reliabilityDesktopAnim" loop renderer="svg" :animationData="require('../assets/animation/rocket_launch.json')" />
                        <div v-if="is_done" class="header-1">Your message<br />has been sent</div>
                    </div>
                </div>
            </div>
            <div class="btn_wraper">
                <button class="outline" @click="this.prevStep()">back</button>
                <button class="default" :class="{ send_button: quizStep === 8 }" @click="quizStep === 8 ? this.validateForm() : this.nextStep()">{{ quizStep === 8 ? "send request" : "next" }}</button>
            </div>
        </div>
        <div class="container_2" v-if="quizStep !== 7">
            <div class="logo">
                <router-link :to="{ name: 'Home' }">
                    <inline-svg :src="require('@/assets/icons/logo.svg')" fill="#FFFFFF" />
                </router-link>
            </div>
            <div class="trust">
                <inline-svg :src="require('@/assets/illustrations/quiz-trust.svg')" />
            </div>
            <div class="trusted_container">
                <p class="trusted_by">Trusted by</p>
                <img src="/images/quiz/test.svg" />
            </div>
        </div>
    </div>
</template>

<script>
import RadioButton from "../components/RadioButton.vue";
import InputComponent from "../components/contact/InputComponent.vue";
// import axios from "axios";

export default {
    components: {
        RadioButton,
        InputComponent,
    },
    methods: {
        handleFieldChange(name, value) {
            this[name] = value;
        },

        validateForm() {
            let emailRegEx = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$', "i");

            this.emailError = !emailRegEx.test(this.email) ? "Please, enter your correct email" : null;
            this.companyNameError = this.company_name === "" ? "Please, enter your company name" : null;
            this.contactNameError = this.contact_name === "" ? "Please, enter your contact name" : null;

            if (this.emailError === null && this.companyNameError === null && this.contactNameError === null) {
                this.sendForm();
            }
        },

        sendForm() {
            this.is_sent = true;
            this.is_blocked = true;

            // axios({
            //     method: "POST",
            //     // url: "/contact-us",
            //     data: {
            //         name: this.name,
            //         email: this.email,
            //         englishLevel: this.englishLevel,
            //         file: this.file,
            //     },
            // }).then(() => {
            //     this.name = "";
            //     this.email = "";
            //     this.project = "";
            //     this.englishLevel = "";
            //     this.file = "";

            //     this.is_blocked = false;
            //     this.is_done = true;

            //     setTimeout(() => {
            //         this.is_sent = false;
            //         this.is_done = false;

            //         this.$router.push({ name: "Home" });
            //     }, 5000);
            // });
        },

        handleChange(emit) {
            this.quizANSREW = this.quizANSREW.map((r) => (r.step === this.quizStep ? { ...r, value: emit } : r));
        },

        handleSelect(emit) {
            let currentQuizItem = this.quizANSREW[this.quizStep - 1];

            const isExists = currentQuizItem.value.some((lng) => lng === emit);
            if (isExists) {
                this.quizANSREW[this.quizStep - 1] = { step: this.quizStep, value: currentQuizItem.value.filter((lng) => lng !== emit) };
            } else {
                this.quizANSREW[this.quizStep - 1] = { step: this.quizStep, value: [...currentQuizItem.value, emit] };
            }
        },

        nextStep() {
            if (this.quizStep < 9) {
                this.quizStep++;
            }
        },

        prevStep() {
            if (this.quizStep > 1) {
                this.quizStep--;
            } else {
                this.$router.push({ name: "Home" });
            }
        },
    },

    data: () => ({
        email: "",
        emailError: null,
        company_name: "",
        companyNameError: null,
        contact_name: "",
        contactNameError: null,

        is_blocked: false,
        is_sent: false,
        is_done: false,
        quizStep: 1,
        quizANSREW: [
            { step: 1, value: "Full team" },
            {
                step: 2,
                value: "Developer (Software Developer, Data Scientists, DevOps and QA)",
            },
            { step: 3, value: "Less than 10" },
            { step: 4, value: "New idea or project" },
            { step: 5, value: "I have a rough idea of what I want to build" },
            { step: 6, value: "Less than 1 month" },
            { step: 7, value: ["Javascript", "React"] },
        ],
        quiz: {
            1: {
                question: "Do need to hire a full team or an individual contributor?",
                answers: ["Full team", "Individual contributor"],
            },
            2: {
                question: "What role(s) would you like to hire?",
                answers: ["Developer (Software Developer, Data Scientists, DevOps and QA)", "Designers (Web, Mobile, UI/UX, Branding, Illustration)", "Project Managers", "Product Managers"],
            },
            3: {
                question: "How many people are employed at your company?",
                answers: ["Less than 10", "11-50", "51-200", "201-1000", "More than 1000"],
            },
            4: {
                question: "What type of project are you hiring for?",
                answers: ["New idea or project", "Existing project that needs more resources", "I am just exploring my options for the future"],
            },
            5: {
                question: "Do you have product requirements ready?",
                answers: ["I have a rough idea of what I want to build", "I have a clear idea of what I want to build, but haven’t fully documented it yet", "I have written documentation and wireframes"],
            },
            6: {
                question: "how long do you need the developer or team?",
                answers: ["Less than 1 month", "1 to 6 months", "6 to 12 months", "Longer than 12 months"],
            },
            7: {
                question: "What roles do you need? (You can select multiple)",
                answers: ["Javascript", "React", "ReactNative", "CSS", "HTML", "Python", "Angular", "NodeJS", "Vue", "PHP", "Swift", "Kotlin", "GraphQL", "Flutter", "Database Experience", "Big Data", "Data Science", "Design", "Project Manager", "Product Manager", "Blockchain Developer", "Machine Learning", "Another Technology"],
            },
            8: { question: "Great! Now let’s staff your team." },
        },
    }),
};
</script>

<style lang="scss" scoped>
body,
html {
    margin: 0;
    padding: 0;
}

* {
    box-sizing: border-box;
}

.quiz-container {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1440px) {
        flex-direction: column;
    }
}

.form-element {
    margin-bottom: 30px;
    display: flex;
    gap: 20px;

    .input-item {
        max-width: 360px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .input-item {
            max-width: initial;
        }
    }
}

.send_button {
    @media screen and (max-width: 768px) {
        padding: 20px !important;
    }
}

.label {
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    text-align: left;
    min-width: fit-content;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
}

.roles_first {
    position: absolute;
    top: 48px;
    right: 270px;

    @media screen and (max-width: 1440px) {
        display: none;
    }
}

.roles_second {
    position: absolute;
    top: 181px;
    right: 72px;

    @media screen and (max-width: 1440px) {
        display: none;
    }
}

.lng_wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media screen and (max-width: 1440px) {
        gap: 16px;
        margin-bottom: 120px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
    }

    @media screen and (max-width: 375px) {
        gap: 8px;
    }
}

.divider {
    width: 100%;
    margin-top: 36px;
    margin-bottom: 40px;
    height: 1px;
    background-color: #1e1f21;

    @media screen and (max-width: 1440px) {
        display: none;
    }
}

.lng_item {
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    color: #1e1f21;
    border: 1px solid #1e1f21;
    padding: 10px 26px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s ease;

    &.active {
        color: #12e2b0;
        background-color: #1e1f21;
    }

    @media screen and (max-width: 1440px) {
        font-size: 24px;
        padding: 10px 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
        padding: 8px 12px;
    }
}

.radio-element {
    margin-bottom: 30px;
}

.container_1 {
    padding-left: 120px;
    padding-top: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1440px) {
        padding: 80px 30px;
        width: 100%;
        height: auto;
        min-height: 860px;
    }

    @media screen and (max-width: 768px) {
        padding: 80px 20px;
    }
}

.container_2 {
    background-color: #1e1f21;
    padding: 60px 70px 100px 120px;
    width: 100vw;
    height: 100vh;

    .trust {
        padding: 54px 50px 100px 0px;
    }

    .logo {
        text-align: end;
    }

    .trusted_container {
        margin-right: 50px;

        .trusted_by {
            color: #ffffff;
            font-weight: 700;
            font-size: 18px;
            line-height: 140%;
            margin-bottom: 45px;
        }
    }

    @media screen and (max-width: 1440px) {
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        flex-direction: column;

        .trust {
            & > svg {
                width: 284px;
                height: 288px;
            }

            margin-top: 30px;
            margin-bottom: 60px;
            padding: 0px;
        }

        .logo {
            text-align: center;
        }

        .trusted_container {
            margin: 0px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 80px 30px;
    }

    @media screen and (max-width: 375px) {
        .trust {
            & > svg {
                width: 200px;
                height: 250px;
            }
        }

        .trusted_container {
            & > img {
                max-width: 100%;
            }
        }
    }
}

.title {
    font-weight: 900;
    font-size: 48px;
    line-height: 140%;
    text-transform: uppercase;
    color: #1e1f21;
    text-align: left;
    max-width: 610px;
    margin-bottom: 50px;

    @media screen and (max-width: 1440px) {
        max-width: initial;
        font-size: 46px;
    }

    @media screen and (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 26px;
    }

    @media screen and (max-width: 375px) {
        font-size: 24px;
    }
}

button {
    outline: none;
}

.btn_wraper {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 375px) {
        flex-direction: column;
        width: 100%;
        gap: 15px;
    }

    .default,
    .outline {
        padding: 28px 100px;
        border-radius: 54px;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover {
            background-color: #1e1f21;
            color: #fff;
        }

        @media screen and (max-width: 768px) {
            padding: 20px 40px;
        }

        @media screen and (max-width: 375px) {
            width: 100%;
        }
    }

    .default {
        background-color: #12e2b0;
    }

    .outline {
        background-color: transparent;
        border: 1px solid #1e1f21;
    }
}

.contact-form {
    &__frame_2 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        z-index: 2;
        transition: background-color 0.2s;

        &.blocked {
            background-color: rgba(255, 255, 255, 0.8);
        }

        &__image {
            width: 290px !important;
            height: 290px !important;
        }
    }
}
</style>
