export async function getServerSideProps() {
  const response = await fetch(process.env.API_URL + '/api/locales', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await response.json();
  return data.locales;
}
