import React from 'react'
import Joker from '../components/joker.svg'
import Hoppie from '../components/hoppie.svg'
import Pillar from '../components/pillar.svg'
import Balloon from '../components/balloon.svg'
import Horizontal from '../components/horrizontal-pipe.svg'
import '../styles/event_page.css'

const EventPage = () => {
  const HandleEventLoad = () => {
    const midLine = document.querySelectorAll('.mid-line')
  
    midLine.forEach((line) => {
      const height = line.clientHeight
      line.style.marginTop = `-${height/2}px`
    })

    const pillarBottom = document.getElementById('pillar').getBoundingClientRect().y + document.getElementById('pillar').clientHeight
    const partThree = document.querySelector('.part-three').getBoundingClientRect().y

    document.getElementById('pillar').style.marginTop = `${partThree - pillarBottom}px`
  }
    

  return (
    <div className='event-main' onLoad={HandleEventLoad}>
        <div className="part-one">
          <div className="part-one-main">
            <div className="head-1">
              <h1 className='head-1-text'>EVENT<br />SCHEDULE</h1>
              <h1 className='head-2-text'>10<br />APRIL</h1>
            </div>
            <div className="part-one-sub-section">
              <div className="part-one-sub-side-1">
                  <img id='hoppie' src={Hoppie} alt="Hoppie" />
                  <div className='sch-container'>
                    <h1 className='sch-head'>10AM</h1>
                    <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                  </div>
                  <div className='sch-container'>
                    <h1 className='sch-head'>11AM</h1>
                    <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                  </div>
                  <div className='sch-container'>
                    <h1 className='sch-head'>12PM</h1>
                    <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                  </div>
              </div>
              <div className="part-one-sub-side-2">
                <img id='joker' src={Joker} alt="Joker"/>
              </div>
            </div>
          </div>
        </div>
        <div className="part-two">
          <img className='mid-line' src={Horizontal} alt="horioznal" />
          <div className="part-two-main">
            <div className="head-2">
              <h1 className='head-2-text-1'>11<br />APRIL</h1>
            </div>
            <div className="part-two-sub-section">
              <div className="part-two-sub-side-1">
                <div className='sch-container'>
                  <h1 className='sch-head'>10AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>10AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>10AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
              </div>
              <div className="pillar-part">
                <img id='pillar' src={Pillar} alt="Pillar"/>
              </div>
              <div className="part-two-sub-side-2">
                <div className='sch-container'>
                  <h1 className='sch-head'>12AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>3PM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>6PM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="part-three">
          <img className='mid-line' src={Horizontal} alt="horioznal" />
          <div className="part-three-main">
            <div className="head-3">
              <h1 className='head-3-text'>12<br />APRIL</h1>
            </div>
            <div className="part-three-sub-section">
              <div className="part-three-sub-side-1">
                <div className='sch-container'>
                  <h1 className='sch-head'>10AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>11AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>12PM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
              </div>
              <div className="part-three-sub-side-2">
                <div className='sch-container'>
                  <h1 className='sch-head'>1PM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>11AM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
                <div className='sch-container'>
                  <h1 className='sch-head'>12PM</h1>
                  <p className='sch-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet adipisci placeat consectetur a ex repellendus, corrupti ratione vitae saepe rerum fugiat, impedit asperiores porro id pariatur.</p>
                </div>
              </div>
            </div>
            <img id='balloon' src={Balloon} alt="Balloon" />  
          </div>
        </div>
    </div>
  )
}

export default EventPage