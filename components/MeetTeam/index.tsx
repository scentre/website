
import Link from 'next/link';
import Button from '../Button';

type Prop = {
  icon: string;
  name: string;
  JD: string;
  link: string;
};

const Member = ({ icon, name, JD, link }: Prop) => (
  <div className="xs:pt-4 sm:pt-6 md:pt-10">
    <img src={icon} alt="" className=" sm:h-[150px] sm:w-[200px] sm:rounded-xl w-[250px] h-[250px] rounded-2xl" />
    <div className="xs:pt-2 md:grid md:grid-cols-2 gap-12 sm:pt-3 md:pt-6  flex items-center justify-between lg:pt-2 xl:pt-4">
      <p className="sm:text-xs text-base font-bold">{name}</p>
      <Link href={link} target="blank"><img src="./linkedBlue.svg" alt="" className="" /> </Link>
    </div>
    <p className="text-[#101010] sm:text-xs text-sm">{JD}</p>
  </div>
);

export default function MeetTeam() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="4000"
      className="font-dmSans">
      <div className="xl:w-[1300px] mx-auto">
        <h1 className="text-center  xs:text-lg xs:px-3 sm:text-2xl sm:px-2 md:text-2xl lg:text-4xl xl:text-4xl font-bold">
          Meet the team spearheading success at ImaliPay
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="space-y-0 lg:space-y-8 xl:space-y-16 px-14 md:pt-8 xl:px-0 pt-10 sm:px-5 xs:px-5 md:px-10">
          <div className="xs:block xs:space-x-0 sm:place-items-center sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-6 md:place-items-center md:grid md:grid-cols-2 md:space-x-0 flex justify-center items-center space-x-14 ">
            <Member icon="/tatenda.svg" name="Tatenda Furusa" JD="CEO/Co-founder" link='https://www.linkedin.com/in/tatenda-furusa/'/>
            <Member icon="/sanmi.svg" name="Sanmi Akinmusire" JD="COO/Co-founder" link='https://www.linkedin.com/in/oluwasanmiakinmusire/' />
            <Member icon="/freeman.svg" name="Freeman Kuguyo" JD="Head of Engineering"  link='https://www.linkedin.com/in/freeman-kuguyo/'/>
            <Member icon="/rita-3.png" name="Rita Gakii" JD="Head of Commercial" link='https://www.linkedin.com/in/rita-njuguna-mcim-6146744a/'/>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="xs:block xs:space-x-0 sm:place-items-center sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-6  md:place-items-center md:grid md:grid-cols-2 md:space-x-0 flex justify-center items-center space-x-14">
            <Member icon="/alex.svg" name="Alexandria Akena" JD="Head of Customer Success" link='https://www.linkedin.com/in/alexandria-akena-b69a14111/'/>
            
            <Member icon="./felix.svg" name="Felix Mutua" JD="Software Engineer" link='#' />
            <Member icon="/shade.svg" name="Folasade Adedeji " JD="Operations Excellence Manager" link='https://www.linkedin.com/in/folasade-adedeji-bb0a4320b/' />
            <Member icon="./goke.svg" name="Adegoke Kester" JD="Business Development Manager" link='https://www.linkedin.com/in/adegoke-kester-67575b73/'/>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="xs:block xs:space-x-0 sm:place-items-center sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-6   md:place-items-center md:grid md:grid-cols-2 md:space-x-0 flex justify-center items-center space-x-14">
            <Member icon="/ik.svg" name="Ikechukwu Osuya" JD="Growth Manager" link='https://www.linkedin.com/in/ikechukwu-osuya-5054367a/' />
            <Member icon="/maryam.svg" name="Maryam Abdulsalam" JD="Associate Product Manager" link='https://www.linkedin.com/in/maryamabdulsalam4957/' />
            <Member icon="/img-1.svg" name="Darren Franks" JD="Advisor"  link='https://www.linkedin.com/in/darrenfranks/'/>
            <Member icon="/img-2.svg" name="Nyasha Mutsekwa" JD="Advisor" link='https://www.linkedin.com/in/nyasha-mutsekwa-046a346/' />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="xs:block xs:space-x-0 sm:place-items-center sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-6   md:place-items-center md:grid md:grid-cols-2 md:space-x-0 flex justify-center items-center space-x-14">
            <Member icon="/img-3.svg" name="Katharina Neureiter" JD="Advisor" link='https://www.linkedin.com/in/katharina-n-9b561335/' />
            <Member icon="/img-4.svg" name="Sibahle Magadla" JD="Advisor" link='https://www.linkedin.com/in/sibahle-magadla-1aa3a224/' />
            <Member icon="/img-5.svg" name="Aliya Shariff" JD="Advisor" link='https://www.linkedin.com/in/aliya-shariff/' />
            <Member icon="/img-6.svg" name="John Mukono" JD="Advisor" link='https://www.linkedin.com/in/john-mukono/' />
          </div>
        </div>

        <div className="text-center pt-20 sm:pt-12 sm:pb-12 xs:pt-12 xs:pb-12">
          <Link href="/pricing">
            <Button
              child="Become an ImaliStar"
              className="bg-[#00303E] text-white xs:px-9 xs:py-3 sm:py-3 py-6 sm:px-6 px-14 rounded-full md:py-4 md:px-4"
            />
          </Link>

          <p className="pt-4 xs:text-lg lg:text-2xl px-4">
            We have a couple of roles open. Interested in joining the team?
          </p>
        </div>
      </div>
    </div>
  );
}
