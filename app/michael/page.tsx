import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  UserPlus,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Michael Yao | Open Lending Pty Ltd",
  description:
    "Contact Michael Yao at Open Lending by phone, email, WeChat or visit one of our offices.",
};

export default function SherryContactPage() {
  const phoneDisplay = "0425 350 112";
  const phoneLink = "+61425350112";

  const email = "info@openlendinggroup.com.au";

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(155,85,233,0.18), transparent 32%), linear-gradient(135deg, #0D0D0D 0%, #170A29 55%, #0D0D0D 100%)",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "rgba(255,255,255,0.98)",
          borderRadius: "24px",
          padding: "32px 24px",
          boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <img
            src="/opl.png"
            alt="Open Lending"
            style={{
              width: "190px",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Profile */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 18px",
              border: "4px solid #F3EEFF",
              boxShadow: "0 8px 24px rgba(123,53,201,0.18)",
              background: "#F5F5F7",
            }}
          >
            <img
              src="/michael-profile.jpg"
              alt="Michael Yao"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#0D0D0D",
              marginBottom: "6px",
              letterSpacing: "-0.02em",
            }}
          >
            Michael Yao
          </h1>

          <p
            style={{
              color: "#7B35C9",
              fontWeight: 600,
              fontSize: "0.95rem",
              marginBottom: "6px",
            }}
          >
            Open Lending Pty Ltd
          </p>

          <p
            style={{
              color: "#6B7280",
              fontSize: "0.9rem",
            }}
          >
            Mortgage Broker
          </p>
        </div>

        {/* Main action buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <a
            href={`tel:${phoneLink}`}
            className="btn-primary"
            style={{
              justifyContent: "center",
              padding: "14px 12px",
            }}
          >
            <Phone size={18} />
            Call
          </a>

          <a
            href={`mailto:${email}`}
            className="btn-secondary"
            style={{
              justifyContent: "center",
              padding: "14px 12px",
            }}
          >
            <Mail size={18} />
            Email
          </a>
        </div>

        {/* Contact info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          {/* Phone */}
          <a
            href={`tel:${phoneLink}`}
            style={infoRowStyle}
          >
            <div style={iconStyle}>
              <Phone size={18} />
            </div>

            <div>
              <div style={labelStyle}>Phone</div>
              <div style={valueStyle}>{phoneDisplay}</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            style={infoRowStyle}
          >
            <div style={iconStyle}>
              <Mail size={18} />
            </div>

            <div>
              <div style={labelStyle}>Email</div>
              <div style={valueStyle}>{email}</div>
            </div>
          </a>

          {/* Sydney Office */}
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(
                "Level 12/87-89 Liverpool Street, Sydney NSW 2000"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            style={infoRowStyle}
          >
            <div style={iconStyle}>
              <MapPin size={18} />
            </div>

            <div>
              <div style={labelStyle}>Sydney Office</div>
              <div style={valueStyle}>
                Level 12/87-89 Liverpool Street, Sydney NSW 2000
              </div>
            </div>
          </a>

          {/* Brisbane Office */}
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(
                "Level 1/7 Clunies Ross Court, Eight Mile Plains QLD 4113"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            style={infoRowStyle}
          >
            <div style={iconStyle}>
              <MapPin size={18} />
            </div>

            <div>
              <div style={labelStyle}>Brisbane Office</div>
              <div style={valueStyle}>
                Level 1/7 Clunies Ross Court, Eight Mile Plains QLD 4113
              </div>
            </div>
          </a>

          {/* Hobart Office */}
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(
                "Level 1/22 Liverpool Street, Hobart TAS 7000"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            style={infoRowStyle}
          >
            <div style={iconStyle}>
              <MapPin size={18} />
            </div>

            <div>
              <div style={labelStyle}>Hobart Office</div>
              <div style={valueStyle}>
                Level 1/22 Liverpool Street, Hobart TAS 7000
              </div>
            </div>
          </a>

          {/* Website */}
          <a
            href="https://openlendinggroup.com.au"
            target="_blank"
            rel="noopener noreferrer"
            style={infoRowStyle}
          >
            <div style={iconStyle}>
              <Globe size={18} />
            </div>

            <div>
              <div style={labelStyle}>Website</div>
              <div style={valueStyle}>openlendinggroup.com.au</div>
            </div>
          </a>
        </div>

        {/* WeChat */}
        <div
          style={{
            background: "#F8F6FC",
            border: "1px solid #E0D8EC",
            borderRadius: "18px",
            padding: "22px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginBottom: "6px",
              color: "#0D0D0D",
              fontWeight: 600,
            }}
          >
            <MessageCircle size={19} />
            WeChat
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#6B7280",
              marginBottom: "16px",
            }}
          >
            Scan the QR code to connect with me
          </p>

          <img
            src="/michael-wechat.png"
            alt="Michael WeChat QR Code"
            style={{
              width: "210px",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
              background: "white",
              padding: "8px",
            }}
          />
        </div>

        {/* Save Contact */}
        <a
          href="/michael.vcf"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            textDecoration: "none",
            background: "#0D0D0D",
            color: "white",
            padding: "15px 20px",
            borderRadius: "10px",
            fontWeight: 600,
            fontSize: "0.95rem",
          }}
        >
          <UserPlus size={18} />
          Save My Contact
        </a>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "0.75rem",
            color: "#9CA3AF",
          }}
        >
          Open Lending · Opening More Possibilities
        </p>
      </div>
    </main>
  );
}

const infoRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
  padding: "14px",
  borderRadius: "12px",
  background: "#F8F8FA",
  border: "1px solid #ECE8F1",
};

const iconStyle = {
  width: "42px",
  height: "42px",
  borderRadius: "10px",
  background: "#F3EEFF",
  color: "#7B35C9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const labelStyle = {
  fontSize: "0.75rem",
  color: "#6B7280",
  marginBottom: "2px",
};

const valueStyle = {
  color: "#0D0D0D",
  fontSize: "0.9rem",
  fontWeight: 500,
  lineHeight: 1.4,
};