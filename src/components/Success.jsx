import React from 'react';
const homepage = 'https://artemskachko.github.io/react_list';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={`${homepage}/assets/success.svg" alt="Success`} />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
