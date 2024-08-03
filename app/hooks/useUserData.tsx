// hooks/useUserData.tsx
import { useState, useEffect } from "react";

export interface CardData {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

const useUserData = () => {
  const [userdata, setUserdata] = useState<CardData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/record.json", {
        cache: "no-store",
      });
      const data = await res.json();
      setUserdata(data.job_postings);
    };

    fetchData();
  }, []);

  return userdata;
};

export default useUserData;
