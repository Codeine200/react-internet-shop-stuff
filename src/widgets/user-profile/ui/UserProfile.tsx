import styles from "./UserProfile.module.css";
import avatar from '@/app/assets/images/avatar.png';
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/StoreProvider/config/store";
import {LogoutButton} from "@/features/auth/logout";

export const UserProfile = () => {
    const auth = useSelector((state: RootState) => state.auth);

    if (!auth.user) {
        return null;
    }

    const user = auth.user;

    return (
      <div className={styles.user}>
          <div className={styles.avatar}>
              <img src={avatar} alt="avatar" className={styles.avatarPhoto}/>
          </div>
          <div className={styles.userName}>{user.email}</div>
          <LogoutButton />
      </div>
    );
}