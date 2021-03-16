import React from 'react';
import { PropTypes } from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../Button';
import TextField from '../../forms/TexField';
import Text from '../../foundation/Text';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionsStatus, setSubmissionsStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    user: '',
    name: '',
  });

  const isFormInvalid = userInfo.user.length === 0 || userInfo.name.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setIsFormSubmited(true);
      fetch('https://instalura-api.verce.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userInfo.user, name: userInfo.name }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Não foi possível cadastrar');
        })
        .then(() => {
          setSubmissionsStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionsStatus(formStates.ERROR);
        });
    }}
    >
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
          placeholder="Name"
          value={userInfo.name}
          name="name"
          onChange={(event) => {
            setUserInfo({
              ...userInfo,
              name: event.target.value,
            });
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
              user: event.target.value,
            });
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
          Cadastrar
        </Button>

        {isFormSubmited && submissionsStatus === formStates.DONE && (
          <Box>
            <Lottie
              width="150px"
              height="150px"
              className="lottie-container basic"
              config={{ animationData: successAnimation, loop: false, autoplay: true }}
            />
          </Box>
        )}
        {isFormSubmited && submissionsStatus === formStates.ERROR && (
          <Box
            display="flex"
            justifyContent="center"
          >
            <Lottie
              width="150px"
              height="150px"
              className="lottie-container basic"
              config={{ animationData: errorAnimation, loop: false, autoplay: true }}
            />
          </Box>
        )}
      </div>
    </form>
  );
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
    </Grid.Row>

  );
}

FormCadastro.propTypes = {
  propsDoModal: PropTypes.shape({
    onClose: PropTypes.func.isRequired,
  }).isRequired,
};
