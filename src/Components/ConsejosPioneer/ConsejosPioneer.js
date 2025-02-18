import React from 'react'
import './consejosPioneer.css'

function ConsejosPioneer() {
  return (
    <section className='container'>
      <div className='manejo-container'>
        <div className='manejo-fondo'></div>
        <h2 className='manejo-titulo fw-bolder fs-1'>MANEJO RESPONSABLE</h2>
      </div>
      <p>
        Creamos productos con las mas altas exigencias de seguridad| Queremos trabajar en forma conjunta con nuestros distribuidores, clientes, equipos internos, asociaciones e industria para poder generar buenas practicas de manejo en la producción agrícola
        <br />
        Las recomendaciones se refieren al manejo y gestión responsable de la tecnología con el objetivo de retrasar la evolución de resistencia y permitir aprovechar al máximo sus beneficios
      </p>
      <h4>Manejo integrado de plaga</h4>
      <ul>
        <li>Con un enfoque preventivo con la realización oportuna y adecuada de buenas prácticas agrícolas: Realiza una rotación de cultivos para reducir la población de insectos plaga, ya que los insectos plaga de un cultivo generalmente son distintos de los que afectan al siguiente cultivo en la rotación,
        Monitoreá y prepara el lote previo a la siembra, con un buen control de malezas y tratamiento de rastrojos, para evitar una población inicial de insectos elevada.</li>
        <li>Rota insecticidas con diferentes modos de acción para evitar la selección de resistencia</li>
        <li>Siempre sembrá refugio estructurado en un mínimo de 10% de la superficie a no más de 1500 mts, con un hibrido no Bt de ciclo similar de madurez. Esto permite proveer adultos susceptibles que puedan cruzarse con los resistentes generados en la porción Bt del lote, manteniendo baja la frecuencia de insectos resistentes a la tecnología. Así se preservará la tecnología Bt en el tiempo, disminuyendo la aplicación de insecticidas y promoviendo la sustentabilidad del sistema.</li>
        <li>Monitorea el cultivo durante todo el ciclo para conocer la incidencia y severidad del ataque de todas las plagas y aplicar insecticidas, u otras estrategias de control, cuando el daño alcance un umbral pre-establecido para cada plaga/cultivo, tanto en el refugio como en el cultivo Bt.</li>
      </ul>
      <h4>Manejo integrados de malezas</h4>
      <ul>
        <li> Monitorear el lote y realizar un correcto barbecho para favorecer la acumulación de agua y evitar hospederos secundarios de plagas</li>
        <li>Utilizar el concepto de Programa de Control de herbicidas con múltiples modos de acción.</li>
        <li>Identificar las malezas presentes en el lote antes y después de la aplicación</li>
        <li>Realizar rotación de principios activos para evitar la generación de resistencia</li>
        <li>Llevar adelante prácticas para evitar la producción y propagación de semillas de malezas: rotación de cultivos, control de malezas dentro y alrededor del lote, limpieza de cosechadora, uso de semilla legal, etc. </li>
      </ul>
      <h4>Uso responsable de productos fitosanitarios</h4>
      <p>Conocer qué hábitos son indispensables incorporar antes, durante y después de la aplicación</p>
      <h5>Antes de la aplicación</h5>
      <ul>
        <li>Contar con la Receta Agronómica.</li>
        <li>Comprar en distribuidores habilitados y verifica la fecha de vencimiento y Nº de lote.</li>
        <li>Transportar los productos apartados de animales, forrajes y alimentos.</li>
        <li>Dar aviso a las autoridades locales, escuelas y apicultores, de acuerdo a los requerimientos del municipio.</li>
        <li>Leer las etiquetas de los envases.</li>
        <li>Medir las condiciones climáticas y calibrar las máquinas pulverizadoras.</li>
        <li>Usar el equipo de protección personal.</li>
        <li>Lavar los envases mediante el triple lavado o lavado a presión.</li>
        <li>Perforar los envases para que no sean reutilizados. </li>
      </ul>
      <h5>Durante la aplicación</h5>
      <ul>
        <li>Verificar las condiciones climáticas.</li>
        <li>Usar el equipo de protección personal.</li>
        <li>Controlar la presión del equipo.</li>
        <li>Respetar la forma de aplicación en zonas de amortiguamiento.</li>
        <li>Utilizar tarjetas hidrosensibles.</li>
        <li>Asegurarse de que no haya animales o personas en el área.</li>
      </ul>
      <h5>Después de la aplicación</h5>
      <ul>
        <li>Usar el equipo de protección personal.</li>
        <li>Lavar la máquina pulverizadora sobre una cama biológica.</li>
        <li>Lavar el equipo de protección personal separado de la ropa de uso diario.</li>
        <li>Respetar los tiempos de carencia y de reingreso al lote.</li>
        <li>Entregar los envases vacíos en centros de almacenamiento transitorio (CAT). </li>
      </ul>
    </section>
  )
}

export default ConsejosPioneer