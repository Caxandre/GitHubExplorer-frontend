import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { api } from '../../services/api';
import logoImg from '../../assets/logo.svg';

import {
  Header,
  RepositoryInfo,
  Title,
  PullRequests,
  Contributors,
} from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner_login: string;
  owner_avatar_url: string;
}

interface Contributor {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface PullRequest {
  id: string;
  html_url: string;
  state: string;
  title: string;
  number: number;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [pull_requests, setPull_requests] = useState<PullRequest[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadRepository(): Promise<void> {
      const response = await api.get(`repositories/${params.repository}`);
      setRepository(response.data);
      setContributors(response.data.contributors);
      setPull_requests(response.data.pulls);
    }
    loadRepository();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHubExplorer" />
        <Link to="/">Search Repositories</Link>
        <Link to="/repositories">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner_avatar_url}
              alt={repository.owner_login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      {pull_requests.length > 0 ? (
        <>
          <Title>Pull Requests</Title>
          <PullRequests>
            {pull_requests.map((pull) => (
              <a key={pull.id} href={pull.html_url}>
                <div>
                  <strong>
                    #{pull.number} - {pull.title}
                  </strong>
                  <p>{pull.state}</p>
                </div>
                <FiChevronRight size={20} />
              </a>
            ))}
          </PullRequests>
        </>
      ) : null}
      <Title>Contributors</Title>
      <Contributors>
        {contributors.map((contributor) => (
          <a key={contributor.id} href={contributor.html_url}>
            <img src={contributor.avatar_url} alt={contributor.login} />
            <div>
              <strong>{contributor.login}</strong>
            </div>
          </a>
        ))}
      </Contributors>
    </>
  );
};

export default Repository;
