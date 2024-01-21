import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss';

export type StaticImport = import('../../../../node_modules/next/dist/shared/lib/get-img-props').StaticImport;

interface Props {
  items: {
    [key: string]: string | number
  }[];
  template: (item: {
    [key: string]: string | number | StaticImport
  }) => JSX.Element;
  breakpoints?: {
    [key: number]: {
      [key: string]: string | number | boolean
    }
  };
  classWrapper?: string;
  slidesPerView?: number | 'auto';
}

const Slider: React.FC<Props> = (props: Props) => {
  return(
    <div className={`slider ${props.classWrapper}`}>
        <Swiper
          modules={[ Navigation, FreeMode ]}
          slidesPerView={props.slidesPerView ? props.slidesPerView : 1}
          spaceBetween={10}
          navigation= {{
            nextEl: '.slider__button--next',
            prevEl: '.slider__button--prev',
          }}
          a11y= {{
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
          }}
          breakpoints= {props.breakpoints}
        >
          {props.items.map((movie) => (
            <SwiperSlide key={movie.id}>
              {props.template(movie)}
            </SwiperSlide>
          ))}
          <button type='button' className='slider__button slider__button--prev' aria-label='Предыдущий слайд'></button>
          <button type='button' className='slider__button slider__button--next' aria-label='Следующий слайд'></button>
        </Swiper>
      </div>
  );
};

export default Slider;
