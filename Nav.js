import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../project1/my-app/src/images/int.webp';
import img2 from '../project1/my-app/src/images/elit.webp';
import img3 from '../project1/my-app/src/images/mourain.png.webp';
import img4 from '../project1/my-app/src/images/kfc.webp';
import img5 from '../project1/my-app/src/images/paradise.webp';
import img6 from '../project1/my-app/src/images/vicky.webp';
import img7 from '../project1/my-app/src/images/poolar.webp';
import img8 from '../project1/my-app/src/images/inox.webp';

function Nav(){
  
  return(
    <div className='Nav'>
        <nav>
                    <div id="nav1">
                    <a id="nav11"><strong>kurnool Dishes</strong></a>
                    <a><input type="text" placeholder="Search your food"></input></a>
                    <a>Location</a>
                    <a>Signin</a>
                    <a>Sign Up</a>
                    </div>
                </nav>
                    <div id="nav2">
                        <a id="nav21"><strong>65 restaurants Near you</strong></a>
                        <a>Relevance</a>
                        <a>Delivery</a>
                        <a>Rating</a>
                        <a>Offers</a>
                    </div>
      <div id="kf">
      <img src={img1} alt=""></img>
      <h3>international</h3>
      <h5>Chinese, Indian, 3.5/5</h5> <p>$300 FOR TWO</p>
      </div>

      <div id="gbr">
        <Link to="/mutton"><img src={img2} alt=""></img></Link>
        <h3>Elite</h3>
        <h5>Biryani, Tandoor Chicken, Hyderabadi 3.5/5</h5><p>$200 FOR TWO</p>
      </div>

      <div id="pb">
        <Link to="/mutton"><img src={img3} alt=""></img></Link>
        <h3>Hotel mourian</h3>
        <h5>Biryani, Chinese, Andhra, North Indian, South Indian, 4.0/5</h5><p>$500 FOR TWO</p>
        <h5></h5>
      </div>

      <div id="kfc">
        <Link to="/mutton"><img src={img4} alt=""></img></Link>
        <h3>kfc svc</h3>
        <h5>American, Snacks, Biryani, 3.8/5</h5><p>$400 FOR TWO</p>
      </div>

      <div id="bay">
        <Link to="/mutton"><img src={img5} alt=""></img></Link>
        <h3>paradise restaurants</h3>
        <h5>North Indian, Biryani, Chinese, 3.5/5</h5><p>$300 FOR TWO</p>
      </div>

      <div id="bff">
        <Link to='/mutton'><img src={img6} alt=""></img></Link>
        <h3>vicky Fastfood</h3>
        <h5>Chinese, 4.0/5</h5><p>$150 FOR TWO</p>
      </div>

      <div id="csi">
        <Link to="/mutton"><img src={img7}  alt=""></img></Link>
        <h3>poolar bear Ice Cream</h3>
        <h5>Ice Cream, Deserts, Beverages, 4.2/5</h5><p>$250 FOR TWO</p>
      </div>

      <div id="pvr">
        <Link to="/mutton"><img src={img8} alt=""></img></Link>
        <h3>inox Cafe</h3>
        <h5>Snacks, Fastfood, Beverages 4.3/5</h5><p>$400 FOR TWO</p>
      </div>
    </div>
  );
}

export default Nav;
