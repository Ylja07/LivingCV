export interface Document { // Documents can be CV, certificates, etc.
    id: string;
    userId: string; // FK -> User.id
    title: string;
    type: string;
    file: string;
  }
  