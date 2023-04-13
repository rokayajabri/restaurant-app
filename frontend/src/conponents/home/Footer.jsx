import React from 'react';
import "./Home.css";

class Footer extends React.Component {
  handleChange = (event) => {
    this.props.setUser(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.subscribeUser(this.props.user.email);
  };

  render() {
    

    return (
      <div className="footer">
        <div className="news-letter">
          <h3>Receive event notifications</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="useremailreceiveinfo"
              placeholder="enter your email"
              id="useremailreceiveinfo"
              onChange={this.handleChange}
            />
            <input type="submit" value="subscribe" />
          </form>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>our menu</h3>
            <a href="/menu"><i className="fas fa-arrow-right"></i> taco</a>
            <a href="/menu"><i className="fas fa-arrow-right"></i> burrito</a>
            <a href="/menu"><i className="fas fa-arrow-right"></i> nachos</a>
            <a href="/menu"><i className="fas fa-arrow-right"></i> side food</a>
            <a href="/menu"><i className="fas fa-arrow-right"></i> dessert</a>
            <a href="/menu"><i className="fas fa-arrow-right"></i> drink</a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="/"><i className="fas fa-arrow-right"></i> home</a>
            <a href="/about"><i className="fas fa-arrow-right"></i> about</a>
            <a href="/promotions"><i className="fas fa-arrow-right"></i> promotions</a>
            <a href="/menu"><i className="fas fa-arrow-right"></i> menu</a>
            <a href="/table"><i className="fas fa-arrow-right"></i> book a table</a>
          </div>

          

          <div className="box">
            <h3>opening hours</h3>
            <p>everyday : 7:00am to 10:00pm</p>
          </div>
        </div>
    </div>
 );
};
}; 
export default Footer;
