import React from 'react'
import styled from 'styled-components'
import NextHead from 'next/head'
import Script from 'next/script'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Abril = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/abril-2023/" />
        <title>Encuesta IEP: un 75% se siente inseguro en su barrio o vecindario | abril 2023</title>
        <meta name="title" content="Encuesta IEP: un 75% se siente inseguro en su barrio o vecindario | abril 2023" />
        <meta name="description" content="La criminalidad que se vive en las calles del país también se refleja en la percepción ciudadana, pues solo un 7% se siente muy seguro en la zona en donde vive. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de marzo.." />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Data" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Encuesta IEP: un 75% se siente inseguro en su barrio o vecindario | abril 2023" />
        <meta name="twitter:description" content="La criminalidad que se vive en las calles del país también se refleja en la percepción ciudadana, pues solo un 7% se siente muy seguro en la zona en donde vive. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de marzo.." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/04/30/lg_644e65d3e492341b6f628d9c.jpg" />
        <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/abril-2023/" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/04/30/lg_644e65d3e492341b6f628d9c.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Encuesta IEP: un 75% se siente inseguro en su barrio o vecindario | abril 2023" />
        <meta property="og:description" content="La criminalidad que se vive en las calles del país también se refleja en la percepción ciudadana, pues solo un 7% se siente muy seguro en la zona en donde vive. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de marzo.." />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/04/30/lg_644e65d3e492341b6f628d9c.jpg" />
        <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/abril-2023/" />
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
                },{
                  "@type": "ListItem",
                "position": 18,
                "name": "Encuesta IEP: un 75% se siente inseguro en su barrio o vecindario | abril 2023",
                "item": "https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/abril-2023/"  
                }]
              }
            `
          }}
        ></script>
      </NextHead>
      <Container>
        <Title
          title="Un 75% se siente inseguro en su barrio o vecindario, según encuesta IEP"
          bajada="La criminalidad que se vive en las calles del país también se refleja en 
          la percepción ciudadana, pues solo un 7% se siente muy seguro en la zona en donde 
          vive. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el 
          Legislativo no sufre una variación considerable en comparación con la medición de 
          marzo."
        />
        <Question
          title="Percepción de seguridad"
          bajada="Ante la violencia en las calles del país, un 75% menciona sentirse algo 
          (32%) o muy inseguro (43%) ante la posibilidad de ser víctima de un asalto o robo 
          en la zona en donde vive. Del otro lado, un 19% se siente algo seguro y tan solo 
          un 7% cree que es muy seguro. Por áreas geográficas, en Lima Metropolitana, un 55% 
          se siente muy inseguro y, en el ámbito regional, en la zona norte hay una mayor 
          percepción de miedo por los crímenes con un 43%."
        >
          <div class="flourish-embed" data-src="story/1903747">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          title="Aprobación de Dina Boluarte"
          bajada="La presidenta Dina Boluarte mantiene su aprobación con un 15% y su 
          desaprobación en un 79%; dicho rechazo es 1% más que lo mostrado en la encuesta 
          de marzo."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/13591713">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          title="Respuesta del Gobierno frente a las inundaciones"
          bajada="En tanto, un 65% considera que han sido muy malas (34%) o malas (31%) 
          las medidas tomadas por el Gobierno de Dina Boluarte ante la temporada de lluvias, 
          las cuales han afectado a diversas partes del país. Solo un 4% cree que el trabajo 
          fue muy bueno (1%) o bueno (3%). Un 29% piensa que fue regular."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/13591719">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          title="Investigación a culpables de las muertes ocurridas en las protestas"
          bajada="Por otro lado, sobre la investigación a los culpables de las muertes 
          ocurridas por las protestas sociales, las opiniones están igualadas. Un 47% 
          considera que no se realizará ninguna indagación y el mismo porcentaje cree 
          que sí se iniciarán acciones para determinar responsabilidades."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/13591730">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
      
      <Question
        title="Percepción de tendencia ideológica del actual Gobierno"
        bajada="Sobre la tendencia ideológica que rige las acciones de Boluarte, un 37% 
        de las personas encuestadas consideró al Ejecutivo como un Gobierno de derecha, 
        mientras que un 31% cree que está más vinculado con la izquierda. Un 24% piensa 
        que es de centro."
      >
        <div class="flourish-embed flourish-chart" data-src="visualisation/13591740">
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
      </Question>

      <Question
        title="Aprobación del Congreso"
        bajada="Al igual que el Ejecutivo, el Legislativo tampoco logra cambios 
        significativos en su aprobación, pues tan solo un 7% está de acuerdo con su 
        desempeño, mientras que un 90% está en contra de su accionar."
      >
        <div class="flourish-embed flourish-chart" data-src="visualisation/13591777">
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
      </Question>

      <Question
        title="Confianza en la Policía"
        bajada="Sobre la confianza en la Policía, siete de cada diez personas encuestadas 
        (69%) confían muy poco (37%) o nada (32%) en la institución. Un 26% tiene algo de 
        confianza y solo un 5% cree mucho en la PNP."
      >
        <div class="flourish-embed flourish-chart" data-src="visualisation/13591785">
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
      </Question>

      <Question
        title="Confianza en las Fuerzas Armadas"
        bajada="Sobre la confianza en las Fuerzas Armadas, un 21% no tiene nada de confianza 
        en la institución. Dicho porcentaje ha variado en un 12%, pues en agosto un 9% 
        consideró esta opción. Con algo más de credulidad están aquellos que consideraron 
        algo (29%) y poco (28%). Solo un 21% confía en las FF. AA."
      >
        <div class="flourish-embed flourish-chart" data-src="visualisation/13591795">
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
      </Question>

      <FicTec
        title="FICHA TÉCNICA"
        desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE 
        – 281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de 
        Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 
        años a más con DNI: 24 760 062 personas (Reniec, Padrón Electoral de las Elecciones 
        Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1202 entrevistados, 
        distribuidos en 24 departamentos, 142 provincias y 430 distritos. Margen de error: 
        ± 2,8 pts. para los resultados en el territorio nacional. Nivel de confianza: 95%, 
        considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). 
        Representatividad provincial: 95,05%. Fuente de marco muestral: relación de 
        cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). 
        Tipo de muestreo aplicado: muestreo probabilístico, con método de selección 
        aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima 
        Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 22 al 27 de abril de 
        2023. Página web: www.iep.org.pe."
      />
      </Container>
      <ButtonBack/>
    </LayoutInterna>
  )
}

export default Abril

const Container = styled.div`
  width: 100%;
  height: auto;
`