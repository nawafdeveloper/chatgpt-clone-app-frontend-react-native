import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import WebView from 'react-native-webview'

const PrivacyPolicy = () => {
    return (
        <ThemedView style={{ flex: 1 }}>
            <WebView source={{ uri: 'https://openai.com' }} style={{ flex: 1 }} />
        </ThemedView>
    )
}

export default PrivacyPolicy