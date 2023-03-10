import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Vitor Hugo',
    'user_email': 'vitorhugomarcal@gmail.com',
  })
}