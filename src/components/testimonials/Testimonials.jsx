import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'Nəsibəli YUSIBOV',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: '      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus cum, eligendi magnam adipisci dolor dolorem modi dolore harum inventore tempora perferendis debitis sit culpa ut, in aut consequatur officiis corrupti provident. Nostrum voluptas assumenda molestiae iusto? Exercitationem error officiis ex perspiciatis sit unde magnam atque aliquam sint soluta! Nihil magnam laboriosam id pariatur eos!      ',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'Raul Omarov',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus cum, eligendi magnam adipisci dolor dolorem modi dolore harum inventore tempora perferendis debitis sit culpa ut, in aut consequatur officiis corrupti provident. Nostrum voluptas assumenda molestiae iusto? Exercitationem error officiis ex perspiciatis sit unde magnam atque aliquam sint soluta! Nihil magnam laboriosam id pariatur eos!      ",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/agasi-xalilov/',
      name: 'Ağasl Xəlilov',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: '      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus cum, eligendi magnam adipisci dolor dolorem modi dolore harum inventore tempora perferendis debitis sit culpa ut, in aut consequatur officiis corrupti provident. Nostrum voluptas assumenda molestiae iusto? Exercitationem error officiis ex perspiciatis sit unde magnam atque aliquam sint soluta! Nihil magnam laboriosam id pariatur eos. ',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/javid-aliyev-b343061b6/',
      name: 'Javid Aliyev',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus cum, eligendi magnam adipisci dolor dolorem modi dolore harum inventore tempora perferendis debitis sit culpa ut, in aut consequatur officiis corrupti provident. Nostrum voluptas assumenda molestiae iusto? Exercitationem error officiis ex perspiciatis sit unde magnam atque aliquam sint soluta! Nihil magnam laboriosam id pariatur eos!",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/elshad-bashirov-1907a1213/',
      name: 'Elshad Bashirov',
      role: 'Software Developer',
      test: "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus cum, eligendi magnam adipisci dolor dolorem modi dolore harum inventore tempora perferendis debitis sit culpa ut, in aut consequatur officiis corrupti provident. Nostrum voluptas assumenda molestiae iusto? Exercitationem error officiis ex perspiciatis sit unde magnam atque aliquam sint soluta! Nihil magnam laboriosam id pariatur eos!      ",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials