import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { categories } from '../../constants/categories';
import theme from '../../theme';
import Snackbar from 'react-native-snackbar';
import { addDoc } from 'firebase/firestore';
import { expensesRef } from '../../config/firebase';
import { Loading } from '../../components/Loading';

export function AddExpenseScreen(props) {

  const { id } = props.route.params;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleAddTrip = async () => {
    if (title && category && amount) {

      setLoading(true);
      let doc = await addDoc(expensesRef, {
        title, amount, category, tripId: id
      });

      setLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      setLoading(false);
      Snackbar.show({
        text: "Please fill all the fields!",
        backgroundColor: 'red'
      });
    }
  }

  return (
    <View style={styles.container}>
      <View>

        <View style={styles.content}>
          <View style={styles.containerButton}>
            <BackButton />
          </View>
          <Text style={styles.title}>Add Expense</Text>
        </View>

        <View style={styles.containerImage}>
          <Image source={require('../../asset/expenseBanner.png')} style={styles.image} />
        </View>

        <View style={styles.form}>
          <Text style={styles.fieldText}>For What ?</Text>
          <TextInput
            style={styles.textinput}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <Text style={styles.fieldText}>How Much?</Text>
          <TextInput
            style={styles.textinput}
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
        <View style={styles.containerCategories}>
          <Text style={styles.titleCategory}>Categories</Text>
          <View style={styles.categories}>
            {
              categories.map(cat => {

                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    style={[styles.categoryBtn, { backgroundColor: cat.value == category ? theme.colors.bg.greenLight : 'white' }]}
                  >
                    <Text style={{ color: theme.colors.heading }}>{cat.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        {
          loading ? <Loading /> : (
            <TouchableOpacity style={styles.footerButton} onPress={handleAddTrip}>
              <Text style={styles.footerButtonText}>Add Expense</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View >
  );
}