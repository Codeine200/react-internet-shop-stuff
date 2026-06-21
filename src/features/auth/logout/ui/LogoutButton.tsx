import {useAppDispatch} from "@/app/providers/StoreProvider/config/hooks.ts";
import {logout} from "@/features/auth/sign-in/model/authSlice.ts";
import logoutIcon from '@/app/assets/images/logout.svg';
import styles from "./LogoutButton.module.css";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(logout())} className={styles.logoutBtn}>
            <img src={logoutIcon} alt="logout" />
        </button>
    );
};