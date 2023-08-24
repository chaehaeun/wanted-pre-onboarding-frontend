import { Suspense, lazy } from 'react'
import { RootLayout } from 'components'
import { AuthProvider } from 'context/AuthContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const LazyHome = lazy(() => import('pages/Home'))
const LazySignIn = lazy(() => import('pages/SignIn'))
const LazySignUp = lazy(() => import('pages/SignUp'))
const LazyError = lazy(() => import('pages/Error'))
const LazyTodo = lazy(() => import('pages/Todo'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <LazyError />,
    children: [
      {
        index: true,
        element: <LazyHome />,
      },
      {
        path: '/signin',
        element: <LazySignIn />,
      },
      {
        path: '/signup',
        element: <LazySignUp />,
      },
      {
        path: '/todo',
        element: <LazyTodo />,
      },
    ],
  },
])

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  )
}

export default App
