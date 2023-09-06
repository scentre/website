import {Dispatch, SetStateAction, useState} from "react";
import {MdOutlineKeyboardArrowDown , MdOutlineKeyboardArrowUp} from 'react-icons/md'

type AccordionProp = {
    title: string,
    info: string,
    id: number,

}

export default function Accordion ({title , info , id} : AccordionProp) {
    const [open, setOpen] = useState<boolean>(false)
    const openAccordion = (id: number) => {
        if(id){
            setOpen(!open)
        }
    }

    return (
        <div className="py-6">
            <div className="text-white flex items-center justify-between font-medium sm:w-full sm:flex xs:w-full xs:flex">
                <h2 className="text-2xl sm:text-lg xs:text-lg">{title}</h2>
                <div className="" onClick={() => openAccordion(id)}>
                    {open ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                </div>
            </div>
            <div className="mt-3">
                {open &&  <div className="text-lg leading-8 text-white sm:text-sm xs:text-sm">{info}</div>}
            </div>

        </div>
    )
}