import React, { useState } from 'react';
import { useTimeout } from 'react-use';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  margin-top: 8rem;
  width: 500px;
  height: 220px;
  text-align: center;
  border: 2px solid ${(p) => p.theme.gray};

  > h1 {
    position: relative;
    margin: 1rem 0;
    font-size: 2rem;

    &::before {
      content: '';
      position: absolute;
      top: 3.25rem;
      left: 0;
      width: 100%;
      border-top: 2px solid ${(p) => p.theme.gray};
    }
  }

  > button {
    justify-content: center;
    margin-top: 2.5rem;
    padding: 0.75rem 0;
    width: 80%;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

function Login() {
  const [delay] = useTimeout(500);
  const [isLoading, toggleIsLoading] = useState(false);
  const { cookie } = useSelector((state) => state.auth);

  const onRedirect = () => window.location.reload();

  const onLogin = () => {
    toggleIsLoading(true);
    window.open('https://web.poe.garena.tw/', '_blank');
  };

  if (cookie) toggleIsLoading(true);
  if (!delay()) return null;

  return (
    <Main>
      <Form>
        <h1>Please Login In</h1>
        {isLoading ? (
          <Button
            className="p-button-danger"
            label="I Have Login"
            onClick={onRedirect}
          />
        ) : (
          <Button label="Sing In With Garena" onClick={onLogin} />
        )}
      </Form>
    </Main>
  );
}

export default Login;
