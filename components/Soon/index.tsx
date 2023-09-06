import { sanitize } from 'dompurify';
import { useState } from 'react';
import Button from '../Button';
import Input from '../InputField';
import Loader from '../Loader';

type Props = {
  status: any;
  message: any;
  onValidated: any;
};

export default function Soon({ status, message, onValidated }: Props) {
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleFormSubmit = () => {
    setError('');

    console.log('>>>>>>email', email);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }
    const isFormValidated = onValidated({ EMAIL: email });

    // return isFormValidated;
    console.log('>>>>>>isValidate', isFormValidated);
    if (!email.includes('@')) {
      return setError('Please enter a valid email address');
    }
    setEmail('');
    return isFormValidated;
  };

  const handleInputKeyEvent = (event: any) => {
    setError('');
    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit();
    }
  };
  return (
    <div className="xs:px-6 sm:px-10 font-dmSans">
      <div
        className="flex items-center justify-center md:block sm:mt-10 xs:mt-10 md:mt-16 lg:mt-16 xl:mt-10 lg:space-x-20 space-x-80 md:space-x-9 sm:space-x-0 xs:space-x-0 xs:block sm:block 
      lg:w-[950px] xl:w-[1300px] mx-auto">
        <div>
          <h1 className="lg:text-3xl xl:text-6xl font-black tracking-wider text-[#014342] md:text-center sm:text-3xl xs:text-2xl xs:text-center animate-bounce md:text-2xl">
            Coming Soon
          </h1>
          <p className="text-xl text-[#101010] font-extrabold pt-10 xl:pt-20 md:text-center lg:pb-4 md:pb-3 sm:text-sm sm:pb-0 md:text-base">
            Get notified when we launch
          </p>
          <div className="flex lg:space-x-3 xl:space-x-4 sm:flex-col sm:space-x-0 sm:gap-6 sm:mt-8 md:space-x-3 xs:flex-col xs:space-x-0 xs:gap-6 xs:mt-8 xl:mt-2 md:justify-center sm:px-2">
            <Input
              placeholder="Enter your email"
              className=" border-[1px] border-[#014342] lg:py-4 xl:py-5 lg:px-2 xl:px-4 lg:w-60 xl:w-[280px] bg-transparent lg:text-sm xl:text-base rounded-full outline-none text-black sm:w-full xs:w-full sm:py-4 sm:px-5 md:py-4 md:px-5 xs:py-4 xs:px-5"
              type="email"
              onChange={(event: any) => setEmail(event?.target?.value)}
              onKeyUp={(event: any) => handleInputKeyEvent(event)}
            />
            <Button
              child={status === 'sending' ? <Loader color="white" /> : 'Submit'}
              className=" text-white lg:text-sm xl:text-base px-1 lg:py-4 xl:py-5 rounded-full lg:w-24 xl:w-36 font-medium sm:w-full sm:py-3 sm:px-[140px] md:px-4 md:py-2 xs:w-full xs:py-4 xs:px-5 bg-[#014342]"
              onClick={handleFormSubmit}
            />
          </div>
          {error ? <div className="text-red-700 pt-2">{error}</div> : null}
           {'error' === status || error ? <div className="text-red-700 pt-2">{message}</div> : null}
          {'success' === status && 'error' !== status && !error && (
            <div
              className="text-green-800 font-bold pt-2"
              dangerouslySetInnerHTML={{ __html: sanitize(message) }}
            />
          )}
        </div>

        <div className="md:flex md:justify-center sm:mt-14 xs:mt-10 md:mt-10">
          <img
            src="/jet.png"
            alt="jet"
            className="lg:w-[300px] xl:w-[400px] lg:pr-10 mx-auto  text-center md:pt-10 md:pr-0 sm:w-[300px] md:w-[300px]"
          />
        </div>
      </div>

      <div className="text-center pt-20 lg:mt-36">
        <div className="flex space-x-6 sm:space-x-0  xs:space-x-0 xs:justify-between sm:justify-between justify-center ">
          <img src="./tweet-black.png" className="w-3 h-4" alt="twitter" />
          <img src="./fb-black.png" className="w-3 h-4" alt="Facebook" />
          <img src="./in-black.png" className="w-3 h-4" alt="twitter" />
        </div>
        <p className="text-[#98A2B3] lg:pt-8 xl:pt-10 lg:text-sm xl:text-sm sm:text-sm sm:pt-7 xs:text-sm xs:mt-7 md:text-base md:pt-7 xs:text-center">
          © 2023 ImaliPay Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}
