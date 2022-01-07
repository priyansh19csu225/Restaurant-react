import React from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';



    function RenderDish({dish}){
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

    function changedate(date){
        const date1 = new Date(date);
       const dateString = date1.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
        return dateString;
    }

    function RenderComments({dish}){
        if (dish != null){
            const dishcomments = dish.comments.map((commentz) => {
                return(
               
                    <div key={commentz.id}>
                    <p>{commentz.comment}</p>
                    <span>-- </span><span>{commentz.author} , </span><span>{changedate(commentz.date)}</span>
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

    const  DishDetailComponent = (props) => {
        return(
            <div className='container'>
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
            </div>
            <div  className="col-12 col-md-5 m-1">
            <RenderComments dish={props.dish} />
            </div>
            </div>
            </div>
        );
    }


export default DishDetailComponent;
