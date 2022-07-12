import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function KakaoRedirectHandeler(props) {
  const [temp, SetTemp] = useState(null);
  const navigate = useNavigate();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACK_BASE_URL +
            `/construct/user/KakaoLogin.do?code=${code}`
        );
        let rtnData = res.data;
        if (rtnData != null) {
          if (rtnData.accountYn == "N") {
            if (
              window.confirm("사용자 정보가 없습니다. 회원가입 하시겠습니까?")
            ) {
              navigate("/helpler/SignUp", {
                state: { userProfile: rtnData.userProfile },
              });
            }
          } else {
            window.localStorage.setItem(
              "userInfo",
              JSON.stringify(rtnData.userProfile)
            );
            alert(rtnData.userProfile.userNm + "님 반갑습니다.");
            navigate("/" + props.menuGb);
          }
        }
      } catch (e) {
        console.error(e);
        navigate("/");
      }
    })();
  }, [temp]);
}
