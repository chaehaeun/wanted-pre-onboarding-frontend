import SignIn from 'components/SignIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <p>home</p>
      </div>
    ),
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
