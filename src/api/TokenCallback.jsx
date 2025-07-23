// import { useEffect } from 'react';

// const TokenCallback = () => {
//   useEffect(() => {
//     const receiveToken = (event) => {
//       const { accessToken } = event.data;

//       console.log(accessToken);
//       localStorage.setItem('accessToken', accessToken);
//     };

//     window.addEventListener('message', receiveToken);
//     return () => window.removeEventListener('message', receiveToken);
//   }, []);

//   return <div>로그인 처리 중입니다...</div>;
// };

// export default TokenCallback;
