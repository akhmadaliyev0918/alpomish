import React, { useState } from 'react';
import './style.css';
import { useCart } from '../../context/CartContext';
import { IoClose } from "react-icons/io5";
<IoClose />

const Register = () => {
  const { isModalOpen, closeModal } = useCart(); // Context orqali modalni boshqarish
  const [isLoginView, setIsLoginView] = useState(true); // Log In yoki Registerni ko'rsatish

  if (!isModalOpen) return null; // Modal yopiq bo'lsa, hech narsa ko'rsatilmaydi

  const switchToRegister = () => setIsLoginView(false); // Registerga o'tish
  const switchToLogin = () => setIsLoginView(true); // Log In'ga qaytish

  return (
    <div className="register-Container">
      <div className={`container ${!isLoginView ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up (Register) panel */}
        <div className="form-container sign-up-container">
          <form>
            <button onClick={closeModal} id="close-modal">
              X
            </button>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        {/* Sign In (Login) panel */}
        <div className="form-container sign-in-container">
          <form>
            <button onClick={closeModal} id="close-modal">
              X
            </button>
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
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
            <button>Sign In</button>
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
