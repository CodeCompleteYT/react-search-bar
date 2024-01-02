import React from 'react';
import { Carousel } from 'flowbite-react';
export default function CarouselComponent() {
    return (
        <div className="h-40 sm:h-64 xl:h-80 2xl:h-96 w-[90%] mx-auto mt-4 md:mt-8">
            <Carousel>
                <picture>
                    <source srcSet="https://thumbor.sirclocdn.com/unsafe/342x150/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/m/o/mobile_banner_342x150_13_.jpg" media="(max-width: 425px)" type="image/webp" />
                    <img data-pagespeed-no-defer="true" className="jss66 jss63 mx-auto" src="https://thumbor.sirclocdn.com/unsafe/1280x354/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/m/a/main_banner_1280x354_12__1.jpg" alt="/new-arrival" fetchpriority="high" />
                </picture>
                <picture>
                    <source srcSet="https://thumbor.sirclocdn.com/unsafe/342x150/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/m/o/mobile_banner_342x150_6__1.jpg" media="(max-width: 425px)" type="image/webp" />
                    <img data-pagespeed-no-defer="true" className="jss66 jss63 mx-auto" src="https://thumbor.sirclocdn.com/unsafe/1280x354/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/m/a/main_banner_1280_x_354_1_.jpg" alt="https://club.eigeradventure.com/promosi/92" fetchpriority="high" />
                </picture>
                <picture>
                    <source srcSet="https://thumbor.sirclocdn.com/unsafe/342x150/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/3/4/342_x_150.jpg" media="(max-width: 425px)" type="image/webp" />
                    <img data-pagespeed-no-defer="true" className="jss66 jss63 mx-auto" src="https://thumbor.sirclocdn.com/unsafe/1280x354/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/1/2/1280_x_354.jpg" alt="https://eigeradventure.onelink.me/Frj9/x1o9m6vv" fetchpriority="high" />
                </picture>
            </Carousel>
        </div>
    )
}