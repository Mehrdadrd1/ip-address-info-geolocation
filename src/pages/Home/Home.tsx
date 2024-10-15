import { useState } from "react";
import {
  Button,
  Container,
  Input,
  SearchIcon,
  Text,
  Title,
} from "../../components";
import "./Home.css";

const Home = () => {
  const [btnIsHovered, setBtnIsHovered] = useState(false);
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
        <div className="homeSearch">
          <div style={{ display: "flex", flexGrow: 1 }}>
            <Input
              style={{
                borderBottomLeftRadius: "0",
                borderTopLeftRadius: "0",
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
              style={{
                borderBottomRightRadius: "0",
                borderTopRightRadius: "0",
                backgroundImage: btnIsHovered ? "#0C317C" : undefined,
                boxShadow: "none",
              }}
              onMouseEnter={() => setBtnIsHovered(true)} // Mouse enters (hover starts)
              onMouseLeave={() => setBtnIsHovered(false)} // Mouse leaves (hover ends)
            >
              <SearchIcon />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
