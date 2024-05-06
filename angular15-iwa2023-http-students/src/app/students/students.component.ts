import { Component, OnInit } from '@angular/core';
import {Student} from "./student.model";
import {StudentService} from "./student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList?: Student[];
  student?: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() { this.getStudents();   }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(studentList => this.studentList = studentList);
  }

  add(firstname: string, lastname: string, email: string, telephone: string): void {
    firstname = firstname.trim();
    lastname = lastname.trim();
    email = email.trim();
    telephone = telephone.trim();
    this.studentService.addStudent({ firstname, lastname, email, telephone } as Student)
      .subscribe({
        next: (student: Student) => { this.studentList?.push(student); },
        error: () => {},
        complete: () => {
          if (this.studentList != undefined) {
            this.studentService.totalItems.next(this.studentList.length);
            console.log(this.studentList.length);
          }
        }
  });
  }

  delete(student: Student): void {
    this.studentList = this.studentList?.filter(c => c !== student);
    this.studentService.deleteStudent(student).subscribe(() => {
        // for automatic update of number of students in parent component
      if(this.studentList != undefined) {
        this.studentService.totalItems.next(this.studentList.length);
        console.log(this.studentList.length);
      }
      }
    );
  }

  deleteAll(): void {
    this.studentService.deleteStudents().subscribe(() => {
      if(this.studentList != undefined) {
        this.studentList.length = 0;
      }
      }
    );
  }

  update(firstname: string, lastname: string, email: string, telephone: string, chosenToUpdateStudent:Student):void {
    let id = chosenToUpdateStudent.id;
    firstname = firstname.trim();
    lastname = lastname.trim();
    email = email.trim();
    telephone = telephone.trim();
    console.log(id);
    if (id != undefined) {
      this.studentService.updateStudent({firstname, lastname, email, telephone} as Student, id)
        .subscribe({
          next: (student: Student) => {
            if (this.studentList != undefined) {
              let index = this.studentList?.indexOf(chosenToUpdateStudent);
              this.studentList[index] = student;
            }
          },
          error: () => {
          },
          complete: () => {
            if (this.studentList != undefined) {
              this.studentService.totalItems.next(this.studentList.length);
              console.log(this.studentList.length);
              window.location.reload();
            }
          }
        })
    }
  }

  updateAll(firstname: string, lastname: string, email: string, telephone: string) {
    firstname = firstname.trim();
    lastname = lastname.trim();
    email = email.trim();
    telephone = telephone.trim();

    let studentListTemp: Student[] = [];
    let studentListTempLength: number = 0;
    while (this.studentList != undefined && studentListTempLength != this.studentList?.length) {
      this.studentList[studentListTempLength].firstname = firstname;
      this.studentList[studentListTempLength].lastname = lastname;
      this.studentList[studentListTempLength].email = email;
      this.studentList[studentListTempLength].telephone = telephone;
      studentListTempLength++;
    }
    if(this.studentList != undefined) {
      studentListTemp = this.studentList;
    }
    this.studentService.updateStudents(studentListTemp)
      .subscribe({
        error: () => {
        },
        complete: () => {
          if (this.studentList != undefined) {
            this.studentService.totalItems.next(this.studentList.length);
            console.log(this.studentList.length);
            window.location.reload();
          }
        }
      })
  }

  patch(firstname: string, lastname: string, email: string, telephone: string, chosenToUpdateStudent:Student):void {
    let id = chosenToUpdateStudent.id;
    let index = this.studentList?.indexOf(chosenToUpdateStudent);

    if(id != undefined && this.studentList != undefined && index != undefined){
      if(firstname.trim() !== "") {
        firstname = firstname.trim();
      }
      else {
        firstname = this.studentList[index].firstname;
      }
      if(lastname.trim() !== "") {
        lastname = lastname.trim();
      }
      else {
        lastname = this.studentList[index].lastname;
      }
      if(email.trim() !== "") {
        email = email.trim();
      }
      else {
        email = this.studentList[index].email;
      }
      if(telephone.trim() !== "") {
        telephone = telephone.trim();
      }
      else {
        telephone = this.studentList[index].telephone;
      }
      console.log(id);
    }

    if (id != undefined) {
      this.studentService.patchStudent({firstname, lastname, email, telephone} as Student, id)
        .subscribe({
          next: (student: Student) => {
            if (this.studentList != undefined) {
              let index = this.studentList?.indexOf(chosenToUpdateStudent);
              this.studentList[index] = student;
            }
          },
          error: () => {
          },
          complete: () => {
            if (this.studentList != undefined) {
              this.studentService.totalItems.next(this.studentList.length);
              console.log(this.studentList.length);
              window.location.reload();
            }
          }
        })
    }
  }
}

