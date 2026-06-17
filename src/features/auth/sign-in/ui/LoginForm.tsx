import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  return (
      <div className={styles.login}>
          <input type="text" className={styles.input} name="email" placeholder="Email" />
          <input type="text" className={styles.input} name="password" placeholder="Password"/>
      </div>
  )
}