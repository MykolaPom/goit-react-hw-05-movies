import { Outlet } from 'react-router-dom';
import { Link, Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';

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
          <TailSpin
            height="80"
            width="80"
            color="#000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
