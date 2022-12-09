import { Outlet } from 'react-router-dom';
import { Link, Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Vortex } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
