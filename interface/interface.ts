export interface faqlist {
  question: string;
  answer: string;
  status: boolean;
}

export interface faqEdit extends faqlist {
  id: string;
}

// export interface faqRes {
//   sys_faq: faqlist[];
// }
