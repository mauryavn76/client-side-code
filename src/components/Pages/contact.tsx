import * as React from 'react';

class contact extends React.Component {
  render() {
    return (
      <section  id="contact">
        <div className="container-fluid">
          <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-6">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control"

                  placeholder="Message"
                />
                <a href="#" className="btn btn-primary my-3">Send</a>
              </form>
            </div>
            <div className="col-md-3 col-sm-3 text-center ml-5">
            <strong>Ghansoli Branch:</strong> 
                <p>Viser Technosys Pvt Ltd,
                Shee Manoshi Complex Sector 3  
                office no. 44/45
                Ghansoli, (Thane)
                Phone: +919004723127
                <a href="https://www.viser.com" target="_blank">www.viser.com</a></p>
            
              
                <strong>Andheri Branch:</strong> 
                <p>Viser Technosys Pvt Ltd,
                Shee Manoshi Complex Sector 3  
                office no. 44/45
                Ghansoli, (Thane)
                Phone: +919004723127
                <a href="https://www.viser.com" target="_blank">www.viser.com</a></p>
            </div>
          </div>
        </div>
        </div>
        <div className="container-fluid mt-3">
            <h3>
              <strong>Our Location</strong>
            </h3>
              <div>
                <iframe className="col-sm-12 " src="https://www.google.com/maps/d/embed?mid=19_4VOD7M_b1LzF7QveBmsrbRvBhcxW5T" height="300px"></iframe>
              </div>
        </div>
      </section>
    );
  }
}

export default contact;
