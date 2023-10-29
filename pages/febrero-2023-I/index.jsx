import React from 'react'

import styled from 'styled-components'
import LayoutInterna from 'layout/internas'
import NextHead from 'next/head'
import Title from 'components/Interna/Title'
import Question from 'components/Interna/Question'
import Script from 'next/script'
import FicTec from 'components/Interna/FicTec'
import ButtonBack from 'components/Interna/ButtonBack'

const Febrero1 = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/febrero-2023-I/" />
        <title>Congreso tiene rechazo de un 90% y Dina Boluarte obtiene un 77% de desaprobación, según encuesta IEP</title>
        <meta name="title" content="Congreso tiene rechazo de un 90% y Dina Boluarte obtiene un 77% de desaprobación, según encuesta IEP" />
        <meta name="description" content="La última encuesta del IEP de febrero revela que nueve de cada 10 peruanos está en contra del desempeño del Legislativo. En tanto, el Ejecutivo mantiene su alta desaprobación, pues un 77% rechaza el desempeño de la presidenta." />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Data" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Congreso tiene rechazo de un 90% y Dina Boluarte obtiene un 77% de desaprobación, según encuesta IEP" />
        <meta name="twitter:description" content="La última encuesta del IEP de febrero revela que nueve de cada 10 peruanos está en contra del desempeño del Legislativo. En tanto, el Ejecutivo mantiene su alta desaprobación, pues un 77% rechaza el desempeño de la presidenta.  " />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/28/lg_63d5b78afbf2ae006c55ba7a.jpg" />
        <meta name="twitter:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/febrero-2023-I/" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/28/lg_63d5b78afbf2ae006c55ba7a.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Congreso tiene rechazo de un 90% y Dina Boluarte obtiene un 77% de desaprobación, según encuesta IEP" />
        <meta property="og:description" content="La última encuesta del IEP de febrero revela que nueve de cada 10 peruanos está en contra del desempeño del Legislativo. En tanto, el Ejecutivo mantiene su alta desaprobación, pues un 77% rechaza el desempeño de la presidenta." />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/28/lg_63d5b78afbf2ae006c55ba7a.jpg" />
        <meta property="og:url" content="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/febrero-2023-I/" />
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
                "item": "https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/febrero-2023-I//"  
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
          title="Congreso tiene rechazo de un 90% y Dina Boluarte obtiene un 77% de desaprobación, según encuesta IEP"
          bajada="La última encuesta del IEP de febrero revela que nueve de cada 10 peruanos está en contra del desempeño del Legislativo. En tanto, el Ejecutivo mantiene su alta desaprobación, pues un 77% rechaza el desempeño de la presidenta."
          key={1}
        />
        <Question
          title="Aprobación de Dina Boluarte"
          bajada="La aprobación de la presidenta Dina Boluarte sigue disminuyendo. Así, según la encuesta IEP, en febrero alcanza un 15% a favor de su gestión. Mientras que su desaprobación logra un 77%, un punto porcentual más que en la encuesta previa de enero.">
          <div class="flourish-embed" data-src="story/1838911">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Aprobación del Congreso de la República"
          bajada="Por su parte, el Congreso de la República alcanza su máximo rechazo desde el inicio de sus funciones en julio de 2021: nueve de cada 10 personas encuestadas desaprueban su desempeño. Mientras que solo un 6% está a favor de su accionar. "
        >
          <div class="flourish-embed" data-src="story/1838916">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Adelanto de elecciones"
          bajada="La mayoría de las personas encuestadas (69%) siguen considerando que el adelanto de elecciones generales este 2023 sería lo más conveniente para el país, aunque hay un retroceso de 4% en comparación a la medición de enero. Un 19% quiere que los comicios sean en el 2024. "
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/12866132">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Renuncia de Dina Boluarte"
          bajada="Más del 70% de las personas encuestas considera que la presidenta Dina Boluarte debe renunciar como jefa de Estado. Solo un 25% cree que debe mantenerse a cargo del Ejecutivo."
        >
          <div class="flourish-embed" data-src="story/1838927">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Actuación del Congreso frente a la crisis política"
          bajada="Un 33% cree que el actual Congreso pretende quedarse hasta el 2026. Así también, un 28% considera que aprobará el adelanto de elecciones al 2023, mientras que otro 24% de encuestados cree que lo hará en el 2024. Cabe mencionar que un 15% no tiene una clara opinión sobre el accionar futuro del Legislativo."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/12866176">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Situación del país ante posible adelanto de elecciones"
          bajada="El optimismo prima en caso de que se adelanten las elecciones generales. Un 52% considera que sería mejor que haya un nuevo gobierno y Congreso, mientras que un 28% piensa que sería igual. "
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/12870394">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Democracia en el Perú"
          bajada="Un 55% opina que el Perú es una democracia, mientras que un 41% cree lo contrario."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/12866183">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Posibles cambios en la Constitución"
          bajada="Un 47% prefiere que solo haya algunos cambios en la Constitución Política de 1993. Seguidamente, un 36% considera que se debe cambiar totalmente la carta magna, aunque retrocede cuatro puntos porcentuales en comparación a la medición de enero."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/12870364">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Personajes políticos y elecciones"
          bajada="Ante la pregunta de posibles candidatos o candidatas a la presidencia, Alfonso López-Chau, rector de la Universidad Nacional de Ingeniería, cobra protagonismo y obtiene la primera mención como posible candidato con un 4,5%. Le siguen las opciones Hernando de Soto (4,2%), Rafael López Aliaga (2,8%). Keiko Fujimori (2,4%), Pedro Castillo (2,1%), Aníbal Torres (2,1%) y Martín Vizcarra (2%)."
        >
          <div class="flourish-embed" data-src="story/1838901">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <Question
          title="Personajes políticos que deberían retirarse de la política"
          bajada="Keiko Fujimori es el personaje político que más rechazo tiene en el país, con un 31,6%, según la mencionada encuesta del IEP. Cabe precisar que la lideresa de Fuerza Popular gana ante la opción ‘No sabe, no precisa’ (20,7%) y ‘todos’ (13,5%). Dina Boluarte (7,3%), todos los congresistas (4,8%) y Alberto Otárola (2,4%) siguen la lista de figuras políticas con mayor pedido de retiro."
        >
          <div class="flourish-embed flourish-chart" data-src="visualisation/12870058">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>
        <FicTec
          title="FICHA TÉCNICA"
          desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de estudio: Población de 18 años a más con DNI: 24 760 062 personas (Reniec, Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1201 entrevistados, distribuidos en 24 departamentos, 155 provincias y 445 distritos. Margen de error: ± 2,8 pts. para los resultados en el territorio nacional. Nivel de confianza: 95%, considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad provincial: 96,49%. Fuente de marco muestral: relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: muestreo probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 18 al 22 de febrero de 2023. Página web: www.iep.org.pe."
        />
      </Container>
      <ButtonBack/>
    </LayoutInterna>
  )
}

export default Febrero1

const Container = styled.div`
  width: 100%;
  height: auto;
`