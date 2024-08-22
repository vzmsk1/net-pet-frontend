import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [tickInterval, setTickInterval] = useState<NodeJS.Timer | null>(null);

  const navigate = useNavigate();

  const logout = () => {
    const requestOptions = {
      method: "GET",
      credentials: "include" as RequestCredentials,
    };

    fetch("/logout", requestOptions)
      .catch((error) => {
        console.log("error logging out", error);
      })
      .finally(() => {
        setJwtToken("");
        toggleRefresh(false);
      });

    navigate("/login");
  };

  const toggleRefresh = useCallback(
    (status: boolean) => {
      if (status) {
        console.log("turning on ticking");

        const i = setInterval(() => {
          const requestOptions = {
            method: "GET",
            credentials: "include" as RequestCredentials,
          };

          fetch(`/refresh`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
              if (data.access_token) {
                setJwtToken(data.access_token);
              }
            })
            .catch((error) => {
              console.log("user is not logged in");
            });
        }, 600000);

        setTickInterval(i);

        console.log("setting tick interval to", i);
      } else {
        console.log("turning off ticking");
        console.log("turning off tickInterval", tickInterval);

        tickInterval && clearInterval(tickInterval);
        setTickInterval(null);
      }
    },
    [tickInterval],
  );

  useEffect(() => {
    if (jwtToken === "") {
      const requestOptions = {
        method: "GET",
        credentials: "include" as RequestCredentials,
      };

      fetch(`/refresh`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            setJwtToken(data.access_token);
            toggleRefresh(true);
          }
        })
        .catch((error) => {
          console.log("user is not logged in", error);
        });
    }
  }, [jwtToken, toggleRefresh]);

  return (
    <>
      <Outlet
        context={{
          jwtToken,
          setJwtToken,
          logout,
          toggleRefresh,
        }}
      />
    </>
  );
}

export default App;
