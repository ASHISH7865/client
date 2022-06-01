import React from "react";
import './OfferBanner.scss'


const OfferBanner = ({offerText , offerImage, offerCode}) => {
    return (
        <>
         <div className="banner">
            <div className="offer-banner" style={{background:`linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.8)), url(${offerImage}) no-repeat`}}>
                <div className="offer-banner__content" >
                    <div className="offer-banner__content__text">
                        <h2 className="offer-banner__content__text__title">
                           {offerText && offerText}
                        </h2>
                        <p className="offer-banner__content__text__description">
                            Use code: <span>{ offerCode && offerCode}</span>
                        </p>
                    </div>
                </div>

            </div>
         </div>
        </>
    )
}

export default OfferBanner;