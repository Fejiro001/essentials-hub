import menCollect from '../media/men.png';
import womenCollect from '../media/women.png';
import jewelryCollect from '../media/jewelry.png';
import electronicsCollect from '../media/electronics.png';

function Collections () {
    return (
        <section className="collection">
            <div className="collection-head">
                <p>CHAPTER 01 - COLLECTIONS</p>
                <h2 className='header-collect'>OUR COLLECTIONS</h2>
            </div>
            <div className='collection-imgs'>
                <div className='box-img'>
                    <img src={menCollect} className='collection-sing' alt='Mens Section'></img> 
                    <div className='box-img-text'>
                        <h3>Men's</h3>
                        <p className='gray'>SHOP COLLECTION</p>
                    </div> 
                    <div className='overlay'></div>          
                </div>
                <div className='box-img'>
                    <img src={womenCollect} className='collection-sing' alt='Womens Section'></img>
                    <div className='box-img-text'>
                        <h3>Women's</h3>
                        <p className='gray'>SHOP COLLECTION</p>
                    </div> 
                    <div className='overlay'></div>
                </div>
                <div className='box-img'>
                    <img src={jewelryCollect} className='collection-sing' alt='Jewelry Section'></img>
                    <div className='box-img-text'>
                        <h3>Jewelry</h3>
                        <p className='gray'>SHOP COLLECTION</p>
                    </div> 
                    <div className='overlay'></div>
                </div>
                <div className='box-img'>
                    <img src={electronicsCollect} className='collection-sing' alt='Electronics Section'></img>      
                    <div className='box-img-text'>
                        <h3>Electronics</h3>
                        <p className='gray'>SHOP COLLECTION</p>
                    </div> 
                    <div className='overlay'></div>          
                </div>
            </div>
        </section>
    );
}

export default Collections;