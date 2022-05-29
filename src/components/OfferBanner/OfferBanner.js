import React from "react";
import './OfferBanner.scss'


const OfferBanner = () => {
    return (
        <>
            <div className="offer-banner">
                <div className="offer-banner__content" >
                    <div className="offer-banner__content__text">
                        <h2 className="offer-banner__content__text__title">
                            30% off
                        </h2>
                        <p className="offer-banner__content__text__description">
                            Use code: <span>30OFF</span>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OfferBanner;