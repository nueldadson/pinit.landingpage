import React from 'react'
import styled from "styled-components"
import FAQs from "./FAQs"
import { Slide } from "react-awesome-reveal";

const FAQsectionn = styled.div`
  padding: 0rem 5rem 5rem 5rem;
  background-color: white;
  
  @media screen and (max-width: 600px) {
    padding: 2.5rem;
  }
  @media screen and (max-width: 400px) {
      padding: 1.5rem;
    }
  @media screen and (max-width: 300px) {
      padding: 0.8rem;
    }
`;
const FAQHeading = styled.h1`
font-size: 2.7rem;
font-weight: 800;
display: flex;
align-items: center;
justify-content: center;;
`;
const FAQContent = styled.h2`
font-weight: 800;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.8em;
margin-top: -30px !important;

@media screen and (max-width: 600px) {
  font-size: 1.3em;
}
@media screen and (max-width: 400px) {
  font-size: 1em;
}
@media screen and (max-width: 300px) {
  font-size: 0.7em;
}
`
const FAQContent2 = styled.h2`
font-weight: 800;
display: flex;
color: #0437f2;
align-items: center;
justify-content: center;
font-size: 2em;

@media screen and (max-width: 600px) {
  font-size: 1.3em;
}
@media screen and (max-width: 400px) {
  font-size: 1em;
}
@media screen and (max-width: 300px) {
  font-size: 0.7em;
}
`

const FAQBtn = styled.h2`
align-items: center;
justify-content: center;
display: flex;
color: #fff;
margin-top: 20px;
font-size: 1rem;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
`

const Spann = styled.span`
  border: none;
  outline: none;
  background: #0437f2;
  border-radius: 12px;
  padding:12px 26px;
  
  @media screen and (max-width: 500px) {
    padding:10px 30px;
    font-size: 0.7rem;
  font-weight: bold;
  }
  &:hover {
  transition: all 0.2s ease-in-out;
  background: #0437f2;
    color: #fff;
  }
&:hover {
    transition: all 0.2s ease-in-out;
    background: #008080;
    color: #fff;
  }
`



const FAQsSection = () => {
  return (
    <>
      <FAQsectionn id="faqs">
        <FAQHeading>
          FAQs
        </FAQHeading>
        <Slide  direction="up" duration="600">
          <FAQs
          question="What is PinIt?"
          answer="PinIt is a mobile application designed to help individuals and parents keep track of their belongings and ensure the safety of their children."
          />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQs
        question="How does PinIt work?"
        answer="PinIt assigns unique pin numbers to registered items, making it easy to retrieve lost belongings. Users can report lost items, and the system matches them with any found items in the database."
        />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQs
        question="Is PinIt only for tracking lost items??"
        answer="While PinIt primarily focuses on lost item management, it can also be used to ensure the safety of children by assigning them pin numbers for easy identification and tracking."
        />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQs
        question="Is my personal information safe with PinIt??"
        answer="Yes, PinIt prioritizes the security and privacy of user data. We implement robust encryption protocols and adhere to data protection regulations to safeguard personal information."
        />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQs
        question="Can I register any type of item on PinIt?"
        answer="Yes, PinIt allows users to register a wide range of items, including smartphones, wallets, keys, bags, and more."
        />
        <FAQs
        question="How do I receive notifications about lost items?"
        answer="Users receive automated notifications when a matching lost or found item is reported, ensuring quick and efficient retrieval."
        />
        <FAQs
        question="Can I edit or delete my registered items?"
        answer="Yes, users have the option to edit or delete their registered items at any time through their PinIt account."
        />
        <FAQs
        question="What if I find a lost item?"
        answer="If you find a lost item, you can submit details about it on PinIt, including time and location found. The system will match it with any reported lost items in the database."
        />
        <FAQs
        question="Is there a fee for using PinIt?"
        answer="PinIt offers both free and premium subscription options. The free version includes basic features, while the premium subscription offers additional services such as 24/7 customer support and extended coverage for lost items."
        />
        <FAQs
        question="How do I sign up for PinIt?"
        answer="Signing up for PinIt is easy! Simply visit our website or download the mobile app, and follow the prompts to create your account."
        />
        <FAQs
        question="Can I share my PinIt account with others?"
        answer="PinIt accounts are intended for individual use. We recommend each user register their own items and manage their account independently for optimal security and efficiency."
        />
        <FAQs
        question="How can I contact PinIt for support?"
        answer="If you have any questions or need assistance, you can reach out to our support team through the contact form on our website or by emailing [support@email.com]. We're here to help!

"
        />
        </Slide>
      </FAQsectionn> 
        <Slide  direction="up" duration="600">
          <FAQContent>
            Still searching for an answer?
          </FAQContent>
        </Slide>
        <Slide  direction="up" duration="650">
          <FAQContent2>
            Feel free to ask us
          </FAQContent2>
        </Slide>
        <Slide  direction="up" duration="700">
          <a href="#contact-us">
            <FAQBtn>
              <Spann>
                Contact us
              </Spann>
            </FAQBtn>
          </a>
        </Slide>
    </>
  )
}

export default FAQsSection;
