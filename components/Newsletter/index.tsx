import { sanitize } from 'dompurify';
import { useState } from 'react';
import Button from '../Button';
import Loader from '../Loader';

type Props = {
  status: any;
  message: any;
  onValidated: any;
};

export default function Newsletter({ status, message, onValidated }: Props) {
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

    <div className="bg-[#00303E] font-graphik rounded-t-48">
      <div className=" w-full flex lg:px-14 xl:px-36 items-center justify-between lg:py-12 xl:py-14 sm:py-16 sm:px-[20px] sm:flex-col xs:py-16 xs:px-5 xs:flex-col md:py-16 md:px-10">
        <div>
          <h2 className="lg:text-lg xl:text-2xl pb-2 font-medium text-white tracking-wide sm:text-2xl sm:font-semibold md:text-2xl xs:text-xl xs:font-semibold">
            Join our newsletter
          </h2>
          <p className="text-white lg:text-sm xl:text-base tracking-wide sm:text-base sm:pt-2 xs:pt-2 xs:text-sm sm:text-almostWhite xs:text-almostWhite md:w-[300px] md:text-sm">
            Stay up to date with curated news and stories just for you.
          </p>
        </div>
        <div>
          <div className="flex lg:space-x-3 xl:space-x-4 sm:flex-col sm:space-x-0 sm:gap-6 sm:mt-8 md:space-x-3 xs:flex-col xs:space-x-0 xs:gap-6 xs:mt-8">
            {/* <Input
              placeholder="Enter your email"
              label='email'
              className=" border-[1px] border-white lg:py-4 xl:py-5 lg:px-2 xl:px-4 lg:w-60 xl:w-80 bg-transparent lg:text-sm xl:text-base rounded-full outline-none text-white sm:w-full xs:w-full sm:py-5 sm:px-[20px] md:py-4 md:px-5 xs:py-4 xs:px-10"
              type="email"
              onChange={(event: any) => setEmail(event?.target?.value)}
              onKeyUp={(event: any) => handleInputKeyEvent(event)}
            /> */}

            <label htmlFor='email'></label>
            <input type = 'email' id='email' placeholder='Enter your email'
            className='border-[1px] border-white lg:py-4 xl:py-5 lg:px-2 xl:px-4 lg:w-60 xl:w-80 bg-transparent lg:text-sm xl:text-base rounded-full outline-none text-white sm:w-full xs:w-full sm:py-5 sm:px-[20px] md:py-4 md:px-5 xs:py-4 xs:px-10'
            onChange={(event: any) => setEmail(event?.target?.value)}
            onKeyUp={(event: any) => handleInputKeyEvent(event)}
            />

            <Button
              child={status === 'sending' ? <Loader color="green" /> : 'Submit'}
              className="bg-white text-[#18181B] lg:text-sm xl:text-base px-1 lg:py-4 xl:py-5 rounded-full lg:w-24 xl:w-36 font-medium sm:w-full sm:py-5 sm:px-[140px] md:px-4 md:py-2 xs:w-full xs:py-4 xs:px-5 hover:bg-darkgreen transition-all hover:text-white hover:shadow-lg"
              onClick={handleFormSubmit}
            />
          </div>

          {error ? <div className="text-red-700 pt-2">{error}</div> : null}
          {'error' === status || error ? <div className="text-red-700 pt-2">{message}</div> : null}
          {'success' === status && 'error' !== status && !error && (
            <div
              className="text-green-200 font-bold pt-2"
              dangerouslySetInnerHTML={{ __html: sanitize(message) }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
