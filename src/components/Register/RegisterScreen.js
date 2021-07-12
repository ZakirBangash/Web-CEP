import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserRegistered } from '../../app/actions/userActions';
import {selectUser} from '../../features/counter/eCommerceSlice'
import { useNavigate } from 'react-router-dom';
import './RegisterScreen.css'
import Button from '@material-ui/core/Button';
import MessageBox from '../MessageBox';
import { css } from "@emotion/react";
import PuffLoader
from "react-spinners/PuffLoader";

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector(selectUser);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(getUserRegistered({name, email, password}));
      setLoading(true)
    }
  };


  
  useEffect(() => {
    if(userInfo.message){
      setLoading(false);
    }
    if (userInfo.name) {
      navigate(-1);
    }
  }, [userInfo]);

//   useEffect(() => {
//     if (userInfo) {
//       props.history.push(redirect);
//     }
//   }, [props.history, redirect, userInfo]);

const override = css`
  display: flex;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  
  border-color: red;
`;

  return (
    <div className="registerScreen">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="register-heading">Create Account</h1>
        </div>
        {/* {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>} */}
           {userInfo.message && <MessageBox variant="danger">{userInfo.message}</MessageBox>}
        <PuffLoader color='#9013FE' loading={loading} css={override} size={50} />

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <Button className="primary" type="submit">
            Register
          </Button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}