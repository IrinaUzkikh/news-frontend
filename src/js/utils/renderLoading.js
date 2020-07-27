// функция, которая при загрузке запускает прелоудер или открывает сообщения"

export default function renderLoading(isLoading, element) {
  if (isLoading) {
    element.classList.add('process_is-opened');
  } else {
    element.classList.remove('process_is-opened');
  }
}
