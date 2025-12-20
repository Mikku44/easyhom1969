import React, { type ReactNode, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface HorizontalSwiperProps {
  children: ReactNode[]
  className?: string
  spaceBetween?: number
  slidesPerView?: number // default for desktop
  pagination?: boolean
  navigation?: boolean
  renderPrev?: ReactNode // custom previous arrow
  renderNext?: ReactNode // custom next arrow
}

const HorizontalSwiper: React.FC<HorizontalSwiperProps> = ({
  children,
  className,
  spaceBetween = 20,
  slidesPerView = 3.5,
  pagination = true,
  navigation = true,
  renderPrev,
  renderNext
}) => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`relative w-full ${className}`}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} id="dot-${index}" custom-dot"></span>`
          }
        }}
        navigation={
          navigation
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current
              }
            : undefined
        }
        onBeforeInit={swiper => {
          if (navigation) {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
          }
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 }, // mobile
          335: { slidesPerView: 1, spaceBetween: 10 }, // mobile
          432: { slidesPerView: 2, spaceBetween: 15 }, // tablet
          700: { slidesPerView: 4, spaceBetween: 15 }, // tablet
          768: { slidesPerView: 2, spaceBetween: 15 }, // tablet
          820: { slidesPerView: 2.5, spaceBetween: 15 }, // tablet
          1024: { slidesPerView: 3.5, spaceBetween: 20 } // desktop
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <>
          <div
            ref={prevRef}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer'
          >
            {renderPrev ?? (
              <div className='size-[32px] bg-white rounded-full flex items-center justify-center shadow'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='size-[32px]'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M14.121 17.243a1 1 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707'
                  />
                </svg>
              </div>
            )}
          </div>
          <div
            ref={nextRef}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer'
          >
            {renderNext ?? (
              <div className='size-[32px] bg-white rounded-full flex items-center justify-center shadow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='size-[32px]'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z'
                  />
                </svg>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default HorizontalSwiper
