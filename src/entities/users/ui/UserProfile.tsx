import styles from "./UserProfile.module.css";
import avatar from '@/app/assets/images/avatar.png';
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/StoreProvider/config/store.ts";

export const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user) {
    return null;
  }

  return (
      <div className={styles.user}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" className={styles.avatarPhoto}/>
        </div>
        <div className={styles.userName}>{user.email}</div>
      </div>
  );
}