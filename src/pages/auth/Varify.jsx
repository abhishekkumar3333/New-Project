import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Components/spiner/Spiner';

const Verify = ({ children }) => {
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("loginToken");

      if (!token) {
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          setLoading(false);
          navigate("/login");
          return;
        }

        const result = await response.json();
        console.log("Verified user:", result);
        setLoading(false); 

      } catch (error) {
        console.error("Auth verification failed:", error);
        setLoading(false); 
        navigate("/login");
      }
    };

    verifyAuth();
  }, [navigate]);

  if (loading) return <Spinner />;
  return <>{children}</>;
};

export default Verify;
