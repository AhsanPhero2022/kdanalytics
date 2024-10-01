import { UserProfile } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
const UserProfilePage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen py-8 bg-[#252134]">
        <UserProfile
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </>
  );
};

export default UserProfilePage;
