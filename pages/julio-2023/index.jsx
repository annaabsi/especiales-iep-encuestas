import React from 'react'

import styled from 'styled-components'
import NextHead from 'next/head'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Julio = () => {
  return (
    <>
      <LayoutInterna>
        <NextHead>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
          <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/julio-2023/" />
          <title>Que se vayan todos: un 80% de peruanos apoya adelanto de elecciones, según encuesta IEP | Perú</title>
          <meta name="title" content="Que se vayan todos: un 80% de peruanos apoya adelanto de elecciones, según encuesta IEP | Perú" />
          <meta name="description" content="Casi la mitad de peruanos considera que el Perú no es una democracia. Persiste el apoyo de la población por las principales demandas de las protestas: renuncia de Dina Boluarte y cierre del Congreso." />
          <meta httpEquiv="content-language" content="es" />
          <meta name="author" content="LR Data" />

          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
          <meta name="robots" content="max-image-preview:large" />
          <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

          {/* Metadatos Twitter */}
          <meta name="twitter:title" content="Que se vayan todos: un 80% de peruanos apoya adelanto de elecciones, según encuesta IEP | Perú" />
          <meta name="twitter:description" content="Casi la mitad de peruanos considera que el Perú no es una democracia. Persiste el apoyo de la población por las principales demandas de las protestas: renuncia de Dina Boluarte y cierre del Congreso." />
          <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/07/23/lg_64bd65945864a52f374da63b.jpg" />
          <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/julio-2023/" />
          <meta property="twitter:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@larepublica_pe" />
          <meta name="twitter:creator" content="@larepublica_pe" />
          <meta name="twitter:width" content="828" />
          <meta name="twitter:height" content="450" />

          {/* Metadatos Facebook */}
          <meta property="og:title" content="Que se vayan todos: un 80% de peruanos apoya adelanto de elecciones, según encuesta IEP | Perú" />
          <meta property="og:description" content="Casi la mitad de peruanos considera que el Perú no es una democracia. Persiste el apoyo de la población por las principales demandas de las protestas: renuncia de Dina Boluarte y cierre del Congreso." />
          <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/07/23/lg_64bd65945864a52f374da63b.jpg" />
          <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/julio-2023/" />
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
            title="Que se vayan todos: un 80% de peruanos apoya adelanto de elecciones, según encuesta IEP"
            bajada="Casi la mitad de peruanos considera que el Perú no es una democracia. Persiste el apoyo de la población por las principales demandas de las protestas: renuncia de Dina Boluarte y cierre del Congreso."
          />
          <Question
            bajada="A poco más de medio año de la asunción de Dina Boluarte como presidenta y a puertas de las celebraciones de Fiestas Patrias, más de la mitad de la ciudadanía mantiene el apoyo mayoritario a las protestas que buscan el adelanto de elecciones generales, según la última encuesta de representación nacional del Instituto de Estudios Peruanos (IEP), una investigación realizada con el diario La República."
          />
          <Question
            bajada="El sondeo realizado del sábado 15 al miércoles 19 de julio revela que poco más del 80% de los peruanos considera que lo más conveniente para el país es el adelanto de elecciones antes del 2026, lo que demuestra que esta demanda se sostiene a lo largo de los últimos dos meses."
          />
          <iframe
            src='https://flo.uri.sh/story/1984671/embed'
            title='Interactive or visual content'
            class='flourish-embed-iframe'
            frameborder='0'
            scrolling='no'
            style={{ width: "100%", height: "600px" }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
          </iframe>
          <br></br>
          <br></br>
          <Question
            bajada="En la misma línea, el mismo porcentaje de peruanos desaprueba la forma como la presidenta Dina Boluarte conduce su gobierno y solo casi el 11% la aprueba, una situación similar a la de hace un mes."
          />
          <iframe src='https://flo.uri.sh/story/1984663/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            bajada="Pese a que el Congreso actual tiene una aprobación del 6%, un 35% de la población percibe que los congresistas tienen más poder en el país. Luego le siguen los empresarios (24%) y, en tercer lugar, aparece la presidenta Boluarte (19%)."
          />
          <iframe src='https://flo.uri.sh/visualisation/14520700/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <Question
            bajada="Asimismo, poco más de tres cuartas partes de peruanos y peruanas cree que el actual Congreso abusa del poder que tiene, mientras que solo el 2% piensa que lo usan de manera correcta."
          />
          <Question
            bajada="Ante este panorama, el 58 % de los connacionales se siente identificado con la protesta nacional del último 19 de julio, la cual tiene como principales consignas la renuncia de Dina Boluarte, el cierre del actual Congreso y una convocatoria a una Asamblea Constituyente. En cambio, un tercio del Perú no se reconoce en una identificación con esta movilización: 33% en la encuesta."
          />
          <iframe src='https://flo.uri.sh/story/1984683/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px" }} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <br></br>
          <Question
            bajada="La conformidad con demandas planteadas en las protestas sobre Boluarte, el Congreso y un proceso constituyente es mayor que la identificación con las marchas. Un 78% de los peruanos está de acuerdo con la exigencia de que renuncie la mandataria, un 77% con el reclamo de cierre del Parlamento y un 69% con convocar a una asamblea constituyente."
          />
          <iframe src='https://flo.uri.sh/visualisation/14520651/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <br></br>
          <Question
            bajada="Un 49% de la población considera que el Perú ya no es una democracia, percepción que tiene un ligero repunte desde febrero de este año, en que un 43% coincidía con esta idea. Así, se reduce en seis puntos el porcentaje de las personas que consideran que el país sí es una democracia, pasando de 57% en febrero a 51% en julio. "
          />
          <iframe src='https://flo.uri.sh/visualisation/14520685/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <br></br>
          <br></br>
          <br></br>
          <FicTec
            title="FICHA TÉCNICA"
            desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 años a más con DNI en zonas urbanas y rurales: 24 760 062 personas (Reniec, Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1206 entrevistados, distribuidos en 24 departamentos, 151 provincias y 448 distritos. Margen de error: ± 2,8 pts. para los resultados a nivel nacional. Nivel de confianza: 95%, considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad provincial: 95,90%. Fuente de marco muestral: relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 15 al 19 de julio de 2023. Página web: www.iep.org.pe."
          />
          <ButtonBack/>
        </Container>
      </LayoutInterna>
    </>
  )
}

export default Julio

const Container = styled.div`
  width: 100%;
  height: auto;
`