import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Pressable, ScrollView, Switch, useColorScheme } from 'react-native';

const Notification = () => {
    const colorScheme = useColorScheme();

    const [isResponsePushEnabled, setIsResponsePushEnabled] = useState(true);
    const [isTasksPushEnabled, setIsTasksPushEnabled] = useState(true);
    const [isTasksEmailEnabled, setIsTasksEmailEnabled] = useState(true);

    const toggleResponsePush = () => setIsResponsePushEnabled(prev => !prev);
    const toggleTasksPush = () => setIsTasksPushEnabled(prev => !prev);
    const toggleTasksEmail = () => setIsTasksEmailEnabled(prev => !prev);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'dark'].background }} showsVerticalScrollIndicator={false}>
            <ThemedView style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>RESOPONSE</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Push</ThemedText>
                            </ThemedView>
                            <Switch onValueChange={toggleResponsePush} value={isResponsePushEnabled} />
                        </Pressable>
                    </ThemedView>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>Get notified when ArrafGPT responds to request that take time, like research or image generation.</ThemedText>
                </ThemedView>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>TASKS</ThemedText>
                    <ThemedView style={{ flexDirection: 'column', paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors[colorScheme ?? 'dark'].card }}>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors[colorScheme ?? 'dark'].lightCard }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Push</ThemedText>
                            </ThemedView>
                            <Switch onValueChange={toggleTasksPush} value={isTasksPushEnabled} />
                        </Pressable>
                        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                                <ThemedText style={{ fontSize: 14, fontWeight: '600' }}>Email</ThemedText>
                            </ThemedView>
                            <Switch onValueChange={toggleTasksEmail} value={isTasksEmailEnabled} />
                        </Pressable>
                    </ThemedView>
                    <ThemedText style={{ fontSize: 14, color: 'gray' }}>Get notified when tasks you've created have updates.</ThemedText>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    )
}

export default Notification