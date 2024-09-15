import { useEffect, useState } from 'react';
import { Paper, Title, TextInput, PasswordInput, Checkbox, Button, Text, Anchor } from '@mantine/core';
import classes from './AuthenticationImage.module.css';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Coisas que vão carregar só no lado do cliente
  }, []);

  useEffect(() => {
    if (isClient) {
      // Carrega o Script do Patreon para redirecionar
      const script = document.createElement('script');
      script.src = "https://c6.patreon.com/becomePatronButton.bundle.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isClient]);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} shadow="xl" radius={"xl"} p={"xl"}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Bem vindo ao Anime Euphoria!
        </Title>
        <TextInput
          classNames={{ label: classes.textInputLabel, input: classes.textInputInput }}
          label="Endereço de email"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          classNames={{ label: classes.textInputLabel, input: classes.textInputInput }}
          label="Senha"
          placeholder="Sua senha"
          mt="md"
          size="xl"
        />
        <Checkbox
          classNames={{ labelWrapper: classes.textInputLabel, inner: classes.textCheckboxIcon }}
          label="Mantenha-me logado"
          mt="xl"
          size="md"
        />
        <Button classNames={{ label: classes.buttonLabel, root: classes.buttonRoot }} fullWidth mt="xl" size="md">
          Logar
        </Button>
        <Text className={classes.AccountText} ta="center" mt="md">
          Não possui uma conta?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()} className={classes.AccountText}>
            Registre-se
          </Anchor>
        </Text>

        {isClient && (
          <a href="https://www.patreon.com/bePatron?u=31624754" data-patreon-widget-type="become-patron-button">
            Become a member!
          </a>
        )}
      </Paper>

      {isClient && (
        <video id="video" className={classes.video} autoPlay loop muted playsInline>
          <source src="./4k.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
