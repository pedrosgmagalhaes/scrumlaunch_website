<template>
    <div class="send-cv-form">
        <div class="form-element">
            <p class="label">name</p>
            <InputComponent :modelValue="name" @update:modelValue="handleFieldChange('name', $event)" id="name" name="name" placeholder="Enter your name here" :errorMessage="nameError" />
        </div>
        <div class="form-element">
            <p class="label">Contact</p>
            <InputComponent :modelValue="email" @update:modelValue="handleFieldChange('email', $event)" id="email" name="email" placeholder="Enter your email here" :errorMessage="emailError" />
        </div>
        <div class="form-element">
            <p class="label">English level</p>
            <CustomSelect :modelValue="englishLevel" @update:modelValue="handleFieldChange('englishLevel', $event)" id="englishLevel" name="englishLevel" label="Select your English level" emptyValueText="Select your English level" :items="englishSelect" :errorMessage="englishLevelError" />
        </div>
        <div class="form-element">
            <p class="label">CV</p>
            <FileInput @file-updated="captureFile($event)" placeholder="Upload your CV" :errorMessage="fileError" :value="file.name" />
        </div>

        <div class="form-btn">
            <button class="btn" @click="validateForm()">Send</button>
        </div>
        <div v-if="is_sent" :class="{ blocked: is_blocked }" class="contact-form__frame_2">
            <vLottiePlayer v-if="is_done" class="contact-form__frame_2__image" name="reliabilityDesktopAnim" loop renderer="svg" :animationData="require('../../assets/animation/rocket_launch.json')" />
            <div v-if="is_done" class="header-1">Your message<br />has been sent</div>
        </div>
    </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
import CustomSelect from "../Select.vue";
import FileInput from "./FileInput.vue";
import axios from "axios";

export default {
    components: {
        InputComponent,
        CustomSelect,
        FileInput,
    },

    methods: {
        captureFile($event) {
            this.file = $event;
        },

        handleFieldChange(name, value) {
            this[name] = value;
        },

        sendForm() {
            this.is_sent = true;
            this.is_blocked = true;

            axios({
                method: "POST",
                // url: "/contact-us",
                data: {
                    name: this.name,
                    email: this.email,
                    englishLevel: this.englishLevel,
                    file: this.file,
                },
            }).then(() => {
                this.name = "";
                this.email = "";
                this.project = "";
                this.englishLevel = "";
                this.file = "";

                this.is_blocked = false;
                this.is_done = true;

                setTimeout(() => {
                    this.is_sent = false;
                    this.is_done = false;
                }, 5000);
            });
        },

        validateForm() {
            let emailRegEx = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$', "i");

            this.nameError = this.name === "" ? "Please, add your name here" : null;
            this.emailError = !emailRegEx.test(this.email) ? "Please, enter your correct email" : null;
            this.englishLevelError = this.englishLevel === "" ? "Please, choose your english level" : null;
            this.fileError = this.file === "" ? "Please, upload your CV" : null;

            if (this.nameError === null && this.emailError === null && this.englishLevel === null && this.fileError === null) {
                this.sendForm();
            }
        },
    },

    data() {
        return {
            englishSelect: ["Basic", "Intermediate", "Advanced"],
            name: "",
            nameError: null,
            email: "",
            emailError: null,
            englishLevel: "",
            englishLevelError: null,
            file: "",
            fileError: null,

            is_blocked: false,
            is_sent: false,
            is_done: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.send-cv-form {
    width: 610px;
    background-color: #fff;
    position: relative;
    padding: 80px 60px;
    box-sizing: border-box;

    @media screen and (max-width: 1440px) {
        width: 100%;
    }

     @media screen and (max-width: 768px) {
       padding: 40px 30px;
       width: 100%;
    }
}

.label {
    font-weight: 900;
    font-size: 36px;
    line-height: 140%;
    margin-bottom: 16px;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
}

.form-element {
    margin-bottom: 40px;
}

.form-btn {
    padding-top: 40px;
    display: flex;
    justify-content: center;

    .btn {
        padding: 16px 40px;
        min-width: 302px;
        height: 82px;
        width: auto;
        border-radius: 54px;
        font-size: 18px;
        line-height: 150%;
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
