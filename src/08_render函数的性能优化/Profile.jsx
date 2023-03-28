import { memo } from "react";

const Profile = memo(function (props) {
  console.log("Profile render");

  const { message } = props;
  return (
    <div>
      <h1>Prfile -- {message}</h1>
    </div>
  );
});
export default Profile;
