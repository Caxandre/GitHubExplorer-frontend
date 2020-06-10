import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #66819a;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.5, '#66819a')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #66819a;
  margin-top: 60px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #66819a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props: FormProps) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 60px;
    background: #66679a;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#66679a')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Respositories = styled.ul`
  margin-top: 80px;
  max-width: 700px;

  article {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + article {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;
      flex-direction: column;
      align-items: flex-start;

      strong {
        font-size: 18px;
        color: #66819a;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    button {
      width: 100px;
      height: 40px;
      background: #66819a;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#66819a')};
      }
    }
  }
`;
