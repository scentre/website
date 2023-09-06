import Button from '../Button';

interface BlogCardProp {
  image: string;
  date: string;
  title: string;
  moreinfo?: string;
  link: string;
}
export default function BlogCard({ link, image, date, title, moreinfo }: BlogCardProp) {
  return (
    <div className="w-1/2 bg-white py-4 px-4 rounded-xl sm:w-full sm:mb-6 xs:w-full xs:mb-6 md:w-full">
      <div className='flex space-x-4 items-center mb-2'>
        <p className='bg-greenOp rounded-3xl px-3 py-1 text-[#80B539]'>Blog</p>
        <p className="text-gray text-sm py-2">{date}</p>
      </div>
      <img src={image} alt="blog-image" className="rounded-2xl w-full sm:h-[300px] md:h-[300px]" />
      <h2 className="text-black lg:text-xl xl:text-xl font-medium sm:text-lg xs:text-lg mt-2">
          {title}
        </h2>
        <h2 className="text-[#6B778C] lg:text-sm xl:text-sm font-medium sm:text-xs xs:text-xs my-3">
          {moreinfo}
        </h2>
      <a className="hover:underline" href={link} target="_blank" rel="noreferrer">
      <Button child="Read more" icon="/arrow_right.svg" className="text-darkGreen font-medium text-lg flex items-center md:text-base"></Button>
      </a>
    </div>
  );
}
