import React from 'react'
import './HeroStyles.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Hero() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <div className='hero'>
            <div className="overlay">
            <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: { enable: false  },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 2,
                                },
                                repulse: {
                                    distance: 50,
                                    duration: 0.3,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#7519197",
                            },
                            links: {
                                color: "#ff0000",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 2,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 900,
                                },
                                value: 120,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 2, max: 7 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <div className="content">
                <h1>Home Page</h1>
            </div>
        </div>
    )
}

export default Hero
