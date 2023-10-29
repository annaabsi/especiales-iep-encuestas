import React from 'react'
import styled from 'styled-components'
import NextHead from 'next/head'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Junio = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/junio-2023/" />
        <title>Encuesta IEP Perú: presidenta Dina Boluarte alcanza su mayor nivel de desaprobación desde que asumió el cargo | Congreso peruano</title>
        <meta name="title" content="Encuesta IEP Perú: presidenta Dina Boluarte alcanza su mayor nivel de desaprobación desde que asumió el cargo | Congreso peruano" />
        <meta name="description" content="Gobierno y Congreso sin legitimidad. Mientras que el 80% de la población desaprueba la gestión de Boluarte, un 91% desaprueba al Poder Legislativo. " />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Data" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Encuesta IEP Perú: presidenta Dina Boluarte alcanza su mayor nivel de desaprobación desde que asumió el cargo | Congreso peruano" />
        <meta name="twitter:description" content="Gobierno y Congreso sin legitimidad. Mientras que el 80% de la población desaprueba la gestión de Boluarte, un 91% desaprueba al Poder Legislativo. " />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/06/25/lg_6498556b0842492a555a3688.jpg" />
        <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/junio-2023/" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/06/25/lg_6498556b0842492a555a3688.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Encuesta IEP Perú: presidenta Dina Boluarte alcanza su mayor nivel de desaprobación desde que asumió el cargo | Congreso peruano" />
        <meta property="og:description" content="Gobierno y Congreso sin legitimidad. Mientras que el 80% de la población desaprueba la gestión de Boluarte, un 91% desaprueba al Poder Legislativo. " />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/06/25/lg_6498556b0842492a555a3688.jpg" />
        <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/junio-2023/" />
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
          title="Gobierno de Dina Boluarte alcanzó su mayor nivel de desaprobación desde que asumió el cargo, según encuesta IEP"
          bajada="Gobierno y Congreso sin legitimidad. Mientras que el 80% de la población desaprueba la gestión de Boluarte, un 91% desaprueba al Poder Legislativo."
        />

        <Question
          key={0}
          bajada="El gobierno de Dina Boluarte alcanzó su mayor nivel de desaprobación desde el inicio de su gestión en diciembre de 2022 tras el fallido golpe de Estado de Pedro Castillo. De acuerdo a la última encuesta de opinión urbano-rural del Instituto de Estudios Peruanos (IEP), el aumento de la percepción negativa del Ejecutivo ha crecido sostenidamente (+9%) desde que Castillo Terrones salió de la presidencia. También han disminuido 7 puntos porcentuales en el nivel de aprobación a nivel nacional. "
        >
          <iframe src='https://flo.uri.sh/story/1960824/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </Question>
          
        <Question
          bajada="En tanto, la desaprobación al Congreso de la República se ha mantenido por encima del 90%. En esa misma línea de percepción negativa, los niveles de aprobación continúan limitándose a tan solo 6%. "
        >
          <iframe src='https://flo.uri.sh/visualisation/14243925/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <br/><br/><br/><br/>
          <iframe src='https://flo.uri.sh/visualisation/14243982/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"250px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </Question>

        <Question
          bajada="La desaprobación del Parlamento ha sufrido importantes cambios. Las macrozonas con mayor variación porcentual en término de rechazo al Poder Legislativo son la Centro (+22) y Lima Metropolitana (+17%). No obstante, las macrozonas, oriente, norte y sur han aumentado su reprobación a este poder del Estado en 9%, 8% y 5%, respectivamente."
        />

        <Question
          title="Peor que antes"
          bajada="Más de la mitad de los peruanos (51%) considera que el gobierno de Dina Boluarte es peor que el de Pedro Castillo, mientras que 27% percibe que es igual y solo el 19% piensa que es mejor que la anterior gestión. Eso quiere decir que 8 de cada 10 peruanos considera que estamos igual o peor que con el golpista Pedro Castillo."
        >
          <iframe src='https://flo.uri.sh/visualisation/14243804/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </Question>

        <Question
          bajada="Estos números tendrían una correlación directa con la evaluación ciudadana sobre los primeros seis meses del gobierno de la exvicepresidenta de la gestión anterior, ahora jefa de gobierno. Según el estudio del IEP, 67% de peruanos evalúa como malo o muy malo la gestión del Ejecutivo actual. "
        >
          <iframe src='https://flo.uri.sh/story/1960839/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"500px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </Question>

        <Question
          title="¿Cultura ciudadana antidemocrática?"
          bajada="Un dato que alarma es el apoyo que darían más de la mitad de los peruanos (51%) a un líder que acabase con la delincuencia, a pesar de que este no respete los derechos de las personas. Este dato se confronta con un 46% de ciudadanos que estarían en contra. "
        >
          <iframe src='https://flo.uri.sh/visualisation/14244005/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </Question>

        <Question
          bajada="Quienes estarían dispuestos a apoyar a un personaje con características autoritarias y antidemocráticas, pero con aparente eficacia para acabar con la delincuencia, se concentran, principalmente, en el norte (54%) y sur (55%) del país. Asimismo , se puede observar que el respaldo a este tipo de líderes es mayor en NSE D/E y personas de 40 años a más. Además, quienes se identifican como de izquierda o de derecha son más afines a este tipo de líder, en comparación a quienes se ubican como de centro."
        />

        <Question
          title="Violencia contra la mujer"
          bajada="La mayoría de encuestados considera que es muy probable que una mujer en Perú sea víctima de acoso callejero (72%) y de violencia por parte de la pareja (68%). La primera cifra ha sufrido un aumento de 8% desde febrero del 2019, concentrándose en personas que viven en zonas urbanas del país (84%) y en Lima Metropolitana (92%)."
        >
          <iframe src='https://flo.uri.sh/visualisation/14244041/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:"100%",height:"600px"}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </Question>

        <FicTec
          title="FICHA TÉCNICA"
          desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE-281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 años a más con DNI en zonas urbanas y rurales: 24 760 062 personas (Reniec, Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1209 entrevistados, distribuidos en 24 departamentos, 146 provincias y 431 distritos. Margen de error: ± 2,8 pts. para los resultados a nivel nacional. Nivel de confianza: 95%, considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad provincial: 96,78%. Fuente de marco muestral: relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 17 al 22 de junio de 2023. Página web: www.iep.org.pe."
        />
        <ButtonBack/>
      </Container>
    </LayoutInterna>
  )
}

export default Junio

const Container = styled.div`
  width: 100%;
  height: auto;
`