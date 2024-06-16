import { Container, Text, Button, Group } from '@mantine/core';
import classes from './hero.module.css';
import discord from '../../assets/Discord White Icon.webp'
import {discordInvite} from '../../config'



function Icon() {
    return (
        <img src={discord} style={{width: 23}}></img>
    )
}

export function Hero() {
    var gradient ={ from: '#2d99fa', to: '#0375a4' }
  return (
    <>
    <div className={classes.wrapper}>
        <div className={classes.left}></div>
        <div className={classes.right}></div>
        <div className={classes.middle}></div>
        <Container size={700} className={classes.inner}>
        <h1 data-aos="fade-up" data-aos-duration="1000" className={classes.title}>
          Dominate with{' '}
          <Text data-aos="fade-up" className={classes.glow} component="span" variant="gradient" gradient={gradient} inherit>
            Neutrox
          </Text>
        </h1>

        <Text data-aos="fade-up" data-aos-duration="1200" className={classes.description} color="dimmed">
        Enjoy an unfair advantage and take your game to the
next level with our simple, reliable, and unparalleled software.
        </Text>

        <Group data-aos="fade-up" data-aos-duration="1400" className={classes.controls}>
          <Button
          component='a'
            size="xl"
            className={classes.control}
            href={discordInvite}
            variant="gradient"
            gradient={{ from: '#5865F2', to: '#5f6beb' }}
            leftSection={<Icon/>}
          >
            Discord
          </Button>

          <Button
            component="a"
            href="#products"
            size="xl"
            variant="default"
            className={classes.control}
          >
          See Products
          </Button>
        </Group>
      </Container>
    </div>
    </>
  );
}