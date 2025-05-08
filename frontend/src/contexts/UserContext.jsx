import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const userData = await apiService.getCurrentUser();
      setUser(userData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (userData) => {
    try {
      const updatedUser = await apiService.updateUser(userData);
      setUser(updatedUser);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{
      user,
      loading,
      error,
      updateUserProfile,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
