
import Dashboard from './pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Transactions from './pages/Dashboard/components/Transactions';

import Support from './pages/Support/Support';
import TransactionsPage from './pages/Transactions/TransactionsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/transactions",
      element: <TransactionsPage/>,
    },
    {
      path: "/support",
      element: <Support/>,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
