import { IApp } from 'AppTypes';

const App = ({ showDate }: IApp) => (
    <h1>
        My React and TypeScript App from Scratch!{' '}
        {showDate && new Date().toLocaleDateString()}
    </h1>
);

export default App;
