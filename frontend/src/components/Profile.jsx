import React from 'react';
import { useUser } from '../contexts/UserContext';

const Profile = () => {
  const { user, loading, error } = useUser();

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error.message || error}</div>;
  if (!user) return <div>No user data.</div>;

  return (
    <div className="profile">
      <h2>{user.full_name}</h2>
      <p>Email: {user.email}</p>
      {/* Add update profile functionality here */}
    </div>
  );
};

export default Profile;
