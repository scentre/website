import DOMPurify from 'dompurify';


export const sanitize = ( content: string ) => {
	return typeof window == 'undefined' ? DOMPurify.sanitize( content ) : content;
};