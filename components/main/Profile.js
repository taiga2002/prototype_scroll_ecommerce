import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { ProfileBody, ProfileButtons } from '../ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';

import { users } from '../../data/users';
import BottomTabView from '../BottomTabView';


const Profile = () => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="Ryoma Takeuchi"
          accountName="@ryo"
          profileImage={{uri:users[1].image}}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Ryoma Takeuchi"
          accountName="ryo"
          profileImage={{uri:users[1].image}}
        />
      </View>
      <View>
        
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView/>
    </View>
  );
};

export default Profile;