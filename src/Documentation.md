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

M-M -> only possible external table which takes both the entities(relation table,xref/crossref table)
schoolstudent
methods-remove(id,id,id):boolean


Model
Promise<UserType|undefined>

portainer-docker
proxy-manager
mongo

stack-set of services
networks:
default:name,driver:,ipam:config:-subnet:gateway(assigned to host)
databases:name,driver:bridge,ipm:config:-subnet:gateway                         networks-host(access anything),none,bridge
services:
proxy-manager:-container_name:,hostname,image:,restart,ports:nnetworks:defaukt:ipv4_address,volumes,environment:DISABLE_IPV6:'true'
mongo:
container_name:,image:,restart,volumes,ports,command:- '--auth',networks:databases:ipv4_address:

//indexes for by 
UserSchema.virtual('schools,{
  ref:'schoolusers,
  local:_id
  foriegn:user_id
})

match:{status:active}

//for excluding fields
findById(id,[--password]),{
  populate:....
}