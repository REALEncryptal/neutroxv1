import { Card, Text, Image, Badge, Button, Group } from '@mantine/core';

export function Product(productData: any) {
    return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={productData.image}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{productData.name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {productData.description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        ${productData.cost}
      </Button>
    </Card>
    );
}