import {useState, useEffect}  from 'react';

function Getdata(valeur){
    const [data, setData] = useState(false);
    useEffect(() => {
      fetch(`/` + valeur)
        .then((res) => {
          if(res.ok){
            return res.json();
          }
          else
          {
            throw new Error("Erreur de api backend");
          }
        })
        .then((val) => setData(val))
        .catch((error) => console.error("Erreur lors de la récuperation des données", error));
    }, []);
    return data;
}

export default Getdata;