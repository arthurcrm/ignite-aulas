import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repositoryName="React" />
        <RepositoryItem repositoryName="Nodejs" />
        <RepositoryItem />
      </ul>
    </section>
  );
}
