import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        < >
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
           <Reviews></Reviews>
        </>
    );
};

export default Home;