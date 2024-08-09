import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
export default function LoginUserinfo() {
  const { email } = useAuth();
  useEffect(() => {
    email;
  }, [email]);
  return (
    <div >
      {/* <div className="row bg-dark mt-1 text-white">
        <div className="col">
          <p className="text-end">Welcome : {email}</p>
        </div>
      </div> */}
    </div>
  );
}