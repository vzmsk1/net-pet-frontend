import React, { type FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import Title from "../../components/title/title.component";
import { withLayout } from "../../layout/layout.component";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken, toggleRefresh } = useOutletContext<any>();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // build the request payload
    const payload = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include" as RequestCredentials,
      body: JSON.stringify(payload),
    };

    fetch("/authenticate", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.message);
        } else {
          setJwtToken(data.access_token);
          toggleRefresh(true);
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error);
      });
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
