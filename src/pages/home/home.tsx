import '@mantine/core/styles.css';
import { MantineProvider, SimpleGrid, Container } from '@mantine/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Product } from '../../components/product/product';
import { products } from '../../config';
import '@mantine/core/styles.css';
import classes from './home.module.css';


export default function Home() {
    return <MantineProvider forceColorScheme="dark">
        <Header/>
        <Hero/>

        <div className={classes.products}>
            <Container size="md">
                <SimpleGrid cols={{ base: 1, xs: 4 }} spacing={25} mt={50}>
                    {products.map((product) => (
                        <Product {...product}/>
                    ))}
                </SimpleGrid>
            </Container>
        </div>

    </MantineProvider>;
}

