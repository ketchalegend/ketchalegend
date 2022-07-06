import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Emmanuel's homepage" />
        <meta name="author" content="Emmanuel Ketcha" />
        <meta name="author" content="ketchalegend" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Emmanuel Ketcha" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ketchabepa" />
        <meta name="twitter:creator" content="@ketchalegend" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/34584292?v=4" />
        <meta property="og:site_name" content="Emmanuel Ketcha" />
        <meta name="og:title" content="Emmanuel Ketcha" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/34584292?v=4" />
        <title>Emmanuel Ketcha - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
