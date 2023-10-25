// React Context API

import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext(false);

// export function CursorProvider({ children }) {
//   const [cursorStyle, setCursorStyle] = useState('default');

//   return (
//     <CursorContext.Provider value={{ cursorStyle, setCursorStyle }}>
//       {children}
//     </CursorContext.Provider>
//   );
// }

// export function useCursor() {
//   return useContext(CursorContext);
// }

export default CursorContext;