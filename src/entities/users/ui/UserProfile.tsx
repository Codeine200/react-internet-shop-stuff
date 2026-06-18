import styles from "./UserProfile.module.css";
import avatar from '@/app/assets/images/avatar.png';
import logoutIcon from '@/app/assets/images/logout.svg';
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {logout} from "@/features/auth/sign-in/model/authSlice.ts";
import {useAppDispatch} from "@/app/providers/StoreProvider/config/hooks.ts";

export const UserProfile = () => {
    const dispatch = useAppDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

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
          <button className={styles.logoutBtn} onClick={handleLogout}>
              <img src={logoutIcon} alt=""/>
          </button>
      </div>
    );
}