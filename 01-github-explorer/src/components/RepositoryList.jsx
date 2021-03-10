import { RepositoryItem } from './RepositoryItem';
import { useState, useEffect } from 'react';
import '../styles/repositories.scss';

//

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
