import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetailComponent extends Component {

    constructor(props) {
        super(props);
        
    }

    renderDish(dish){
        if (dish != null){
       
            return (
              
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              
            );
        
    }else
    return(
        <div></div>
    );
    }

    changedate(date){
        const date1 = new Date(date);
       const dateString = date1.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
        return dateString;
    }

    renderComments(dish){
        if (dish != null){
            const dishcomments = dish.comments.map((commentz) => {
                return(
               
                    <div key={commentz.id}>
                    <p>{commentz.comment}</p>
                    <span>-- </span><span>{commentz.author} , </span><span>{this.changedate(commentz.date)}</span>
                    <p></p>
                    </div>

                )
            })
            return (
            
                <div>
                <h4>Comments</h4>
                {dishcomments}
                </div>
              
            );
        
    }else
    return(
        <div></div>
    );
    }

    render() {
        return(
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish)}
            </div>
            </div>
        );
    }
}

export default DishDetailComponent;
