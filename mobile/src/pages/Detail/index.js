import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailCompose from 'expo-mail-composer';

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const [total, setTotal] = useState(0);
  const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${total}.`

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailCompose.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }

  useEffect( () => {
    setTotal(Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(incident.value));
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack} >
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>Local:</Text>
        <Text style={styles.incidentValue}>{incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Descrição:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={[styles.incidentValue, styles.incidentLastValue]}>{total}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
