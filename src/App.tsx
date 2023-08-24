import { Suspense, lazy } from 'react'
import { RootLayout } from 'components'
import { AuthProvider } from 'context/AuthContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from 'pages/ProtectedRoute'
import Fallback from 'pages/Fallback'

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
        element: (
          <ProtectedRoute requiredLogin={false}>
            <LazySignIn />
          </ProtectedRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <ProtectedRoute requiredLogin={false}>
            <LazySignUp />
          </ProtectedRoute>
        ),
      },
      {
        path: '/todo',
        element: (
          <ProtectedRoute requiredLogin>
            <LazyTodo />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Fallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  )
}

export default App
