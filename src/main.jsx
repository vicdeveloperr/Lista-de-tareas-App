import ReactDOM from 'react-dom/client'
import App from './const/App'
import './styles/app.css'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default root