const {initializeApp} = require("firebase/app");
const {getAuth} = require("firebase/auth");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY || process.env.FB_API_KEY_LOCAL,
  authDomain: process.env.AUTH_DOMAIN || process.env.AUTH_DOMAIN_LOCAL,
  projectId: process.env.PROJECT_ID || process.env.PROJECT_ID_LOCAL,
  storageBucket: process.env.STORAGE_BUCKET || process.env.STORAGE_BUCKET_LOCAL,
  messagingSenderId: process.env.MSG_SENDER_ID || process.env.MSG_SENDER_ID_LOCAL,
  appId: process.env.APP_ID || process.env.APP_ID_LOCAL,
  measurementId: process.env.MEASUREMENT_ID || process.env.MEASUREMENT_ID_LOCAL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
module.exports = { auth };