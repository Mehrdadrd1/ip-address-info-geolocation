import { useCallback, useState } from "react";
import {
  Button,
  Container,
  HelperText,
  Input,
  SearchIcon,
  Text,
  Title,
} from "../../components";
import "./Home.css";
import { Controller, useForm } from "react-hook-form";
import { IPField } from "../../Types";
import { ipv4Regex, ipv6Regex } from "../../utils";

const Home = () => {
  const [btnIsHovered, setBtnIsHovered] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty, isSubmitting, errors },
  } = useForm<IPField>({
    mode: "onChange",
    defaultValues: {
      ip: "",
    },
  });

  const handleIpAdrress = useCallback((data: IPField) => {
    console.log("🚀 ~ handleIpAdrress ~ data:", data);
  }, []);

  return (
    <div className="homeRoot">
      <Container width={906} height={276}>
        <div>
          <Title color="primary">آی پی مد نظر خود را پیدا کنید</Title>
        </div>
        <div className="homeText">
          <Text color="disable">
            اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید
            با استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا
            کنید. چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید،
            سپس روی "دریافت جزئیات IP" کلیک کنید.
          </Text>
        </div>
        <form onSubmit={handleSubmit(handleIpAdrress)}>
          <div className="homeSearch">
            <div style={{ display: "flex", flexGrow: 1 }}>
              <Controller
                control={control}
                name="ip"
                rules={{
                  required: "IP را وارد کنید",
                  validate: (value) => {
                    console.log(1, ipv4Regex.test(value));
                    console.log(2, ipv6Regex.test(value));
                    return (
                      ipv4Regex.test(value) ||
                      ipv6Regex.test(value) ||
                      "IP واردشده معتبر نمی‌باشد. "
                    );
                  },
                }}
                render={({ field }) => {
                  return (
                    <Input
                      dir="ltr"
                      style={{
                        borderBottomLeftRadius: "0",
                        borderTopLeftRadius: "0",
                      }}
                      {...field}
                    />
                  );
                }}
              />
            </div>
            <div
              style={{
                width: "72px",
                display: "flex",
              }}
            >
              <Button
                disabled={!isValid || !isDirty || isSubmitting}
                type="submit"
                style={{
                  borderBottomRightRadius: "0",
                  borderTopRightRadius: "0",
                  backgroundImage: btnIsHovered ? "#0C317C" : undefined,
                  boxShadow: "none",
                }}
                onMouseEnter={() => setBtnIsHovered(true)}
                onMouseLeave={() => setBtnIsHovered(false)}
              >
                <SearchIcon />
              </Button>
            </div>
          </div>
          {errors && <HelperText>{errors.ip?.message}</HelperText>}
        </form>
      </Container>
    </div>
  );
};

export default Home;
