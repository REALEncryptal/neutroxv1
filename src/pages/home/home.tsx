import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Products } from '../../components/products/products';
import { Features } from '../../components/features/features';
import { Footer } from '../../components/footer/footer';
import { Faq } from '../../components/faq/faq';
import '@mantine/core/styles.css';

const theme = createTheme({
    white: '#fff',
})

export default function Home() {
    return <MantineProvider forceColorScheme="dark" theme={theme}>
        <Header/>
        <Hero/>
        <Features/>
        <Products/>
        <Faq/>
        <Footer/>
    </MantineProvider>;
}

