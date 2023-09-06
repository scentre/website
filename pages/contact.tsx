import {Button} from "../components";
import Image from "next/image";
import React, { useState } from 'react';

const accordionData = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur. Quam?',
        info: 'Lorem ipsum dolor sit amet consectetur. At non risus consectetur amet faucibus pellentesque massa pulvinar. Eget aliquet eros dictum egestas a velit lorem nulla. Non dolor sed egestas scelerisque. Ultrices adipiscing aliquet id lacus nunc faucibus fames. Id.',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur. Quam?',
        info: 'Lorem ipsum dolor sit amet consectetur. At non risus consectetur amet faucibus pellentesque massa pulvinar. Eget aliquet eros dictum egestas a velit lorem nulla. Non dolor sed egestas scelerisque. Ultrices adipiscing aliquet id lacus nunc faucibus fames. Id.',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur. Quam?',
        info: 'Lorem ipsum dolor sit amet consectetur. At non risus consectetur amet faucibus pellentesque massa pulvinar. Eget aliquet eros dictum egestas a velit lorem nulla. Non dolor sed egestas scelerisque. Ultrices adipiscing aliquet id lacus nunc faucibus fames. Id.',
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur. Quam?',
        info: 'Lorem ipsum dolor sit amet consectetur. At non risus consectetur amet faucibus pellentesque massa pulvinar. Eget aliquet eros dictum egestas a velit lorem nulla. Non dolor sed egestas scelerisque. Ultrices adipiscing aliquet id lacus nunc faucibus fames. Id.',
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet consectetur. Quam?',
        info: 'Lorem ipsum dolor sit amet consectetur. At non risus consectetur amet faucibus pellentesque massa pulvinar. Eget aliquet eros dictum egestas a velit lorem nulla. Non dolor sed egestas scelerisque. Ultrices adipiscing aliquet id lacus nunc faucibus fames. Id.',
    },
    {
        id: 6,
        title: 'Lorem ipsum dolor sit amet consectetur. Quam?',
        info: 'Lorem ipsum dolor sit amet consectetur. At non risus consectetur amet faucibus pellentesque massa pulvinar. Eget aliquet eros dictum egestas a velit lorem nulla. Non dolor sed egestas scelerisque. Ultrices adipiscing aliquet id lacus nunc faucibus fames. Id.',
    },

]
export default function Contact() {
const token = process.env.NEXT_PUBLIC_TOKEN
const [values, setValues] = useState({
    email: '',
    message: '',
})
    const [loading, setLoading] = useState<boolean>(false)
    const sendEmail = async (e: any) => {
    e.preventDefault();
        const paylod = {
            "subject": "Testing Emails",
            "to": [
                {
                    "name": "Sophia",
                    "email": "sophieabdillahi65@gmail.com"
                },
            ],
            "cc": [],
            "bcc": [],
            "attachments": [],
            "body": values.email,
            "description": values.message,
            "metaData": {}
        }
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ke/send/delivery-mode/email`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(paylod),
            })
        const result = await  res.json()
            console.log(result);
        }catch (error) {
            console.error("Error:", error);
        }

    }

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setValues({
            ...values, [name]: value,
        })
    }


    return (
        <main>
            <section
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-[#F2F4F7] w-full font-dmSans py-24 sm:px-5 xs:px-5 md:px-8">
                <div className="text-center">
                    <h1 className="text-[#00303E] text-5xl font-bold xs:text-3xl sm:text-3xl">We’d love to hear from you!</h1>
                    <p className="text-almostBlack text-xl mt-7 xs:text-base sm:text-base">We have offices across Africa.</p>
                </div>
                <form  className="w-[780px] mx-auto bg-white p-12 rounded-[20px] border-1 border-[#E5E5E5] mt-11 text-[#e5e5e5] font-inter xs:w-full sm:w-full sm:px-6 xs:px-6 md:w-full" onSubmit={sendEmail}>
                    <h3 className="text-center font-bold text-almostBlack text-base pb-10">What would you like to ask?</h3>
                    <hr/>
                    <div className="w-full text-[#7C7C7C] my-6">
                        <label className="block text-xs font-medium text-almostBlack mb-3">
                            EMAIL ADDRESS
                        </label>
                        <input placeholder="username@company.com" className="border-1 border-[#E5E5E5] rounded-[10px] w-full px-6 py-3 outline-none sm:text-sm xs:text-sm sm:px-4 xs:px-4" type
                        ="text" name = "email" value={values.email} onChange={handleChange}/>
                    </div>
                    <div className="w-full text-[#7C7C7C] my-6">
                        <label className="block text-xs font-medium text-almostBlack mb-3">
                            MESSAGE
                        </label>
                        <input className="w-full outline-none border-1 border-[#E5E5E5] rounded-[10px] h-20 py-6 px-6 xs:text-sm sm:text-sm sm:px-4 xs:px-4" placeholder="Add a message" onChange={handleChange} name="message"/>
                    </div>
                    <div className="text-center">
                        <Button child="Submit" className="w-[350px] text-white h-14 rounded-[10px] bg-darkGreen sm:w-full xs:w-full sm:rounded-48 xs:rounded-48" type="submit" />
                    </div>
                </form>
            </section>
            <section
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="py-24 px-20 xs:px-5 sm:px-5 xs:py-12 sm:py-12 lg:px-[72px] md:px-8">
                <div className="flex space-x-28 xs:grid sm:grid xs:gap-10 sm:gap-10 md:grid md:space-x-0 sm:space-x-0 xs:space-x-0 lg:space-x-0">
                        <h2 className="text-5xl font-bold sm:text-3xl xs:text-3xl lg:text-[28px] xl:hidden lg:hidden">Our Offices</h2>
                    <div className="grid xl:ml-32 text-almostBlack sm:gap-8 xs:gap-10 lg:gap-6 md:gap-6 md:grid-cols-2 md:mt-8 xl:w-[35%] lg:w-[35%]">
                        <h2 className="text-5xl font-bold sm:text-3xl xs:text-3xl lg:text-[28px] md:hidden sm:hidden xs:hidden">Our Offices</h2>
                        <div>
                            <h5 className="text-xl text-almostBlack font-semibold">Lagos, Nigeria</h5>
                            <address className="text-[#71717A] test-base mt-2">16 Afolabi Aina St, Avenue, Allen 101233, Ikeja.</address>
                        </div>
                        <div>
                            <h5 className="text-xl text-almostBlack font-semibold">Nairobi, Kenya</h5>
                            <address className="text-[#71717A] test-base mt-2">Wood Ave , Workify, 10th Floor, Nairobi, Kenya</address>
                        </div>
                        <div>
                            <h5 className="text-xl text-almostBlack font-semibold">Ibadan, Nigeria</h5>
                            <address className="text-[#71717A] test-base mt-2">1st floor, Cocoa house, Dugbe, Ibadan.</address>
                        </div>

                    </div>
                    <div className="sm:hidden xs:hidden md:hidden w-full flex justify-center mt-6">
                        <Image src="/countries.svg" alt="Countries" width={730} height={550} />
                    </div>
                    <div className="xl:hidden lg:hidden flex justify-center mt-8">
                        <Image src="/mob-map.svg" alt="Countries" width={355} height={255} />
                    </div>
                </div>
            </section>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="py-24 bg-[#F2F4F7] rounded-t-48 sm:px-5 xs:px-5 xs:py-12 sm:py-12 lg:px-[72px] md:px-6">
                <div className="w-[1030px] mx-auto flex items-center justify-between sm:w-full sm:grid xs:w-full xs:grid sm:gap-12 xs:gap-12 lg:w-full md:w-full md:space-x-4">
                    <div className="w-[275px] grid gap-3 sm:w-full xs:w-full md:w-full sm:border-b-2 sm:border-[#E5E5E5] xs:border-b-2 xs:border-[#E5E5E5] xs:pb-12 sm:pb-12">
                        <h4 className="text-xl text-[#18181B] font-semibold sm:text-lg xs:text-lg">Support</h4>
                        <p className="text-[#71717A] text-base sm:text-sm xs:text-sm">Our support team is here to help always</p>
                        <a href="mailto:support@imalipay.com" className="text-lg text-darkGreen font-medium">support@imalipay.com</a>
                    </div>
                    <div className="w-[250px] grid gap-3 sm:w-full xs:w-full md:w-full sm:border-b-2 sm:border-[#E5E5E5] xs:border-b-2 xs:border-[#E5E5E5] xs:pb-12 sm:pb-12">
                        <h4 className="text-xl text-[#18181B] font-semibold sm:text-lg xs:text-lg">Sales</h4>
                        <p className="text-[#71717A] text-base sm:text-sm xs:text-sm">If you have questions regarding sales, reach out to us</p>
                        <a href="mailto:hello@imalipay.com" className="text-lg text-darkGreen font-medium">hello@imalipay.com</a>

                    </div>
                    <div className="w-[250px] sm:w-full xs:w-full md:w-full">
                        <h4 className="text-xl text-[#18181B] font-semibold sm:text-lg xs:text-lg">Phone</h4>
                        <p className="text-[#71717A] text-base my-3 sm:text-sm xs:text-sm">Available from Mon - Fri. Between 8am - 5pm (EAT)</p>
                        <a href="tel:+23400000000" className="text-lg text-darkGreen font-medium">+23400000000</a>{" "}
                        <a href="tel:+25400000000" className="text-lg text-darkGreen font-medium">+25400000000</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
