import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, ScrollView, useColorScheme } from 'react-native';
import Icon from "react-native-remix-icon";

const Language = () => {
    const colorScheme = useColorScheme();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'dark'].background }} showsVerticalScrollIndicator={false}>
            <ThemedView style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>LANGUAGE</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>App language</ThemedText>
                            </ThemedView>
                            <ThemedText style={{ fontSize: 14, color: 'gray' }}>English</ThemedText>
                        </Pressable>
                    </ThemedView>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>Go to device settings to make sure you can select your prefered language.</ThemedText>
                </ThemedView>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>REPONSE</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>AI response language</ThemedText>
                            </ThemedView>
                            <ThemedView style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5, backgroundColor: 'transparent' }}>
                                <Icon name='expand-up-down-line' size={12} color='gray' />
                                <ThemedText style={{ fontSize: 14, color: 'gray' }}>English</ThemedText>
                            </ThemedView>
                        </Pressable>
                    </ThemedView>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>You can select the prefered language for response.</ThemedText>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    )
}

export default Language