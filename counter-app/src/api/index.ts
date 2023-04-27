export const sendData = async (count: number): Promise<boolean> => {
    // Simulating an API call
  console.log(count)
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  };
  