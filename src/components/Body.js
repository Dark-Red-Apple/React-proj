import React from 'react';
import ReactSlidy from 'react-slidy'
import 'react-slidy/lib/styles.css'
import Slide from './Slide';

export default function Body(props) {
    console.log("props", props)
    const elref = React.createRef();
    

    // useEffect( ()=>{
    //     const DOMNode = elref.current;
    //     console.log("node",DOMNode)
    //  });
    console.log('**',props.otherContent)
  return <div className='bodyContent'>

        <div class="landing-banner"><img  src="https://i.ibb.co/5czcsGF/Image-4.png" />
          <div class="banner-content">
            <h1>INTERACTIVE CONCERT <br/> EXPERIENCES</h1>
            <p>
              Experience your favourite artists like never before and from the comfort of your own home.
            </p>
            <a class="button-gradient gradient-out " href="#product-value">
            <span>Try it now</span>
            </a>
          </div>
        </div>

        <div id="product-value" class="sec_wrap">
        <h2 class="sec-title">Product Value</h2>
          <div class="sec_cont">
            <div class="sec_item">
              <div>
              <h3>Superior sound</h3>
              <p>Experience live versions of your favourite songs. We have partnered with Apple Music to provide you with Dolby audio quality. </p>
              </div>
            </div>
            <div class="sec_item">
              <div>                
              <h3>Front Row Seats</h3>
              <p>Experience concerts up close and personal. Experience real close up fan interactions with your favourite artists.</p>
              </div>           
            </div>
            <div class="sec_item">
              <div>
              <h3>Subscription Payment Model</h3>
              <p>Watch artists live from the front row without floor seat prices! Choose the best payment option for you.</p>
              </div>
            </div>
            <div class="sec_item">
              <div>
              <h3>No Fee Cancelation Policy</h3>
              <p>No commitment, you can cancel anytime without penalty. We can always unpause your account when you're ready.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="pic-sec">
          <img  src="https://i.ibb.co/R4LyWNQ/Image-2.png" />
          <h1><span>Our Plans</span></h1>
          <div class="pic-sec-cont">
          <div class="pic-item">
            <div>
            <h3><b style={{color: "#ef6f00"}}>Basic Plan</b> for <b style={{color: "#ef6f00"}}>$9</b> a month</h3>
            <p>
              <ul>
                <li>10 downloads per month </li>
                <li>Access to 50+ experiences </li>
                <li>Good audio quality</li>
                <li>1080 video quality</li>
              </ul>
            </p>
            <a class="button-gradient gradient-out " >
            <span>Buy Now!</span>
            </a>
            </div>
          </div>
          <div class="pic-item">
            <div>
            <h3><b style={{color: "#ef6f00"}}>Advanced Plan</b> for <b style={{color: "#ef6f00"}}>$99</b> per year</h3>
            <p>
              <ul>
                <li>20 downloads per month</li>
                <li>Access to 100+ experiences </li>
                <li>Superior Dolby audio quality </li>
                <li>Ultra HD video quality</li>
              </ul>
            </p>
            <a class="button-gradient gradient-out " >
            <span>Buy Now!</span>
            </a>
            </div>
          </div>
          <div class="pic-item">
            <div>
            <h3><b style={{color: "#ef6f00"}}>Pro Plan</b> for <b style={{color: "#ef6f00"}}>$150</b> per year</h3>
            <p>
              <ul>
                <li>Unlimited downloads</li>
                <li>Access to all digital experiences</li>
                <li>Exclusive access to behind the scenes content</li>
                <li>Superior Dolby audio quality</li>
                <li>Ultra HD video quality</li>
                <li>Access Oculus VR experiences</li>
              </ul>
            </p>
            <a class="button-gradient gradient-out ">
            <span>Buy Now!</span>
            </a>
            </div>
          </div>
          </div>
        </div>

        <div id="product-value" class="sec_wrap">
        <h2 class="sec-title">Reviews</h2>
      {!props.otherContent?<ReactSlidy className="" numOfSlides={1} infiniteLoop>
            <Slide num={1} name="Britney Spears" prof="Artist" cont="Love it, Epicon is the best way to give my fans an incredible experience!" />
            <Slide num={2} name="Scooter Braun" prof="Talent Manager" cont="An amazing user experience. I recommend it to all the artists I manage." />
            <Slide num={8} name="DJ Khalid" prof="Producer" cont="This is sick! I'm Obsessed. The Miami Yacht party experience Epicon helped me create is out of this world!" />
        </ReactSlidy>  :''}
        </div>


        {!props.content? props.otherContent: ''} 
        {/* <UsersList items = {props.content} /> */}

        
        <div class="two-elems">
          <div>
            <img src="https://i.ibb.co/0K8j2S2/Image-3.png" />
          </div>
          <div>
            <h2>Contact Info</h2>
            <p>
              <span><b>Email:</b> letschat@epicon.ca</span>
              <span><b>Phone:</b> (416) 738-2475</span>
              <span><b>Address:</b> 123 Toronto Street E. Toronto ON, Canada. L5D 8G5</span>
              </p>
          </div>
        </div>



  </div>;
}
