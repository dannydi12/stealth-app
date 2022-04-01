/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { createRef, FC } from 'react'
import { BottomSheet as SpringSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { StyledBottomSheet, GlobalStyle } from '.'
import { useKeyboardHeight } from '../../../utils/scripts/useKeyboardHeight'

type Props = {
   isOpen?: boolean
   close: () => void
   focus?: boolean
}

const BottomSheet: FC<Props> = ({ isOpen, children, close, focus = true }) => {
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
            initialFocusRef={focus && undefined}
            scrollLocking={false}
            blocking={false}
            sibling={<div className={`backdrop ${isOpen ? 'show' : 'no-show'}`} onClick={() => close()} />}
         >
            {children}
         </SpringSheet>
      </StyledBottomSheet>
   )
}
export default BottomSheet
