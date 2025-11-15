import CustomTeamCard from "./CustomTeamCard";

function Team() {
    return <>
        <h1 className="text-center text-5xl">Conoce nuestro equipo de <span className="text-cyan-400 font-bold">expertos</span></h1>
        <div className="flex justify-center gap-10">
            <CustomTeamCard name={"Gian Carlo Marino"} imgPath={"gian.jpg"} />
            <CustomTeamCard name={"Mauricio Quispe Estrada"} imgPath={"mauricio.jpg"} />
            <CustomTeamCard name={"Joaquin Gonzales"} imgPath={"joaquin.jpg"} />

        </div>

    </>
}

export default Team;