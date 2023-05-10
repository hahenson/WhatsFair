import React from "react";
import HowardHenson from "../HowardHenson.png";
import CFoster from "../CFoster.jpg";
import Samuel from "../Samuel.JPEG";
import githubmark from "../githubmark.png";
import LinkedIn from "../LinkedIn.png";
import JoshuaBetrand from "../JoshuaBetrand.jpg";
import "./AboutUs.css";
import ferrisWheelcard from "../FerrisWheelCard.png";
import { Row, Col, Container} from "react-bootstrap";

function AboutUs(props) {
  return (
    <>
      <h1 className="aboutHeading">The Creators of What's Fair</h1>
     <Container className="card-container">
      <Row xs={1} sm={2} md={2} lg={3} xl={3}>
        {/* flip card containers here */}
        <Col>
          {/* Start Profile 1 */}
          <input type="checkbox" id="profileCard" />
          <label className="col-md-4 card-container" for="profileCard">
            <div className="card-flip mx-2">
              {/* <!-- Card Front - Profile 1 --> */}
              <div className="card front">
                <div className="card-block">
                  {/* <span className="fa fa-4x fa-smile-o"></span> */}
                 <div className="card-header">
                  <div className="col">
                  <h4 id="profile_h5" className="card-title">Howard Henson</h4>
                  <h6 id="profile_h6" className="card-subtitle text-muted">Co-Founder</h6>
                  </div>
                  <div className="col">
                  <img
                    alt="profile pic"
                    className="CardImage"
                    src={HowardHenson}
                  />
                  </div>
                  </div>
                  <div className="card-body">
                    <h3>Hi 👋</h3>
                    <p id="about_p">
                      Born and raised In Indianapolis, Indiana I’ve always had a knack
                      for creativity through graphic design and problem-solving. My
                      inquisitive nature has always wanted to know the “why” things
                      work the way they do. I enjoy learning, reading, playing video
                      games, and spending time with family.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/howardhenson/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
                    </a>
                    <a
                      href="https://github.com/hahenson"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* <!-- End Card Front - Profile 1 -->

        <!-- Card Back - Profile 1  --> */}

              <div className="card back text-center">
                <div className="card-block mr-2 pr-2">
                  <img src={ferrisWheelcard} className="card-img" id="fwImg" alt="ferris wheel" />
                  <div className="card-img-overlay">
                    <h2 id="profile_h2" className="fav-title">Howard Henson</h2>
                    <hr />
                    <h1 id="profile_h1" className="Favorite">Fair Favorites:</h1>
                    <hr />
                    <h3 id="profile_h3" className="Favorite">Favorite Attraction:</h3>
                    <p id="profile_p" className="fav-text">
                      "The broad museum in Los Angeles. Besides the fact it’s in sunny California, they offer a wide array of exhibits related to other cultures that I can learn about."
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Back - Profile 1 --> */}
            </div>
          </label>


          {/* <!-- End Card - Profile 1 --> */}
          </Col>
          <Col></Col>
          <Col fluid >
          {/* Start Profile 2 */}
          <input type="checkbox" id="profileCard2" />
          <label className="col-md-4 col-sm-3 card-container" for="profileCard2">
            <div className="card-flip mx-2">
              {/* <!-- Card Front - Profile 2 --> */}
              <div class="card front">
                <div class="card-block">
                <div className="card-header">
                  <div className="col">
                  <h4 id="profile_h5" className="card-title">Christina Foster</h4>
                  <h6 id="profile_h6" className="card-subtitle text-muted">Co-Founder</h6>
                  </div>
                  <div className="col">
                  <img
                    alt="profile pic"
                    className="CardImage"
                    src={CFoster}
                  />
                  </div>
                  </div>
                  <div className="card-body">
                    <h3>Hi 👋</h3>
                    <p id="about_p">
                      I was born and raised in Eastern NC, lived in Hawaii and Florida
                      for a while, but eventually returned to my NC roots. I've always
                      been a bit of a computer nerd and dabbled in programming and Web
                      design. I love problem solving and creating efficient solutions
                      and designs. When I'm not coding, I enjoy time with my family,
                      woodworking, restoring old furniture, and visiting fairs and
                      festivals!
                    </p>
                    <a
                      href="https://www.linkedin.com/in/fosterhopec/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
                    </a>
                    <a
                      href="https://github.com/chopefoster"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Front - Profile 2 -->

        <!-- Card Back - Profile 2 --> */}
              <div className="card back text-center">
                <div className="card-block">
                  <img src={ferrisWheelcard} className="card-img" alt="ferris wheel" />
                  <div className="card-img-overlay">
                    <h2 id="profile_h2" className="fav-title">Christina Foster</h2>
                    <hr />
                    <h1 id="profile_h1" className="Favorite">Fair Favorites:</h1>
                    <hr />
                    <h3 id="profile_h3" className="fav-text"> Fav Ride: </h3><span />
                    <p id="profile_p" className="fav-food">The Scrambler</p>
    
                    <h3 id="profile_h3" className="fav-text"> Fav Food: </h3><span />
                    <p id="profile_p" className="fav-food">Candy Apples</p>

                    <h3 id="profile_h3" className="fav-text"> Fair Advice: </h3><span />
                    <p id="profile_p" className="bottomFWcard">"Fairs are fun with friends...but not so much with blind dates."</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Back - Profile 2 --> */}
            </div>
          </label>


          {/* <!-- End Profile 2 --> */}
          </Col>
          <Col></Col>
          <Col fluid={true} >

          {/* Start Profile 3 */}

          <input type="checkbox" id="profileCard3" />
          <label className="col-md-4 col-sm-3 card-container" for="profileCard3">
            <div className="card-flip">
              {/* <!-- Card Front - Profile 3 --> */}
              <div class="card front">
                <div class="card-block">
                <div className="card-header">
                  <div className="col">
                  <h4 id="profile_h5" className="card-title">Joshua Betrand</h4>
                  <h6 id="profile_h6" className="card-subtitle text-muted">Co-Founder</h6>
                  </div>
                  <div className="col">
                  <img
                    alt="profile pic"
                    className="CardImage"
                    src={JoshuaBetrand}
                  />
                  </div>
                  </div>
                  <div className="card-body">
                    <h3>Hi 👋</h3>
                    <p id="about_p">
                      Born and raised in Manning, SC. Country Boy!
                      Growing up, I knew I was destined to be an engineer and even
                      built my first computer at a young age. In
                      my free time, I enjoy indulging my creative side as a musician,
                      playing the drums since I was five. I also like to stay active
                      and play basketball regularly. Additionally, I have a keen
                      interest in day trading and coding on the side. P.S.- I'm also only at the fairs for the food and rides!
                    </p>
                    <a
                      href="https://www.linkedin.com/in/joshua-betrand/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
                    </a>
                    <a
                      href="https://github.com/Jbetrand10"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Front - Profile 3 -->

        <!-- Card Back - Profile 3 --> */}
              <div className="card back text-center">
                <div className="card-block">
                  <img src={ferrisWheelcard} className="card-img" alt="ferris wheel" />
                  <div className="card-img-overlay">
                    <h2 id="profile_h2" className="fav-title">Joshua Betrand</h2>
                    <hr />
                    <h1 id="profile_h1" className="Favorite">Fair Favorites:</h1>
                    <hr />
                    <h3 id="profile_h3" className="fav-text"> Fav Food: </h3>
                    <p id="profile_p" className="fav-food">Funnel cakes & Turkey legs</p>
                    <br />
                    <h3 id="profile_h3" className="fav-text"> Fair Advice: </h3>
                    <p id="profile_p" className="bottomFWcard">"I love all rides at fairs. I try my best
                      to get on all of them so have fun and try them all, you won't regret it!"</p>
                    <br />
                  </div>
                </div>
              </div>
              {/* <!-- End Card Back - Profile 3 --> */}
            </div>
          </label>

          
          {/* <!-- End Profile 3 --> */}
          </Col>
          <Col></Col>
          <Col fluid >


          {/* Start Profile 4 */}

          <input type="checkbox" id="profileCard4" />
          <label className="col-md-4 col-sm-3 card-container" for="profileCard4">
            <div className="card-flip">
              {/* <!-- Card Front - Profile 4 --> */}
              <div class="card front">
                <div class="card-block">
                <div className="card-header">
                  <div className="col">
                  <h4 id="profile_h5" className="card-title">Samuel Akins</h4>
                  <h6 id="profile_h6" className="card-subtitle text-muted">Co-Founder</h6>
                  </div>
                  <div className="col">
                  <img
                    alt="profile pic"
                    className="CardImage"
                    src={Samuel}
                  />
                  </div>
                  </div>
                  <div className="card-body">
                    <h3>Hi 👋</h3>
                    <p id="about_p">
                      Hello! I live in southwest Ohio with my wife and three young kids.
                      I found out about Bethel College through Anthony ONeal and Dave
                      Ramsey, and got excited dreaming about what a career in Tech
                      would mean for my family! I am excited about my journey as a
                      software engineer, and I'm grateful for everyone who has helped
                      get to this point! In my spare time I love being with my wife
                      and kids, teaching my kids how to make great coffee ( they don't
                      drink any! ), and running.<br></br>Ps- I'm only at the Fair for the food!
                    </p>
                    <a
                      href="https://www.linkedin.com/in/samuel-akins/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
                    </a>
                    <a
                      href="https://github.com/Samuel-Akins"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Front - Profile 4 -->

        <!-- Card Back - Profile 4 --> */}
              <div className="card back text-center">
                <div className="card-block">
                  <img src={ferrisWheelcard} className="card-img" alt="ferris wheel" />
                  <div className="card-img-overlay">
                    <h2 id="profile_h2" className="fav-title">Samuel Akins</h2>
                    <hr />
                    <h1 id="profile_h1" className="Favorite">Fair Favorites:</h1>
                    <hr />
                    <h3 id="profile_h3" className="fav-text">All the Food! </h3><span />
                    <p id="profile_p" className="fav-food">"I'm 100% with Josh on the funnel cake! Whenever 
                    I am going to the fair the only thing on my mind is the food. My favorites are funnel cake(obviously), 
                    fried pickles, pork tenderloin sammich, and Lemonade (I'm a connoisseur)."</p>
                    <br />
                    <h3 id="profile_h3" className="fav-text"> </h3><span />
                    <p id="profile_p" className="fair-advice"></p>
                    <br />
                  </div>
                </div>
              </div>
              {/* <!-- End Card Back - Profile 4 --> */}
            </div>
          </label>


          {/* <!-- End Profile 4 --> */}
          </Col>
          <Col></Col>
          <Col fluid >

          {/* Start Profile 5 */}

          <input type="checkbox" id="profileCard5" />
          <label className="col-md-4 col-sm-3 card-container" for="profileCard5">
            <div className="card-flip">
              {/* <!-- Card Front - Profile 5 --> */}
              <div class="card front">
                <div class="card-block">
                  <div className="card-header">
                  <div className="col">
                  <h4 id="profile_h5" className="card-title">Kyle Hammersmith</h4>
                  <h6 id="profile_h6" className="card-subtitle text-muted">Co-Founder</h6>
                  </div>
                  <div className="col">
                  <img
                    alt="profile pic"
                    className="CardImage"
                    src={"https://media.licdn.com/dms/image/C5603AQEniWJeYf6PzA/profile-displayphoto-shrink_200_200/0/1654608690102?e=1686182400&v=beta&t=9chKLkJqDvg9TkrvedRC8QPKZK-9Hq1QUVwgtaWTPg8"}
                  />
                  </div>
                  </div>
                  <div className="card-body">
                  <div className="profileText">
                    <h3>Hi 👋</h3>
                    <p id="about_p">
                      I am an Ohio State Buckeye, raised in Columbus, Ohio. I have
                      also lived in New York, Virginia, and Florida. I started coding
                      as a kid on an Atari computer in the early 80's, creating a
                      baseball statistics compiler, animated graphics, games and music
                      with the old BASIC program. Then I took a break from coding for
                      40 years, seeking ventures in writing, filmmaking, and teaching.
                      Yet I always felt the calling to get back to using my creativity
                      and problem solving in the tech industry, so here I am. Enjoy
                      our WHAT's FAIR app, and I'll see you on the Ferris Wheel.
                    </p>
                    </div>
                    <div className="profileLinks">
                    <a
                      href="https://www.linkedin.com/in/kylehammersmith/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
                    </a>
                    <a
                      href="https://github.com/wkhammersmith"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Front - Profile 5 -->

        <!-- Card Back - Profile 5 --> */}
              <div className="card back text-center">
                <div className="card-block">
                  <img src={ferrisWheelcard} className="card-img" alt="ferris wheel" />
                  <div className="card-img-overlay">
                    <h2 id="profile_h2" className="fav-title">Kyle Hammersmith</h2>
                    <hr />
                    <h1 id="profile_h1" className="Favorite">Fair Favorites:</h1>
                    <hr />
                    <h3 id="profile_h3" className="fav-text"> Fav Food: </h3>
                    <p id="profile_p" className="fav-food">Corn dogs, cotton candy, and strawberry shortcake</p><br />
                    <h3 id="profile_h3" className="fav-text">Fair advice:</h3>
                    <div className="bottomFWcard">
                    <p id="profile_p" className="fair-advice">"The Ferris wheel is a must do, and I'm always a sucker for buying something at the cooking expo."</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Card Back - Profile 5 --> */}
            </div>
          </label>


          {/* <!-- End Profile 5 --> */}


        {/* end flip card containers */}
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default AboutUs;
