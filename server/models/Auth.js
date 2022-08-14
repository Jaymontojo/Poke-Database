const {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} = require('firebase/auth');
const { auth } = require('../../firebase/config');

class Auth {
  async register(email, password) {
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } catch(err){
      return err;
    }
  }
  async signin(email, password) {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch(err){
      return err;
    }
  }
}

module.exports = new Auth();