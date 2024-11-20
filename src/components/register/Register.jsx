import React, { useState } from 'react';
import './style.css';
import { useCart } from '../../context/CartContext';
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from '../../auth/Auth';
import { message } from 'antd';

const Register = () => {
  const { isModalOpen, closeModal } = useCart();
  const [isLoginView, setIsLoginView] = useState(true);

  if (!isModalOpen) return null;

  const switchToRegister = () => setIsLoginView(false);
  const switchToLogin = () => setIsLoginView(true);


  // const [emailOrPhone, setEmailOrPhone] = useState("");
  // const [otp, setOtp] = useState("");
  // const [step, setStep] = useState(1);
  // const [userDetails, setUserDetails] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   age: "",
  // });
  // const [isResendDisabled, setIsResendDisabled] = useState(false);
  // const [resendTime, setResendTime] = useState(30);

  // const startResendTimer = () => {
  //   setIsResendDisabled(true);
  //   let timer = 30;
  //   const interval = setInterval(() => {
  //     timer -= 1;
  //     setResendTime(timer);
  //     if (timer === 0) {
  //       setIsResendDisabled(false);
  //       clearInterval(interval);
  //       setResendTime(30);
  //     }
  //   }, 1000);
  // };

  // const handleSendOtp = async () => {
  //   if (!emailOrPhone) {
  //     message.warning("Iltimos, email yoki telefon raqamingizni kiriting.");
  //     return;
  //   }
  //   try {
  //     // Send OTP functionality here
  //     setStep(2);
  //     startResendTimer();
  //   } catch (err) {
  //     message.warning(err.message);
  //   }
  // };

  // const handleResendOtp = () => {
  //   handleSendOtp();
  // };

  // const handleVerifyOtp = () => {
  //   if (!otp) {
  //     message.error("Iltimos, tasdiqlash kodi kiriting.");
  //     return;
  //   }
  //   setStep(3);
  // };

  // const handleRegister = async () => {
  //   try {
  //     const token = ""; // Replace with real token logic
  //     localStorage.setItem("authToken", token);
  //     message.success("Muvaffaqiyatli ro'yxatdan o'tdingiz.");
  //   } catch (err) {
  //     message.warning(err.message);
  //   }
  // };

  const handleGoogleRegister = async () => {
    try {
      const userCredential = await auth.signInWithPopup(googleProvider);
      const user = userCredential.user;

      const myData = {
        name: user._delegate.displayName,
        email: user._delegate.email,
        photoURL: user._delegate.photoURL,
      }

      localStorage.setItem("myData", JSON.stringify(myData))

      const token = await user.getIdToken();
      localStorage.setItem("authToken", token);
      message.success("Goole orqali muvaffaqiyatli chiqdingiz.");
    } catch (err) {
      message.warning(err.message);
    }
  };


  // const handleLogout = async () => {
  //   try {
  //     await auth.signOut();
  //     localStorage.removeItem("authToken");
  //     message.success("Tizimdan muvaffaqiyatli chiqdingiz.");
  //   } catch (err) {
  //     message.warning(err.message);
  //   }
  // };

  return (
    <div className="register-Container">
      <div className={`container ${!isLoginView ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up (Register) panel */}
        <div className="form-container sign-up-container">
          <form>
            <button type="button" onClick={closeModal} id="close-modal">
              <IoClose />
            </button>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a onClick={handleGoogleRegister} href="#" className="social">
                <FcGoogle />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In (Login) panel */}
        <div className="form-container sign-in-container">
          <form>
            <button type="button" onClick={closeModal} id="close-modal">
              <IoClose />
            </button>
            <h1>Sign In</h1>
            <div className="social-container">
              <a onClick={handleGoogleRegister} href="#" className="social">
                <FcGoogle />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={switchToLogin}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={switchToRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
