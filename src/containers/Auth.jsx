import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Auth = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setLoading(false);

      if (!user) {
        navigate("/login");
      } else {
        setAuthUser(user);
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  return children;
};

export default Auth;
