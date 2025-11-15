import { BackgroundBeams } from "./ui/background-beams";

function Banner() {
    return (
        <main className="h-screen flex justify-center items-center">
            <BackgroundBeams />
            <p className="flex-1">
                <span className="text-6xl">
                    Somos <span className="font-bold text-cyan-400">TAKU</span><br />
                </span><br />
                <span className="text-3xl font-thin">
                    Creamos soluciones de software eficientes, escalables y alineadas con las necesidades de tu negocio.<br />
                    Nuestro equipo combina más de 15 años de experiencia en desarrollo y arquitectura.
                </span>
            </p>
            <div className="flex-1 flex justify-center">
                <img src="banner.png" alt="Banner" className="h-[50vh]" />
            </div>
        </main>
    );
}

export default Banner;