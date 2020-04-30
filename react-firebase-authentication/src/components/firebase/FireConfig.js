import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import react, {Component} from 'react';

const config = {
  apiKey: "AIzaSyDdz2oSiUgXMoWey-EIm2-edPht6Y30Ma8",
  authDomain: "react-firebase-authentic-b26cf.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-b26cf.firebaseio.com",
  projectId: "react-firebase-authentic-b26cf",
  storageBucket: "react-firebase-authentic-b26cf.appspot.com",
  messagingSenderId: "559785689354",
};

class apps extends Component {
  constructor() {
    app.initializeApp(config);

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();
    
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}
export default apps;




