import { ImageResponse } from "next/og";

export const alt = "Sai Vaibhav — Cinematographer in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at top left, #1e1e1e 0%, #050505 60%)",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            letterSpacing: "6px",
            color: "#c0a062",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: "56px",
              height: "2px",
              background: "#c0a062",
            }}
          />
          Bengaluru, India
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "136px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-4px",
              display: "flex",
            }}
          >
            <span style={{ color: "#c0a062" }}>SAI&nbsp;</span>
            <span>VAIBHAV</span>
          </div>
          <div
            style={{
              marginTop: "36px",
              fontSize: "34px",
              color: "#d4d4d4",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Cinematographer — Commercials & Brand Films
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <span>6+ years · Brand Films · Events · Documentary</span>
          <span style={{ color: "#c0a062" }}>saivaibhav.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
