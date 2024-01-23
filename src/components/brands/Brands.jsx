import './brands.css'

import hm from './../../img/brands/HM.png'
import obey from './../../img/brands/Obey.png'
import shopify from './../../img/brands/Shopify.png'
import lacoste from './../../img/brands/Lacoste.png'
import levis from './../../img/brands/Levis.png'
import amazon from './../../img/brands/Amazon.png'

const Brands = () => {
    return (  <section className="brands">
        <div className="container">
            <ul className='brands__list'>
                <li><a src={hm} alt=""/></li>
                <li><a src={obey} alt=""/></li>
                <li><a src={shopify} alt=""/></li>
                <li><a src={lacoste} alt=""/></li>
                <li><a src={levis} alt=""/></li>
                <li><a src={amazon} alt=""/></li>
            </ul>
        </div>
    </section> );
}
 
export default Brands;