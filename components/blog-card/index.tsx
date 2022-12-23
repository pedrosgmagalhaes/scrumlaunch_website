import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '../buttons/accept-button'
import style from './style.module.scss'
import Blog from '../../public/assets/blog.svg'
import Blog2 from '../../public/assets/blog2.svg'
import Blog3 from '../../public/assets/blog3.svg'
import Blog4 from '../../public/assets/blog4.svg'
import BlogAvatar from '../../public/assets/blogAvatar.svg'
import Arrow from '../../public/icons/arrowBlack.svg'

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
  const [page, setPage] = useState(0)
  const [numberOfPages, setNumberOfPages] = useState(0)

  useEffect(() => {
    const container = document.getElementById('article-mobile-scroll')
    if (typeof window !== 'undefined') {
      const localNumber =
        window.screen.width > 376
          ? Math.round(articleArray.length / 2)
          : articleArray.length
      setNumberOfPages(localNumber)
    }

    if (container !== null) {
      container.addEventListener('scroll', (event) => {
        const { scrollLeft } = event.target
        const position = Math.round(scrollLeft / 343)
        console.log('qq ', position)
        setPage(position)
      })
    }

    return () => {
      if (container !== null) {
        container.removeEventListener('scroll', () => {})
      }
    }
  }, [])

  const handleChangeSelector = (index: number) => {
    setPage(index)
    const container = document.getElementById('article-mobile-scroll')
    if (container !== null) {
      container.scrollLeft = index * 361
    }
  }

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

      <div id="article-mobile-scroll" className={style.articleSecondaryCard}>
        {articleArray.map((article) => (
          <div key={Math.random()} className={style.singleArticle}>
            <div className={style.mobileContainer}>
              <div>
                <span
                  className={style.articleTag1}
                  style={{ backgroundColor: article.tagColor }}
                >
                  {article.tag}
                </span>
              </div>

              <h1 className={style.articleTitle}>{article.title}</h1>
            </div>

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

      <div className={style.carouselControl}>
        {new Array(numberOfPages).fill({}).map((_, index) => (
          <div
            key={Math.random()}
            role="presentation"
            className={style.selector}
            style={{
              backgroundColor: `${page === index ? '#1e1f21' : '#f4f2ec'}`,
            }}
            onClick={() => handleChangeSelector(index)}
            onKeyDown={() => handleChangeSelector(index)}
          />
        ))}
      </div>

      <Button
        buttonText="View more articles"
        onClickHandler={() => {}}
        icon={Arrow}
        color="black"
      />
    </div>
  )
}
