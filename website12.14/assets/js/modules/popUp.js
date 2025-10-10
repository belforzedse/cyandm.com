import { convertStringToHTML } from './common';

export const popUpCon = document.querySelector('.pop-up');
export const popUPcontent = popUpCon.querySelector('.content');

export const openPopUp = (postId) => {
  (($) => {
    'use strict';
    $.ajax({
      url: cyn_ajax_script.url,
      type: 'post',
      data: {
        action: 'cyn_get_post_by_id',
        _nonce: cyn_ajax_script.nonce,
        data: postId,
      },
      success: (res) => {
        const postContent = convertStringToHTML(res.content);
        popUPcontent.appendChild(postContent);
        popUpCon.classList.add('open');
        const getContent = new Event('openPopUp', {
          bubbles: true,
          cancelable: true,
          composed: false,
        });
        document.dispatchEvent(getContent);
      },
      error: (err) => {
        console.log(err);
      },
    });
  })(jQuery);
};

popUpCon.addEventListener('click', (e) => {
  e.stopPropagation();
  const closePopUp = new Event('closePopUp', {
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.dispatchEvent(closePopUp);
  popUpCon.classList.remove('open');
  popUPcontent.innerHTML = '';
});


