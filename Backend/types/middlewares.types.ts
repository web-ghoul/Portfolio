import { Request } from 'express';

interface AuthorizationRequestTypes extends Request {
  userData?: { id: string; type: string };
  file?: any;
  files?: any;
}

export default AuthorizationRequestTypes;
