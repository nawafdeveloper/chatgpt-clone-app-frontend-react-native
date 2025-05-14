import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import Icon from 'react-native-remix-icon';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface Props {
  sender: 'user' | 'ai';
  content: string;
}

const ChatListRendered = ({ sender, content }: Props) => {
  const colorScheme = useColorScheme();
  const isUser = sender === 'user';

  const Bubble = (
    <ThemedView
      style={{
        flexDirection: 'column',
        marginVertical: 10,
        alignItems: isUser ? 'flex-end' : 'flex-start',
        width: '100%',
      }}
    >
      <ThemedView
        style={{
          backgroundColor: isUser
            ? Colors[colorScheme ?? 'dark'].card
            : 'transparent',
          padding: isUser ? 15 : 0,
          borderRadius: isUser ? 20 : 0,
          maxWidth: '80%',
        }}
      >
        <ThemedText>{content}</ThemedText>
      </ThemedView>

      {sender === 'ai' && (
        <ThemedView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            marginTop: 10,
          }}
        >
          <Pressable>
            <Icon
              name="file-copy-line"
              size={16}
              color={Colors[colorScheme ?? 'dark'].text}
            />
          </Pressable>
          <Pressable>
            <Icon
              name="volume-up-line"
              size={16}
              color={Colors[colorScheme ?? 'dark'].text}
            />
          </Pressable>
          <Pressable>
            <Icon
              name="thumb-up-line"
              size={16}
              color={Colors[colorScheme ?? 'dark'].text}
            />
          </Pressable>
          <Pressable>
            <Icon
              name="thumb-down-line"
              size={16}
              color={Colors[colorScheme ?? 'dark'].text}
            />
          </Pressable>
          <Pressable>
            <Icon
              name="loop-right-line"
              size={16}
              color={Colors[colorScheme ?? 'dark'].text}
            />
          </Pressable>
        </ThemedView>
      )}
    </ThemedView>
  );

  return isUser ? (
    <ContextMenu
      actions={[{ title: 'Copy' }, { title: 'Delete' }]}
      onPress={(e) => {
        console.log(
          `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`
        );
      }}
    >
      {Bubble}
    </ContextMenu>
  ) : (
    Bubble
  );
};

export default ChatListRendered;
