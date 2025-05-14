import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Pressable } from 'react-native';
import Icon from "react-native-remix-icon";

const DrawerLayout = () => {
    const colorScheme = useColorScheme();

    return (
        <Drawer screenOptions={({ navigation }) => ({
            drawerActiveBackgroundColor: colorScheme === 'dark' ? '#192e47' : '#d9eeff',
            drawerInactiveTintColor: 'gray',
            drawerActiveTintColor: colorScheme === 'dark' ? '#45abff' : '#0287fa',
            drawerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background },
            drawerItemStyle: { borderRadius: 15 },
            swipeEdgeWidth: 300,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Colors[colorScheme ?? 'dark'].background },
            headerLeft: () => (
                <Pressable onPress={navigation.toggleDrawer} style={{ marginLeft: 15 }}>
                    <Icon name='equal-line' size={30} color={Colors[colorScheme ?? 'dark'].text} />
                </Pressable>
            ),
        })}>
            <Drawer.Screen
                name='index'
                options={{
                    title: 'Chat room',
                    drawerIcon: ({ color }) => (
                        <Icon name='chat-ai-line' size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name='settings' options={{
                title: 'Settings',
                drawerIcon: ({ color }) => (
                    <Icon name='settings-line' size={18} color={color} />
                ),
            }} />
        </Drawer>
    )
}

export default DrawerLayout