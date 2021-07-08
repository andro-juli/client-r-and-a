<template>
  <div class="reset">
    <div class="reset-card">
      <div class="forgotP">
        <h3>Forgot Password</h3>
        <p>Please select option to send link to reset password</p>
      </div>
      <div class="via-email">
        <div class="email-cont">
          <div class="circle1-cont">
            <div class="circle1">
              <img src="../assets/email.svg" alt="" />
            </div>
          </div>

          <div class="text-card">
            <h4>Reset via Email</h4>
            <p>
              Reset password link will be send to your registered email address.
            </p>
          </div>
          <div class="check-cont">
            <div class="check-circle">
              <img src="../assets/chech.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="via-sms">
        <div class="calling-cont">
          <div class="circle2">
            <img src="../assets/Calling.svg" alt="" />
          </div>
        </div>
        <div class="text-card2">
          <h4>Reset via Sms</h4>
          <p>
            Reset password link will be send to your registered phone number.
          </p>
        </div>
      </div>
      <div class="send-btn-cont">
        <button class="send-link">Send Link</button>
      </div>
      <div class="resend-cont">
        <p>Didn’t receive link? <span class="resend">Resend</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.circle1-cont {
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calling-cont {
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-card {
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
}
.text-card2 {
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 15px;
}
.check-cont {
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reset {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}
.reset-card {
  width: 514px;
  height: 523px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
}
.forgotP h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #2b3c4e;
  text-align: center;
}
.forgotP p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7d7d7d;
  text-align: center;
}
.email-cont {
  display: flex;
}
.via-email {
  background: #ffffff;
  border: 1px solid #7557d3;
  box-sizing: border-box;
  box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
  border-radius: 4px;
  width: 450px;
  height: 110px;
}
.circle1 {
  width: 48px;
  height: 48px;
  background: rgba(117, 87, 211, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle1 img {
  width: 18.89px;
  height: 17px;
}
.text-card h4 {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #7557d3;
}
.text-card p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
}
.text-card2 h4 {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #211f26;
}
.text-card2 p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
}
.check-circle {
  width: 24px;
  height: 24px;
  background: #7557d3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.via-sms {
  width: 450px;
  height: 110px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
}
.circle2 {
  width: 48px;
  height: 48px;
  background: rgba(33, 31, 38, 0.05);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.send-link {
  background: #7557d3;
  border-radius: 4px;
  width: 350px;
  height: 50px;
  border: none;
  font-family: Lato;
  color: #ffffff;
}
.resend-cont p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
}
.resend {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #7557d3;
}
</style>
