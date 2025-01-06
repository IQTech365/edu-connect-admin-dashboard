import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'
import { AuthProvider } from './provider/AuthProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      {/* <App /> */}
    </StrictMode>,
  // </Provider>
)
