import React, { useState, ChangeEvent } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import ContactModal from '../modal-contact'
import ContactFormImg from '../../public/assets/formImage.svg'
import Arrow from '../../public/icons/arrowWhite.svg'
import Button from '../buttons/accept-button'
import style from './style.module.scss'

const budgetSize = ['10000 USD', '100000 USD', '1000000 USD']
const peopleSize = ['5', '20', '50', '100', '500']

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '650px',
    height: '530px',
    backgroundColor: '#e2ccff',
    borderRadius: '16px',
    padding: '0',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: '#1e1f21a0',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#6c727f',
  },
}

export default function ContactUsCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [details, setDetails] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [totalProjectBudget, setTotalProjectBudget] = useState('')
  const [error, setError] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleFormChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (error) {
      setError(false)
    }

    const { value, name: eventName } = event.target
    switch (eventName) {
      case 'name':
        setName(value)
        break

      case 'email':
        setEmail(value)
        break

      case 'companyName':
        setCompanyName(value)
        break

      case 'details':
        setDetails(value)
        break

      case 'companySize':
        setCompanySize(value)
        break

      case 'totalProjectBudget':
        setTotalProjectBudget(value)
        break

      default:
        break
    }
  }

  const handleSubmitForm = () => {
    if (name.trim().length === 0 || email.trim().length === 0) {
      setError(true)
      return
    }

    const form = {
      name,
      email,
      companyName,
      details,
      companySize,
      totalProjectBudget,
    }
    setModalIsOpen(true)
  }

  const closeModal = () => setModalIsOpen(false)

  return (
    <div className={style.contactUsCard}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Modal"
        style={customStyles}
      >
        <ContactModal closeModal={closeModal} />
      </Modal>

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
                          className={error ? style.error : ''}
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={handleFormChange}
                        />
                      </label>
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="email">
                        Email*
                        <input
                          className={error ? style.error : ''}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="email@example.com"
                          value={email}
                          onChange={handleFormChange}
                        />
                      </label>
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="companyName">
                        Company Name
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          placeholder="Enter company name, if applicable"
                          value={companyName}
                          onChange={handleFormChange}
                        />
                      </label>
                    </div>
                  </div>

                  <div className={style.secondForm}>
                    <label htmlFor="details">
                      Any details you’d like to share?
                      <textarea
                        id="details"
                        name="details"
                        cols={30}
                        rows={10}
                        placeholder="Enter your message"
                        value={details}
                        onChange={handleFormChange}
                      />
                    </label>
                  </div>
                </div>

                <div className={style.separator} />

                <div className={style.additionalInfo}>
                  <h3>Additional Information</h3>

                  <div className={style.selectorContainer}>
                    <div className={style.inputContainer}>
                      <label htmlFor="companySize">
                        Company Size
                        <select
                          name="companySize"
                          value={companySize}
                          onChange={handleFormChange}
                        >
                          <option value="">Select your company size</option>
                          {peopleSize.map((people) => (
                            <option key={Math.random()} value={people}>
                              {people}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className={style.inputContainer}>
                      <label htmlFor="totalProjectBudget">
                        Total Project Budget
                        <select
                          name="totalProjectBudget"
                          value={totalProjectBudget}
                          onChange={handleFormChange}
                        >
                          <option value="">Select your project budget</option>
                          {budgetSize.map((budget) => (
                            <option key={Math.random()} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={style.submitFormButton}>
          <Button
            buttonText="Send Message"
            onClickHandler={handleSubmitForm}
            icon={Arrow}
            color="white"
          />
        </div>
      </div>
    </div>
  )
}
