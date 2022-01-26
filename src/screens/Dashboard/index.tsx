import { View, Text } from 'react-native';
import React from 'react';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeding,
  UserName,
} from './styles'

export function Dashboard() {
  return (
    <Container>

      <Header>
        <UserInfo>
          <Photo 
            source={{uri: 'https://avatars.githubusercontent.com/u/71905620?v=4' }} />
          <User>
            <UserGreeding>Olá, </UserGreeding>
            <UserName>Luan</UserName>
          </User>
        </UserInfo>
      </Header>

    </Container>
  );
}
