// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignInForm from "../../components/sign-in-form/sign-in-form-component";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";

import './authentication.styles.scss';

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   // console.log(response);
  // };

  return (
    <div className="authentication-container">
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
