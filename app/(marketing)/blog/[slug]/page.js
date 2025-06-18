export default async function BlogPost({ params }) {
  const { slug } = await params;
  return (
    <div>
    <h1>บทความ: {slug}</h1>
    <p>นี่คือเนื้อหาของบทความ</p>
    </div>
  );
}