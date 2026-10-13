import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} — Agentic AI Developer & Full-Stack Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0c0e12",
          color: "#ece8e1",
        }}
      >
        <div style={{ fontSize: 28, color: "#5fd4c4", fontFamily: "monospace" }}>{`~/${profile.name.toLowerCase()}`}</div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 20 }}>
          Hi, I&apos;m <span style={{ color: "#f3b54a", marginLeft: 24 }}>{profile.name}</span>
        </div>
        <div style={{ fontSize: 36, color: "#9097a3", marginTop: 24 }}>{profile.role}</div>
        <div style={{ fontSize: 28, color: "#9097a3", marginTop: 48 }}>{profile.location}</div>
      </div>
    ),
    size,
  );
}
