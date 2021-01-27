import React from 'react';
import { Link } from "react-router-dom";

const Book = (props) => {
    const ImageURL = props.book.volumeInfo.imageLinks;
    return (
        <div className="col s12 m3">
            <div className="card large">
                <div className="card-image" style={{ marginBottom: 15 }}>
                    {ImageURL === undefined ? (<img src={"https://picsum.photos/200/300"}
                        alt=""
                        style={{ width: "100", height: "100"}} />) :
                        (<img src={props.book.volumeInfo.imageLinks.thumbnail}
                            style={{ width: "250px", height: "350px"}} />)}
                </div>
                <div>
                    <span className="card-title" style={{
                        color: "blue",
                        fontSize: 20,
                        position: 'absolute', marginTop: 5, marginLeft: 5, marginRight: 5
                    }}>
                        {props.book.volumeInfo.title}
                    </span>
                </div>
                <div className="card-content"  style={{marginTop: 70, marginLeft: 5}}>
                    <p>{props.book.volumeInfo.authors}</p>
                    <p>{props.book.volumeInfo.published}</p>
                    <p>{props.book.volumeInfo.published}</p>
                </div>
                <div className="card-action">
                    <Link to={{
                        pathname: "/book/" + props.title,
                        title: props.title,
                        author: props.author,
                        published: props.published,
                        image: props.image,
                        description: props.description,
                        props: props.props
                    }}>See Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Book;