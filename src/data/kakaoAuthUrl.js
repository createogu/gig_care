
const CLIENT_ID = "http://localhost:3000/oauth/callback/kakao";
const REDIRECT_URI = "http://localhost:8080/kakao/code";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;