import { Product } from '../product/product';
import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { products } from '../../config';
import classes from './products.module.css';

export function Products() {

    return (
        <div className={classes.products}>
            <Title data-aos="fade-up" data-aos-duration="1000" className={classes.title} order={1} mt={50}>
                Get our 
            </Title>
            <Title data-aos="fade-up" data-aos-duration="1100" className={classes.title}>
                <Text  className={classes.title} component="span" variant="gradient" gradient={{ from: '#2d99fa', to: '#2d99fa' }} inherit>
                    Products
                </Text>
            </Title>
            <Container data-aos="fade-in" data-aos-duration="1500" size="md">
                <SimpleGrid data-aos="fade-up" data-aos-duration="1500" cols={{ base: 1, xs: 1, sm: 2, lg: 2 }} spacing={25} mt={50}>
                    {products.map((product) => (
                        <Product {...product}/>
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    )
}