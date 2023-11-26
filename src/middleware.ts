export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/events-type',
    '/scheduled-events',
    '/integrations',
  ],
};
