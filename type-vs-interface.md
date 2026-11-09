Title: The differences between type aliases and interface in TypeScript

 Introduction: TypeScript gives us two main ways to name a type: interface and type. For simple object shapes they are almost identically. Thats why developers often wonder whether which can be used. However, the main differences between interface and type alias are given below: 
 1. Interface is best for objects on the other hand type creates a custom name (alias) for any valid type. Examples:
             interface User { name: string; }
             type User = { name: string; }
 2. Interfaces uses extends while types use intersections. Examples:
             interface User {
                    name: string
                    } 

             interface Admin extends User {
                    role: string;
                    }
                    and
                    
            type User = {
                    name: string;
                    }

            type Admin = User & {
                    role: string;
                    }
 3. Interfaces with the same name in the same scope merged automatically on the other hand Type aliases can not be redeclared. Example:
             interface User { name: string }
             interface User { age: number }
             Now the User is { name: string; age: number }
 on the other for type:
             type Num = { x: number }
             type Num = { y: number } // Error: duplicate identifier
 4. A class can implement any interface while A class can implement a type only if it resolves to an object shape.

 When should we choose interface?:
 We use interface instead of type alias for object shapes and public APIs.
 
 When should we choose type alias?:
 We use type alias instead of interface for unions, tuples, mapped/conditional types, or aliases for primitives and utility types like Pick, Omit, or Partial.

 Conclusion: For everyday object shapes, interface and type are interchangeable. The real differences are that interfaces support declaration merging and give stricter, earlier errors when extending, while type aliases can express far more than object shapes.