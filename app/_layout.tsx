import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { KeyboardProvider } from "react-native-keyboard-controller";
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from "react-native-remix-icon";

import { Colors } from '@/constants/Colors';
import { ExpoContextMenuProvider } from '@appandflow/expo-context-menu';
import { router, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { BottomSheetProvider } from '../context/BottomSheetContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExpoContextMenuProvider>
        <BottomSheetProvider>
          <KeyboardProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <Stack screenOptions={{
                headerShown: false, gestureEnabled: false, headerShadowVisible: false, headerLeft: () => (
                  <Pressable onPress={() => router.back()}>
                    <Icon name='arrow-left-s-line' size={28} color={Colors[colorScheme ?? 'dark'].tint} />
                  </Pressable>
                )
              }}>
                <Stack.Screen name='(drawer)' options={{ animation: 'none' }} />
                <Stack.Screen name='(auth)' options={{ animation: 'none' }} />
                <Stack.Screen name='appearance' options={{ headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Appearance' }} />
                <Stack.Screen name='archived-chats' options={{ headerSearchBarOptions: { placeholder: 'Search Archive' }, headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Archived' }} />
                <Stack.Screen name='help-center' options={{ headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Help Center' }} />
                <Stack.Screen name='language' options={{ headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Language' }} />
                <Stack.Screen name='notification' options={{ headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Notifications' }} />
                <Stack.Screen name='privacy-policy' options={{ headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Privacy & Policy' }} />
                <Stack.Screen name='terms' options={{ headerShown: true, gestureEnabled: true, headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background }, headerBackButtonDisplayMode: 'minimal', headerTintColor: Colors[colorScheme ?? 'dark'].tint, headerTitle: 'Terms' }} />
              </Stack>
              <StatusBar style="auto" />
            </ThemeProvider>
          </KeyboardProvider>
        </BottomSheetProvider>
      </ExpoContextMenuProvider>
    </GestureHandlerRootView>
  );
}
