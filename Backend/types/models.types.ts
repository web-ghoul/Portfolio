import { Document } from 'mongoose';

interface UserTypes extends Document {
  avatar: string;
  username: string;
  email: string;
  password: string;
  type: 'admin' | 'user';
}

interface FileTypes extends Document {
  name: string;
  file: string;
  description: string;
  uploader: object;
}

interface CertificateTypes extends Document {
  title: string;
  image: string;
}

interface ChatTypes extends Document {
  message: string;
  chatter: object;
}

interface TestimonialTypes extends Document {
  content: string;
  client: object;
}

interface ProjectTypes extends Document {
  name: string;
  description: string;
  images: string[];
  skills: object[];
  url: string;
  github: string;
}

interface SkillTypes extends Document {
  name: string;
  logo: string;
}

interface BlogTypes extends Document {
  title: string;
  body: string;
  tags?: string[];
  images?: object[];
  creator: object;
}

export {
  BlogTypes,
  CertificateTypes,
  ChatTypes,
  FileTypes,
  ProjectTypes,
  SkillTypes,
  TestimonialTypes,
  UserTypes,
};
