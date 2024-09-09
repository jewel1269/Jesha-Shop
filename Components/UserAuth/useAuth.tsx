"use client"
import { useState, useEffect } from 'react';
import {  onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
 // Update the path as needed

const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuth;
