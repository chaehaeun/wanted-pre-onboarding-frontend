const makeModalContent = (type: string, status: number) => {
  let content = ''

  if (type === 'auth') {
    switch (status) {
      case 400:
        content = '이미 등록된 사용자입니다!'
        break
      case 401:
        content = '이메일 또는 비밀번호가 일치하지 않습니다!'
        break
      case 404:
        content = '등록되지 않은 회원입니다!'
        break
    }
  }

  return content
}

export default makeModalContent
