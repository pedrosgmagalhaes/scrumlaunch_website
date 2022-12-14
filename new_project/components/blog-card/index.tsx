import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import Blog from '../../public/assets/blog.svg'
import Blog2 from '../../public/assets/blog2.svg'
import Blog3 from '../../public/assets/blog3.svg'
import Blog4 from '../../public/assets/blog4.svg'
import BlogAvatar from '../../public/assets/blogAvatar.svg'

const articleArray = [
  {
    image: Blog2,
    tag: 'Design',
    title: 'How design makes the world: Typos and corrections',
    text: 'Whether you spend time in a studio or a boardroom, an office or the outdoors, How Design Makes the World empowers you to ask better questions—and to understand the designs in everything that matters.',
    author: 'Thomas Jefferson',
    articleDate: '22/09/2022',
    authorAvatar: BlogAvatar,
    tagColor: '#E2CCFF',
  },
  {
    image: Blog3,
    tag: 'Self-development',
    title: 'How To Improve Your Problem-Solving Skills',
    text: 'Whether you spend time in a studio or a boardroom, an office or the outdoors, How Design Makes the World empowers you to ask better questions—and to understand the designs in everything that matters.',
    author: 'Thomas Jefferson',
    articleDate: '22/09/2022',
    authorAvatar: BlogAvatar,
    tagColor: '#FFCCDC',
  },
  {
    image: Blog4,
    tag: 'Management',
    title: 'How to Deal With a Lack of Communication At Work',
    text: 'Whether you spend time in a studio or a boardroom, an office or the outdoors, How Design Makes the World empowers you to ask better questions—and to understand the designs in everything that matters.',
    author: 'Thomas Jefferson',
    articleDate: '22/09/2022',
    authorAvatar: BlogAvatar,
    tagColor: '#FFD7C2',
  },
]

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

            <h3 className={style.readMore}>Read more</h3>

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

      <div className={style.articleSecondaryCard}>
        {articleArray.map((article) => (
          <div key={Math.random()} className={style.singleArticle}>
            <Image
              className={style.articleSecondaryImg}
              src={article.image}
              alt="secondary blog avatar"
            />

            <span
              className={style.articleTag1}
              style={{ backgroundColor: article.tagColor }}
            >
              {article.tag}
            </span>

            <h1 className={style.articleTitle}>{article.title}</h1>

            <p>{article.text}</p>

            <h3 className={style.readMore}>Read more</h3>

            <div className={style.separator} />

            <div className={style.authorInfo}>
              <Image src={article.authorAvatar} alt="author avatar" />

              <div>
                <h4>{article.author}</h4>

                <h6>{article.articleDate}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
