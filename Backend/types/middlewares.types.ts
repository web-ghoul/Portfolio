import { Request } from 'express';

interface AuthorizationRequestTypes extends Request {
  userData?: { id: string; type: string };
}

export default AuthorizationRequestTypes;
