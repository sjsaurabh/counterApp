import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const ApiGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {data.map((item) => (
            <Text key={item.id}>{item.title}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default ApiGetData;
