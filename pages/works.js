

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbLinkfro from '../public/images/works/linkfro.png'
import thumbAfroPlus from '../public/images/works/afroplus.png'
import thumbSearchEngine from '../public/images/works/searchengine.png'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="Linkfro" thumbnail={thumbLinkfro}>
          The most powerful website builder for entrepreneurs, creators, artists, and small businesses with over 4000+ users. 
          </WorkGridItem>
        </Section>


        <Section>
          <WorkGridItem
            id=""
            title="AfroPlus"
            thumbnail={thumbAfroPlus}
          >
            Black owned business search directory
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="Alfrica"
            thumbnail={thumbSearchEngine}
          >
            The ultimate black owned search engine with african related results for images, videos, news and more. 
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      

        


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
