import { Container } from 'inversify';
import { render } from 'react-dom';

import { ContainerProvider } from '../src/provider';
import { useInjection } from '../src/useInjection';

// define symbol
const Storage = Symbol.for('useStorage');

// service
interface Storage {
  get(key: string): string;
  set(key: string, data: string): void;
}

const storageLocalStorageImpl: Storage= ({
  get(key: string) {
    return window.localStorage.getItem(key);
  },

  set(key: string, data: string) {
    return window.localStorage.setItem(key, data)
  }
});

// root
const App = () => {
  const container = new Container();
  container.bind(Storage).toConstantValue(storageLocalStorageImpl);

  return (
    <ContainerProvider container={container}>
      <Viewer />
    </ContainerProvider>
  )
}

const Viewer = () => {
  const storage = useInjection<Storage>(Storage);
  
  return (
    <div>
      <h2>Your data</h2>
      <pre>{storage.get('data')}</pre>

      <h2>Write</h2>
      <textarea value={storage.get('data')} onChange={(e) => storage.set('data', e.currentTarget.value)}/>
    </div>
  )
}

render(<App />, document.body);
