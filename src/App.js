import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Box } from '@mui/material';

import ChannelDetail  from './components';
import VideoDetail from "./components"
import SearchFeed from "./components"
import Navbar from "./components"
import Feed from "./components"

// const App = () => (
//   <BrowserRouter>
//     <Box sx={{ backgroundColor: '#000' }}>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' element={<Feed />} />
//         <Route path='/video/:id' element={<VideoDetail />} />
//         <Route path='/channel/:id' element={<ChannelDetail />} />
//         <Route path='/search/:searchTerm' element={<SearchFeed />} />
//       </Routes>
//     </Box>
//   </BrowserRouter>
// );

// export default App;







const Layout = () => {
  return (
    <div className="w-50 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {path:"/",
  element:<Layout />,
  children:[
//}
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetail />,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      }
    ]}
  ])

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}

export default App;

