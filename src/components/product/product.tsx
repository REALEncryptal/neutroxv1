import { Card, Text, Image, Group } from '@mantine/core';
import classes from './product.module.css';

export function Product(productData: any) {

  const handleProductClick = () => {
    
  }

  return (
    <button className={classes.button} onClick={handleProductClick}>
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className={classes.product}
      withBorder
    >
      <Card.Section>
        <Image src={productData.image} height={220} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={800} size="xl" style={{ color: "#2d99fa" }}>
          {productData.name}
        </Text>
      </Group>

      <Group justify="space-between">
        <Text size="lg" fw={700} c="white">
          {!productData.priceRange[1] ? `$${productData.priceRange[0]}` : `$${productData.priceRange[0]} - $${productData.priceRange[1]}`}
        </Text>
        <Text
          size="lg"
          fw={700}
          className={
            productData.detected ? classes.detected : classes.undetected
          }
        >
          {productData.detected ? "Detected" : "Undetected"}
        </Text>
      </Group>
    </Card></button>
  );
}