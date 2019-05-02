import React from 'react';
import {Footer} from '../component/footer.jsx';
import {Header} from '../component/header.jsx';
import {Carousel} from '../component/Carousel.jsx';
import '../assets/style.css';

export class HomePage extends React.Component {
    render() {
        return (
            <div className='home-contain'>
                <Header></Header>
                <Carousel></Carousel>
                <Footer></Footer>
            </div>
        );
    }
}