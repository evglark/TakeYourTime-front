import NextAuth from 'next-auth';

import { AuthConfig } from '../config';

const handler = NextAuth(AuthConfig);

export { handler as GET, handler as POST };
