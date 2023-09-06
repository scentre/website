type CardProps = {
  icon: string;
  title: string;
  details: string;
};

export default function WhyCards({ icon, title, details }: CardProps) {
  return (
    <div className="w-[264px] flex flex-col justify-center items-center sm:w-full">
      <img src={icon} alt="icon" className="lg:w-[70px] xl:w-[100px] sm:w-[60px] md:w-[60px]" />
      <div className="text-center mt-7">
        <h3 className="text-shadeBlack lg:text-lg xl:text-2xl font-medium sm:text-lg">{title}</h3>
        <p className="text-shadegray text-sm mt-2 sm:text-sm">{details}</p>
      </div>
    </div>
  );
}
