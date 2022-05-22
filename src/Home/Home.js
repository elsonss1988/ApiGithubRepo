import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import * as S from './styled';

function Home(props) {
  const history = useNavigate();
  const [erro,setErro] = useState(false);
  const [usuario,setUsuario] = useState('');
  
  var handleSearch=()=>{
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response =>{ 
      const repositories = response.data;
      const repositoriesName= [];
      repositories.map((repository)=>{
        repositoriesName.push(repository.name);
      });
      console.log(JSON.stringify('stringify: '+repositoriesName));
      localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
      history('/Repositories')
    }).catch(erro=>{
      setErro(true);
      console.log('erro')
    });
  }
  return (
    <>
    <S.HomeContainer>
      <S.Name>{usuario}</S.Name>
      <S.Content>
        <S.Input className="usuarioInput" placeolder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.ErroMsg>Ocorreu um erro. Tente novamente.</S.ErroMsg>:''}
    </S.HomeContainer>
    </>
  );
}

export default Home;
