import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'

const ArchivedChats = () => {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText style={{ fontSize: 18 }}>No archived chats</ThemedText>
            <ThemedText style={{ fontSize: 14, color: 'gray' }}>Archived conversations will be available here</ThemedText>
        </ThemedView>
    )
}

export default ArchivedChats