import React from 'react'
import styled from 'styled-components'
import NextHead from 'next/head'
import Script from 'next/script'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Marzo = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/marzo-2023-I/" />
        <title>Encuesta IEP: Congreso en su peor aprobación y protestas sin resultados para la renuncia de Boluarte y adelanto de elecciones | marzo 2023</title>
        <meta name="title" content="Encuesta IEP: Congreso en su peor aprobación y protestas sin resultados para la renuncia de Boluarte y adelanto de elecciones | marzo 2023" />
        <meta name="description" content="La última encuesta del IEP de marzo señala que tan solo un 6% aprueba las acciones del Congreso de la República. Asimismo, el sondeo indica que las protestas continuarán, aunque se disminuye el apoyo hacia cambios en el Gobierno de Dina Boluarte." />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Data" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content=" Encuesta IEP: Congreso en su peor aprobación y protestas sin resultados para la renuncia de Boluarte y adelanto de elecciones | marzo 2023" />
        <meta name="twitter:description" content="La última encuesta del IEP de marzo señala que tan solo un 6% aprueba las acciones del Congreso de la República. Asimismo, el sondeo indica que las protestas continuarán, aunque se disminuye el apoyo hacia cambios en el Gobierno de Dina Boluarte." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/03/26/lg_64202de448f48230847aebbd.jpg" />
        <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/marzo-2023-I/" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/03/26/lg_64202de448f48230847aebbd.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content=" Encuesta IEP: Congreso en su peor aprobación y protestas sin resultados para la renuncia de Boluarte y adelanto de elecciones | marzo 2023" />
        <meta property="og:description" content="La última encuesta del IEP de marzo señala que tan solo un 6% aprueba las acciones del Congreso de la República. Asimismo, el sondeo indica que las protestas continuarán, aunque se disminuye el apoyo hacia cambios en el Gobierno de Dina Boluarte." />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/03/26/lg_64202de448f48230847aebbd.jpg" />
        <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/marzo-2023-I/" />
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
          title="Congreso en su peor aprobación y protestas sin resultados para la renuncia de Boluarte y adelanto de 
            elecciones, según encuesta del IEP"ª
          bajada="La última encuesta del IEP de marzo señala que tan solo un 6% aprueba las acciones del Congreso de 
            la República. Asimismo, el sondeo indica que las protestas continuarán, aunque se disminuye el apoyo 
            hacia cambios en el Gobierno de Dina Boluarte."
        />

        <Question
          key={0}
          title="Aprobación del Congreso"
          bajada="Continúa el rechazo al Congreso de la República, pues tan solo un 6% de los encuestados aprueba su 
            desempeño. Sin embargo, un 91% desaprueba su accionar. Con ello, obtiene la cifra más alta de rechazo desde 
            el inicio de sus funciones."
        >
        <div class="flourish-embed flourish-chart" data-src="visualisation/13198341">
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        </Question>

        <Question
          key={1}
          title="Futuro de las protestas sociales"
          bajada="Ante la pregunta del desarrollo de las protestas en el país, un 41% considera que continuarán y un 
            26% cree que se mantendrán igual. No obstante, un 24% piensa que disminuirán, un retroceso de 5% en 
            comparación a la medición de febrero."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/13198348">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={2}
          title="Adelanto de elecciones ante continuidad de las protestas"
          bajada="Por otro lado, sobre el adelanto de las elecciones, la mitad de las personas encuestadas considera 
            que las protestas lo conseguirán, aunque crece la percepción de que no se lograrían los comicios a raíz 
            de las manifestaciones, pues pasa de 38% en febrero a 43% en marzo."
        >
          <div class="flourish-embed" data-src="story/1869526">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={3}
          title="Futuro político de Dina Boluarte ante protestas que continúan"
          bajada="Asimismo, sobre el futuro de la presidenta Dina Boluarte, aumenta la opción que la mandataria no 
            renunciará debido a las manifestaciones. Así, de un 44% en febrero pasa a un 53% en marzo. En tal sentido, 
            también disminuye el apoyo a que sí se conseguiría la declinación: de 51% retrocede a un 41%."
        >
          <div class="flourish-embed" data-src="story/1869531">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={4}
          title="Aprobación de Dina Boluarte"
          bajada="La aprobación de la gestión de Dina Boluarte en el Ejecutivo se mantiene en comparación a la medición 
            del IEP de febrero. Así, vuelve a obtener un 15% de aceptación en la conducción de su Gobierno. En tanto, su 
            desaprobación alcanza el 78%, un punto porcentual más que el anterior mes. Por macrozona, los mayores niveles 
            de rechazo los obtienen en el oriente (82%), sur (82%) y centro (81%)."
        >
          <div class="flourish-embed" data-src="story/1869534">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <FicTec
          key={0}
          title="FICHA TÉCNICA"
          desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. 
            Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población 
            objeto de estudio: Población de 18 años a más con DNI: 24 760 062 personas (Reniec, Padrón Electoral de las 
            Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1220 entrevistados, 
            distribuidos en 24 departamentos, 152 provincias y 430 distritos. Margen de error: ± 2,8 pts. para los 
            resultados en el territorio nacional. Nivel de confianza: 95%, considerando una varianza máxima en las 
            proporciones poblacionales (p=q=0.5). Representatividad provincial: 95,77%. Fuente de marco muestral: 
            relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo 
            de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, 
            encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 
            18 al 22 de marzo de 2023. Página web: www.iep.org.pe."
        />
      <ButtonBack/>
      </Container>
    </LayoutInterna>
  )
}

export default Marzo

const Container = styled.div`
  width: 100%;
  height: auto;
`