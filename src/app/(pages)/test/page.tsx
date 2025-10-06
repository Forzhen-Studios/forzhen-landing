import React from "react";

const Test = () => {
  const subscriberEmail = "<user_email>";
  const logoUrl = "/studio_logo_white.png"; // Add your logo URL here if available
  const unsubscribeUrl = "https://forzhenstudios.com/unsubscribe"; // Add your unsubscribe URL here if available
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a0e0a 50%, #2d1810 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <table
        role="presentation"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          padding: "60px 20px",
        }}
      >
        <tr>
          <td align="center">
            <table
              role="presentation"
              style={{
                maxWidth: "600px",
                width: "100%",
                background: "linear-gradient(135deg, #0a0a0a 0%, #1a0e0a 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "0",
                overflow: "hidden",
              }}
            >
              <tr>
                <td
                  style={{
                    padding: "60px 48px 48px",
                  }}
                >
                  <table
                    role="presentation"
                    style={{ width: "100%", borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td>
                        {logoUrl ? (
                          <img
                            src={logoUrl}
                            alt="Forzhen Studios"
                            style={{
                              maxWidth: "80px",
                              height: "auto",
                              display: "block",
                            }}
                          />
                        ) : (
                          <>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: "700",
                                letterSpacing: "2px",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                marginBottom: "4px",
                              }}
                            >
                              FORZHEN
                            </div>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: "700",
                                letterSpacing: "2px",
                                color: "#ffffff",
                                textTransform: "uppercase",
                              }}
                            >
                              STUDIOS
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "0 48px 48px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      height: "1px",
                      margin: "0 0 48px 0",
                    }}
                  ></div>

                  <h1
                    style={{
                      margin: "0 0 32px",
                      fontSize: "42px",
                      fontWeight: "700",
                      color: "#ffffff",
                      letterSpacing: "-1.5px",
                      lineHeight: "1.1",
                    }}
                  >
                    You're on
                    <br />
                    the list
                  </h1>

                  <p
                    style={{
                      margin: "0 0 24px",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.7)",
                      letterSpacing: "0.2px",
                    }}
                  >
                    Thank you for your interest in Forzhen Studios. We're
                    building something exceptional — sleek platforms and tools
                    that empower teams and creators.
                  </p>

                  <p
                    style={{
                      margin: "0 0 40px",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.7)",
                      letterSpacing: "0.2px",
                    }}
                  >
                    You'll be among the first to know when we launch. As we
                    grow, we're expanding into interactive entertainment and
                    game technology, scaling our studio into a hub for
                    innovation and creativity.
                  </p>

                  <div
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
                      margin: "0 0 40px",
                    }}
                  ></div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "rgba(255, 255, 255, 0.5)",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Stay tuned
                  </p>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "40px 48px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <table
                    role="presentation"
                    style={{ width: "100%", borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td style={{ paddingBottom: "16px" }}>
                        <a
                          href="https://www.linkedin.com/company/forzhenstudios/"
                          style={{
                            display: "inline-block",
                            color: "rgba(255, 255, 255, 0.5)",
                            textDecoration: "none",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                            marginRight: "24px",
                            transition: "color 0.2s",
                          }}
                        >
                          LINKEDIN
                        </a>
                        <a
                          href="https://instagram.com/forzhenstudios"
                          style={{
                            display: "inline-block",
                            color: "rgba(255, 255, 255, 0.5)",
                            textDecoration: "none",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                            marginRight: "24px",
                            transition: "color 0.2s",
                          }}
                        >
                          INSTAGRAM
                        </a>
                        <a
                          href="https://youtube.com/@forzhenstudios"
                          style={{
                            display: "inline-block",
                            color: "rgba(255, 255, 255, 0.5)",
                            textDecoration: "none",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                            transition: "color 0.2s",
                          }}
                        >
                          YOUTUBE
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style={{
                            margin: "0 0 8px",
                            fontSize: "12px",
                            lineHeight: "18px",
                            color: "rgba(255, 255, 255, 0.35)",
                            letterSpacing: "0.3px",
                          }}
                        >
                          Contact: hello@forzhenstudios.com
                        </p>
                        {subscriberEmail && (
                          <p
                            style={{
                              margin: 0,
                              fontSize: "12px",
                              lineHeight: "18px",
                              color: "rgba(255, 255, 255, 0.25)",
                              letterSpacing: "0.3px",
                            }}
                          >
                            {subscriberEmail}
                          </p>
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "32px 48px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <table
                    role="presentation"
                    style={{ width: "100%", borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td>
                        <p
                          style={{
                            margin: "0 0 12px",
                            fontSize: "11px",
                            lineHeight: "16px",
                            color: "rgba(255, 255, 255, 0.25)",
                            letterSpacing: "0.5px",
                          }}
                        >
                          © 2025 Forzhen Studios. All rights reserved.
                        </p>
                      </td>
                    </tr>
                    {unsubscribeUrl && (
                      <tr>
                        <td style={{ paddingTop: "8px" }}>
                          <a
                            href={unsubscribeUrl}
                            style={{
                              color: "rgba(255, 255, 255, 0.35)",
                              textDecoration: "underline",
                              fontSize: "11px",
                              letterSpacing: "0.5px",
                              transition: "color 0.2s",
                            }}
                          >
                            Unsubscribe
                          </a>
                        </td>
                      </tr>
                    )}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </main>
  );
};

export default Test;
