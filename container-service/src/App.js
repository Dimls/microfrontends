import {defineCustomElements} from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <scale-telekom-header></scale-telekom-header>
      <iframe
        width="100%"
        height="600"
        src="http://127.0.0.1:5173/"
        title="microfrontend"
      />
      <scale-telekom-footer>
        <scale-telekom-footer-content>
          <span slot="notice"> © Deutsche Telekom AG </span>
        </scale-telekom-footer-content>
      </scale-telekom-footer>
    </div>
  );
}

export default App;
