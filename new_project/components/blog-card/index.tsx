import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import Blog from '../../public/assets/blog.svg'
import BlogAvatar from '../../public/assets/blogAvatar.svg'

export default function BlogCard() {
  return (
    <div className={style.blogCard}>
      <h1 className={style.title}>Blog</h1>

      <div className={style.blogCardContainer}>
        <div className={style.tagsContainer}>
          <div className={style.tag1}>Design</div>

          <div className={style.tag2}>Business</div>
        </div>

        <div className={style.subTitle}>
          How design makes the world: Typos and corrections
        </div>

        <div className={style.textContainer}>
          <Image
            className={style.blogImage}
            src={Blog}
            alt="two people talking in an business meeting"
          />

          <div className={style.blogText}>
            <p>
              Everything you use, from your home to your smartphone, from
              highways to supermarkets, was designed by someone. What did they
              get right? Where did they go wrong? And what can we learn from how
              these experts think that can help us improve our own lives?
            </p>

            <br />

            <p>
              Whether you spend time in a studio or a boardroom, an office or
              the outdoors, How Design Makes the World empowers you to ask
              better questions—and to understand the designs in everything that
              matters.
            </p>

            <h3>Read more</h3>

            <div className={style.separator} />

            <div className={style.authorInfo}>
              <Image src={BlogAvatar} alt="blog avatar" />

              <div>
                <h4>Thomas Jefferson</h4>

                <h6>22/09/2022</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
