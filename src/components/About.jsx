import { ColumnCard } from "./ColumnCard";
import { ButtonCard } from "./ButtonCard";
import { HoverImage } from "./HoverImage";
import { Icon } from "./Icon";

export const About = ({theme}) => {
    return (
        <div id="about" className="flex flex-wrap m-3 gap-6">
           
            <div className="flex flex-col gap-4 p-2"> {/* headshot and icons */} 
                <img className="object-cover w-40 aspect-square rounded-full" src='/cat.jpg'></img>
                <div className="flex gap-4 justify-center">
                    <Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
                    />
                    <Icon 
                        theme={theme} 
                        href={"http://www.linkedin.com/in/gabriel-welvaert-509444284"}
                        darkPath = "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    />
                    <Icon 
                        theme={theme} 
                        href={"mailto:gabewelvaert@gmail.com"}
                        darkPath = "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                    />
                </div>
            </div>

            <div className="hidden md:flex flex-col justify-center p-2">
                <div className="text-8xl font-bold">Gabriel</div>
                <div className="text-8xl font-bold">Welvaert </div>
            </div>

            <div className="flex flex-col gap-4 justify-center p-2">
                <div className="text-3xl">Full Stack Software Engineer</div>
                <div className="text-3xl">UVA CS 2023 | AWS SAA 2026</div>
            </div>
        </div>
    )
};