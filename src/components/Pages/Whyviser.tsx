import * as React from 'react';
import './classroom.css'

class Whyviser extends React.Component {
    render() {
        return (
            <section className="ftco-services ftco-no-pb" id="Whyviser">
                <div className="container my-5  my-3">
                    <div className="row justify-content-center ">
                        <div className="card col-sm-5 m-auto">
                            <img src="images/classroom.jpg" className="card-img-top" />
                                <div className="card-body" >
                                    <h5 className="card-title">About Viser</h5>
                                    <p className="card-text">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read..</a>
                                </div>
                        </div>
                        <div className="card  col-sm-5 mt-3" >
                        <img src="images/classroom1.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Class Room</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </p>
                                <a href="#" className="btn btn-primary">Read..</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="video-header wrap">
                    <div className="fullscreen-video-wrap">
                        <video src="images/Tally_video.mp4" autoPlay loop></video>
                    </div>
                </div> */}
            </section>
        );
    }
}

export default Whyviser;
