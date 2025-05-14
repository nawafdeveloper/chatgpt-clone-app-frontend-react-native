import { Colors } from '@/constants/Colors';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { Keyboard, useColorScheme } from 'react-native';

type BottomSheetContextType = {
  show: (content: React.ReactNode) => void;
  dismiss: () => void;
  hide: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return context;
};

export const BottomSheetProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [sheetContent, setSheetContent] = useState<React.ReactNode>(null);

  const show = useCallback((content: React.ReactNode) => {
    Keyboard.dismiss();
    setSheetContent(content);
    bottomSheetModalRef.current?.present();
  }, []);

  const dismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    setSheetContent(null);
  }, []);

  const hide = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    setSheetContent(null);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <BottomSheetContext.Provider value={{ show, dismiss, hide }}>
      <BottomSheetModalProvider>
        {children}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onDismiss={dismiss}
          snapPoints={['50%']}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={{
            backgroundColor: 'transparent',
            width: 0,
            height: 0,
          }}
          backgroundStyle={{
            backgroundColor: Colors[colorScheme ?? 'dark'].card,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          <BottomSheetView
            style={{
              paddingHorizontal: 20,
              paddingTop: 10,
              paddingBottom: 50,
              backgroundColor: Colors[colorScheme ?? 'dark'].card,
            }}
          >
            {sheetContent}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};
