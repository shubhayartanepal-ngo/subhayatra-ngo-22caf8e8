// src/hooks/useSlickSlider.js
import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";

export const useSlickSlider = (selector = ".testi-slider") => {
  useEffect(() => {
    $(selector).each(function () {
      const $slider = $(this);
      const $show = $slider.data("show") || 3;
      const $arr =
        $slider.data("arrow") === true || $slider.data("arrow") === "true";
      const $dots = !$arr;
      const $m_show = $show === 3 ? $show - 1 : $show;

      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
          slidesToShow: $show,
          slidesToScroll: 1,
          arrows: $arr,
          autoplay: true,
          autoplaySpeed: 5000,
          adaptiveHeight: true,
          prevArrow:
            '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
          nextArrow:
            '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: $m_show,
                slidesToScroll: 1,
                infinite: true,
                arrows: $arr,
                dots: $dots,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              },
            },
          ],
        });
      }
    });
  }, [selector]);
};
