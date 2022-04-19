import { IApp } from 'AppTypes';
import Counter from '../features/counter/counter';

const App = ({ showDate }: IApp) => (
    <>
        <h1>
            My React and TypeScript App from Scratch!{' '}
            {showDate && new Date().toLocaleDateString()}
        </h1>
        <Counter />
    </>
);

export default App;
