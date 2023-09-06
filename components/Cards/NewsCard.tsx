import Button from "../Button";

interface NewsCardProps {
    icon: string,
    info: string,
    link: string
}

export default function NewsCard ({icon, info, link}: NewsCardProps) {
    return (
       <div className="w-[275px] border-[1px] border-[#f4f4f4] rounded-xl p-4 drop-shadow-3xl h-[250px] flex flex-col justify-between sm:w-full md:w-full xs:w-full xs:pt-6 sm:pt-6 md:pt-6">
        <img src = {icon} alt="icon" className="w-16 h-10" />
        <p className="text-base text-333333 md:pt-[18px] lg:pt-5 xl:pt-[18px] pb-0">{info}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <Button child="Read more" icon="/arrow_right.svg" className="text-darkGreen font-medium text-lg flex items-center md:text-base"></Button>
          </a>
       </div>
    )
}