
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import {
  ReactLogo,
  Card,
  ReadTheDocs,
  AnimatedLogo,
  HomePageContainer
} from './Home.styles';

export default function Home() {
  return (
    <HomePageContainer>
      <div>
        <a href="https://vite.dev" target="_blank">
          <AnimatedLogo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo src={reactLogo} className="react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>
        Click on the Vite and React logos to learn more
      </ReadTheDocs>
    </HomePageContainer>
  );
}