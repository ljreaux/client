import UserInfo from "./UserInfo";
import LoginForm from "./LoginForm";

export default function Account({ token, setToken, myInfo, setMyInfo }) {
  return (
    <div className="component">
      {token ? (
        <UserInfo setToken={setToken} myInfo={myInfo} setMyInfo={setMyInfo} />
      ) : (
        <LoginForm setToken={setToken} />
      )}
    </div>
  );
}
