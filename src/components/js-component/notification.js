export function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    notification.setAttribute('style', 'position: absolute; top: 30%; right: 40%; padding: 10px; background-color: #333; color: #fff; border-radius: 5px;');
    document.body.appendChild(notification);
  
    
    setTimeout(() => {
      notification.remove();
    }, 3000); // 3秒後に通知を削除
    
  }