export default async function Page({ params }: { params: { id: string } }) {
  const slug = params.id; // Không cần await nữa
  return <div>My Post: {slug}</div>;
}
