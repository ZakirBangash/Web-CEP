import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../app/actions/userActions';
import {selectUser} from '../../features/counter/eCommerceSlice'
import { useNavigate } from 'react-router-dom';
import './SigninScreen.css';
import Button from '@material-ui/core/Button';
import MessageBox from '../MessageBox';
import { css } from "@emotion/react";
import PuffLoader
from "react-spinners/PuffLoader";


export default function SigninScreen(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userInfo = useSelector(selectUser);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if(userInfo.message){
      setLoading(false);
    }
    if (userInfo.name) {
      navigate(-1);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
     e.preventDefault();

    dispatch(getUser({email,password}));
    setLoading(true);
  };

console.log(!userInfo.message? 'zakir':'no its wrong')

const override = css`
  display: flex;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  
  border-color: red;
`;
  return (
    <div className="signinScreen">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="SignIn-heading">Sign In</h1>
        </div>
        {userInfo.message && <MessageBox variant="danger">{userInfo.message}</MessageBox>}
        <PuffLoader color='#9013FE' loading={loading} css={override} size={50} />
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <Button className="primary" type="submit">
            Sign In
          </Button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}