import React, { useCallback, useState, useEffect } from 'react';
import './login.css';
import { authenticate } from '../../redux/auth-reducer/reducer';
import { connect } from 'react-redux';

const Login = ({ history, authenticate }) => {

  const [email, setEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      history.push('/home');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback((emailId) => {
    if (emailId) {
      authenticate({
        email: emailId,
      });
      history.push('/home');
    } else {
      alert('Email is mandatory !');
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="login">
          <div className="login-section">
              <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                  <div className="form-group">
                   <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter any password to continue"
                    />
                  </div>
                  <button className="btn btn-primary btn-login" onClick={() => login(email)}>Login</button>
                </div>
              </div>
          </div>
  </div>;
}


export default connect(null, {
  authenticate
})(Login);