<template>
    <div class="checkbox">
        <div class="checkbox_btn" :class="{ active: active }" @click="click"><img class="active_arrow" src="/images/quiz/arrow.svg" /></div>
        <p class="checkbox_title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: "" },
        active: { type: Boolean, default: false },
        click: { type: Function },
    },
};
</script>

<style scoped lang="scss">
.checkbox {
    display: flex;
    gap: 24px;
    cursor: pointer;

    &_btn {
        transition: background-color linear 0.1s;

        width: 100%;
        max-width: 36px;

        border-radius: 5px;
        height: 36px;
        border: 2px solid #1e1f21;
        text-align: center;
        background-color: transparent;
        position: relative;

        &.active {
            background-color: #1e1f21;
        }

        .active_arrow {
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
        }
    }

    &_title {
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        color: #1e1f21;
        max-width: 550px;
        text-align: left;
    }
}

@media screen and (max-width: 768px) {
    .checkbox {
        align-items: center;

        &_btn {
            max-width: 24px;
            height: 24px;

            & > img {
                width: 15px;
                height: 14px;
            }
        }

        &_title {
            font-size: 18px;
        }
    }
}
</style>
