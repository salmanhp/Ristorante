import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish, comment }) {
    if (dish != null) {
        return (
            <>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <Card className='p-2'>
                        <h4>Comments</h4>

                        {/* <RenderComments /> */}
                        <RenderComments comments={comment} />

                    </Card>
                </div>
            </>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}



function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <>
                {comments.map(comment => {
                    return (

                        <div key={comment.id}>
                            <ul className='list-unstyled'>
                                <li>{comment.comment}</li>
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </li>
                            </ul>
                        </div>
                    );
                })}
            </>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}


const DishDetail = (props) => {
    return (
        <div className="container">

            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>

            <div className='row'>
                <RenderDish dish={props.dish} comment={props.comments} />
            </div>
        </div>
    )

}

export default DishDetail;
