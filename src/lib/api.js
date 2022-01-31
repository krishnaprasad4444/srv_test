const FIREBASE_DOMAIN = 'https://react-demo-c3cbc-default-rtdb.firebaseio.com';

export async function uploadData(xlData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/xldata.json`, {
    method: 'PUT',
    body: JSON.stringify(xlData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not upload data.');
  }
  return null;
}

export async function downloadData() {
  const response = await fetch(`${FIREBASE_DOMAIN}/xldata.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }

  return data;
}