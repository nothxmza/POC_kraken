import styled from 'styled-components';
import ElementComponent from './ElementComponent';
import { useEffect, useState } from 'react';

const Plan = styled.div`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
`;

function App() {

  const [file, setFile] = useState(null);
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setBackground(imageURL);
    }
    else {
      setBackground("");
    }
  }, [file]);

  const handleImage = () => {
    console.log("ok");
  };

  const handleFileChange = (e) => {
    console.log(e)
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <form action="">
        <input type="file" name="avatar" accept="image/png, image/jpeg" onChange={handleFileChange} />
        <button onClick={() => setFile('')}>clear</button>
      </form>
      <Plan style={{ backgroundImage: `url(${background})` }} onClick={handleImage} >
        <ElementComponent />
      </Plan>
    </div>
  );
}

export default App;