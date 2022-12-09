import { Route, Routes} from 'react-router-dom'; // BrowserRouter 
import { lazy } from 'react';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieInfo = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    // <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    // </BrowserRouter>
  );
};


// export const App = () => {
//   return (
//     <>
//       <Routes>
//         {' '}
//         {/*компоненти сторінок*/}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<div>Homepage index route</div>} />
//           <Route
//             path="dashboard"
//             element={<div>Here you can see your dashboard</div>}
//           />
//           <Route path="sales" element={<Sales />}>
//             <Route index element={<div>Sales index route</div>} />
//             <Route path="analytics" element={<div>Analytics</div>} />
//             <Route path="invoices" element={<Invoices />}>
//               <Route index element={<div>Invoices index route</div>} />
//               <Route path=":invoiceId" element={<InvoiceDetails />} />
//             </Route>
//             <Route path="deposits" element={<div>Deposits</div>} />
//           </Route>
//           <Route path="reports" element={<div>Reports</div>} />
//           <Route path="feedback" element={<div>Feedback</div>} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="customers/:customersId" element={<CustomerDetails />} />
//         </Route>
//       </Routes>
//       <GlobalStyle />
//       <Toaster position="top-right" reverseOrder={false} />
//     </>
//   );
// };
