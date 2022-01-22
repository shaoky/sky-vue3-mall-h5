export function phoneValidate(phone: string) {
  if (phone.length === 0) {
    throw new Error('请输入手机号');
  }
  if (!/1[0-9]{10}/.test(phone)) {
    throw new Error('手机格式错误, 请输入正确的手机号');
  }
}