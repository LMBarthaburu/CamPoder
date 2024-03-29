import C180 from '../../assets/tractores/180.png'
import C210 from '../../assets/tractores/210.png'
import C250 from '../../assets/tractores/250.png'
import E250 from '../../assets/tractores/evo250.png'
import E540 from '../../assets/tractores/evo540.png'
import P160 from '../../assets/tractores/ptrac160.png'
import B710 from '../../assets/tractores/bravo710.png'
import B225 from '../../assets/tractores/brioso225.png'
import N710 from '../../assets/tractores/novo710.webp'
import PA100 from '../../assets/tractores/pa100.png'
import MA160 from '../../assets/tractores/ma160.png'
import MA200 from '../../assets/tractores/ma200.png'
import ECO from '../../assets/tractores/ecofriendly.png'



export const Pauny=[
  {
    id: 1,
    serie: 'convencional',
    img: C180,
    modelo: 'Pauny 180A/180C',
    motor:'MWM MS 4.1',
    potencia: '80 CV',
    traccion:'Asistida o convencional',
    transmicion:'12 marchas hacia adelante y 12 marchas hacia atrás',
    sistemaHidraulico: 'centro abierto con bomba de engranajes',
  },
  {
    id: 2,
    serie: 'convencional',
    img: C210,
    modelo: 'Pauny 210A/210C',
    motor:'MWM MS 4.1 T',
    potencia: '8105 CV',
    traccion:'Asistida o convencional',
    transmicion:'24 marchas hacia adelante y 24 marchas hacia atrás',
    sistemaHidraulico: 'centro abierto con bomba de engranajes',
  },
  {
    id: 3,
    serie: 'convencional',
    img: C250,
    modelo: 'Pauny 230/250',
    motor:'CUMMINS 6B 5.9/ 6BT 5.9',
    potencia: '120/160 CV',
    traccion:'Asistida o convencional',
    transmicion:'10 marchas hacia adelante y 2 marchas hacia atrás',
    sistemaHidraulico: 'centro abierto con bomba de engranajes',
  },
  {
    id: 4,
    serie: 'evo',
    img: E250,
    modelo: 'Pauny EVO asistido 230/250/280',
    motor:'CUMMINS 6B 5.9/6BT 5.9/6BTA 5.9',
    potencia: '120/160/180 CV',
    traccion:'Asistida',
    transmicion:'10 marchas hacia adelante y 2 marchas hacia atrás',
    sistemaHidraulico: 'centro abierto con bomba de engranajes (opcional centro cerrado)',
  },
  {
    id: 5,
    serie: 'evo',
    img: P160,
    modelo: 'Pauny EVO P-TRAC 160/180',
    motor:'CUMMINS 6BT 5.9/6BTA 5.9',
    potencia: '160/180 CV',
    traccion:'4x4 permanente',
    transmicion:'16 marchas hacia adelante y 4 marchas hacia atrás',
    sistemaHidraulico: 'centro abierto con bomba de engranajes (opcional centro cerrado)',
  },
  {
    id: 6,
    serie: 'evo',
    img: E540,
    modelo: 'Pauny EVO articulado 500/540/580',
    motor:'CUMMINS 6CT 8.3/6CTA 8.3/6CTAP 8.3',
    potencia: '200/240/260 CV',
    traccion:'4x4 permanente',
    transmicion:'12 marchas hacia adelante y 4 marchas hacia atrás',
    sistemaHidraulico: 'centro abierto con bomba de engranajes',
  },
  {
    id: 7,
    serie: 'bravo',
    img: B710,
    modelo: 'Pauny BRAVO articulado 500/540/580/710',
    motor:'CUMMINS 6CTA 8.3/6CTAP 8.3/QSC8.3/QSL 9',
    potencia: '240/260/305/370 CV',
    traccion:'4x4 permanente',
    transmicion:'12 marchas hacia adelante y 4 marchas hacia atrás',
    sistemaHidraulico: 'centro cerrado con bomba montada en REPTO (cummins)',
  },
  {
    id: 8,
    serie: 'novo',
    img: N710,
    modelo: 'Pauny NOVO 500/540/580/710',
    motor:'CUMMINS 6CT 8.3/6CTA 8.3/6CTAP 8.3/QSC8.3',
    potencia: '200/240/260/305 CV',
    traccion:'4x4 permanente',
    transmicion:'12 marchas hacia adelante y 4 marchas hacia atrás',
    sistemaHidraulico: 'centro cerrado (load sensing)',
  },
  {
    id: 9,
    serie: 'brioso',
    img: B225,
    modelo: 'Pauny BRIOSO 2215ie',
    motor:'Cummins QSB6,7',
    potencia: '160 CV',
    traccion:'doble',
    transmicion:'12 marchas hacia adelante y 4 marchas hacia atrás',
    sistemaHidraulico: 'Hidro Max, de centro cerrado, load sensing',
  },
  {
    id: 10,
    serie: 'vial',
    img: ECO,
    modelo: 'Pauny Ecofriendly EVO art. 500',
    motor:'CUMMINS 6CT 8.3',
    potencia: '200 CV',
    traccion:'4x4 permanente',
    transmicion:'ZF ERGO POWER WG 160 tipo "power shift" (ZF alemana)',
    sistemaHidraulico: 'centro abierto con bomba de engranajes',
  },
  {
    id: 11,
    serie: 'vial',
    img: MA160,
    modelo: 'Motoniveladora  MA 160/180',
    motor:'CUMMINS 6BT 5.9/6BTA 5,9',
    potencia: '160/180 CV',
    traccion:'trasera en 4 ruedas en tanden',
    transmicion:'ZF ERGO POWER WG 160 tipo  "power shift" (ZF alemana)',
    sistemaHidraulico: 'centro abierto con bomba de engranajes',
  },
  {
    id: 12,
    serie: 'vial',
    img: MA200,
    modelo: 'Motoniveladora  MA 200ie',
    motor:'CUMMINS QSB 6.7 TIER 3',
    potencia: '200 CV',
    traccion:'trasera en 4 ruedas en tanden',
    transmicion:'ZF ERGO POWER WG 160 tipo  "power shift" (ZF alemana)',
    sistemaHidraulico: ' De centro cerrado, con bomba de pistón de caudal variable, acoplada a la caja de velocidades',
  },
  {
    id: 13,
    serie: 'vial',
    img: PA100,
    modelo: 'Pala PA 100/150',
    motor:'Diesel de 4 cilindros, refrigerado por agua',
    potencia: '87/102 CV',
    traccion:'Trasera',
    transmicion:'F4/R4 / F4/F4',
    sistemaHidraulico: 'Presión de trabajo 17.5 Mpa - Presión del sistema de dirección 14 Mpa',
  },
]