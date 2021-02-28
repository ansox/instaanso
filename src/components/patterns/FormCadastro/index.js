import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../Button';
import TextField from '../../forms/TexField';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    user: '',
    email: ''
  });

  const isFormInvalid = userInfo.user.length === 0 || userInfo.email.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          value={userInfo.email}
          name="email"
          onChange={(event) => {
            setUserInfo({
              ...userInfo,
              email: event.target.value
            })
          }}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          value={userInfo.user}
          name="user"
          onChange={(event) => {
            setUserInfo({
              ...userInfo,
              user: event.target.value
            })
          }}
        />
      </div>
      <div>
        <Button
          variant="primary.main"
          type="submit"
          fullWidth
          disabled={isFormInvalid}
        >
          Cadastrar</Button>
      </div>
    </form>
  )
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"

    >
      <Grid.Col
        display="flex"
        flexDirection="column"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          backgroundColor="white"
          {...propsDoModal}
        >
          <Button ghost onClick={propsDoModal.onClose}>X</Button>
        </Box>
        <Box
          // boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading

          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row >

  );
}