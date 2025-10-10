const { getCookie, setCookie } = require("../utils/functions");


const commentOpener = document.getElementById('commentOpener');
const comment_back = document.getElementById("comment_back");
const commentList = document.getElementById('commentList');
const commentCloser = document.getElementById('commentCloser');
const addNewComment = document.getElementById('addNewComment');
const commentsMessage = document.getElementById('commentsMessage');
const overlay = document.getElementById('overlay');
const blog_commentOpener = document.getElementById("blog_comment");

 

if (!overlay) return;



commentOpener?.addEventListener('click', (event) => {

    overlay.classList.remove("invisible");
        overlay.classList.remove("opacity-0");

})
commentCloser.addEventListener('click', (event) => {
    overlay.classList.add("invisible");
            overlay.classList.add("opacity-0");

})


comment_back.addEventListener("click", (event) => {
  overlay.classList.add("invisible");
  overlay.classList.add("opacity-0");
});




blog_commentOpener?.addEventListener("click", (e) => {
  overlay.classList.remove("invisible");
  overlay.classList.remove("opacity-0");
});






addNewComment.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget, e.submitter);

    jQuery(($) => {
        $.ajax({
            type: 'POST',
            url: restDetails.url + 'cynApi/v1/comments',
            data: formData,
            dataType: "json",
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: (xhr) => {
                xhr.setRequestHeader("X-WP-Nonce", restDetails.nonce);
            },
            success: (res) => {
                if (res.status == true) {
                    console.log(res.status)
                    setSuccessComment(commentsMessage);
                    return;
                }

            },

        })
    })
})



const setSuccessComment = (commentsMessage) => {
    const span = document.createElement('span');
    span.classList.add('comment_alert');
    span.classList.add('bg-alert-success');
    span.classList.add('p-4');
    span.classList.add('rounded-3xl');
    span.classList.add('mb-4');
    span.classList.add('block');
    span.innerText = 'کامنت شما با موفقیت ثبت شد و منتظر تایید ادمین است.';
    commentsMessage.appendChild(span);

};
const fadeAlert = () => {
    document.querySelector('.comment_alert')?.classList.remove('block')
    document.querySelector('.comment_alert')?.classList.add('hidden')
}
setTimeout(fadeAlert, 5000);



// window.setTimeout(() => { clearInterval(setWarningComment) }, 3000);
// window.setTimeout(() => { clearInterval(setSuccessComment) }, 3000);
// window.setTimeout(() => { clearInterval(setErrorComment) }, 3000);












///////////////////////////////////////////////////like comment

function checkUserExists() {
    let userUID = getCookie("userId");
    if (userUID !== "") return


    const user_id = Date.now().toString(36) + Math.random().toString(36);
    setCookie("userId", user_id);

}

window.addEventListener('load', checkUserExists);
// window.addEventListener('load', handleLike());




const commentCounter = document.querySelector('.comment_counter')
const commentLikeIcon = document.querySelectorAll('.comment_like')


commentLikeIcon?.forEach((item) => {
    item.addEventListener('click', (e) => {
        const commentId = item.getAttribute("data-comment-id");
        handleLike(commentId, item);
    })
})


///////////////////ajax req 
const handleLike = (commentId, item) => {

    jQuery(($) => {

        $.ajax({
            type: 'POST',
            dataType: "json",
            url: restDetails.url + 'cynApi/v1/like',
            data: {

                'comment-id': commentId,
                'user-id': getCookie('userId'),
            },

            success: (res) => {
                console.log(res)
                if (res.userLiked == true) {
                    item.style.color = "red";
                    item.previousElementSibling.innerHTML = +(item.previousElementSibling.innerHTML) + 1
                } else {
                    item.style.color = "white";
                    item.previousElementSibling.innerHTML = +(item.previousElementSibling.innerHTML) - 1
                }
            }
        });
    });
}