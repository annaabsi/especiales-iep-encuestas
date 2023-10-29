import React from 'react'
import styled from 'styled-components'
import NextHead from 'next/head'
import Script from 'next/script'

import LayoutInterna from 'layout/internas'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Mayo = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/mayo-2023/" />
        <title>Encuesta IEP: 81% de peruanos cree que sí hubo violaciones a los derechos humanos durante protestas | mayo 2023</title>
        <meta name="title" content="Encuesta IEP: 81% de peruanos cree que sí hubo violaciones a los derechos humanos durante protestas | mayo 2023" />
        <meta name="description" content="La percepción de que el Gobierno de Dina Boluarte violó derechos humanos durante las protestas se consolida a nivel nacional, mientras que solo un 16% considera lo contrario. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de abril." />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Data" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content=" Encuesta IEP: 81% de peruanos cree que sí hubo violaciones a los derechos humanos durante protestas | mayo 2023" />
        <meta name="twitter:description" content="La percepción de que el Gobierno de Dina Boluarte violó derechos humanos durante las protestas se consolida a nivel nacional, mientras que solo un 16% considera lo contrario. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de abril." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/05/28/lg_647344e291686f082721dfbd.jpg" />
        <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/mayo-2023/" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/05/28/lg_647344e291686f082721dfbd.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content=" Encuesta IEP: 81% de peruanos cree que sí hubo violaciones a los derechos humanos durante protestas | mayo 2023" />
        <meta property="og:description" content="La percepción de que el Gobierno de Dina Boluarte violó derechos humanos durante las protestas se consolida a nivel nacional, mientras que solo un 16% considera lo contrario. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de abril." />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/05/28/lg_647344e291686f082721dfbd.jpg" />
        <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/mayo-2023/" />
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
          title="Un 81% de peruanos cree que se violaron derechos humanos durante protestas, según encuesta IEP"
          bajada="La percepción de que el Gobierno de Dina Boluarte violó derechos humanos durante las protestas se consolida a nivel nacional, mientras que solo un 16% considera lo contrario. Por otro lado, la aprobación sobre las acciones del Ejecutivo y el Legislativo no sufre una variación considerable en comparación con la medición de abril."
          key={0}
        />

        <Question
          key={0}
          title="Violación de los derechos humanos en las protestas"
          bajada="En los últimos días se viene discutiendo los estándares de derechos humanos que ha manejado el Gobierno de Dina Boluarte durante las protestas. Por un lado están los testimonios de los familiares de las víctimas e informes de las primeras investigaciones a cargo de entidades internacionales; por otro, la postura oficial de esta gestión, que niega los hechos. En ese sentido, la ciudadanía viene construyendo su propia percepción de lo ocurrido. De cada 10 encuestados por el Instituto de Estudios Peruanos (IEP), ocho consideran que sí hubo violaciones a los derechos humanos durante las protestas. Esto se contrasta ante un disminuido 16%, el cual piensa que no fue así."
        >
          <div className="flourish-embed" data-src="story/1932415">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={1}
          title="Percepción del manejo de las protestas"
          bajada="Respecto al manejo de las protestas, un 71% considera que hubo excesos de parte de las fuerzas del orden, con lo que se reflejó 15 puntos más que en enero (56%). La opción no sabe o no precisa se redujo en 11 puntos porcentuales con respecto al mes de enero."
        >
          <div class="flourish-embed" data-src="story/1932418">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={2}
          title="Violencia y vandalismo en las protestas"
          bajada="En tanto, un 55% de los encuestados considera que la violencia y vandalismo se dio de parte de una minoría que protestaba, mientras que el 33% opina que fue de parte de la mayoría que se encontraba en las marchas."
        >
          <div class="flourish-embed" data-src="story/1932440">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={3}
          title="Cobertura de las protestas en medios de comunicación"
          bajada="Por otro lado, sobre la percepción de la cobertura de las protestas en medios nacionales, un 65% considera que los medios de comunicación informaron de manera parcializada las noticias de las protestas, cinco puntos más respecto a enero. No obstante, solo un 25% cree que se hizo un seguimiento objetivo."
        >
          <div class="flourish-embed" data-src="story/1932442">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={4}
          bajada="Sobre la cobertura de las protestas en medios de comunicación fuera de Lima: al igual que los medios nacionales, pero en menor medida, un 55% piensa que se informó de manera parcializada."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/13922783">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={5}
          title="Más conveniente para el país"
          bajada="En relación con lo que sería más conveniente para el país, ocho de cada 10 encuestados consideran que lo adecuado es que haya elecciones generales antes de 2026, mientras que solo un 15% se muestra a favor de que Dina Boluarte permanezca en el gobierno hasta 2026. Pese a ello, solamente 46% cree que eso va a ocurrir."
        >
          <div class="flourish-embed" data-src="story/1932404">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={6}
          title="Aprobación de la presidenta Dina Boluarte"
          bajada="Ante el escenario que las cifras de este informe plantean, la desaprobación de Dina Boluarte se consolida en 79%, sin sufrir mayor variación respecto a abril. En tanto, su aprobación se mantiene en 15%."
        >
          <div class="flourish-embed" data-src="story/1932382">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={7}
          title="Aprobación del Congreso de la República"
          bajada="Al igual que el Ejecutivo, el Legislativo tampoco logra cambios significativos. Un 90% de peruanos desaprueba su desempeño, mientras que solo un 6% lo aprueba. "
        >
          <div class="flourish-embed" data-src="story/1932396">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <FicTec
          key={0}
          title="FICHA TÉCNICA"
          desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 años a más con DNI: 24 760 062 personas (Reniec, Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1212 entrevistados, distribuidos en 24 departamentos, 145 provincias y 407 distritos. Margen de error: ± 2,8 pts. para los resultados en el territorio nacional. Nivel de confianza: 95%, considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad provincial: 95,84%. Fuente de marco muestral: relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 20 al 25 de mayo de 2023. Página web: www.iep.org.pe."
        />
        <ButtonBack/>
      </Container>
    </LayoutInterna>
  )
}

export default Mayo

const Container = styled.div`
  width: 100%;
  height: auto;
`
