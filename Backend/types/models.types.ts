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

interface OfferTypes extends Document {
  type: string;
  badget: string;
  time: string;
  client?: string;
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
  images?: object[];
  creator: object;
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
  ChatTypes,
  FileTypes,
  OfferTypes,
  ProjectTypes,
  TestimonialTypes,
  UserTypes,
};
