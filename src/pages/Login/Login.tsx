import { Button, Container, Input, Title, Title2 } from "./styles";
import padro from "../../assets/padro.svg";
import "./Login.css";
const Login = () => {
  return (
    <Container>
      <div className="loginLogo">
        <img src={padro} alt="padro-logo" />
      </div>
      <div className="loginTitles">
        <Title color="primary">به پنل مدیریت تسک پادرو خوش آمدید</Title>
        <Title2 color="disable">
          برای ورود، لطفا شماره موبایل خود را وارد کنید
        </Title2>
      </div>
      <div className="loginInput">
        <Input type="text" placeholder="شماره موبایل" />
      </div>
      <div className="loginBtn">
        <Button>ارسال کد‌ تایید</Button>
      </div>
      <div className="loginCaptin">
        <div>
          <Title2 color="primary">حساب کاربری ندارید؟</Title2>
        </div>
        <div>
          <Title2 color="disable">ثبت‌نام</Title2>
        </div>
      </div>
    </Container>
  );
};

export default Login;
