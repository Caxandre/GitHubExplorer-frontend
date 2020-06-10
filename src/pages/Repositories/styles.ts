import styled from 'styled-components';
import { shade } from 'polished';

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

export const Respositories = styled.div`
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

      strong {
        font-size: 18px;
        color: #66819a;
      }

      p {
        font-size: 16px;
        color: #737380;
        margin-top: 5px;
      }
    }

    ul {
      display: flex;
      list-style: none;
      margin-top: 20px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        & + li {
          margin-left: 20px;
        }

        span {
          font-size: 14px;
          color: #737380;
          margin-top: 4px;
        }

        svg {
          margin-right: 5px;
          color: #66819a;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #66819a;
    }
  }
`;

export const DetailBtn = styled.button`
  width: 100px;
  height: 40px;
  background: #9a9966;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.2s;
  margin-right: 10px;

  &:hover {
    background: ${shade(0.2, '#9a9966')};
  }
`;

export const RemoveBtn = styled.button`
  width: 100px;
  height: 40px;
  background: #9a6667;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#9a6667')};
  }
`;
