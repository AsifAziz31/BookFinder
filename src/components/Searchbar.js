import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <section className="col s6 offset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className='input-field'>
                            <input placeholder="Search for books" type="text" onChange={props.handleChange}></input>
                        </div>
                        <button type='submit' className="btn btn-danger" style={{ backgroundColor: "#3DE17D", width: "100px", height: "40px", marginLeft: 60}}>
                            Search
                        </button>
                        <div className="col s6 pull-s1" style={{left:"10%"}}>
                            <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
                                <option disabled value="Sort">Sorted By</option>
                                <option value="Ascending">A-Z</option>
                                <option value="Descending">Z-A</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>
                    </form>
                </section>

            </div>
        </div >

    )
}

export default Searchbar;