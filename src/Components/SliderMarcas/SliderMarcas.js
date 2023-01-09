import React from 'react'
import './sliderMarcas.css'
import StihlLogo from '../../assets/Logos/stihl-logo.png'
import PaunyLogo from '../../assets/Logos/pauny-logo.png'
import GimetalLogo from '../../assets/Logos/gimetal-logo.png'
import PioneerLogo from '../../assets/Logos/pioneer-logo.png'
import StanleyTermo from '../../assets/Logos/stanley-termo.png'
import StanleyLogo from '../../assets/Logos/Stanley-Logo.png'
import TramontinaLogo from '../../assets/Logos/Tramontina-Logo.png'
import PlumitaLogo from '../../assets/Logos/plumita.png'
import ErcaLogo from '../../assets/Logos/erca-logo.png'
import Tromen from'../../assets/Logos/tromen-logo.png'


function SliderMarcas() {
  return (
    <section className="container my-5">
      <h1 className='text-center m-0'>Nuestras Marcas</h1>
      <div className='marca'>
        <img src={PaunyLogo} alt="Tractores Pauny" className='logo-img' />
        <img src={PioneerLogo} alt="Semillas Pioneer"  className='logo-img'/>
        <img src={StihlLogo} alt="Implementos Stihl" className='logo-img' />
        <img src={GimetalLogo} alt="Gimetal"  className='logo-img'/>
        <img src={ErcaLogo} alt="Cosechadoras Erca"  className='logo-img'/>
        <img src={PlumitaLogo} alt="Cortadoras de cesped plumita" className='logo-img' />
        <img src={StanleyTermo} alt="Termos Stanley"  className='logo-img'/>
        <img src={StanleyLogo} alt="Herramientas Stanley"  className='logo-img'/>
        <img src={TramontinaLogo} alt="Herramientas Tramontina" className='logo-img' />
        <img src={Tromen} alt="Tromen hornos, calefactores y parrillas" className='logo-img' />
      </div>
    </section>
  )
}

export default SliderMarcas