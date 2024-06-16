import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';

import classes from './features.module.css';
import { mockdata } from '../../config';
  
export function Features() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card data-aos="fade-up" data-aos-duration="1300" key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
      data-aos="fade-in" data-aos-duration="1300"
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text data-aos="fade-in" data-aos-duration="1300" fz="lg" fw={800} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text data-aos="fade-in" data-aos-duration="1300" fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
    <Container size="lg" py="xl">
      <Title data-aos="fade-up" data-aos-duration="1000" order={2} className={classes.title} ta="center" mt="sm">
        Why choose Neutrox?
      </Title>

      <Text data-aos="fade-up" data-aos-duration="1100" c="dimmed" className={classes.description} ta="center" mt="md">
        We offer cutting edge ghost technology to keep you on top of your game.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
    </>
  ); 
}