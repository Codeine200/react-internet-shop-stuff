import styles from "./LoginForm.module.css";
import {useAppDispatch} from "@/app/providers/StoreProvider/config/hooks.ts";
import {useState} from "react";
import {loginThunk} from "../model/loginThunk.ts";
import {useAppSelector} from "../../../../app/providers/StoreProvider/config/hooks.ts";


export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const {user, error} = useAppSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        dispatch(
            loginThunk({
                email,
                password,
            })
        );
    };

    if (user) {
        return;
    }

    return (
      <>
        <div className="overlay"></div>
          <div className={styles.login}>
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