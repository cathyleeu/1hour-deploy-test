import 'dotenv/config';
import express from 'express';
import axios from 'axios';

const app = express();

app.set('PORT', 3000);

app.get('/auth/github', (_, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: process.env.GITHUB_CLIENT,
    scope: 'read:user',
  };

  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  return res.redirect(finalUrl);
});

app.get('/auth/github/callback', async (req, res) => {
  const { code } = req.query;
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const body = {
    client_id: process.env.GITHUB_CLIENT,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };

  try {
    const { data } = await axios.post(baseUrl, body, { headers: { Accept: 'application/json' } });
    const { access_token } = data;

    const apiUrl = 'https://api.github.com';
    const { data: userData } = await axios.post(`${apiUrl}/user`, {
      headers: { Authorization: `token: ${access_token}` },
    });

    const { login: nickname, id, avatar_url: avatarUrl } = userData;

    console.log(`userData: ${userData}`);

    return res.status(201).redirect('/');
  } catch (err) {
    console.error(err);
    return res.redirect(500, `/?loginError=서버 에러로 인해 로그인에 실패하였습니다. 잠시 후에 다시 시도해 주세요.`);
  }
});
app.use('/auth/', oauthRouter);

app.listen(app.get('PORT'), () => console.log(`${app.get('PORT')}번 포트에서 서버 실행 중 ✅`));
