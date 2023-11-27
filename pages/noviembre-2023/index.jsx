import React from 'react'

import styled from 'styled-components'
import NextHead from 'next/head'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Noviembre = () => {
  return (
    <>
      <LayoutInterna>
        <NextHead>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
          <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/noviembre-2023/" />
          <title>Dina Boluarte: el 72% de la ciudadanía considera que la presidenta no defiende la autonomía del Poder Ejecutivo ante el Congreso | presidente del Perú | poder legislativo</title>
          <meta name="title" content="Dina Boluarte: el 72% de la ciudadanía considera que la presidenta no defiende la autonomía del Poder Ejecutivo ante el Congreso | presidente del Perú | poder legislativo" />
          <meta name="description" content="Sin autonomía. El Gobierno de Dina Boluarte alcanza un pico de desaprobación con un 85% a casi un año de asumir la presidencia, mientras que el 85% de los ciudadanos consideran que el Congreso no respeta la separación de poderes del Estado." />
          <meta httpEquiv="content-language" content="es" />
          <meta name="author" content="LR Data" />

          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
          <meta name="robots" content="max-image-preview:large" />
          <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

          {/* Metadatos Twitter */}
          <meta name="twitter:title" content="Dina Boluarte: el 72% de la ciudadanía considera que la presidenta no defiende la autonomía del Poder Ejecutivo ante el Congreso | presidente del Perú | poder legislativo" />
          <meta name="twitter:description" content="Sin autonomía. El Gobierno de Dina Boluarte alcanza un pico de desaprobación con un 85% a casi un año de asumir la presidencia, mientras que el 85% de los ciudadanos consideran que el Congreso no respeta la separación de poderes del Estado." />
          <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/11/25/lg_6562c3a001bbb521bb3f5cca.jpg" />
          <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/noviembre-2023/" />
          <meta property="twitter:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@larepublica_pe" />
          <meta name="twitter:creator" content="@larepublica_pe" />
          <meta name="twitter:width" content="828" />
          <meta name="twitter:height" content="450" />

          {/* Metadatos Facebook */}
          <meta property="og:title" content="Dina Boluarte: el 72% de la ciudadanía considera que la presidenta no defiende la autonomía del Poder Ejecutivo ante el Congreso | presidente del Perú | poder legislativo" />
          <meta property="og:description" content="Sin autonomía. El Gobierno de Dina Boluarte alcanza un pico de desaprobación con un 85% a casi un año de asumir la presidencia, mientras que el 85% de los ciudadanos consideran que el Congreso no respeta la separación de poderes del Estado." />
          <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/11/25/lg_6562c3a001bbb521bb3f5cca.jpg" />
          <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/noviembre-2023/" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="828" />
          <meta property="og:image:height" content="450" />
          <meta property="og:site_name" content="La República" />
          <meta property="fb:pages" content="145820412845" />
          <meta property="fb:app_id" content="602624269799095" />

          {/* SCHEMAS BREADCRUMB */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org/",
                  "@type": "BreadcrumbList",
                  "itemListElement": [{
                    "@type": "ListItem",
                  "position": 1,
                  "name": "El 73% de peruanos considera que lo más conveniente para el país es adelantar las elecciones para este 2023, según IEP",
                  "item": "https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-II/"  
                  },{
                    "@type": "ListItem",
                  "position": 2,
                  "name": "El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al Congreso, según IEP",
                  "item": "https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/01-23-enero-I/"  
                  },{
                    "@type": "ListItem",
                  "position": 3,
                  "name": "Pedro Castillo: sin cambios en su aprobación, pero con retroceso en la gestión de temas centrales",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/enero-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 4,
                  "name": "Casi la mitad de la población cree que la salida a la crisis política son nuevas elecciones",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/febrero-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 5,
                  "name": "Si vacan a Pedro Castillo, el 80% de la ciudadanía cree que el camino son nuevas elecciones",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/marzo-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 6,
                  "name": "El 68% de los peruanos está de acuerdo con el adelanto de elecciones, según IEP",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/abril-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 7,
                  "name": "Lo más conveniente para el país sigue siendo el adelanto de elecciones: un 67% quiere nuevo presidente y congresistas",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/mayo-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 8,
                  "name": "Encuesta IEP: para el 88%, el Congreso es percibido como la institución con mayor corrupción generalizada",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/junio-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 9,
                  "name": "Encuesta IEP: apenas un 10% aprueba el desempeño del Congreso de la República",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/julio-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 10,
                  "name": "Un 60% está de acuerdo con investigación de la Fiscalía al presidente por indicios de corrupción",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/setiembre-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 11,
                  "name": "Un 52% cree que Castillo está involucrado en corrupción",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/octubre-1-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 12,
                  "name": "Un 59% cree que Castillo está involucrado en corrupción, según encuesta IEP",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/octubre-2-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 13,
                  "name": "Si inhabilitan al presidente Pedro Castillo, un 87% preferiría que se convoquen nuevas elecciones",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/noviembre-2022/"  
                  },{
                    "@type": "ListItem",
                  "position": 14,
                  "name": "Un 83% cree que se deben adelantar las elecciones generales",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/"  
                  },{
                    "@type": "ListItem",
                  "position": 15,
                  "name": "Pedro Castillo detiene su caída luego de primer intento de vacancia",
                  "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/diciembre-2021/"  
                  },{
                    "@type": "ListItem",
                  "position": 16,
                  "name": "Congreso tiene rechazo de un 90% y Dina Boluarte obtiene un 77% de desaprobación, según encuesta IEP",
                  "item": "https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/febrero-2023-I/"  
                  },{
                    "@type": "ListItem",
                  "position": 17,
                  "name": "Encuesta IEP: Congreso en su peor aprobación y protestas sin resultados para la renuncia de Boluarte y adelanto de elecciones | marzo 2023",
                  "item": "https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/marzo-2023-I/"  
                  }]
                }
              `
            }}
          ></script>
        </NextHead>
        <Container>
          <Title
            key={0}
            title="El 72% de la ciudadanía considera que Dina Boluarte no defiende la autonomía del Poder Ejecutivo ante el Congreso"
            bajada="Sin autonomía. El Gobierno de Dina Boluarte alcanza un pico de desaprobación con un 85% a casi un año de asumir la presidencia, mientras que el 85% de los ciudadanos consideran que el Congreso no respeta la separación de poderes del Estado."
          />
          <Question
            title="Prevalece desaprobación del Gobierno de Dina Boluarte"
          />
          <Question
            bajada="El rechazo a la presidenta de la República, Dina Boluarte, se incrementó en un punto con respecto al mes de octubre, por lo que prevalece el rechazo de la ciudadanía hacia la mandataria. Boluarte llega así al 85% de desaprobación, la más baja desde que asumió la presidencia. En tanto, solo el 8% de las personas encuestadas aprueba la gestión de la jefa de Estado."
          />
          <iframe src='https://flo.uri.sh/visualisation/15891133/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Casi todo el país desaprueba al actual Congreso"
          />
          <Question
            bajada="El Congreso de la República aún tiene más desaprobación que el Gobierno actual con un 91%, similar al mes anterior. Cabe resaltar que todos los niveles socioeconómicos coinciden en su rechazo, siendo el A/B el sector con mayor porcentaje con un 94%. Pese a su mínima aprobación con un paupérrimo 6%, la Mesa Directiva del Congreso aprobó un bono de S/9.900 para todos los trabajadores de dicho poder, incluidos los congresistas."
          />
          <iframe src='https://flo.uri.sh/visualisation/15891141/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Ciudadanía pide renovación de todo el gabinete"
          />
          <Question
            bajada="El 65% de las personas encuestadas considera que es necesario renovar todo el gabinete de ministros liderado por Alberto Otárola, quien gobierna junto con la presidenta desde el 21 de diciembre del 2022, poco después de que la mandataria asumiera el cargo y retirara a Pedro Angulo de la Presidencia del Consejo de Ministros."
          />
          <iframe src='https://flo.uri.sh/visualisation/15891150/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Mayoría del país no aprueba viajes de Boluarte al extranjero"
          />
          <Question
            bajada="El 82% de la ciudadanía considera que los viajes de la presidenta Dina Boluarte no han ayudado en nada al país. La mandataria ha viajado cinco veces al extranjero en casi un año de gobierno. En sus diferentes viajes, la jefa de Estado mintió al asegurar que mantendría reuniones bilaterales con su par de Estados Unidos, Joe Biden, por lo que la excanciller Ana Gervasi presentó su renuncia al cargo."
          />
          <iframe src='https://flo.uri.sh/visualisation/15891170/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Sin autonomía: Boluarte sometida ante el Congreso"
          />
          <Question
            bajada="El 72% de las personas encuestadas considera que la presidenta Dina Boluarte acepta casi todo lo que propone el Congreso, el cual tiene una mínima aprobación ciudadana. En tanto, solo el 11% cree que defiende la autonomía del Ejecutivo y de los organismos del Estado."
          />
          <iframe src='https://flo.uri.sh/visualisation/15893996/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Congreso no respeta separación de poderes"
          />
          <Question
            bajada="En la misma línea, un 85% considera que el Congreso no respeta el principio de separación de poderes, lo que significa que la ciudadanía piensa que el Poder Legislativo estaría incurriendo en el acaparamiento de los Poderes del Estado.Este resultado es similar a la medición de setiembre de este año, la cual arrojaba que el 86% de la población tenía esta percepción."
          />
          <iframe src='https://flo.uri.sh/visualisation/15894044/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Presidenta Boluarte sobre la investigación del Congreso a la Junta Nacional de Justicia"
          />
          <Question
            bajada="Tres cuartas partes de la población encuestada creen que la jefa de Estado debería pronunciarse sobre la investigación que el Congreso viene realizando a la Junta Nacional de Justicia. En cambio, el 14% considera que no debería hacerlo."
          />
          <iframe src='https://flo.uri.sh/visualisation/15894068/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <br></br>
          <FicTec
            title="FICHA TÉCNICA"
            desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro:0393-REE/JNE – 281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 años a más con DNI en zonas urbanas y rurales: 24.760.062 personas (Reniec, Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1.213 entrevistados, distribuidos en 24 departamentos, 156 provincias y 459 distritos. Margen de error: ± 2,8 pts. para los resultados a nivel nacional. Nivel de confianza: 95%, considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad provincial: 96,74%. Fuente de marco muestral: relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 18 al 23 de noviembre de 2023. Página web: www.iep.org.pe."
          />
          <ButtonBack/>
        </Container>
      </LayoutInterna>
    </>
  )
}

export default Noviembre

const Container = styled.div`
  width: 100%;
  height: auto;
`