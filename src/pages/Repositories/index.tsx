import React, { useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { AiOutlineFork } from 'react-icons/ai';
import { GoIssueOpened } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import logoImg from '../../assets/logo.svg';

import { Header, Title, Respositories, DetailBtn, RemoveBtn } from './styles';

interface Repository {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner_login: string;
  owner_avatar_url: string;
  last_update: Date;
  formattedDate: string;
}

const Repositories: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function loadRepositories(): Promise<void> {
      const response = await api.get('repositories');

      const repositoriesFormatted = response.data.map(
        (repository: Repository) => ({
          ...repository,
          formattedDate: new Date(repository.last_update).toLocaleDateString(
            'en-US',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          ),
        }),
      );
      setRepositories(repositoriesFormatted);
    }
    loadRepositories();
  }, [repositories]);

  async function handleRemoveRepository(id: string): Promise<void> {
    try {
      await api.delete(`repositories/${id}`);
      setRepositories([]);
      toast.success('Repository removed!');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHubExplorer" />
        <Link to="/">Search Repositories</Link>
      </Header>
      <Title>Saved Repositories</Title>
      <Respositories>
        {repositories.map((repository) => (
          <article key={repository.id}>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
              <ul>
                <li>
                  <FiStar size={16} />
                  <span>{repository.stargazers_count}</span>
                </li>
                <li>
                  <AiOutlineFork size={16} />

                  <span>{repository.forks_count}</span>
                </li>
                <li>
                  <GoIssueOpened size={16} />
                  <span>{repository.open_issues_count}</span>
                </li>
                <li>
                  <span>Updated on {repository.formattedDate}</span>
                </li>
              </ul>
            </div>
            <Link to={`/repositories/${repository.id}`}>
              <DetailBtn type="button">Details</DetailBtn>
            </Link>
            <RemoveBtn
              type="button"
              onClick={() => handleRemoveRepository(repository.id)}
            >
              Remove
            </RemoveBtn>
          </article>
        ))}
      </Respositories>
    </>
  );
};

export default Repositories;
