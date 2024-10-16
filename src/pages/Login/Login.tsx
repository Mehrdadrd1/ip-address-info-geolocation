import { useCallback, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import padro from "../../assets/padro.svg";
import {
  Button,
  Container,
  HelperText,
  Input,
  LoadinfSvg,
  Text,
  Title,
} from "../../components";
import { Link } from "../../components/Link/Link";
import { useAppContext } from "../../contexts";
import "./Login.css";
import { toast } from "react-toastify";
import { PhonNumberInterface } from "../../Types";
import { mobilePhoneRegex } from "../../utils";

const Login = () => {
  const navigate = useNavigate();
  const { setPhoneNumber, phoneNumber } = useAppContext();

  const phoneNumberDefault = useMemo(() => {
    let result = undefined;
    const isPhoneNumber = Boolean(phoneNumber);
    if (isPhoneNumber) {
      result = phoneNumber;
    }
    return result;
  }, [phoneNumber]);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<PhonNumberInterface>({
    mode: "all",
    defaultValues: {
      phoneNumber: phoneNumberDefault,
    },
  });

  const handleSubmitForm = useCallback(
    async (data: PhonNumberInterface) => {
      await new Promise<void>((res) => setTimeout(res, 1000));
      setPhoneNumber(data.phoneNumber);
      navigate("/verification");
      toast.info("کد ورود 1111 می‌باشد");
    },
    [navigate, setPhoneNumber]
  );

  return (
    <Container height={410} width={375} px={42} py={16}>
      <div className="loginLogo">
        <img src={padro} alt="padro-logo" />
      </div>
      <div className="loginTitles">
        <Title color="primary">به پنل مدیریت تسک پادرو خوش آمدید</Title>
        <Text color="disable">
          برای ورود، لطفا شماره موبایل خود را وارد کنید
        </Text>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
        <div className="loginInput">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "شماره موبایل الزامی می‌باشد.",
              maxLength: {
                value: 11,
                message: "شماره تماس باید حداکثر 11 رقم باشد",
              },
              pattern: {
                value: mobilePhoneRegex,
                message: "شماره موبایل معتبر نمی‌باشد.",
              },
            }}
            render={({ field: { ...field }, fieldState: { error } }) => {
              return (
                <>
                  <Input
                    dir="ltr"
                    disabled={isSubmitting}
                    type="tel"
                    placeholder="شماره موبایل"
                    {...field}
                  />
                  {error && <HelperText>{error.message}</HelperText>}
                </>
              );
            }}
          />
        </div>
        <div className="loginBtn">
          {isSubmitting ? (
            <Button type="submit" isSubmitting={isSubmitting}>
              <LoadinfSvg />
            </Button>
          ) : (
            <Button type="submit" disabled={!isValid}>
              ارسال کد‌ تایید
            </Button>
          )}
        </div>
      </form>
      <div className="loginCaptin">
        <div>
          <Text color="primary">حساب کاربری ندارید؟</Text>
        </div>
        <div>
          <Link color="disable">ثبت‌نام</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
