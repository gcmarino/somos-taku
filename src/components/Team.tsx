import CustomTeamCard from "./CustomTeamCard";


const descriptions: string[] = [
    "Desarrollador Full Stack, Mobile y DevOps-aware, con sólidos conocimientos en Node.js y .NET, experiencia en desarrollo móvil con Flutter, además de manejo de infraestructura en servidores Linux y plataformas cloud.",
    "Desarrollador Full Stack con sólidos conocimientos en .NET y Angular, además de experiencia en administración de servidores Windows Server y bases de datos SQL Server.",
    "Desarrollador de software y Project Manager, con sólidos conocimientos en infraestructura e integración de sistemas, y experiencia en la gestión de proyectos utilizando metodologías Agile."
];

function Team() {
    return <>
        <h1 id="team" className="text-center text-5xl scroll-mt-28">Conoce nuestro equipo de <span className="text-cyan-400 font-bold">expertos</span></h1>
        <div className="flex flex-wrap justify-center md:gap-10 w-full relative">
            <CustomTeamCard name={"Gian Carlo Marino"} imgPath={"gian.jpg"} description={descriptions[0]} />
            <CustomTeamCard name={"Mauricio Quispe Estrada"} imgPath={"mauricio.jpg"} description={descriptions[1]} />
            <CustomTeamCard name={"Joaquin Gonzales"} imgPath={"joaquin.jpg"} description={descriptions[2]} />
        </div>
    </>
}

export default Team;