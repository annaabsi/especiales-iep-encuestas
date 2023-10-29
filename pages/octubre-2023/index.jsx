import React from 'react'

import styled from 'styled-components'
import NextHead from 'next/head'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Octubre = () => {
  return (
    <>
      <LayoutInterna>
        <NextHead>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
          <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/octubre-2023/" />
          <title>JNJ: más del 70 % de peruanos cree que remoción los magistrados afecta la democracia, según encuesta IEP | Junta Nacional de Justicia | Congreso | Imelda Tumialán | Aldo Vásquez | Henry Ávila, Antonio de la Haza</title>
          <meta name="title" content="JNJ: más del 70 % de peruanos cree que remoción los magistrados afecta la democracia, según encuesta IEP | Junta Nacional de Justicia | Congreso | Imelda Tumialán | Aldo Vásquez | Henry Ávila, Antonio de la Haza" />
          <meta name="description" content="Aprobación de Boluarte se mantiene en un 10%. La aceptación del Congreso no varía: 9 de cada 10 peruanos rechazan al Poder Legislativo. Situación de la fiscal de la Nación también está en vilo." />
          <meta httpEquiv="content-language" content="es" />
          <meta name="author" content="LR Data" />

          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
          <meta name="robots" content="max-image-preview:large" />
          <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

          {/* Metadatos Twitter */}
          <meta name="twitter:title" content="JNJ: más del 70 % de peruanos cree que remoción los magistrados afecta la democracia, según encuesta IEP | Junta Nacional de Justicia | Congreso | Imelda Tumialán | Aldo Vásquez | Henry Ávila, Antonio de la Haza" />
          <meta name="twitter:description" content="Aprobación de Boluarte se mantiene en un 10%. La aceptación del Congreso no varía: 9 de cada 10 peruanos rechazan al Poder Legislativo. Situación de la fiscal de la Nación también está en vilo." />
          <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/10/29/lg_653e95bd950d463ced0a1aed.jpg" />
          <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/octubre-2023/" />
          <meta property="twitter:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@larepublica_pe" />
          <meta name="twitter:creator" content="@larepublica_pe" />
          <meta name="twitter:width" content="828" />
          <meta name="twitter:height" content="450" />

          {/* Metadatos Facebook */}
          <meta property="og:title" content="JNJ: más del 70 % de peruanos cree que remoción los magistrados afecta la democracia, según encuesta IEP | Junta Nacional de Justicia | Congreso | Imelda Tumialán | Aldo Vásquez | Henry Ávila, Antonio de la Haza" />
          <meta property="og:description" content="Aprobación de Boluarte se mantiene en un 10%. La aceptación del Congreso no varía: 9 de cada 10 peruanos rechazan al Poder Legislativo. Situación de la fiscal de la Nación también está en vilo." />
          <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/10/29/lg_653e95bd950d463ced0a1aed.jpg" />
          <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/octubre-2023/" />
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
            title="Más del 70% de peruanos cree que remoción en la JNJ afecta la democracia, según encuesta IEP"
            bajada="Aprobación de Boluarte se mantiene en un 10%. La aceptación del Congreso no varía: 9 de cada 10 peruanos rechazan al Poder Legislativo. Situación de la fiscal de la Nación también está en vilo."
          />
          <Question
            title="¿Ataque del Congreso al sistema de justicia?"
          />
          <Question
            bajada="El 74% de peruanos considera que, de efectuarse la remoción de miembros de la Junta Nacional de Justicia (JNJ) por parte del Congreso de la República, se estaría afectando a la democracia del país. La preocupación por la destitución de los jueces y fiscales preocupa más a los ciudadanos de la zona sur del Perú, principalmente, entre peruanos que desaprueban la gestión de Dina Boluarte."
          />
          <iframe src='https://flo.uri.sh/visualisation/15537619/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Prevalece desaprobación de gobierno de Dina Boluarte"
          />
          <Question
            bajada="El rechazo hacia la jefa de Estado crece ligeramente en un 2%. El 84% de la ciudadanía desaprueba la gestión de Boluarte y ello se acentúa en las zonas urbanas fuera de Lima por parte de ciudadanos en un rango de edad de 25 a 39 años, quienes además se identifican con posturas de izquierda y de centro. En tanto, solo el 10% ha manifestado estar de acuerdo con su mandato."
          />
          <iframe src='https://flo.uri.sh/visualisation/15537670/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="No avalan al Congreso"
          />
          <Question
            bajada="El Poder Legislativo tampoco se salva de la desaprobación. La investigación del IEP demuestra que 9 de cada 10 peruanos rechaza la labor que viene realizando el Congreso. El punto de inflexión ocurrió en diciembre de 2022, mes en que la presidenta Boluarte asumió el cargo tras la salida de Pedro Castillo, en un contexto de crisis política, sucedido por protestas y movilizaciones sociales."
          />
          <iframe src='https://flo.uri.sh/visualisation/15537711/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Democracia en peligro"
          />
          <Question
            bajada="No solo el Ejecutivo y Legislativo son rechazados por la población peruana, el sistema judicial se encuentra bajo amenaza debido a la posible destitución arbitraria de ciertos magistrados de la JNJ. A ello se suma la situación de la fiscal de la Nación, Patricia Benavides: más de la mitad de peruanos desaprueba su desempeño en el cargo, ello constituye el 65% de la población, en la que se encuentran connacionales con posturas marcadas de izquierda y de derecha."
          />
          <iframe src='https://flo.uri.sh/visualisation/15537738/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="Golpe a la economía del peruano"
          />
          <Question
            bajada="La situación política actual del país significa inestabilidad para los miles de peruanos, puesto que 7 de cada 10 encuestados refiere que el contexto actual afecta significativamente a su economía. Ello queda probado en el anuncio emitido por el ministro de Economía, Alex Contreras, quien confirmó que el Perú se encuentra en periodo de recesión económica. En esa misma línea, el 16% de la ciudadanía, en su mayoría jóvenes, considera que sufre una afectación en su trabajo y el 11% en su estabilidad emocional."
          />
          <iframe src='https://flo.uri.sh/visualisation/15537759/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            title="División entre peruanos"
          />
          <Question
            bajada="Si bien el contexto político repercute económicamente en la población, este genera también una división entre peruanos. La mitad de los encuestados indica que esta discordancia se debe a cuestiones ideológicas, mientras que el 29% de ellos argumentan que son por factores económicos. Pero más allá de ello, en el sur del Perú hay un factor de divisionismo claro: las diferencias raciales."
          />
          <iframe src='https://flo.uri.sh/visualisation/15537812/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <br></br>
          <FicTec
            title="FICHA TÉCNICA"
            desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 años a más con DNI en zonas urbanas y rurales: 24 760 062 personas (Reniec, Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1203 entrevistados, distribuidos en 24 departamentos, 154 provincias y 460 distritos. Margen de error: ± 2,8 pts. para los resultados a nivel nacional. Nivel de confianza: 95%, considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad provincial: 96,54%. Fuente de marco muestral: relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 21 al 26 de octubre de 2023. Página web: www.iep.org.pe."
          />
          <ButtonBack/>
        </Container>
      </LayoutInterna>
    </>
  )
}

export default Octubre

const Container = styled.div`
  width: 100%;
  height: auto;
`