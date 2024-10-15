import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import padro from "../../assets/padro.svg";
import {
  Button,
  Container,
  LoadinfSvg,
  Otp,
  Text,
  Timer,
  Title,
} from "../../components";
import { Link } from "../../components/Link/Link";
import { useAppContext } from "../../contexts";
import "./Verification.css";

interface otpField {
  otp: string;
}

const Verification = () => {
  const navigate = useNavigate();
  const { phoneNumber } = useAppContext();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<otpField>({
    mode: "all",
    defaultValues: { otp: "" },
  });

  const handleSubmitForm = useCallback(
    ({ otp }: otpField) => {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (otp === "1111") {
            resolve();
            navigate("/home");
            toast.success("شما با موفقیت وارد شدید.");
          } else {
            reject();
            toast.error("کد وارد شده صحیح نمی‌باشد.");
          }
        }, 1000);
      });
    },
    [navigate]
  );

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
            control={control}
            name="otp"
            rules={{ minLength: 4 }}
            disabled={isSubmitting}
            render={({ field: { value, onChange, onBlur, ref, disabled } }) => (
              <Otp
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
                disabled={disabled}
                config={[1, 1, 1, 1]}
              />
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
          {isSubmitting ? (
            <Button type="submit" isSubmitting={isSubmitting}>
              <LoadinfSvg />
            </Button>
          ) : (
            <Button type="submit" disabled={!isDirty || !isValid}>
              ارسال کد‌ تایید
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
};

export default Verification;
