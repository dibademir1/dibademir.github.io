import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { LibreBaskerville_400Regular, LibreBaskerville_700Bold } from '@expo-google-fonts/libre-baskerville';
import { useFonts } from "expo-font";


const OpeningHarmoniesWeb = () => {
  const [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular,
    LibreBaskerville_700Bold
  });
 
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
 }
 

export default function Flex(){
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{flex: 3, backgroundColor: 'darkslategrey', justifyContent: 'center', alignItems: 'center',  flexDirection: 'row'}} >

        <Text style={[styles.title, styles.BaskervilleFontBold, {flex: 1, marginLeft: 40}]}>
              Diba Demir: Personal Website
        </Text>

        <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <Image source={require('./headshot.jpg')} style={{height: 400, width: 400}} />
        </View>


        

      </View>

      <View style={{flex: 1, backgroundColor: 'beige'}} >
        <Text style={[styles.text, styles.BaskervilleFontReg]}>
              My name is Diba Demir and I'm a senior at Buckingham Browne and Nichols school 
              interested in computer science, linguistics, and literature. At school, I am an editor and writer for our 
              Current Happenings Across STEM magazine, write a column on my literary reflections for The Vanguard, 
              am literary editor for our arts publication, The Spectator,
              while also contributing with my caricature drawings. I am also strongly involved in our computer science club as 
              co-president and robotics team as co-captain. In my free time,
              I enjoy reading, learning new languages, playing cello, writing book reviews for my online blog named @igenbookworm,
              and sailing for our school team! I created this website to more easily showcase my written works, 
              academic essays, and other writings throughout high school.  
          </Text>
      </View>

      <View style={{flex: 1, backgroundColor: 'beige', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 40, marginRight: 40}} >
    
         <TouchableOpacity activeOpacity={0.95} style={[styles.button, {flex: 1, marginRight: 40}]}>
                    <Text style={[styles.buttontext, styles.BaskervilleFontReg]}>Academic Writing</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.95} style={[styles.button, {flex: 1, marginRight: 40}]}>
                    <Text style={[styles.buttontext, styles.BaskervilleFontReg]}>Nonfiction Writing</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.95} style={[styles.button, {flex: 1, marginRight: 40}]}>
                    <Text style={[styles.buttontext, styles.BaskervilleFontReg]}>Creative Writing</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.95} style={[styles.button, {flex: 1, marginRight: 40}]}>
                    <Text style={[styles.buttontext, styles.BaskervilleFontReg]}>Columns</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.95} style={[styles.button, {flex: 1}]}>
                    <Text style={[styles.buttontext, styles.BaskervilleFontReg]}>Book Reviews</Text>
          </TouchableOpacity>

     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    color: 'darksalmon',
    fontWeight: 'bold',
    fontSize: 50,
  },
  BaskervilleFontReg: {
    fontFamily: 'LibreBaskerville_400Regular',
  },
  BaskervilleFontBold: {
    fontFamily: 'LibreBaskerville_700Bold',
  },
  text: {
    color: 'darksalmon',
    fontSize: 20,
    padding: 40,
  },
  buttontext: {
    color: 'beige',
    fontSize: 20,
    padding: 40,
  },
  button: {
        flexDirection: 'row', 
        height: 50, 
        backgroundColor: 'darkslategrey',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
  }
});

 