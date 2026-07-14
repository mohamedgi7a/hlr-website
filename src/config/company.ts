type CompanyConfig = {
  companyNameAr: string;
  companyNameEn: string;
  shortName: string;
  phone: string;
  whatsapp: string;
  email: string;
  addressAr: string;
  addressEn: string;
  googleMapsUrl: string;
  socialLinks: { linkedin: string; x: string; instagram: string };
};

export const company: CompanyConfig = {
  companyNameAr: "شركة الحلول للموارد البشرية",
  companyNameEn: "Human Resources Solutions",
  shortName: "HLR",
  phone: "",
  whatsapp: "",
  email: "",
  addressAr: "",
  addressEn: "",
  googleMapsUrl: "",
  socialLinks: {
    linkedin: "",
    x: "",
    instagram: ""
  }
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
