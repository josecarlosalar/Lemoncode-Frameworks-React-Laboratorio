import React from "react";
import { ProfileContext } from "./profile.context";
import { createEmptyUserProfile, UserProfile } from "./profile.vm";

interface Props {
    children: React.ReactNode;
  }

export const ProfileProvider: React.FC<Props> = ({ children }) => {
  const [userProfile, setUserProfile] = React.useState<UserProfile>(
    createEmptyUserProfile()
  );

  return (
    <ProfileContext.Provider
      value={{
        userName: userProfile.userName,
        setUserProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};