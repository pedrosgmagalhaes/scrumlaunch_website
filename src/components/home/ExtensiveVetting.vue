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
    max-width: 1600px;
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

    tr {
        &:first-child {
            td {
                border-top: 1px solid #fff;
            }
        }
    }

    td {
        padding: 40px 40px 40px 60px;
        height: 344px;
        vertical-align: middle;
        border-bottom: 1px solid #fff;

        &:first-child {
            border-right: 1px solid #fff;
        }

        span {
            color: #12e2b0;
            font-weight: 900;
        }
    }
}

.header-1 {
    margin-bottom: 46px;
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
    color: #fff;
}

.body-1 {
    max-width: 945px;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 150%;
    color: #fff;
}

.extensive_vetting {
    padding-top: 300px;
    padding-bottom: 300px;
    background: #1E1F21;
    text-align: left;

    &__text_block {
        margin-bottom: 120px;
        max-width: 980px;
    }
}

</style>