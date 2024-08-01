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
import classes from './register.module.css';


export default function HomePage() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} shadow="xl" radius={"xl"} p={"xl"}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Bem vindo ao Anime Euphoria!
        </Title>
        <TextInput classNames={{ label: classes.textInputLabel, input: classes.textInputInput }}  label="Endereço de email" placeholder="hello@gmail.com" size="md" />
        <PasswordInput classNames={{ label: classes.textInputLabel, input: classes.textInputInput}} label="Senha" placeholder="Sua senha" mt="md" size="xl" />
        <Checkbox classNames={{labelWrapper: classes.textInputLabel, inner: classes.textCheckboxIcon}} label="Me mantenha logado" mt="xl" size="md" />
        <Button classNames={{label: classes.buttonLabel, root: classes.buttonRoot}} fullWidth mt="xl" size="md">
          Logar
        </Button>
        <Text className={classes.AccountText} ta="center" mt="md">
          Não tem uma conta?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()} className={classes.AccountText}>
            Registre-se
          </Anchor>
        </Text>
      </Paper>
      <video id="video" className={classes.video} autoPlay loop muted playsInline>
        <source src="./4k.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
  