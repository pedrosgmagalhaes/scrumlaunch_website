<template>

    <div class="extensive_vetting">

        <div class="container">

            <div class="extensive_vetting__text_block flex jcfs fdc">
                <div class="header-1">Extensive Vetting &<br> High Talent Retention</div>

                <p class="body-1">We recruit top technical talent and design from around the world with hubs in Latin America and Eastern Europe. Each candidate goes through a 5+ hour process of technical and soft skills interviews.  These include detailed technical questions, key software development concepts and English proficiency.</p>
            </div>

            <div>
                <table>
                    <tr>
                        <td>We hire less than <span>3%</span> of applicants.</td>
                        <td>Our annual talent retention is over <span>90%</span> (industry averages are close to <span>50%</span>).</td>
                    </tr>
                    <tr>
                        <td>Developers we hire have an average <br>of <span>5 YEARS</span> of experience.</td>
                        <td>Our average client lifetime duration is <span>4+ YEARS</span>.</td>
                    </tr>
                    <tr>
                        <td>Our UI/UX design team has created interfaces that are used by <br><span>100M+ USERS</span>.</td>
                        <td><span>We provide</span> either fully managed teams including designers, product owners and QA or staff augmentation of vetted resources.</td>
                    </tr>
                </table>
            </div>

        </div>

    </div>

</template>



<script>
export default {

}
</script>



<style lang="scss" scoped>

.container {
    margin: 0 auto;
    padding-left: 8.34%;
    padding-right: 8.34%;
    max-width: 1600px;

    @media screen and (max-width: 1440px) {
        max-width: 1200px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 30px;
        padding-right: 30px;
    }

    @media screen and (max-width: 375px) {
        padding-left: 20px;
        padding-right: 20px;
    }
}

table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    color: #fff;

    @media screen and (max-width: 1440px) {
        font-size: 30px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 375px) {
        display: block;
        font-size: 18px;
    }

    tr {
        &:first-child {
            td {
                border-top: 1px solid #fff;

                &:first-child {
                    @media screen and (max-width: 375px) {
                        border-bottom: 1px solid transparent;
                    }
                }
            }
        }
    }

    td {
        padding: 40px 40px 40px 60px;
        height: 344px;
        vertical-align: middle;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;

        @media screen and (max-width: 1440px) {
            padding: 40px 50px 40px 30px;
            height: 248px;
        }

        @media screen and (max-width: 768px) {
            padding: 32px 30px 32px 20px;
            height: 234px;

            &:last-child {
                padding: 32px 0px 32px 30px;
            }
        }

        @media screen and (max-width: 375px) {
            display: block;
            padding: 30px 0px;
            height: auto;

            &:last-child {
                padding: 30px 0px;
            }
        }

        &:first-child {
            border-right: 1px solid #fff;
            
            @media screen and (max-width: 375px) {
                border-right: 1px solid transparent;
            }
        }

        span {
            color: #12e2b0;
            font-weight: 900;
        }
    }
}

.header-1 {
    margin-bottom: 40px;
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
    color: #fff;

    @media screen and (max-width: 1440px) {
        margin-bottom: 40px;
        font-size: 56px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 24px;
        font-size: 48px;
    }

    @media screen and (max-width: 375px) {
        margin-bottom: 17px;
        font-size: 24px;
    }
}

.body-1 {
    max-width: 945px;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 150%;
    color: #fff;

    @media screen and (max-width: 1440px) {
        max-width: 728px;
        font-size: 26px;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
        font-size: 20px;
    }

    @media screen and (max-width: 375px) {
        font-size: 14px;
    }
}

.extensive_vetting {
    padding-top: 300px;
    padding-bottom: 300px;
    background: #1E1F21;
    text-align: left;

    @media screen and (max-width: 1440px) {
        padding-top: 240px;
        padding-bottom: 240px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 140px;
        padding-bottom: 140px;
    }

    @media screen and (max-width: 375px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    &__text_block {
        margin-bottom: 120px;
        max-width: 980px;

        @media screen and (max-width: 1440px) {
            margin-bottom: 80px;
            max-width: 812px;
        }

        @media screen and (max-width: 768px) {
            margin-bottom: 60px;
            max-width: 100%;
        }

        @media screen and (max-width: 375px) {
            margin-bottom: 40px;
        }
    }
}

</style>