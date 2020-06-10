import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { gitHubApi, api } from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Header, Title, Form, Respositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Repo {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: Date;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Main: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('Enter user name');
      return;
    }

    try {
      const response = await gitHubApi.get(`users/${newUser}/repos`, {
        params: {
          per_page: 20,
        },
      });

      setRepositories(response.data);
      setInputError('');
      setNewUser('');
    } catch (err) {
      setInputError('User not found');
    }
  }

  async function handleGetRepository(repo: Repo): Promise<void> {
    try {
      await api.post('repositories', {
        full_name: repo.full_name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        open_issues_count: repo.open_issues_count,
        owner_login: repo.owner.login,
        owner_avatar_url: repo.owner.avatar_url,
        last_update: repo.updated_at,
      });

      setRepositories([...repositories]);
      toast.success('Repository saved!');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHubExplorer" />
        <Link to="/repositories">Saved Repositories</Link>
      </Header>
      <Title>Search repositories by user on GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleSearch}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Respositories>
        {repositories.map((repo) => (
          <article key={repo.full_name}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <button
              type="button"
              onClick={() => handleGetRepository(repo as Repo)}
            >
              Save
            </button>
          </article>
        ))}
      </Respositories>
    </>
  );
};

export default Main;
