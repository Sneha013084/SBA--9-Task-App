import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// //export function MyComponent() {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-primary">Hello Bootstrap</h1>
//       <button className="btn btn-success">Click Me</button>
//     </div>
//   );
// } //