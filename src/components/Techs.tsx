import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const techs1 = [
    { image: "/techs/html.png", title: "Node Js" },
    { image: "/techs/html.png", title: "Deno" },
    { image: "/techs/html.png", title: "Bun" },
    { image: "/techs/html.png", title: ".NET" },
    { image: "/techs/html.png", title: "Entity Framework" },
    { image: "/techs/html.png", title: "SQL Server" },
    { image: "/techs/html.png", title: "Postgres" },
    { image: "/techs/html.png", title: "Mongo DB" },
    { image: "/techs/html.png", title: "Jenkins" },
    { image: "/techs/html.png", title: "Jira" },
];

const techs2 = [
    { image: "/techs/html.png", title: "Bitbucket" },
    { image: "/techs/html.png", title: "Azure" },
    { image: "/techs/html.png", title: "NATS" },
    { image: "/techs/html.png", title: "RabbitMQ" },
    { image: "/techs/html.png", title: "Docker" },
    { image: "/techs/html.png", title: "Git" },
    { image: "/techs/html.png", title: "GitHub" },
    { image: "/techs/html.png", title: "Python" },
    { image: "/techs/html.png", title: "Flutter" },
    { image: "/techs/html.png", title: "Angular" },
    { image: "/techs/html.png", title: "GraphQL" },
];



function Techs() {
    return (
        <>
            <h1 id="techs" className="text-center text-5xl scroll-mt-28">Esto es <span className="text-cyan-400 font-bold">lo que sabemos</span></h1>
            <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-4">
                <InfiniteMovingCards
                    items={techs1}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={techs2}
                    direction="left"
                    speed="slow"
                />
            </div>
        </>
    );
}

export default Techs;
