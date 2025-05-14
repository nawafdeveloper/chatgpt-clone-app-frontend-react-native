import ChatListRendered from '@/components/ChatListRendered';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useBottomSheet } from '@/context/BottomSheetContext';
import { mockMessages } from '@/mocks/messages-chat';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, TextInput, useColorScheme } from 'react-native';
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import Animated, { FadeInRight, SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Icon from "react-native-remix-icon";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatPage = () => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { show, hide } = useBottomSheet();

  const opacity = useSharedValue(1);

  const [isFileUploadVisible, setIsFileUploadVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');
  const [isAudioRecording, setIsAudioRecording] = useState(false);
  const [message, setMessage] = useState('');

  const handleToggleFileUpload = () => {
    setIsFileUploadVisible(!isFileUploadVisible);
  };

  const handleSelectingTool = (tool: string) => {
    setSelectedTool(tool);
  };

  const handleStartRecord = () => {
    setIsAudioRecording(true);
  };

  const handleStopRecord = () => {
    setIsAudioRecording(false);
  };

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.3, { duration: 600 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const openSheet = () => {
    show(
      <ThemedView style={{ backgroundColor: 'transparent', gap: 30 }}>
        <ThemedText style={{ fontWeight: '800', fontSize: 22 }}>Tools</ThemedText>
        <ThemedView style={{ flexDirection: 'column', gap: 15, backgroundColor: 'transparent' }}>
          <Pressable onPress={() => { handleSelectingTool('create-image'); hide() }} style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Icon name='image-ai-line' size={20} color={selectedTool === 'create-image' ? '#45abff' : Colors[colorScheme ?? 'dark'].text} />
            <ThemedText style={{ fontWeight: '600', color: selectedTool === 'create-image' ? '#45abff' : Colors[colorScheme ?? 'dark'].text }}>Create and image</ThemedText>
          </Pressable>
          <Pressable onPress={() => { handleSelectingTool('search-web'); hide() }} style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Icon name='globe-line' size={20} color={selectedTool === 'search-web' ? '#45abff' : Colors[colorScheme ?? 'dark'].text} />
            <ThemedText style={{ fontWeight: '600', color: selectedTool === 'search-web' ? '#45abff' : Colors[colorScheme ?? 'dark'].text }}>Search in the web</ThemedText>
          </Pressable>
          <Pressable onPress={() => { handleSelectingTool('deep-search'); hide() }} style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Icon name='microscope-line' size={20} color={selectedTool === 'deep-search' ? '#45abff' : Colors[colorScheme ?? 'dark'].text} />
            <ThemedText style={{ fontWeight: '600', color: selectedTool === 'deep-search' ? '#45abff' : Colors[colorScheme ?? 'dark'].text }}>Deep search</ThemedText>
          </Pressable>
          <Pressable onPress={() => { handleSelectingTool('extend-think'); hide() }} style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Icon name='lightbulb-flash-line' size={20} color={selectedTool === 'extend-think' ? '#45abff' : Colors[colorScheme ?? 'dark'].text} />
            <ThemedText style={{ fontWeight: '600', color: selectedTool === 'extend-think' ? '#45abff' : Colors[colorScheme ?? 'dark'].text }}>Extended thinking</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      keyboardVerticalOffset={80}
      style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'dark'].background }}
    >
      <ScrollView style={{ flexGrow: 1, backgroundColor: Colors[colorScheme ?? 'dark'].background }}>
        {mockMessages.map((item) => (
          <ThemedView key={item.id} style={{ flexGrow: 1, paddingHorizontal: 20 }}>
            <ChatListRendered sender={item.sender} content={item.content} />
          </ThemedView>
        ))}

      </ScrollView>
      <Animated.View style={{
        paddingHorizontal: 20, paddingVertical: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: Colors[colorScheme ?? 'dark'].card, paddingBottom: insets.bottom + 10,
        flexDirection: 'column', gap: 15
      }}>
        {!isAudioRecording && (
          <TextInput placeholder='Ask anything...' multiline onChangeText={(text) => setMessage(text)} value={message}
            style={{ width: '100%', color: Colors[colorScheme ?? 'dark'].text, maxHeight: 130, fontSize: 16, marginBottom: 10 }}
          />
        )}
        <ThemedView style={{
          backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', width: '100%'
        }}>
          {!isAudioRecording ? (
            <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Pressable onPress={handleToggleFileUpload}>
                <Icon name={isFileUploadVisible ? 'close-line' : 'add-line'} size={26} color={Colors[colorScheme ?? 'dark'].text} />
              </Pressable>
              <Pressable onPress={openSheet}>
                <Icon name='equalizer-2-line' size={26} color={Colors[colorScheme ?? 'dark'].text} />
              </Pressable>
              {selectedTool === 'create-image' && (
                <Pressable onPress={() => handleSelectingTool('')} style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 99, backgroundColor: colorScheme === 'dark' ? '#192e47' : '#d9eeff', flexDirection: 'row', position: 'absolute', left: 85 }}>
                  <Icon name='image-ai-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                  <Icon name='close-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                </Pressable>
              )}
              {selectedTool === 'search-web' && (
                <Pressable onPress={() => handleSelectingTool('')} style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 99, backgroundColor: colorScheme === 'dark' ? '#192e47' : '#d9eeff', flexDirection: 'row', position: 'absolute', left: 85 }}>
                  <Icon name='globe-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                  <Icon name='close-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                </Pressable>
              )}
              {selectedTool === 'deep-search' && (
                <Pressable onPress={() => handleSelectingTool('')} style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 99, backgroundColor: colorScheme === 'dark' ? '#192e47' : '#d9eeff', flexDirection: 'row', position: 'absolute', left: 85 }}>
                  <Icon name='microscope-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                  <Icon name='close-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                </Pressable>
              )}
              {selectedTool === 'extend-think' && (
                <Pressable onPress={() => handleSelectingTool('')} style={{ paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 99, backgroundColor: colorScheme === 'dark' ? '#192e47' : '#d9eeff', flexDirection: 'row', position: 'absolute', left: 85 }}>
                  <Icon name='lightbulb-flash-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                  <Icon name='close-line' size={16} color={colorScheme === 'dark' ? '#45abff' : '#0287fa'} />
                </Pressable>
              )}
            </ThemedView>
          ) : (
            <Animated.Text style={[{ fontWeight: '600', color: 'red' }, animatedStyle]}>Recording</Animated.Text>
          )}
          <ThemedView style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            {isAudioRecording && (
              <Animated.Text entering={FadeInRight.duration(300)} style={{ fontWeight: '600', color: Colors[colorScheme ?? 'dark'].text }}>00:32</Animated.Text>
            )}
            {message.length > 0 ? (
              <Pressable style={{ padding: 10, borderRadius: 99, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors[colorScheme ?? 'dark'].text }}>
                <Icon name='arrow-up-line' size={18} color={Colors[colorScheme ?? 'dark'].background} />
              </Pressable>
            ) : (
              <>
                {isAudioRecording ? (
                  <Pressable onPress={handleStopRecord} style={{ padding: 10, borderRadius: 99, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors[colorScheme ?? 'dark'].text }}>
                    <Icon name='stop-fill' size={18} color={Colors[colorScheme ?? 'dark'].background} />
                  </Pressable>
                ) : (
                  <Pressable onPress={handleStartRecord} style={{ padding: 10, borderRadius: 99, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors[colorScheme ?? 'dark'].text }}>
                    <Icon name='mic-line' size={18} color={Colors[colorScheme ?? 'dark'].background} />
                  </Pressable>
                )}
              </>
            )}
          </ThemedView>
        </ThemedView>
        {isFileUploadVisible && (
          <Animated.View entering={SlideInDown.duration(200)} exiting={SlideOutDown.duration(200)} style={{
            flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center',
            gap: 15
          }}>
            <Pressable style={{ backgroundColor: Colors[colorScheme ?? 'dark'].lightCard, padding: 20, borderRadius: 15, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='camera-line' size={34} color={Colors[colorScheme ?? 'dark'].text} />
            </Pressable>
            <Pressable style={{ backgroundColor: Colors[colorScheme ?? 'dark'].lightCard, padding: 20, borderRadius: 15, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='image-line' size={34} color={Colors[colorScheme ?? 'dark'].text} />
            </Pressable>
            <Pressable style={{ backgroundColor: Colors[colorScheme ?? 'dark'].lightCard, padding: 20, borderRadius: 15, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='file-line' size={34} color={Colors[colorScheme ?? 'dark'].text} />
            </Pressable>
          </Animated.View>
        )}
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

export default ChatPage