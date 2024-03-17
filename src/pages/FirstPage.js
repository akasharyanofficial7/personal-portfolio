import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const FirstPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/second");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="bg-purple-800 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl mb-4"> </h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClimbingBoxLoader
            color="#C4E538"
            loading={loading}
            size={40}
            className="ml-2 rounded-full"
          />
          <p className="ml-2 bg-yellow-300"> </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default FirstPage;
