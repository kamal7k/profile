import React from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function BackgroundView({ children }) {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div id="particles-js">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                        },
                        modes: {
                            push: {
                                quantity: 5
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.6
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: ["#ec6e59", "#4BC0C8", "#1D3557", "#F1FAEE"]
                        },
                        links: {
                            color: "#888",
                            distance: 120,
                            enable: true,
                            opacity: 0.4,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "top",
                            enable: true,
                            outModes: {
                                default: "out"
                            },
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 50
                        },
                        opacity: {
                            value: { min: 0.3, max: 0.8 }
                        },
                        shape: {
                            type: ["circle", "triangle", "star"]
                        },
                        size: {
                            value: { min: 2, max: 5 }
                        }
                    },
                    detectRetina: true
                }}
            />
            {children}
        </div >
    )
}

export default BackgroundView;
