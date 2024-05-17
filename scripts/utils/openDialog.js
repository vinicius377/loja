import { queryElement } from './queryElement.js'

export function openDialog(content) {
  const dialog = queryElement.byId('dialog');
  const dialogContent = queryElement.byId('dialog_content');

  dialogContent.innerHTML = content;

  dialog.classList.add('modal_active')
}
