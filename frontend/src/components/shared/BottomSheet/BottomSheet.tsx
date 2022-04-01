import React, { createRef, FC, ReactNode } from 'react'
import { BottomSheet as SpringSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { StyledBottomSheet } from '.'

type Props = {
   isOpen?: boolean
   close: () => void
}

const BottomSheet: FC<Props> = ({ isOpen, children, close }) => {
   const sheetRef = createRef<BottomSheetRef>()

   return (
      <StyledBottomSheet>
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
