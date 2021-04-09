import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M12/GW_launch/Sale/25thMar/D21200796_IN_WLME_SamsungGalaxy_M12_New_Launch_DesktopTallHero_1500x600._CB657376691_.jpg"
                    alt="" />



                <div className="home__row">
                    <Product
                        id="120834555"
                        title="Oppo A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/41cwUHZJJ7L.__AC_SY200_.jpg"
                        rating={5} />

                    <Product
                        id="125234544"
                        title="Bathla Advance 7-Step Foldable Aluminium Ladder with Sure-Hinge Technology (Orange)"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/51F3kBZ1YAL._AC_SY200_.jpg"
                        rating={5} />


                    <Product
                        id="123453333"
                        title="Unique toughened glass , Spill proof design. Wear Resistant : Yes
                        Product Dimensions: 67 x 34 x 11 cm
                        High thermal efficiency
                        Brass burner
                        Designer knobs
                        Uniquely designed pan support
                        360 degree revolving nozzle
                        Easy cleaning"
                        price={29.99}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
                        rating={5} />
                </div>









                <div className="home__row">
                    <Product
                        id="12321403"
                        title="Amazon Brand - Solimo Optima King Size Glossy Engineered Wood Bed with Storage (Sienna Cherry)"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/81DUTI1pOeL._AC_UL320_.jpg"
                        rating={5} />


                    <Product
                        id="123234500"
                        title="Chocolates, sweets & more"
                        price={29.99}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
                        rating={5} />





                    <Product
                        id="123438511"
                        title="Northzone Anti Theft Backpack with USB Charging Port 15.6 Inch Laptop Bagpack Waterproof Casual Unisex Bag for School College Office Suitable for Men Women"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/61Qhk6capaL._AC_UL320_.jpg"
                        rating={5} />



                </div>












                <div className="home__row">
                    <Product
                        id="12304522"
                        title="TCL 108 cm (43 inches)  AI 4K Ultra HD Certified Android Smart LED TV 43P715 (Sliver) (2020 Model) | With Voice Control"
                        price={29.99}
                        image=" https://m.media-amazon.com/images/I/81SwyYchSWL._AC_UY218_.jpg"
                        rating={5} />

                </div>
            </div>
        </div>
    )
}

export default Home
