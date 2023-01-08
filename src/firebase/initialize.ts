import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ3uP8R2t6vpO-Kzycx1-E7xQTuLoAmP4",
  authDomain: "bm-asb-sample-work.firebaseapp.com",
  projectId: "bm-asb-sample-work",
  storageBucket: "bm-asb-sample-work.appspot.com",
  messagingSenderId: "959625071617",
  appId: "1:959625071617:web:c643bb9a3fe1ffbe56c400",
  measurementId: "G-D6RFEXCFLB",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
