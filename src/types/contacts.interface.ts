export interface IContacts {
  info: IContactInfo[]
  button: {
    link: string,
    id: string,
    title: string,
  }
}

export interface ILogo {
    id: string;
    link: string;
    alt: string;
}

interface IContactInfo {
  id: string,
  link: string,
  title_1: string,
  title_2: string
}