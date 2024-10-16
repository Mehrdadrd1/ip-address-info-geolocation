import { IpDetail } from "../../Types";
import { IpContentWrapper } from "../IpContentWrapper/IpContentWrapper";
import Map from "../Map/Map";
import { Title } from "../Title/Title";

const IPContent = ({
  ipDetail,
  isVisible,
}: {
  ipDetail: IpDetail;
  isVisible: boolean;
}) => {
  return (
    <IpContentWrapper isVisible={isVisible}>
      <div
        dir="ltr"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">Ip Address:</Title>
          <Title color="primary">
            {ipDetail.ipAddress} (V{ipDetail.ipVersion})
          </Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">Country:</Title>
          <Title color="primary">{ipDetail.countryName}</Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">Region:</Title>{" "}
          <Title color="primary">{ipDetail.regionName}</Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">City:</Title>
          <Title color="primary">{ipDetail.cityName}</Title>
        </div>
      </div>
      <div
        dir="ltr"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">Latitude::</Title>
          <Title color="primary">{ipDetail.latitude}</Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">Longitude::</Title>
          <Title color="primary">{ipDetail.latitude}</Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">Time Zone:</Title>
          <Title color="primary">{ipDetail.timeZone}</Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title color="disable">currency:</Title>
          <Title color="primary">{ipDetail.currency.name}</Title>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <Map latitude={ipDetail.latitude} longitude={ipDetail.longitude} />
      </div>
    </IpContentWrapper>
  );
};

export default IPContent;
