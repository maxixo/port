// Certifications not on Credly go here manually.
// Fields: title, issuer, date (display string), optional image + verify URL.
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  verify?: string;
};

export const certificates: Certificate[] = [];
