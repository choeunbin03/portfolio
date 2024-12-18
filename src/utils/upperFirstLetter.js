const upperFirstLetter = (str) => {
  if (!str) return ''; // 빈 문자열 처리
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default upperFirstLetter;
