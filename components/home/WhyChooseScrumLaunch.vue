<template>
  <div class="extensive_vetting">
    <div class="container">
      <div class="extensive_vetting__text_block flex jcfs fdc">
        <div class="header-1">why choose scrumlaunch</div>

        <p class="body-1">
          ScrumLaunch provides the global scale and technology automation of
          leading talent matching platforms with the personalization, talent
          management and back office (payroll & contracts) of a high touch full
          service agency. The future of global talent requires both scale &
          personalization.
        </p>
      </div>

      <div class="table_container">
        <client-only>
          <table>
            <tr>
              <th class="empty"></th>
              <th>
                <Logo :fill="'#12E2B0'" />
              </th>
              <th>Talent Matching<br />Platform</th>
              <th>Development<br />Agency</th>
              <th>Source<br />Directly</th>
            </tr>
            <tr>
              <td>Fully Managed</td>
              <td><span>Yes</span></td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Payroll & Contracting</td>
              <td><span>Yes</span></td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Transparent</td>
              <td><span>Yes</span></td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Global Talent Pool</td>
              <td><span>Yes</span></td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Time Required to Build Team</td>
              <td><span>Low</span></td>
              <td>High</td>
              <td>Low</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Quality Assurance</td>
              <td><span>High</span></td>
              <td>Low</td>
              <td>Low</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Technology Powered</td>
              <td><span>Yes</span></td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Staffing Speed</td>
              <td><span>Fast</span></td>
              <td>Fast</td>
              <td>Slow</td>
              <td>Slow</td>
            </tr>
          </table>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

  @media screen and (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.table_container {
  overflow-x: auto;
}

.empty {
  @media screen and (min-width: 1440px) {
    min-width: 500px;
    width: 500px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 390px;
    width: 390px;
  }
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 18px;
  }

  tr {
    text-align: center;

    th {
      vertical-align: middle;

      &:not(:first-child) {
        min-height: 100px;
        max-width: 250px;
        min-width: 200px;
        width: 200px;
        font-size: 24px;

        @media screen and (max-width: 1440px) {
          font-size: 18px;
        }
      }

      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    &:first-child {
      border-bottom: 1px solid #fff;

      td {
        border-top: 1px solid #fff;

        &:first-child {
          @media screen and (max-width: 768px) {
            border-bottom: 1px solid transparent;
          }
        }
      }
    }
  }

  td {
    padding: 35px;
    vertical-align: middle;
    text-align: center;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 140%;
    font-weight: 800;

    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    &:first-child {
      padding-left: 0px;
      text-align: left;
      font-size: 30px;

      @media screen and (max-width: 1440px) {
        font-size: 24px;
      }

      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }

    &:not(:last-child) {
      border-right: 1px solid #fff;
    }

    span {
      color: #12e2b0;
      font-weight: 900;

      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
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

  @media screen and (max-width: 425px) {
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

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
}

.extensive_vetting {
  padding-top: 300px;
  padding-bottom: 300px;
  background: #1e1f21;
  text-align: left;

  @media screen and (max-width: 1440px) {
    padding-top: 240px;
    padding-bottom: 240px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (max-width: 425px) {
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

    @media screen and (max-width: 425px) {
      margin-bottom: 40px;
    }
  }
}
</style>
