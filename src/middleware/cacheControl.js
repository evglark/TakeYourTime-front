export default function cacheControl(req, res, next) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  next();
}
