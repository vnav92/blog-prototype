import React from 'react';

import { PageLayout, MainContent } from '../components';

const App = () => {
  return (
    <PageLayout>
      <MainContent blogTitle="test title" blogAuthor="Matteo">
        <p>main content here</p>
      </MainContent>
    </PageLayout>
  );
};

export default App;
