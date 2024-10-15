import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import padro from "../../assets/padro.svg";
import {
  Button,
  Container,
  HelperText,
  Input,
  Text,
  Timer,
  Title,
} from "../../components";
import { Link } from "../../components/Link/Link";
import { useAppContext } from "../../contexts";
import "./Verification.css";

interface PhonNumberInterface {
  phoneNumber: string;
}

const Verification = () => {
  const navigate = useNavigate();
  const { phoneNumber } = useAppContext();
  console.log("🚀 ~ Verification ~ phoneNumber:", phoneNumber);
  const { control, handleSubmit } = useForm<PhonNumberInterface>({
    mode: "all",
  });

  const handleSubmitForm = useCallback((data: PhonNumberInterface) => {
    console.log("🚀 ~ handleSubmitForm ~ data:", data);
  }, []);

  const handleNavigateBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container height={423} width={375}>
      <div className="verificationHeader">
        <div className="verificationLogo">
          <img src={padro} alt="padro-logo" />
        </div>
        <div style={{ position: "absolute", left: "7%" }}>
          <GoArrowLeft
            onClick={handleNavigateBack}
            size={25}
            className="arrow"
          />
        </div>
      </div>
      <div className="verificationTitles">
        <Title color="primary">کد تایید را وارد کنید</Title>
        <Text color="disable">کد تایید برای شماره {phoneNumber} پیامک شد</Text>
        <Link color="primary" onClick={handleNavigateBack}>
          تغییر شماره همراه
        </Link>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
        <div className="verificationInput">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "شماره موبایل الزامی می‌باشد." }}
            render={({ field, fieldState: { error } }) => (
              <>
                /
                <Input type="text" placeholder="کد ورود" {...field} />
                {error && <HelperText>{error.message}</HelperText>}
              </>
            )}
          />
        </div>
        <div className="verificationCaptin">
          <div>
            <Text color="primary">کد را دریافت نکردید؟</Text>
          </div>
          <div>
            <Timer
              timerInSeconds={120}
              handleTimerButton={handleNavigateBack}
            />
          </div>
        </div>
        <div className="loginBtn">
          <Button type="submit">ارسال کد‌ تایید</Button>
        </div>
      </form>
    </Container>
  );
};

export default Verification;
