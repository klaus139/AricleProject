import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './components/global/NotFound';

const generatePage = (name: string) => {
  const LazyComponent = lazy(() =>
    import(`./pages/${name}`).catch(() => ({
      default: () => <NotFound />,
    }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

const PageRender = () => {
  const { page, slug } = useParams();

  let name = '';
  if (page) {
    name = slug ? `${page}/[slug]` : `${page}`;
  }
  return generatePage(name);
};

export default PageRender;
