/* eslint-disable no-unused-vars */

class NoticeBuilder {
  build (type, message) {
    const sanitizedType = DOMPurify.sanitize(type)
    const sanitizedMessage = DOMPurify.sanitize(message)
    const node = document.createElement('DIV');
    const childNode = document.createElement('DIV');
    const textNode = document.createTextNode(sanitizedMessage);

    node.classList.add('d-flex', 'justify-content-center', 'position-fixed', 'flash-alert')
    childNode.classList.add('alert', `alert-${sanitizedType}`, 'mx-2')

    node.appendChild(childNode)
    childNode.appendChild(textNode)

    document.querySelector('body').appendChild(node);
  }
}
