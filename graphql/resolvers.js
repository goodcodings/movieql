/*
  .graphql 확장자에서 데이터형 및 질의를 정의하면
  resolver에서는 질의에 대한 함수를 만든다
*/

import {people, getById,getMovies,getMovieById,deleteMovie,addMove} from './db'
 const  resolvers = {
    Query :{
        people :() => people,
        person:(_,{id})=>getById(id),
        movies:()=>getMovies(),
        movie:(_,{id})=>getMovieById(id),   
    },
    Mutation:{

        addMovie:(_,{name,score}) => addMove(name,score),
        deleteMovie:(_,{id})=>deleteMovie(id)
    }

};
export default resolvers;