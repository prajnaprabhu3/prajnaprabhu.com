import { useEffect, useState } from 'react';

type UserLocation = {
  location: string | null;
};

export const useUserLocation = (): UserLocation => {
  const [location, setLocation] = useState<UserLocation>({
    location: null,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {

        // fetch ip based location 
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          throw new Error('Failed to fetch location information');
        }

        const data = await response.json();

      //  update state 
        setLocation({
          location: `${data.city || 'Unknown City'}, ${data.country_name || 'Unknown Country'}`,
        });
      } catch (error:any) {
        console.error('Error fetching user location:', error.message);
        // handle error || set default values here
      }
    };

    fetchUserLocation();
  }, []); 
  return location;
};


