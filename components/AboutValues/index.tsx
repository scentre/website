type Prop = {
  icon: any;
  title: string;
  content: string;
};

const Comp = ({ icon, title, content }: Prop) => (
  <div className="flex justify-center items-center lg:w-[600px] xl:w-[600px]">
    <img src={icon} alt="" className="sm:pr-8 pr-10 xs:w-[80px] sm:w-[80px] w-[120px]" />
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-[#667085]">{content}</p>
    </div>
  </div>
);

export default function AboutValue() {
  return (
    <div data-aos="fade-up" data-aos-duration="4000" className="my-28">
      <div className="xl:w-[1300px] mx-auto xs:px-5 sm:px-8 px-10 xl:px-14  font-dmSans">
        <h2 className="xs:text-2xl sm:text-3xl text-5xl font-semibold pb-8">
          We are anchored by our values
        </h2>

        <div  data-aos="fade-up"
          data-aos-duration="4000" className="space-y-14">
          <div className="w-full xs:block xs:space-x-0 xs:space-y-6 md:space-y-10 sm:block md:block flex justify-between items-center sm:space-x-0 sm:space-y-10 lg:space-x-20 xl:space-x-28">
            <Comp
              icon="./innovation.svg"
              title="Innovation"
              content="We think without the box, we’ve thrown it away, nothing is impossible"
            />
            <Comp
              icon="./learning.svg"
              title="Continuous Learning"
              content="The learning never stops, the only way to be an expert is to always be a student."
            />
          </div>
          <div className="w-full xs:block xs:space-x-0 xs:space-y-10 md:block sm:block flex justify-between items-center sm:space-x-0 md:space-y-10 sm:space-y-10  xl:space-x-28 lg:space-x-20">
            <Comp
              icon="./accountabilty.svg"
              title="Accountability"
              content="We take pride in ownership of what we do and we see it through to the end"
            />
             <Comp
              icon="./deliver.svg"
              title="Know, Understand & Deliver"
              content="We take a tailored approach, we seek to understand first before we deliver. "
            />
          </div>

        </div>
      </div>
    </div>
  );
}