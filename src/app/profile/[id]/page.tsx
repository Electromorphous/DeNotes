function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div>
      UserProfile <br />
      <span>{params.id}</span>
    </div>
  );
}

export default UserProfile;
