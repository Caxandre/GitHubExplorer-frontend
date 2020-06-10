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

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #66819a;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #66819a;
      }

      span {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }

      svg {
        margin-right: 18px;
      }
    }
  }
`;
export const Title = styled.h1`
  font-size: 18px;
  color: #66819a;
  margin-top: 50px;
`;

export const PullRequests = styled.div`
  margin-top: 20px;

  a {
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

    & + a {
      margin-top: 16px;
    }

    div {
      flex: 1;
      margin: 0 16px;

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
    svg {
      margin-left: auto;
      color: #66819a;
    }
  }
`;

export const Contributors = styled.div`
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 5px;

  a {
    background: #fff;
    border-radius: 50px;
    max-width: 150px;
    padding: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;
      overflow: hidden;
      text-overflow: ellipsis;

      strong {
        font-size: 12px;
        color: #66819a;
      }
    }
  }
`;
