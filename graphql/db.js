export const people= [
    {
        id :1,
        name : "bslee",
        age : 30,
        gender : "male"
    },
    {
        id :2,
        name : "Daal",
        age : 18,
        gender : "male"
    },
    {
        id :3,
        name : "JD",
        age : 18,
        gender :"male"
    },
    {
        id :4,
        name : "moondaddi",
        age :18,
        gender : "male"    
    }
 ]
 
 export const getById = id=>{
    let returnValue={};

    try{
        returnValue = people.filter(person=> id === person.id)[0];
    } catch(e){
        returnValue={};
       console.error(`generator exception in  db.js -> ${e}`);
    }
    return returnValue
 }

 let moviesList = [
     {
         id : 0,
         name :"Star Wars - The new one",
         score : 1
     },
     {
        id : 1,
        name :"Avengers - The new one",
        score : 8
     },
     {
         id:2,
         name : "The Godfather I",
         score : 99
     },
     {
         id : 3,
         name :"Logan",
         score : 2
     }
 ]

export const getMovies =() =>moviesList;

 export const getMovieById = id =>{
    let returnValue={};

    try{
        returnValue = moviesList.filter(movie=> id === movie.id)[0];
    } catch(e){
        returnValue={};
       console.error(`generator exception in  db.js -> ${e}`);
    }
    return returnValue
 }

 export const deleteMovie=(id)=>{
    const cleanMovies = moviesList.filter(movie=> movie.id !==id);

    if(moviesList.length > cleanMovies.length){
        moviesList = cleanMovies;
        return true;
    }else{
        return false;
    }

 }

 export  const addMove =(name,score)=>{
     const newMovie={
         id:moviesList.length+1,
         name,
         score
     }

     moviesList.push(newMovie)
     return newMovie;
 }