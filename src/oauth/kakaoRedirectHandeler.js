import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function KakaoRedirectHandeler() {
  const [temp, SetTemp] = useState(null);
  const navigate = useNavigate();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/construct/user/KakaoLogin.do?code=${code}`
        );
        let rtnData = res.data;

        // window.localStorage.setItem(
        //   "userInfo",
        //   JSON.stringify(rtnData.userProfile)
        // );

        if (rtnData.accountYn == "N") {
          if (
            window.confirm("사용자 정보가 없습니다. 회원가입 하시겠습니까?")
          ) {
            navigate("/SignUp", {
              state: { userProfile: rtnData.userProfile },
            });
          }
        } else {
          console.log(rtnData.userProfile);
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(rtnData.userProfile)
          );
          navigate("/");
        }
      } catch (e) {
        console.error(e);
        navigate("/");
      }
    })();
  }, [temp]);
}
