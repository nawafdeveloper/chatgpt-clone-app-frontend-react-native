import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, useColorScheme } from 'react-native'
import Icon from "react-native-remix-icon"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TypeAnimation } from 'react-native-type-animation'

const Login = () => {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();

    return (
        <ThemedView style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', flexDirection: 'column' }}>
            <ThemedView style={{ height: '65%', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'transparent' }}>
                <ThemedView style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5, backgroundColor: 'transparent' }}>
                    <TypeAnimation
                        sequence={[
                            { text: `Let's invent` },
                            { text: `Let's create` },
                            { text: `Let's design` },
                            { text: `Let's chat..` },
                        ]}
                        loop
                        style={{
                            fontSize: 30,
                            fontWeight: '800',
                            color: Colors[colorScheme ?? 'dark'].tint
                        }}
                        delayBetweenSequence={2500}
                    />
                </ThemedView>
            </ThemedView>
            <ThemedView style={{ width: '100%', height: '35%', borderTopLeftRadius: 30, borderTopRightRadius: 30, flexDirection: 'column', gap: 15, paddingHorizontal: 20, paddingTop: 20, paddingBottom: insets.bottom, backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.tint }}>
                <Pressable onPress={() => router.replace('/(drawer)')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, backgroundColor: colorScheme === 'dark' ? Colors.dark.tint : Colors.light.background, borderRadius: 15, padding: 10 }}>
                    <Icon name='apple-fill' size={16} color={colorScheme === 'dark' ? Colors.dark.background : Colors.light.tint} />
                    <ThemedText style={{ fontWeight: '600', color: colorScheme === 'dark' ? Colors.dark.background : Colors.light.tint, fontSize: 16 }}>Continue with Apple</ThemedText>
                </Pressable>
                <Pressable onPress={() => router.replace('/(drawer)')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, backgroundColor: Colors.dark.card, borderRadius: 15, padding: 10 }}>
                    <Icon name='google-fill' size={16} color='white' />
                    <ThemedText style={{ fontWeight: '600', fontSize: 16, color: 'white' }}>Continue with Apple</ThemedText>
                </Pressable>
                <Pressable onPress={() => router.replace('/(drawer)')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, backgroundColor: Colors.dark.card, borderRadius: 15, padding: 10 }}>
                    <ThemedText style={{ fontWeight: '600', fontSize: 16, color: 'white' }}>Sign up</ThemedText>
                </Pressable>
                <Pressable onPress={() => router.replace('/(drawer)')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, borderColor: Colors.dark.card, borderWidth: 2, borderRadius: 15, padding: 10 }}>
                    <ThemedText style={{ fontWeight: '600', fontSize: 16, color: 'white' }}>Log in</ThemedText>
                </Pressable>
            </ThemedView>
        </ThemedView>
    )
}

export default Login