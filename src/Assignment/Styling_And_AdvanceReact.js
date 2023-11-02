import React from 'react'
import './Assign_Ques.css'

const Styling_And_AdvanceReact = () => {
  return (
    <>
    <div>
        <h1>MODULE: 11 Styling & Advance React</h1>
        <h2>* Create Shopping site home page with Styled- component</h2>
    </div>
    <div className='container'>
  {/* header start */}
      <div className='header'>
          <div className='header-left'>
            <span className='img'><img src='https://down-tw.img.susercontent.com/file/sg-11134201-22090-9iuk44t5x2hv06' alt='Chocolate Image'></img></span>
            <span className='choco'><b>Chocolate</b> <br />Desert Cart</span>
          </div>
          <div className='header-center'>
              <div className='all'><a href='#'>All Category</a></div>
              <div className='search'>
                <input type='text' placeholder='Search'  />
              </div>
              <div className='symbol-search'>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149309.png'></img>
              </div>
          </div>
          <div className='header-right'>
            <div className='location'>
              <select>
                <option>Your Location</option>
                <option>Vadodara</option>
                <option>Mumbai</option>
                <option>Ahemdabad</option>
              </select>
            </div>
            <div className='menu'>
              <span><img src='https://w7.pngwing.com/pngs/574/436/png-transparent-computer-icons-service-management-technology-compare-service-business-data-thumbnail.png'  /></span>
              <span><a href='#'>Compare</a></span>
              <span><img src='https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png'  /></span>
              <span><a href='#'>Wishlist</a></span>
              <span>
                {/* <img src='  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwlcgLKrRlaPY8YYA7cktUV_pCIBdLyIfyA&usqp=CAU'  /> */}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX8AZzJqbkncsRSQCfEa1kNgvu1xW38LlAw&usqp=CAU' />
              </span>
              <span><a href='#'>Cart</a></span>
              <span>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RlvbFZti-9jKaCytdvTKnyuHhYFqPgBj5w&usqp=CAU'  />
                {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36xX6fl85ctrEkYHj1r6sMJsFczKC6n41ItPIRw0ZtJRY5yhBjkgJY4HP7LtwXnd5B0M&usqp=CAU' / > */}

                 
                </span>
              <span><a href='#'>Account</a></span>

            </div>
          </div>
      </div>
{/* header end */}
{/* navbar start */}
      <div className='navbar'>
           <div className='navbar-left'>
            <span className='brow-img'><img src='https://cdn-icons-png.flaticon.com/512/5665/5665189.png'/></span>
            <span className='cate'>
              <select>
                <option> Browser All Category</option>
                <option> Browser All Category</option>
                <option> Browser All Category</option>
              </select>
              </span>
           </div>
           <div className='navbar-center'>
            <span ><a className='hot' href='#'>Hot Deals</a></span>
            <span>
              <select>
                <option> Home</option>
              </select>
            </span>
            <span>
              <select>
                <option> About</option>
              </select>
            </span>
            <span>
              <select>
                <option> Shop</option>
              </select>
            </span>
            <span>
              <select>
                <option> Vendors</option>
              </select>
            </span>
            <span>
              <select>
                <option> Mega Menu</option>
              </select>
            </span>
            <span>
              <select>
                <option> Blog</option>
              </select>
            </span>
            <span>
              <select>
                <option><a href='#'>Pages</a></option>
              </select>
            </span>
            <span>
              <select>
                <option> <a href='#'>Contect</a></option>
              </select>
            </span>
           </div>
           <div className='navbar-right'>
            <span className='music'>
              <img src='https://www.creativefabrica.com/wp-content/uploads/2020/02/21/Headphones-icon-Graphics-1-14-580x386.jpg' />
            </span>
            <span className='rate'>1900 - 900 <br />
            24/7 season center</span>
           </div>
      </div>

      <div className='section'>
         {/* <img src='https://i.ytimg.com/vi/dm8Oe5nr3Ac/maxresdefault.jpg' alt='Chocolate Banner Img'/> */}
         <img src='https://as1.ftcdn.net/v2/jpg/02/29/85/86/1000_F_229858659_bTlznENX1X2qKU3CjuGOLVhC7XAteWQ6.jpg' />
      </div>
 {/* navbar end */}

{/* featured start */}
      <div className='featured'>
       <span className='fea'><a href='#'>featured Categories</a></span>
       <span><a href='#'>Cake & Milk</a></span>
       <span><a href='#'>Cup Cake</a></span>
       <span><a href='#'>Dark Chocolate</a></span>
       <span><a href='#'>Cold Coco</a></span>
      </div>
{/* featured end */}
{/* footer start */}
      <div className='footer'>
       <div className='box'>
        <img src='https://madhurasrecipe.com/wp-content/uploads/2022/02/rose_milk_cake_featured1.jpg' />
        <h3>Rose Milk Cake</h3>
        <p>25 items</p>
       </div>
       <div className='box'>
        <img src='https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg' />
        <h3>Dark Chocolate</h3>
        <p>30 items</p>
       </div>
       <div className='box'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnmAD6UhUz5n-ID-oWeLdXPeBVK-WzochQw&usqp=CAU' />
        <h3>Cup Cake</h3>
        <p>18 items</p>
       </div>
       <div className='box'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMRL6Z0QkHk_-HA9R-FnovvoWcjRTeBBVxQ&usqp=CAU' />
        <h3>Cold Coco</h3>
        <p>32 items</p>
       </div>
       <div className='box'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdekRrcp37YvHV_QdE9mpYUnNqrlQ5waxhqetPWHmVVNuEqBqrpPN-0jALe0RU_B0uSs&usqp=CAU' />
        <h3>Cold Chocolate</h3>
        <p>28 items</p>
       </div>
       <div className='box'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1B_ro9tS0daHmf7hTeJwJQiaocFSP0xeqWA&usqp=CAU' />
        <h3>Hot Chocolate</h3>
        <p>22 items</p>
       </div>
      </div>
{/* footer end */}
    </div>
    </>
  )
}

export default Styling_And_AdvanceReact