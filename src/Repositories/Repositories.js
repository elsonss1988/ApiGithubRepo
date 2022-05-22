import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styled';

export default function Repositories(){
        const history= useNavigate();
        const [repositories, setRepositories] = useState([]);

        useEffect(()=>{
            let repositoriesName = localStorage.getItem('repositoriesName');
            console.log(repositoriesName);
             if(repositoriesName !== null){
              repositoriesName = JSON.parse(repositoriesName);
              setRepositories(repositoriesName);
              //localStorage.clear();
            }else {
              history('/');
            }
        },[]);
    return(
        <>
        <S.Container>
          <S.Title>Repositories:</S.Title> 
          <S.List>
            {repositories.map(repository => {
            return(
              <h3> {`${repository}`} </h3>)
            })}
          </S.List>
          {/* <a href="/"> Voltar</a> */}
          <S.LinkHome to="/"> Voltar</S.LinkHome>
        </S.Container>
        </>
       
    )
}
