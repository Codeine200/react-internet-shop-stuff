import styles from "./LoginForm.module.css";
import {useState} from "react";
import {loginThunk} from "../model/loginThunk.ts";
import { closeLogin } from '@/features/auth/sign-in/model/loginFormSlice';
import closeIcon from '@/app/assets/images/close.svg';
import { useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { selectIsLoginOpen } from '@/features/auth/sign-in/model/selectors';
import { useAppDispatch } from '@/app/providers/StoreProvider/config/hooks';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const {user, error} = useAppSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLoginOpen = useAppSelector(selectIsLoginOpen);

    const handleSubmit = () => {
        dispatch(
            loginThunk({
                email,
                password,
            })
        );
    };

    if (user || !isLoginOpen) {
        return;
    }

    return (
      <>
        <div className="overlay"></div>
        <div className={styles.login}>  
          <div className={styles.header}>    
            <div className={styles.close}>
                <button
                    className={styles.closeButton}
                    type="button"
                    onClick={() => dispatch(closeLogin())}
                    aria-label="Close login window"
                >                        
                    <img src={closeIcon} alt="Close window" />    
                </button>
            </div>
          </div>          
              <input
                  type="text"
                  className={styles.input}
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />

              <input
                  type="password"
                  className={styles.input}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                  <button
                      className="actions-btn__btn actions-btn__primary btn-form"
                      onClick={handleSubmit}
                  >
                      Sign in
                  </button>
              </div>

              {error && (
                  <div className="error">
                      {error}
                  </div>
              )}
          </div>
      </>
    )
}