
declare interface IEducation {
  degree: string;
  start_date: string;
  end_date: string;
  college_name: string;
  college_logo: string;
}

declare interface IAward {
  title: string;
  issuer: string;
  description: string;
  expedition: Date;
  issuer_logo: string;
}
declare interface IExperience {
  position: string;
  start_date: string;
  end_date: string;
  company_name: string;
  description: string;
  company_logo: string;
}

declare interface ICertification {
  title: string;
  company_name: string;
  company_logo: string;
  expedition: Date;
  credential_url: string;
}

declare interface IPublication {
  title: string;
  editorial: string;
  publication_date: Date;
  author: string;
  publication_url: string;
  description: string;
  editorial_logo: string;
}

declare interface ISocialNetwork {
  social_url: string;
  social_icon: string;
}

declare interface ISidenav {
  title: string;
  ref: string;
}

declare interface IMeInfo {
  name: string;
  position: string;
  place: string;
  about_me: string;
  home: string;
  profile: string;
}
declare interface IPortfolio {
  title: string;
  url: string;
  image: string;
}