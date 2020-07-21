 const bslee= {
     name : "bslee",
     age : 30,
     gender : "male"
 }
 
 const  resolvers = {
    Query :{
        person :() => bslee
    }
};
export default resolvers;