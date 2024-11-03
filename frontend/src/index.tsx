import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
const App = React.lazy(() => import('./App'));
import '/src/styles.css'; // Importing the CSS file

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
