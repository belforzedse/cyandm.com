type Comment = {
  id: string;
  author: string;
  message: string;
  createdAt: string;
};

const defaultComments: Comment[] = [
  {
    id: "1",
    author: "ساناز رضایی",
    message: "نکات خیلی کاملی بود، مخصوصاً بخش قیف بازاریابی. ممنون از تیم سایان!",
    createdAt: "1403/04/21",
  },
  {
    id: "2",
    author: "کاوه محمدی",
    message: "ما بعد از مطالعه این مطلب تصمیم گرفتیم تحلیل سئوی سایان را امتحان کنیم و نتیجه فوق‌العاده بود.",
    createdAt: "1403/03/15",
  },
];

export function Comments({ comments = defaultComments }: { comments?: Comment[] }) {
  return (
    <div className="comments">
      <h3 className="h3">دیدگاه‌ها</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div className="comment-meta">
              <span className="comment-author">{comment.author}</span>
              <span className="comment-date">{comment.createdAt}</span>
            </div>
            <p className="comment-message">{comment.message}</p>
          </div>
        ))}
      </div>

      <form className="comment-form">
        <h4 className="h4">ثبت دیدگاه جدید</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <input type="text" name="name" placeholder="نام و نام خانوادگی" required className="input" />
          <input type="email" name="email" placeholder="ایمیل" required className="input" />
        </div>
        <textarea name="message" placeholder="متن دیدگاه" rows={4} required className="textarea" />
        <button type="submit" className="primary-btn">
          ارسال دیدگاه
        </button>
      </form>
    </div>
  );
}
