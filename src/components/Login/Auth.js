import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const REST_API_KEY = '59bb969ce2c3aaf4dbbeaf8d523ed2ce';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const CLIENT_SECRET = 'k5coT2Iask4lJce1rsUDG69Om3yqq9x3';

  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      const Token = res.data.access_token;
      console.log(res);
      console.log(Token);

      const res2 = await axios.post(
        'http://10.58.52.159:8000/auth/kakao/signin',
        {},
        {
          headers: { Authorization: Token },
        }
      );

      console.log(res2);

      const OurToken = res2.data.accessToken;

      localStorage.setItem('token', OurToken);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return null;
};
export default Auth;
