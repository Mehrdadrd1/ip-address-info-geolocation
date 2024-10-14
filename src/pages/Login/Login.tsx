import { Container, Input, Title, Title2 } from "./styles";
import padro from "../../assets/padro.svg";
import "./Login.css";
import { Button, HelperText } from "../../components";
import { Controller, useForm } from "react-hook-form";
import { useCallback } from "react";

interface PhonNumberInterface {
  phoneNumber: string;
}

const Login = () => {
  const { control, handleSubmit } = useForm<PhonNumberInterface>({
    mode: "all",
  });

  const handleSubmitForm = useCallback((data: PhonNumberInterface) => {
    console.log("🚀 ~ handleSubmitForm ~ data:", data);
  }, []);
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
      <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
        <div className="loginInput">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "شماره موبایل الزامی می‌باشد." }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input type="text" placeholder="شماره موبایل" {...field} />
                {error && <HelperText>{error.message}</HelperText>}
              </>
            )}
          />
        </div>
        <div className="loginBtn">
          <Button type="submit">ارسال کد‌ تایید</Button>
        </div>
      </form>
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
