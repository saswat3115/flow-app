import React, { useCallback, useState } from 'react';
import './login.css';
import { authenticate } from '../../redux/auth-reducer/reducer';
import { connect } from 'react-redux';

const Login = ({ history, authenticate }) => {

  const [email, setEmail] = useState('');

  const login = useCallback((emailId) => {
    authenticate({
      email: emailId,
    });
    history.push('/home');
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <button className="btn btn-primary" onClick={() => login(email)}>Login</button>
                </div>
              </div>
          </div>
  </div>;
}


export default connect(null, {
  authenticate
})(Login);