Home
1. Login

Login
1.username  
2.password  
3.role type - schooladmin,superadmin,staff,student

SuperAdmin 
1.Dashboard 
2.Create School - name,address,contact,email
3.Display Schools - getSchoolList(), getSchoolbyId()

4.SchoolDetailPage - getUserBySchoolId(),
  -Create User - username,password,roletype
  -Edit User Access- changestatus()-block,delete,remove
                     changePassword(), changerole()3

School
1.Dashboard
2.CreateUser-username,password,roletype -same as superadmin() ,getUserByid()
3.Create Class - class_name,school_id --getByclassname()
4.Create Section - section_name,school_id ,getBysectionName()
5.ViewStudent -> Student Detail Page -getStudents(),getStudentById(),getStudentByClass_name,getStudentBysection_name
                -CreateStudent-name,address,dob,class_name,section-name,school_id
                 -->EditStudent - editcontact(),editname(),changeSection(),editaddress()

M-M -> only possible external table which takes both the entities
schoolstudent
methods-remove(id,id,id):boolean

Model
Promise<UserType|undefined>