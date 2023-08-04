import { RootLayout } from 'components'
import { LoginTokenContextProvider } from 'context'
import { Home, SignIn, SignUp, Error, Todo } from 'pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
])

function App() {
  return (
    <LoginTokenContextProvider>
      <RouterProvider router={router} />
    </LoginTokenContextProvider>
  )
}

export default App
