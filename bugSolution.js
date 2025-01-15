/* bug.js */
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get(); // Attempting to access data immediately
  if (!doc.exists) {
    console.error('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
}

/* bugSolution.js */
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  try {
    const docSnap = await docRef.get();
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}
