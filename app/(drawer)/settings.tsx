import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, useColorScheme } from 'react-native'
import Icon from "react-native-remix-icon"

const Settings = () => {
    const colorScheme = useColorScheme();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'dark'].background }} showsVerticalScrollIndicator={false}>
            <ThemedView style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>ACCOUNT</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='mail-open-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Email</ThemedText>
                            </ThemedView>
                            <ThemedText style={{ fontSize: 14, color: 'gray' }}>nawaf.alhasosah@gmail.com</ThemedText>
                        </Pressable>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='user-2-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Display name</ThemedText>
                            </ThemedView>
                            <ThemedText style={{ fontSize: 14, color: 'gray' }}>Nawaf Qahtani</ThemedText>
                        </Pressable>
                        <Pressable onPress={() => router.push('/notification')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='notification-3-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Notification</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                        <Pressable onPress={() => router.push('/archived-chats')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='archive-2-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Archived chats</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>APP</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable onPress={() => router.push('/language')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='global-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Language</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                        <Pressable onPress={() => router.push('/appearance')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='sun-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Appearance</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>ABOUT</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable onPress={() => router.push('/help-center')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='question-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Help Center</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                        <Pressable onPress={() => router.push('/terms')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='draft-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Terms of Use</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                        <Pressable onPress={() => router.push('/privacy-policy')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='lock-2-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Privacy Policy</ThemedText>
                            </ThemedView>
                            <Icon name='arrow-right-s-line' size={18} color='gray' />
                        </Pressable>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>LOGOUT</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <Icon name='logout-box-r-line' size={18} color={Colors[colorScheme ?? 'dark'].text} />
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Log out</ThemedText>
                            </ThemedView>
                        </Pressable>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    )
}

export default Settings