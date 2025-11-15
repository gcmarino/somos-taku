import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

function CustomTeamCard(_data: {name: string, imgPath: string}) {
    return <>
        <div>
            <CardContainer className="inter-var">
                <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/10 bg-black border-white/20  w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                    >
                        {_data.name}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm max-w-sm mt-2 text-neutral-300"
                    >
                        Desarrollador 
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={_data.imgPath}
                            height="1000"
                            width="1000"
                            className="h-[500px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>

        </div>

    </>
}

export default CustomTeamCard;