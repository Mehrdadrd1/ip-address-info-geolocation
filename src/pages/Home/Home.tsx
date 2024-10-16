import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Container,
  HelperText,
  Input,
  IPContent,
  SearchIcon,
  Text,
  Title,
} from "../../components";
import { useGetIpGeolocation } from "../../services";
import { IpDetail, IPField } from "../../Types";
import { ipv4Regex, ipv6Regex } from "../../utils";
import "./Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const { mutateAsync: IpRequest } = useGetIpGeolocation();
  const [btnIsHovered, setBtnIsHovered] = useState(false);
  const [ipDetails, setIpDetails] = useState<IpDetail[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const callTimestamps = useRef<number[]>([]);

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

  const handleIpAddress = useCallback(
    async (data: IPField) => {
      const now = Date.now();

      callTimestamps.current = callTimestamps.current.filter(
        (timestamp) => now - timestamp < 60000
      );

      if (callTimestamps.current.length >= 5) {
        const oldestTimeStamp = callTimestamps.current[0];
        const timeElapsed = now - oldestTimeStamp;
        const timeLeft = Math.ceil((60000 - timeElapsed) / 1000); // Convert to seconds

        toast.info(
          `شما به محدودیت ۵ درخواست در دقیقه رسیده‌اید، لطفا "${timeLeft}" ثانیه صبر کنید. با تشکر.`
        );
        return;
      }

      callTimestamps.current.push(now);

      const IpAddress = data.ip;
      const response = await IpRequest(IpAddress);

      if (response) {
        const newIpDetail: IpDetail = response;

        setIpDetails((prev: IpDetail[]) => [...prev, newIpDetail]);
        if (contentRef.current) {
          const contentHeight = contentRef.current.scrollHeight;
          setMaxHeight(contentHeight);
        }
        setIsExpanded(true);
        setTimeout(() => {
          setShowResults(true);
        }, 700);
      }
    },
    [IpRequest]
  );

  useLayoutEffect(() => {
    if (ipDetails.length > 0) {
      setIsExpanded(false);
      setShowResults(false);

      setTimeout(() => {
        if (contentRef.current) {
          const contentHeight = contentRef.current.scrollHeight;
          setMaxHeight(contentHeight);
        }
        setIsExpanded(true);
        setTimeout(() => {
          setShowResults(true);
        }, 500);
      }, 100);
    }
  }, [ipDetails]);

  return (
    <div className="homeRoot">
      <Container
        width={906}
        isExpanded={isExpanded}
        maxHeight={maxHeight}
        height={276}
        px={50}
        py={42}
      >
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
        <form onSubmit={handleSubmit(handleIpAddress)}>
          <div className="homeSearch">
            <div style={{ display: "flex", flexGrow: 1 }}>
              <Controller
                control={control}
                name="ip"
                rules={{
                  required: "IP را وارد کنید",
                  validate: (value) => {
                    return (
                      ipv4Regex.test(value) ||
                      ipv6Regex.test(value) ||
                      "IP واردشده معتبر نمی‌باشد."
                    );
                  },
                }}
                render={({ field }) => (
                  <Input
                    dir="ltr"
                    style={{
                      borderBottomLeftRadius: "0",
                      borderTopLeftRadius: "0",
                    }}
                    {...field}
                  />
                )}
              />
            </div>
            <div style={{ width: "72px", display: "flex" }}>
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
        <div ref={contentRef}>
          {ipDetails.map((ipDetail, index) => (
            <IPContent
              key={index}
              ipDetail={ipDetail}
              isVisible={showResults}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
