import React, { type FormEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import Title from "../../components/title/title.component";
import { withLayout } from "../../layout/layout.component";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext<any>();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("email/pass", email, password);

    if (email === "admin@example.com") {
      setJwtToken("abc");
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <section className="section">
      <Title tag="h2">login</Title>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fields}>
          <Input
            heading="email address"
            type="email"
            name="email"
            autoComplete="email-new"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            heading="password"
            type="password"
            name="password"
            autoComplete="email-new"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>login</Button>
      </form>
    </section>
  );
};

export default withLayout(Login);
