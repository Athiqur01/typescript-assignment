
const multiplyValue=(value: number, multiplier: number=2):number=>{
    return value*multiplier
}





const processInput= (value: string | number | boolean)=>{
    if( typeof value==="string"){
        return value.trim()
    }else if(typeof value ==="number"){
        return value*10
    }else{
        return value? "Active": "Inactive"
    }
}




type Coordinate=readonly [number, number, string] 
const formatCoordinate=(value: Coordinate)=>{
    const [latitude, longitude, locationName]=value
    return `Location: ${locationName} (${latitude}, ${latitude})`
}




const concatenateArrays=<T>(...arrays:T[][]):T[]=>{
    return ([] as T[]). concat(...arrays)
}




interface Course{
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses=(course: Course[], minStudents: number):Course[]=>{
  const popularCourses= course.filter(singleCourse=>singleCourse.students>=minStudents && singleCourse.isPublished===true)
  return popularCourses
}





const pluckValues=<T, K extends keyof T>(items: T[], key: K):T[K][]=>{
return items.map(item=>item[key])
}





class Employee{
    constructor(protected name: string, private baseSalary: number){

    }
    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(name: string, baseSalary: number, private department: string){
        super(name, baseSalary)
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}






const validateAgeAsync=(age: number): Promise<string> =>{
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}

