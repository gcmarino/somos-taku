
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Experience() {
    return (
        <>
            <h1 id="experience" className="text-center text-5xl scroll-mt-28">Nuestra <span className="text-cyan-400 font-bold">experiencia</span></h1>
            <BentoGrid className="mx-auto md:auto-rows-[25rem] mt-8">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-24 rounded-xl  bg-dot-white/[0.2]  mask-[radial-gradient(ellipse_at_center,white,transparent)]  border  border-white/20  bg-black"></div>
);
const items = [
    {
        title: "App Movil Makro TODO",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "App Musica 3B",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Sistema X",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Portal Colher",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
