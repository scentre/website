import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../Newsletter';

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "";

  // console.log(">>>>>>>mailchimpurl", MAILCHIMP_URL)

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
