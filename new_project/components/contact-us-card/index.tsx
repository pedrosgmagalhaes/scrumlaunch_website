import React from 'react'
import Image from 'next/image'
import ContactFormImg from '../../public/assets/formImage.svg'
import Arrow from '../../public/icons/arrowBlack.svg'
import Button from '../buttons/accept-button'
import style from './style.module.scss'

export default function ContactUsCard() {
  return (
    <div className={style.contactUsCard}>
      <h1 className={style.title}>Ready to fuel your Business?</h1>

      <div className={style.contactUsContainer}>
        <div>
          <h2 className={style.subTitle}>
            Contact us at <span>hello@scrumlaunch.com</span> or fill out the
            form
          </h2>

          <div className={style.formContainerImage}>
            <Image
              className={style.contactImage}
              src={ContactFormImg}
              alt="form image"
            />

            <form className={style.companyDetailsCard}>
              <h3 className={style.companyTitle}>Company Details</h3>

              <div>
                <div className={style.formContactContainer}>
                  <div className={style.firstForm}>
                    <div className={style.inputContainer}>
                      <label htmlFor="name">
                        Name*
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </label>
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="email">
                        Email*
                        <input
                          type="text"
                          id="email"
                          placeholder="email@example.com"
                        />
                      </label>
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="companyName">
                        Company Name
                        <input
                          type="text"
                          id="companyName"
                          placeholder="Enter company name, if applicable"
                        />
                      </label>
                    </div>
                  </div>

                  <div className={style.secondForm}>
                    <label htmlFor="details">
                      Any details you’d like to share?
                      <textarea
                        id="details"
                        cols={30}
                        rows={10}
                        placeholder="Enter your message"
                      />
                    </label>
                  </div>
                </div>

                <div className={style.separator} />

                <div className={style.additionalInfo}>
                  <h3>Additional Information</h3>

                  <div className={style.selectorContainer}>
                    <div className={style.inputContainer}>
                      <label htmlFor="">Company Size</label>
                      <select name="">
                        <option value="">Select your company size</option>
                      </select>
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="">Total Project Budget</label>
                      <select name="">
                        <option value="">Select your project budget</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <Button
          buttonText="Send Message"
          onClickHandler={() => {}}
          icon={Arrow}
          color="white"
        />
      </div>
    </div>
  )
}
