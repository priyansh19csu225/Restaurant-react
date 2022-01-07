import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
// import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Route, Navigate , Routes } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
  }


  render() {

    const HomePage = () => {
      return(
          <Home />
      );
    }

    return (
      <div>
        <Header />
        <Routes>
              <Route path='/home' element={<Home ></Home>} />
              <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
              {/* <Navigate to='/home' /> */}
              <Route path='*' element={<Navigate replace to='/home' />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;