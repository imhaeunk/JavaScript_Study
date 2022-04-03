//콜백 지옥 예제 > promise 이용! 
class UserStorage {
    loginUser(id, password){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(
                (id === 'jhee' && password === 'dream') ||
                (id === 'colder' && password === 'academy')
            ){
                resolve(id); //callback 
            } else {
                reject(new Error('not found')); //callback 
            }
        }, 2000);
      });
    }
    
    getRoles(user){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(user === 'jhee'){
                resolve({ name: 'jhee', role: 'admin'});
            } else{
                reject(new Error('no access'));
            }
        }, 1000);
      });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
//.then(user => userStorage.getRoles(user)) 인자 같아서 생략가능
.then(userStorage.getRoles)
.then(user =>alert(`hello ${user.name}, you have a ${user.role}`))
.catch(console.log);
