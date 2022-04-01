import React, { createRef, FC, ReactNode } from 'react'
import { BottomSheet as SpringSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { StyledBottomSheet, GlobalStyle } from '.'
import { useKeyboardHeight } from '../../../utils/scripts/useKeyboardHeight';

type Props = {
  isOpen?: boolean;
  children?: ReactNode;
  close: () => void;
}

const BottomSheet: FC<Props> = ({ isOpen, children, close }) => {
  const sheetRef = createRef<BottomSheetRef>()
  const { keyboardHeight } = useKeyboardHeight()

  return (
    <StyledBottomSheet>
      <GlobalStyle keyboardHeight={keyboardHeight} />
      <SpringSheet 
        open={!!isOpen} 
        snapPoints={({ minHeight }) => minHeight} 
        ref={sheetRef} 
        className="sheet"
        onDismiss={() => close()}
      >
        {children}
      </SpringSheet>
    </StyledBottomSheet>
  )
}
export default BottomSheet
