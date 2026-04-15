import React from "react";

const Partenaires = () => {
    return (
        <section
            style={{
                padding: "72px 24px",
                background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
                textAlign: "center",
                overflow: "hidden"
            }}
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <h2
                    style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: "2.2rem",
                        fontWeight: 600,
                        color: "#0f172a",
                        margin: "0 0 12px",
                        display: "inline-block",
                        position: "relative"
                    }}
                >
                    Nos Partenaires
                    <span
                        style={{
                            display: "block",
                            width: "56px",
                            height: "3px",
                            background: "#f97316",
                            borderRadius: "2px",
                            margin: "14px auto 0"
                        }}
                    />
                </h2>

                <div
                    style={{
                        margin: "52px auto 0",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        border: "2px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 0 8px rgba(249, 115, 22, 0.08)",
                        overflow: "hidden"
                    }}
                >
                    <img
                        src="/cambridge.jpg"
                        alt="Cambridge University Press"
                        style={{
                            width: "160px",
                            height: "160px",
                            objectFit: "contain",
                            borderRadius: "50%"
                        }}
                        onError={e => {
                            e.target.src =
                                "https://via.placeholder.com/160x160/1e3a8a/ffffff?text=Cambridge";
                        }}
                    />
                </div>

                <p
                    style={{
                        marginTop: "24px",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#334155",
                        letterSpacing: "0.3px"
                    }}
                >
                    Cambridge University Press
                </p>
            </div>
        </section>
    );
};

export default Partenaires;
