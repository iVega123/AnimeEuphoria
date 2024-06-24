import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './AuthenticationImage.module.css';

export default function HomePage() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Bem vindo ao Anime Euphoria!
        </Title>

        <TextInput label="Endereço de email" placeholder="hello@gmail.com" size="md" />
        <PasswordInput label="Senha" placeholder="Sua senha" mt="md" size="md" />
        <Checkbox label="Me mantenha logado" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Logar
        </Button>

        <Text ta="center" mt="md">
          Não tem uma conta?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Registre-se
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
