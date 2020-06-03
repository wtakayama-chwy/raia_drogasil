import React, { Fragment } from 'react';

import Header from '../components/Header/Header';
import Description from '../components/Description/Description';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

function Home() {

  return (
    <Fragment>
        <Header />
        <Description />
        <Card />
        <Footer />
    </Fragment>
  );
}

export default Home;
