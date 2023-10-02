import React from 'react'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Chat from '../../assets/icon-chat.png'
import Money from '../../assets/icon-money.png'
import Security from '../../assets/icon-security.png'
import'../Home/Home.css'

function Home() {
  return (
    <div>
   <Hero/>
   <section className="features">
   <Features title={"You are our #1 priority"} image={Chat} content={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes"}/> 
   <Features title={"More savings means higher rates"} image={Money} content={"The more you save with us, the higher your interest rate will be!"}/> 
      <Features title={"Security you can trust"} image={Security} content={"We use top of the line encryption to make sure your data and money is always safe."}/> 
   </section>
   </div>
  )
}

export default Home