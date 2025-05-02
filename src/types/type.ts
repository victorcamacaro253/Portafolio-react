// types.ts or at top of your component
export interface Texts {
  inicio?: Array<{ es: { carreer: string }; en: { carreer: string } }>;
  sobreMi?: Array<{
    es: {
      title: string;
      span: string;
      presentation: string;
      // include other fields used in "sobreMi"
    };
    en: {
      title: string;
      span: string;
      presentation: string;
      // include other fields used in "sobreMi"
    };
  }>;
  footer?: any;
  skills?: any;
  projects?: any;
  curriculum?: any;
  Portfolio?: any;
  contact?: any;
  aboutme?: any;
}

  