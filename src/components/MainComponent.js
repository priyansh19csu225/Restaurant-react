import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { Route, Redirect , Switch } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments : COMMENTS,
        promotions : PROMOTIONS,
        leaders : LEADERS 
    };

  }


  render() {

    const HomePage =  () => {
       return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
       );

    }  
    {/* const HomePage =  

          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />;   */ }  

    const DishWithId = ({match}) => {
      console.log({match});
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
         {
          /* ?????????????????????????
            const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

          */
         } 
          

    return (
      <div>
        <Header />
         <Switch> {/* <Routes> */}
              <Route path='/home' component={HomePage} /> {/* <Route path='/home' element={HomePage} /> */}
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> {/* <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} /> */}
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />   {/* <Route path='/menu/:dishId' element={??????} /> */}
              <Route exact path='/contactus' component={Contact} />  {/* <Route exact path='/contactus' element={<Contact />} /> */}
              <Redirect to="/home" /> {/* <Route path='*' element={<Navigate replace to='/home' />} /> */}
        </Switch> { /* </Routes> */}
        <Footer />
      </div>
    );
  }
}



export default Main;