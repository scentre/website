import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Soon from '../Soon';

export default function ComingSoon() {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <Soon
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        );
      }}
    />
  );
}
