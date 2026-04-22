import React, { useState, useEffect, useCallback, useRef } from "react";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mobilePanPhase, setMobilePanPhase] = useState(0); // 0=left, 1=right, 2=next
    const [isMobile, setIsMobile] = useState(false);
    const panTimerRef = useRef(null);

    // Détection mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const slides = [
        {
            id: 1,
            image: "/bannière.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80",
            buttonLink: "/inscription"
        },
        {
            id: 2,
            image: "/bannière.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
            buttonLink: "/inscription"
        }
    ];

    const resetMobilePan = useCallback(() => {
        setMobilePanPhase(0);
        if (panTimerRef.current) clearTimeout(panTimerRef.current);
    }, []);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(prev => (prev + 1) % slides.length);
        resetMobilePan();
        setTimeout(() => setIsAnimating(false), 1000);
    }, [isAnimating, slides.length, resetMobilePan]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
        resetMobilePan();
        setTimeout(() => setIsAnimating(false), 1000);
    }, [isAnimating, slides.length, resetMobilePan]);

    const goToSlide = index => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        resetMobilePan();
        setTimeout(() => setIsAnimating(false), 1000);
    };

    // Auto-play global (6s)
    useEffect(() => {
        const timer = setInterval(() => nextSlide(), 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Animation mobile: pan automatique par phase
    useEffect(() => {
        if (!isMobile) {
            resetMobilePan();
            return;
        }

        // Phase 0: affiche la partie gauche (2.5s)
        panTimerRef.current = setTimeout(() => {
            setMobilePanPhase(1); // pan vers la droite

            // Phase 1: affiche la partie droite (2.5s)
            panTimerRef.current = setTimeout(() => {
                setMobilePanPhase(2);
                if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(prev => (prev + 1) % slides.length);
                    setTimeout(() => {
                        setIsAnimating(false);
                        setMobilePanPhase(0);
                    }, 1000);
                }
            }, 2500);
        }, 2500);

        return () => { if (panTimerRef.current) clearTimeout(panTimerRef.current); };
    }, [currentSlide, isMobile, isAnimating, slides.length, resetMobilePan]);

    // Transform et object-position dynamiques selon la phase
    const getImageStyle = (index) => {
        if (!isMobile || index !== currentSlide) {
            return { transform: "scale(1.1)", objectPosition: "center" };
        }
        if (mobilePanPhase === 0) {
            return { transform: "scale(1.2) translateX(0%)", objectPosition: "left center" };
        }
        if (mobilePanPhase === 1) {
            return { transform: "scale(1.2) translateX(-8%)", objectPosition: "right center" };
        }
        return { transform: "scale(1)", objectPosition: "center" };
    };

    return (
        <section className="hero-section">
            <div className="carousel-container">
                {slides.map((slide, index) => {
                    const imgStyle = getImageStyle(index);
                    return (
                        <div
                            key={slide.id}
                            className={`slide ${index === currentSlide ? "active" : ""}`}
                            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                        >
                            <a href="/inscription" className="slide-background">
                                <img
                                    src={slide.image}
                                    alt="Bannière"
                                    className={index === currentSlide ? "panning" : ""}
                                    style={imgStyle}
                                    onError={e => { e.target.src = slide.fallbackImage; }}
                                />
                                {/* <div className="overlay" /> */}
                            </a>
                        </div>
                    );
                })}

                <button className="nav-arrow prev" onClick={prevSlide} aria-label="Slide précédent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button className="nav-arrow next" onClick={nextSlide} aria-label="Slide suivant">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                        >
                            <div className="indicator-progress" />
                        </button>
                    ))}
                </div> */}
            </div>

            <style jsx>{`
                .hero-section {
                    position: relative;
                    width: 100%;
                    min-height: 600px;
                    max-height: 700px;
                    overflow: hidden;
                    background-color: #0f172a;
                    font-family: "Georgia", "Times New Roman", serif;
                }
                .carousel-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    min-height: 600px;
                    max-height: 700px;
                }
                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                    visibility: hidden;
                }
                .slide.active {
                    opacity: 1;
                    visibility: visible;
                }
                .slide-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }
                .slide-background img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    transform: scale(1.1);
                    transition: transform 6s ease, object-position 6s ease;
                }
                .slide.active .slide-background img {
                    transform: scale(1);
                }
                .slide-background img.panning {
                    transition: transform 2.5s ease-in-out, object-position 2.5s ease-in-out;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    background: linear-gradient(
                        to right,
                        rgba(15, 23, 42, 0.4) 0%,
                        rgba(15, 23, 42, 0.1) 50%,
                        rgba(15, 23, 42, 0.3) 100%
                    );
                }
                .nav-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .nav-arrow:hover {
                    background: rgba(255, 255, 255, 0.25);
                    border-color: rgba(255, 255, 255, 0.4);
                    transform: translateY(-50%) scale(1.1);
                }
                .nav-arrow.prev { left: 30px; }
                .nav-arrow.next { right: 30px; }
                .slide-indicators {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    display: flex;
                    gap: 10px;
                }
                .indicator {
                    width: 40px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    border: none;
                    border-radius: 2px;
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    padding: 0;
                }
                .indicator-progress {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0;
                    background: #f97316;
                    border-radius: 2px;
                }
                .indicator.active .indicator-progress {
                    animation: progress 6s linear forwards;
                }
                @keyframes progress {
                    from { width: 0; }
                    to { width: 100%; }
                }

                /* ========== MOBILE ========== */
                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 500px;
                        max-height: 600px;
                    }
                    .carousel-container {
                        min-height: 500px;
                        max-height: 600px;
                    }
                    /* Image zoomée pour permettre le pan */
                    .slide-background img {
                        transform: scale(1.2);
                        object-position: left center;
                    }
                    .slide.active .slide-background img {
                        transform: scale(1.2);
                    }
                    .nav-arrow {
                        width: 45px;
                        height: 45px;
                    }
                    .nav-arrow.prev { left: 15px; }
                    .nav-arrow.next { right: 15px; }
                    .slide-indicators { bottom: 20px; }
                    .indicator { width: 30px; height: 3px; }
                }
                @media (max-width: 480px) {
                    .hero-section {
                        min-height: 450px;
                        max-height: 500px;
                    }
                    .carousel-container {
                        min-height: 450px;
                        max-height: 500px;
                    }
                    .nav-arrow {
                        width: 40px;
                        height: 40px;
                    }
                    .nav-arrow.prev { left: 10px; }
                    .nav-arrow.next { right: 10px; }
                }
            `}</style>
        </section>
    );
};

export default HeroCarousel;