import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import ProductService from '../ProductService/ProductService';
import Reviews from '../Reviews/Reviews';
import Inventorys from "../Inventorys/Inventorys";

const Home = () => {
    return (
        < >
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventorys></Inventorys>
            <ProductService></ProductService>
            <Reviews></Reviews>
        </>
    );
};

export default Home;