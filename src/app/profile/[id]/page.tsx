export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>UserProfile</h1>
      <h3>User ID: {params.id}</h3>
    </div>
  );
}
