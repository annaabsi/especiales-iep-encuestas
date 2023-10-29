import React from "react"
import styled from "styled-components"


import Layout from "../layout/default"
import NoticeDestacada from "../components/NoticeDestacada"
import { accordeonData2021, accordeonData2022, accordeonData2023 } from "../const"
import PollAge from "../components/PollAge"
import NoticeCard from "../components/NoticeCard"

const Home = () => {

  return (
    <>
      <Layout>
        <Container>
          <NoticeDestacada 
            key={0}
            // redirect="/octubre-2023"
            redirect="https://data.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/octubre-2023/"
            image="https://origin.cronosmedia.glr.pe/large/2023/10/29/lg_653e95bd950d463ced0a1aed.jpg"
            title="ÚLTIMA ENCUESTA"
            bajada="Aprobación de Boluarte se mantiene en un 10%. La aceptación del Congreso no varía: 9 de cada 10 peruanos rechazan al Poder Legislativo. Situación de la fiscal de la Nación también está en vilo."
          />
          <PollAge title="ENCUESTAS IEP 2023">
            {
              accordeonData2023 &&
              accordeonData2023.map((item, i) => {
                return (
                  <>
                    <NoticeCard
                      title={item.title}
                      image={item.image}
                      redirect={item.redirect}
                      key={i}
                      mounth={item.mes}
                    />
                  </>
                )
              })
            }
          </PollAge>
          <PollAge title="ENCUESTAS IEP 2022">
            {
              accordeonData2022 &&
              accordeonData2022.map((item, i) => {
                return (
                  <>
                    <NoticeCard
                      title={item.title}
                      image={item.image}
                      redirect={item.redirect}
                      key={i}
                      mounth={item.mes}
                    />
                  </>
                )
              })
            }
          </PollAge>
          <PollAge title="ENCUESTAS IEP 2021">
            {
              accordeonData2021 &&
              accordeonData2021.map((item, i) => {
                return (
                  <>
                    <NoticeCard
                      title={item.title}
                      image={item.image}
                      redirect={item.redirect}
                      key={i}
                      mounth={item.mes}
                    />
                  </>
                )
              })
            }
          </PollAge>
        </Container>
      </Layout>
      <style jsx="true">{`
        .title-acordiom{
          font-size: 25px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .container{
          margin: 0 auto;
        }
        .accordion-simple > .active {
          display: block;
        }

        .accordion__faq .inactive{
          display: none;
        }

        .accordion__faq > div{
          background-color: var(--white);
          margin-bottom: 20px;
          padding: 0px 15px;
          border-radius: 5px;
          cursor: pointer;
        }

        .accordion__title{
          color: var(--text-secondary);
          padding-bottom: 20px;
          font-weight: 500;
        }

        .accordion__faq-heading{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }
        .accordion__faq-heading:hover{
          opacity: 0.7;
          transition: 0.7s;
          background-color: black;
          color: white;
        }
        .accordion__faq-heading .active{
          color: var(--text-primary);
        }

        .accordion__faq-heading h3{
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 20px;
        }
        .bar-mounth{
          padding: 5px;
        }
        .bar-mounth:hover{
          background-color: white;
          color: black;
        }
        .accordion__faq p {
          margin: 0px;
          padding-bottom: 30px;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .space-content{
          background-color: #EEEEEE;
        }
      `}</style>
    </>

  )
}

export default Home

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`